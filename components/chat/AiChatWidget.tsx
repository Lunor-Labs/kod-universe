"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  MessageSquare,
  X,
  Phone,
  Camera,
  Sparkles,
  CheckCircle2,
  ArrowUp,
  RotateCcw,
  Zap,
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

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    setMounted(true);
    const savedMsgs = loadMessages();
    setMessages(savedMsgs);
  }, []);

  useEffect(() => {
    if (!mounted || messages.length === 0) return;
    saveMessages(messages);
  }, [messages, mounted]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

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
      text: text,
      timestamp,
    };

    const updatedMsgs = [...messages, userMsg];
    setMessages(updatedMsgs);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAssistantResponse(text, actionType);

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
    }, 600);
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
        text: `Thank you ${data.name}! We've logged your request for **${data.service}**. Our creative team will reach out to **${data.phone}** within 24 hours.`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        options: [
          {
            id: "opt-another",
            label: "Request another quote",
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
    }, 600);
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
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-kod-orange text-white shadow-xl hover:bg-kod-earth transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
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

      {isOpen && (
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-touch="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="fixed bottom-[84px] left-3 right-3 sm:left-auto sm:bottom-24 sm:right-7 z-[100] sm:w-[440px] sm:max-w-[400px] h-[calc(80dvh-100px)] sm:h-[600px] sm:max-h-[85vh] rounded-xl bg-kod-black shadow-2xl flex flex-col overflow-hidden text-white font-sans animate-fade-in"
        >
          <div className="px-4 py-3.5 bg-kod-earth border-b border-kod-border/20 flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-kod-orange/90 p-1.5 flex items-center justify-center text-white shadow-md border border-white/20">
                <Image
                  src="/icons/KoD-Eye.webp"
                  alt="KOD Eye Logo"
                  width={24}
                  height={24}
                  className="object-contain filter brightness-0 invert"
                  priority
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-kod-black shadow-sm" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white tracking-wide flex items-center gap-1.5">
                  KOD UNIVERSE AI
                </h3>
                <p className="text-xs text-kod-dust flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Online • Replies instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleClearHistory}
                title="Clear Conversation"
                className="p-2 rounded-lg text-kod-dust hover:text-rose-400 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw size={17} />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-kod-dust hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={19} />
              </button>
            </div>
          </div>

          <div
            data-lenis-prevent="true"
            data-lenis-prevent-touch="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="flex-1 p-4 sm:p-5 overflow-y-auto overscroll-contain space-y-4 text-sm leading-relaxed bg-kod-black"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[92%] p-4 rounded-2xl shadow-sm ${
                    msg.sender === "user"
                      ? "bg-kod-orange text-white rounded-br-none font-medium text-sm"
                      : "bg-kod-earth text-kod-mist border border-kod-border/20 rounded-bl-none text-sm"
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </p>

                  {msg.hasForm && msg.sender === "assistant" && (
                    <div className="mt-3.5 pt-3.5 border-t border-white/15">
                      {msg.formSubmitted ? (
                        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2 font-medium text-xs sm:text-sm">
                          <CheckCircle2 size={18} /> Details Submitted
                          Successfully!
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) => handleFormSubmit(e, msg.id)}
                          className="space-y-2.5 text-left"
                        >
                          <div>
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
                              className="w-full px-3.5 py-2.5 rounded-xl bg-kod-black/80 border border-kod-border/30 text-white placeholder-kod-dust/60 focus:outline-none focus:border-kod-orange text-sm"
                            />
                          </div>
                          <div>
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
                              className="w-full px-3.5 py-2.5 rounded-xl bg-kod-black/80 border border-kod-border/30 text-white placeholder-kod-dust/60 focus:outline-none focus:border-kod-orange text-sm"
                            />
                          </div>
                          <div>
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
                              className="w-full px-3.5 py-2.5 rounded-xl bg-kod-black/80 border border-kod-border/30 text-white placeholder-kod-dust/60 focus:outline-none focus:border-kod-orange text-sm"
                            />
                          </div>
                          <div>
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
                              className="w-full px-3.5 py-2.5 rounded-xl bg-kod-black/80 border border-kod-border/30 text-white focus:outline-none focus:border-kod-orange text-sm cursor-pointer"
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
                            </select>
                          </div>
                          <div>
                            <textarea
                              rows={2}
                              placeholder="Anything else we should know?"
                              value={formInputs[msg.id]?.notes || ""}
                              onChange={(e) =>
                                handleFormInputChange(
                                  msg.id,
                                  "notes",
                                  e.target.value,
                                )
                              }
                              className="w-full px-3.5 py-2.5 rounded-xl bg-kod-black/80 border border-kod-border/30 text-white placeholder-kod-dust/60 focus:outline-none focus:border-kod-orange text-sm resize-none"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl bg-kod-orange hover:bg-kod-orange/90 text-white font-bold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm"
                          >
                            Submit Inquiry <ArrowUp size={16} />
                          </button>
                        </form>
                      )}
                    </div>
                  )}
                </div>

                {msg.sender === "assistant" &&
                  msg.options &&
                  msg.options.length > 0 && (
                    <div className="mt-3 flex flex-col gap-2.5 w-full max-w-[100%]">
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
                          className="w-full px-4 py-3.5 rounded-xl bg-kod-earth hover:bg-kod-orange text-kod-mist hover:text-white border border-kod-border/20 text-sm font-medium transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.99] flex items-center justify-between text-left group hover:border-kod-orange/50"
                        >
                          <span>{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                <span className="text-[11px] text-kod-dust/60 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2.5 text-kod-dust text-sm p-2">
                <div className="w-7 h-7 rounded-full bg-kod-orange/20 flex items-center justify-center text-kod-orange">
                  <Sparkles size={14} className="animate-spin" />
                </div>
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-kod-dust animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-kod-dust animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-kod-dust animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="grid grid-cols-2 gap-px bg-kod-border/20 border-t border-kod-border/20 text-xs sm:text-sm font-bold uppercase tracking-wider text-center select-none">
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="py-3.5 bg-kod-earth hover:bg-kod-orange text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={15} className="text-emerald-400" /> Call Now
            </a>
            <button
              type="button"
              onClick={() =>
                handleSendMessage("Get a free project quote", "quote_form")
              }
              className="py-3.5 bg-kod-orange hover:bg-kod-earth text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >Get A Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
