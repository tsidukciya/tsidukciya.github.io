import { bookData } from "../data/bookData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#top" className="logo">
            Цидукция<span>.</span>
          </a>
          <p className="footer__copy">
            © {year} {bookData.author} · Книга распространяется по лицензии CC BY 4.0
          </p>
        </div>

        <nav className="footer__links">
          <a href="#about">О книге</a>
          <a href="#chapters">Содержание</a>
          <a href="#author">Автор</a>
          <a href="#read">Читать</a>
          <a href={`mailto:${bookData.contact}`}>{bookData.contact}</a>
        </nav>
      </div>
    </footer>
  );
}
