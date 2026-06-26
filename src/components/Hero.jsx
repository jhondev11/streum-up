import { ArrowRight, MessageCircle, ShieldCheck, Globe, Clock } from "lucide-react";
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

          <div className="hero__proof" aria-label="social proof">
            <span className="hero__proof-pill">★ {t.hero.socialProof}</span>
          </div>

          <div className="hero__trust-grid">
            <div className="hero__trust-card">
              <ShieldCheck size={18} />
              <div>
                <strong>{t.hero.trust1value}</strong>
                <span>{t.hero.trust1label}</span>
              </div>
            </div>
            <div className="hero__trust-card">
              <Globe size={18} />
              <div>
                <strong>{t.hero.trust2value}</strong>
                <span>{t.hero.trust2label}</span>
              </div>
            </div>
            <div className="hero__trust-card">
              <Clock size={18} />
              <div>
                <strong>{t.hero.trust3value}</strong>
                <span>{t.hero.trust3label}</span>
              </div>
            </div>
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
              <span className="mono">12 months</span>
            </div>
            <div className="inspect-tag__checks">
              <div className="inspect-tag__check">
                <span>Live channels</span>
                <span className="inspect-tag__pass">55k+ — up to 4K Ultra HD</span>
              </div>
              <div className="inspect-tag__check">
                <span>Movies</span>
                <span className="inspect-tag__pass">170k+ movies on-demand</span>
              </div>
              <div className="inspect-tag__check">
                <span>Series</span>
                <span className="inspect-tag__pass">+45k complete series</span>
              </div>
              <div className="inspect-tag__check">
                <span>Quality</span>
                <span className="inspect-tag__pass">Full HD &amp; Ultra HD</span>
              </div>
              <div className="inspect-tag__check">
                <span>Compatible</span>
                <span className="inspect-tag__pass">Mobile, Smart TVs, iPhone, Androids, etc.</span>
              </div>
              <div className="inspect-tag__check">
                <span>Support</span>
                <span className="inspect-tag__pass">Telegram support (fast setup &amp; dedicated help)</span>
              </div>
            </div>
            <div className="inspect-tag__divider" />
            <div className="inspect-tag__price">
              <span className="inspect-tag__price-new mono">45.00€</span>
              <span className="inspect-tag__price-old mono">≈€3.75/mo</span>
            </div>
          </div>
          <div className="hero__visual-card hero__visual-card--back" />
        </div>
      </div>
    </section>
  );
}
