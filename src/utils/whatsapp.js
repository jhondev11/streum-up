// Replace with the real business Telegram number, digits only, with country code (no + or spaces).
const messages = {
  pt: {
    general: "Olá! Gostava de saber mais sobre a subscrição IPTV da StreamUp.",
    plan: (p) =>
      `Olá! Tenho interesse no plano ${p.name} (${p.duration}) por ${p.price}€. Pode dar-me mais detalhes sobre a subscrição IPTV da StreamUp?`,
  },
  en: {
    general: "Hi! I'd like to know more about StreamUp's IPTV subscription.",
    plan: (p) =>
      `Hi! I'm interested in the ${p.name} plan (${p.duration}) for €${p.price}. Could you give me more details about StreamUp's IPTV subscription?`,
  },
  es: {
    general: "¡Hola! Me gustaría saber más sobre la suscripción IPTV de StreamUp.",
    plan: (p) =>
      `¡Hola! Me interesa el plan ${p.name} (${p.duration}) por ${p.price}€. ¿Podrían darme más detalles sobre la suscripción IPTV de StreamUp?`,
  },
};

export const TELEGRAM_HANDLE = "streamupiptv";

export function telegramLink() {
  return `https://t.me/${TELEGRAM_HANDLE}`;
}
