import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { telegramLink } from "../utils/whatsapp";
import "./FinalCta.css";

export default function FinalCta() {
  const { t, lang } = useLanguage();

  return (
    <section className="section final-cta">
      <div className="container final-cta__inner">
        <h2>{t.finalCta.title}</h2>
        <p>{t.finalCta.subtitle}</p>
        <div className="final-cta__ctas">
          <a href="#plans" className="btn btn-warm">
            {t.finalCta.ctaPrimary}
            <ArrowRight size={16} />
          </a>
          <a
            href={telegramLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline final-cta__outline"
          >
            <MessageCircle size={16} />
            {t.finalCta.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
