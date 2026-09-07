"use client";

export type StorageType = "localStorage" | "sessionStorage";

export interface QuickOption {
  id: string;
  label: string;
  payload?: string;
  actionType?: "quote_form" | "services_info" | "contact_info" | "pricing_info" | "custom_message";
}

export interface ChatFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  notes: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant" | "system";
  text: string;
  timestamp: string;
  options?: QuickOption[];
  hasForm?: boolean;
  formData?: Partial<ChatFormData>;
  formSubmitted?: boolean;
}

const STORAGE_MODE_KEY = "kod_chat_storage_mode";
const MESSAGES_KEY = "kod_chat_messages_history";

export const INITIAL_WELCOME_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "assistant",
    text: "Welcome to KOD Universe! We craft ancient ideas into modern digital impact. What can our creative studio help you with today?",
    timestamp: "Just now",
    options: [
      {
        id: "opt-quote",
        label: "Get a free project quote (branding, web, design)",
        actionType: "quote_form",
      },
      {
        id: "opt-services",
        label: "Explore our core services & capabilities",
        actionType: "services_info",
      },
      {
        id: "opt-pricing",
        label: "Ask about pricing & project timelines",
        actionType: "pricing_info",
      },
      {
        id: "opt-portfolio",
        label: "View portfolio & featured work",
        payload: "Tell me about your portfolio and recent work",
      },
      {
        id: "opt-contact",
        label: "Book a discovery call or leave details",
        actionType: "contact_info",
      },
      {
        id: "opt-whatsapp",
        label: "Chat directly on WhatsApp",
        payload: "WHATSAPP_REDIRECT",
      },
    ],
  },
];

function getSafeStorage(type: StorageType): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return type === "localStorage" ? window.localStorage : window.sessionStorage;
  } catch (err) {
    console.warn("Storage access error:", err);
    return null;
  }
}

export function getStorageMode(): StorageType {
  if (typeof window === "undefined") return "localStorage";
  try {
    const savedMode = window.localStorage.getItem(STORAGE_MODE_KEY) as StorageType;
    if (savedMode === "localStorage" || savedMode === "sessionStorage") {
      return savedMode;
    }
  } catch (e) {
    // fallback
  }
  return "localStorage";
}

export function setStorageMode(mode: StorageType): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_MODE_KEY, mode);
    const currentMessages = loadMessages();
    saveMessages(currentMessages, mode);
  } catch (err) {
    console.error("Error setting storage mode:", err);
  }
}

export function loadMessages(): ChatMessage[] {
  if (typeof window === "undefined") return INITIAL_WELCOME_MESSAGES;
  const mode = getStorageMode();
  const storage = getSafeStorage(mode);
  if (!storage) return INITIAL_WELCOME_MESSAGES;

  try {
    const raw = storage.getItem(MESSAGES_KEY);
    if (!raw) return INITIAL_WELCOME_MESSAGES;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.error("Error loading chat messages:", err);
  }
  return INITIAL_WELCOME_MESSAGES;
}

export function saveMessages(messages: ChatMessage[], targetMode?: StorageType): void {
  if (typeof window === "undefined") return;
  const mode = targetMode || getStorageMode();
  const storage = getSafeStorage(mode);
  if (!storage) return;

  try {
    storage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  } catch (err) {
    console.error("Error saving chat messages:", err);
  }
}

export function clearAllMessages(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(MESSAGES_KEY);
    window.sessionStorage.removeItem(MESSAGES_KEY);
  } catch (err) {
    console.error("Error clearing chat messages:", err);
  }
}
