import { Smartphone, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "../i18n/useLanguage";
import { telegramLink } from "../utils/whatsapp";
import "./Footer.css";

export default function Footer({ onNavigate = () => {} }) {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo">
            <Smartphone size={20} strokeWidth={2.4} />
            <span>
              StreamUp<span className="footer__logo-dot">.</span>
            </span>
          </a>
          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer__col">
          <h4 className="mono">{t.footer.navTitle}</h4>
          <a href="#plans">{t.nav.plans}</a>
          <a href="#covered">{t.nav.covered}</a>
          <a href="#how-it-works">{t.nav.howItWorks}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>

        <div className="footer__col">
          <h4 className="mono">{t.footer.legalTitle}</h4>
          <button onClick={() => onNavigate("privacy")} className="footer__policy-link">{t.footer.privacy}</button>
          <button onClick={() => onNavigate("terms")} className="footer__policy-link">{t.footer.terms}</button>
          <button onClick={() => onNavigate("cookies")} className="footer__policy-link" style={{ fontSize: "0.9rem" }}>Cookies Policy</button>
        </div>

        <div className="footer__col">
          <h4 className="mono">{t.footer.contactTitle}</h4>
          <a href={telegramLink()} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
            <Send size={15} />
            Telegram
          </a>
          <span className="footer__contact-info mono">@streamupiptv</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} StreamUp. {t.footer.rights}</span>
      </div>
    </footer>
  );
}
