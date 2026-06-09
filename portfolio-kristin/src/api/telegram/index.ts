type TelegramMessagePayload = {
    fromName: string;
    message: string;
  };
  
  export const sendTelegramMessage = async (
    payload: TelegramMessagePayload,
  ): Promise<void> => {
    const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID?.trim();
  
    if (!token || !chatId) {
      throw new Error("Missing Telegram env variables.");
    }
  
    const text = `
  <b>📥 New Contact Form Submission</b>\n
  <b>From:</b> ${payload.fromName}\n
  <b>Message:</b>\n${payload.message}
    `.trim();
  
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });
  
    if (!response.ok) {
      throw new Error("Failed to send notification to Telegram.");
    }
  };