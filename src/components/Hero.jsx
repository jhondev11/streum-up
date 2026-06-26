import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { telegramLink } from "../utils/whatsapp";
import "./Hero.css";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero__title">
            {t.hero.title.split("\n").map((line, i) => (
              <span key={i} className="hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__ctas">
            <a href="#plans" className="btn btn-primary">
              {t.hero.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <a
              href={telegramLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle size={16} />
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value mono">{t.hero.stat1value}</span>
              <span className="hero__stat-label">{t.hero.stat1label}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value mono">{t.hero.stat2value}</span>
              <span className="hero__stat-label">{t.hero.stat2label}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value mono">{t.hero.stat3value}</span>
              <span className="hero__stat-label">{t.hero.stat3label}</span>
            </div>
          </div>
        </div>

          <div className="hero__visual" aria-hidden="true">
          <div className="inspect-tag">
            <div className="inspect-tag__hole" />
            <div className="inspect-tag__header">
              <span className="mono">ACTIVE SUBSCRIPTION</span>
              <span className="inspect-tag__status-dot" />
            </div>
            <div className="inspect-tag__row">
              <span>StreamUp Plan</span>
              <span className="mono">6 months</span>
            </div>
            <div className="inspect-tag__divider" />
            <div className="inspect-tag__checks">
              <div className="inspect-tag__check">
                <span>Live channels</span>
                <span className="mono inspect-tag__pass">55.2k+</span>
              </div>
              <div className="inspect-tag__check">
                <span>Movies</span>
                <span className="mono inspect-tag__pass">170k+</span>
              </div>
              <div className="inspect-tag__check">
                <span>Series</span>
                <span className="mono inspect-tag__pass">45k+</span>
              </div>
              <div className="inspect-tag__check">
                <span>Compatible</span>
                <span className="mono inspect-tag__pass">Mobile, Smart TV</span>
              </div>
              <div className="inspect-tag__check">
                <span>Setup help</span>
                <span className="mono inspect-tag__pass">Telegram</span>
              </div>
            </div>
            <div className="inspect-tag__divider" />
            <div className="inspect-tag__price">
              <span className="inspect-tag__price-new mono">30.00€</span>
              <span className="inspect-tag__price-old mono">≈€5.00/mo</span>
            </div>
          </div>
          <div className="hero__visual-card hero__visual-card--back" />
        </div>
      </div>
    </section>
  );
}
