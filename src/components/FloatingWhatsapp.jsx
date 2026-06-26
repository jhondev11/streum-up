import { MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { telegramLink } from "../utils/whatsapp";
import "./FloatingWhatsapp.css";

export default function FloatingWhatsapp() {
  const { lang } = useLanguage();

  return (
    <a
      href={telegramLink(lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Telegram"
    >
      <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
    </a>
  );
}
