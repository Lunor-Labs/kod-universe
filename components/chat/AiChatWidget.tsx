"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  X,
  Phone,
  Sparkles,
  CheckCircle2,
  ArrowUp,
  RotateCcw,
  ChevronRight,
  ChevronDown,
  Send,
} from "lucide-react";
import {
  ChatMessage,
  loadMessages,
  saveMessages,
  clearAllMessages,
  INITIAL_WELCOME_MESSAGES,
} from "@/lib/chat-storage";
import { generateAssistantResponse } from "@/lib/ai-assistant";

const WHATSAPP_NUMBER = "94772000504";

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];

  lines.forEach((line, li) => {
    if (line.trim() === "") {
      elements.push(<div key={`sp-${li}`} className="h-2" />);
      return;
    }

    const bulletMatch = line.match(/^[•\-\*]\s+(.*)/);
    if (bulletMatch) {
      elements.push(
        <div key={li} className="flex items-start gap-2 leading-relaxed">
          <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-kod-orange flex-shrink-0" />
          <span>{inlineMarkdown(bulletMatch[1])}</span>
        </div>,
      );
      return;
    }

    const numMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*\s*[—-]?\s*(.*)/);
    if (numMatch) {
      elements.push(
        <div key={li} className="flex items-start gap-2.5 leading-relaxed">
          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-kod-orange/20 text-kod-orange text-[10px] font-bold flex items-center justify-center mt-0.5">
            {numMatch[1]}
          </span>
          <span>
            <strong className="text-white">{numMatch[2]}</strong>
            {numMatch[3] ? ` — ${numMatch[3]}` : ""}
          </span>
        </div>,
      );
      return;
    }

    elements.push(
      <p key={li} className="leading-relaxed">
        {inlineMarkdown(line)}
      </p>,
    );
  });

  return <div className="space-y-1.5">{elements}</div>;
}

function inlineMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-kod-mist/90">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [mounted, setMounted] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const [formInputs, setFormInputs] = useState<
    Record<
      string,
      {
        name: string;
        phone: string;
        email: string;
        service: string;
        notes: string;
      }
    >
  >({});

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    const savedMsgs = loadMessages();
    setMessages(savedMsgs);
  }, []);

  useEffect(() => {
    if (!mounted || messages.length === 0) return;
    saveMessages(messages);
  }, [messages, mounted]);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => scrollToBottom("instant"), 50);
    }
  }, [isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen, scrollToBottom]);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    setShowScrollBtn(distFromBottom > 120);
  };

  const handleClearHistory = () => {
    clearAllMessages();
    setMessages(INITIAL_WELCOME_MESSAGES);
  };

  const handleSendMessage = async (textToSend: string, actionType?: string) => {
    const text = textToSend.trim();
    if (!text && !actionType) return;

    if (text === "WHATSAPP_REDIRECT") {
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hello KOD Universe, I was chatting with your AI Assistant and would like to inquire further.",
      )}`;
      window.open(waUrl, "_blank");
      return;
    }

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setInputValue("");

    const response = generateAssistantResponse(text, actionType);
    const delay = response.typingDelay ?? 700;

    setTimeout(() => {
      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        sender: "assistant",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        options: response.options,
        hasForm: response.hasForm,
        formData: response.initialFormData,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleFormInputChange = (
    msgId: string,
    field: string,
    value: string,
  ) => {
    setFormInputs((prev) => ({
      ...prev,
      [msgId]: {
        ...(prev[msgId] || {
          name: "",
          phone: "",
          email: "",
          service: "Branding & Identity",
          notes: "",
        }),
        [field]: value,
      },
    }));
  };

  const handleFormSubmit = (e: React.FormEvent, msgId: string) => {
    e.preventDefault();
    const data = formInputs[msgId] || {
      name: "",
      phone: "",
      email: "",
      service: "Branding & Identity",
      notes: "",
    };

    if (!data.name.trim() || !data.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    setMessages((prev) =>
      prev.map((m) =>
        m.id === msgId ? { ...m, formSubmitted: true, formData: data } : m,
      ),
    );

    setIsTyping(true);

    setTimeout(() => {
      const confirmMsg: ChatMessage = {
        id: `asst-confirm-${Date.now()}`,
        sender: "assistant",
        text: `Thank you **${data.name}**! We've logged your inquiry for **${data.service}**.\n\nOur creative team will reach out to **${data.phone}** within 24 hours. We're excited to learn more about your project!`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        options: [
          {
            id: "opt-another",
            label: "Submit another request",
            actionType: "quote_form",
          },
          {
            id: "opt-wa",
            label: "Message us on WhatsApp",
            payload: "WHATSAPP_REDIRECT",
          },
        ],
      };
      setMessages((prev) => [...prev, confirmMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) handleSendMessage(inputValue);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <div className="relative group">
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 z-20 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-md" />
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle KOD AI Chat Assistant"
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-kod-earth text-white shadow-xl hover:bg-kod-orange transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          {isOpen ? (
            <X size={22} className="transition-transform duration-200" />
          ) : (
            <div className="relative w-7 h-7 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <Image
                src="/icons/KoD-Eye.webp"
                alt="KOD Eye"
                width={26}
                height={26}
                className="object-contain filter brightness-0 invert"
              />
            </div>
          )}

          <span className="hidden sm:block absolute right-full mr-3 px-3.5 py-1.5 rounded bg-kod-earth text-white text-xs font-bold tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none shadow-lg border border-white/10">
            AI Assistant
          </span>
        </button>
      </div>

      {isOpen &&
        mounted &&
        createPortal(
          <div
            data-lenis-prevent="true"
            data-lenis-prevent-touch="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed bottom-[84px] left-3 right-3 sm:left-auto sm:bottom-24 sm:right-7 z-[100] sm:w-[440px] sm:max-w-[400px] h-[calc(100dvh-120px)] sm:h-[600px] sm:max-h-[85vh] rounded-2xl bg-[#111] shadow-2xl flex flex-col overflow-hidden font-sans border border-white/10"
            style={{
              animation: "chatSlideUp 0.25s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            <div className="px-4 py-3 bg-kod-earth border-b border-white/10 flex items-center justify-between select-none flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-kod-orange/90 p-1.5 flex items-center justify-center text-white shadow-md border border-white/20">
                  <Image
                    src="/icons/KoD-Eye.webp"
                    alt="KOD Eye Logo"
                    width={22}
                    height={22}
                    className="object-contain filter brightness-0 invert"
                    priority
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#111]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white tracking-wide">
                    KOD Universe AI
                  </h3>
                  <p className="text-[11px] text-white/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online · Replies instantly
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClearHistory}
                  title="Clear conversation"
                  className="p-2 rounded-lg text-white/40 hover:text-rose-400 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <RotateCcw size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              data-lenis-prevent="true"
              data-lenis-prevent-touch="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="flex-1 px-4 py-4 overflow-y-auto overscroll-contain space-y-5 text-sm leading-relaxed bg-[#111]"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col gap-1 ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`flex items-end gap-2 max-w-[92%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    {msg.sender === "assistant" && (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kod-orange/20 border border-kod-orange/30 flex items-center justify-center mb-0.5">
                        <Image
                          src="/icons/KoD-Eye.webp"
                          alt=""
                          width={12}
                          height={12}
                          className="object-contain filter brightness-0 invert opacity-80"
                        />
                      </div>
                    )}
                    {msg.sender === "user" && (
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kod-orange flex items-center justify-center mb-0.5">
                        <span className="text-[10px] font-bold text-white">
                          U
                        </span>
                      </div>
                    )}

                    <div
                      className={`p-3.5 rounded-2xl shadow-sm text-sm ${
                        msg.sender === "user"
                          ? "bg-kod-orange text-white rounded-br-sm font-medium"
                          : "bg-[#1e1e1e] text-kod-mist border border-white/8 rounded-bl-sm"
                      }`}
                    >
                      {msg.sender === "assistant" ? (
                        renderMarkdown(msg.text)
                      ) : (
                        <p className="whitespace-pre-line">{msg.text}</p>
                      )}

                      {msg.hasForm && msg.sender === "assistant" && (
                        <div className="mt-4 pt-3.5 border-t border-white/10">
                          {msg.formSubmitted ? (
                            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2 font-medium text-xs">
                              <CheckCircle2 size={16} />
                              Details submitted successfully!
                            </div>
                          ) : (
                            <form
                              onSubmit={(e) => handleFormSubmit(e, msg.id)}
                              className="space-y-2.5 text-left"
                            >
                              <input
                                type="text"
                                required
                                placeholder="Your name *"
                                value={formInputs[msg.id]?.name || ""}
                                onChange={(e) =>
                                  handleFormInputChange(
                                    msg.id,
                                    "name",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-kod-orange/60 text-sm transition-colors"
                              />
                              <input
                                type="tel"
                                required
                                placeholder="Phone number *"
                                value={formInputs[msg.id]?.phone || ""}
                                onChange={(e) =>
                                  handleFormInputChange(
                                    msg.id,
                                    "phone",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-kod-orange/60 text-sm transition-colors"
                              />
                              <input
                                type="email"
                                placeholder="Email (optional)"
                                value={formInputs[msg.id]?.email || ""}
                                onChange={(e) =>
                                  handleFormInputChange(
                                    msg.id,
                                    "email",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-kod-orange/60 text-sm transition-colors"
                              />
                              <select
                                value={
                                  formInputs[msg.id]?.service ||
                                  "Branding & Identity"
                                }
                                onChange={(e) =>
                                  handleFormInputChange(
                                    msg.id,
                                    "service",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white focus:outline-none focus:border-kod-orange/60 text-sm cursor-pointer transition-colors"
                              >
                                <option value="Branding & Identity">
                                  Branding & Identity
                                </option>
                                <option value="Digital Experiences (Web/App)">
                                  Digital Experiences (Web/App)
                                </option>
                                <option value="Package Design">
                                  Package Design
                                </option>
                                <option value="Content & Creative Campaign">
                                  Content & Creative Campaign
                                </option>
                                <option value="Photography & Film">
                                  Photography & Film
                                </option>
                                <option value="3D & Motion">3D & Motion</option>
                                <option value="Spatial & Environmental Design">
                                  Spatial & Environmental Design
                                </option>
                                <option value="Full Brand Suite">
                                  Full Brand Suite
                                </option>
                              </select>
                              <textarea
                                rows={2}
                                placeholder="Tell us about your project (optional)"
                                value={formInputs[msg.id]?.notes || ""}
                                onChange={(e) =>
                                  handleFormInputChange(
                                    msg.id,
                                    "notes",
                                    e.target.value,
                                  )
                                }
                                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-kod-orange/60 text-sm resize-none transition-colors"
                              />
                              <button
                                type="submit"
                                className="w-full py-2.5 rounded-xl bg-kod-orange hover:bg-kod-orange/90 text-white font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm"
                              >
                                Submit Inquiry <ArrowUp size={15} />
                              </button>
                            </form>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {msg.sender === "assistant" &&
                    msg.options &&
                    msg.options.length > 0 && (
                      <div className="mt-2 flex flex-col gap-2 w-full pl-8">
                        {msg.options.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() =>
                              handleSendMessage(
                                opt.payload || opt.label,
                                opt.actionType,
                              )
                            }
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#1e1e1e] hover:bg-kod-earth text-white/75 hover:text-white border border-white/8 hover:border-white/20 text-[13px] font-medium transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98] flex items-center justify-between text-left group"
                          >
                            <span>{opt.label}</span>
                            <ChevronRight
                              size={14}
                              className="flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                  <span
                    className={`text-[10px] text-white/25 px-1 ${msg.sender === "user" ? "pr-8" : "pl-8"}`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kod-orange/20 border border-kod-orange/30 flex items-center justify-center">
                    <Sparkles
                      size={11}
                      className="text-kod-orange animate-pulse"
                    />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-[#1e1e1e] border border-white/8 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {showScrollBtn && (
              <button
                type="button"
                onClick={() => scrollToBottom()}
                className="absolute bottom-[130px] right-4 w-8 h-8 rounded-full bg-kod-earth hover:bg-kod-orange text-white flex items-center justify-center shadow-lg border border-white/10 transition-all cursor-pointer z-10"
                aria-label="Scroll to bottom"
              >
                <ChevronDown size={16} />
              </button>
            )}

            <div className="px-3 py-3 border-t border-white/10 bg-[#161616] flex-shrink-0">
              <div className="flex items-center gap-2 bg-white/5 border border-white/12 rounded-xl px-3 py-2 focus-within:border-kod-orange/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything about KOD Universe…"
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-white placeholder-white/30 text-sm focus:outline-none disabled:opacity-50"
                />
                <button
                  type="button"
                  onClick={() =>
                    inputValue.trim() && handleSendMessage(inputValue)
                  }
                  disabled={!inputValue.trim() || isTyping}
                  className="flex-shrink-0 w-7 h-7 rounded-lg bg-kod-orange hover:bg-kod-orange/90 disabled:bg-white/10 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Send message"
                >
                  <Send size={13} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/8 border-t border-white/8 text-xs font-bold uppercase tracking-wider text-center select-none flex-shrink-0">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="py-3 bg-[#1a1a1a] hover:bg-kod-earth text-white/70 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone size={13} className="text-emerald-400" />
                Call Now
              </a>
              <button
                type="button"
                onClick={() =>
                  handleSendMessage("Get a free project quote", "quote_form")
                }
                className="py-3 bg-kod-orange hover:bg-kod-orange/90 text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Get A Quote
              </button>
            </div>
          </div>,
          document.body,
        )}

      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </>
  );
}
