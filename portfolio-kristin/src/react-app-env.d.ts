/// <reference types="react-scripts" />
interface ProcessEnv {
    readonly REACT_APP_GEMINI_API_KEY?: string;
    readonly REACT_APP_EMAILJS_SERVICE_ID?: string;
    readonly REACT_APP_EMAILJS_TEMPLATE_ID?: string;
    readonly REACT_APP_EMAILJS_PUBLIC_KEY?: string;
    readonly REACT_APP_TELEGRAM_BOT_TOKEN?: string;
    readonly REACT_APP_TELEGRAM_CHAT_ID?: string;
  }
  
  declare namespace NodeJS {
    interface ProcessEnv extends ProcessEnv {}
  }