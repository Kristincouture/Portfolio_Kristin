import emailjs from "@emailjs/browser";

type ContactMessagePayload = {
  fromName: string;
  message: string;
};

export const sendContactMessage = async (
  payload: ContactMessagePayload,
): Promise<void> => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing EmailJS env variables.");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: payload.fromName,
      message: payload.message,
    },
    { publicKey },
  );
};