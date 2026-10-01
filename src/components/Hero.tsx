import { bookData } from "../data/bookData";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Книга Артёма Кротова · {bookData.year}</span>
          <h1 className="hero__title">{bookData.title}</h1>
          <p className="hero__subtitle">{bookData.subtitle}</p>
          <p className="hero__lead">{bookData.tagline}</p>

          <div className="hero__actions">
            <a href="#read" className="btn btn--primary">
              Читать бесплатно
            </a>
            <a href="#chapters" className="btn btn--ghost">
              Смотреть содержание
            </a>
          </div>

          <div className="hero__meta">
            <div>
              <strong>30</strong>
              глав-инструментов
            </div>
            <div>
              <strong>1</strong>
              система продуктивности
            </div>
            <div>
              <strong>0 ₽</strong>
              бесплатное чтение
            </div>
          </div>
        </div>

        <div className="hero__cover">
          <img src="/cover.png" alt="Обложка книги «Цидукция. Жить, а не выжимать»" />
        </div>
      </div>
    </section>
  );
}
