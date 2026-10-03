import { bookData } from "../data/bookData";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Книга Артёма Кротова · {bookData.year}</span>
          {/* h1 несёт ключевую фразу, а не только выдуманное название (SEO.md):
              «Цидукция» сама по себе не содержит ни одного поискового запроса. */}
          <h1 className="hero__title">
            {bookData.title}
            <span className="hero__keywords">
              {" "}
              — книга о продуктивности для «цифровых» профессий
            </span>
          </h1>
          {/* Подзаголовок — заголовок второго уровня, иначе «Жить, а не выжимать»
              остаётся обычным <p> и не учитывается как семантическая структура. */}
          <h2 className="hero__subtitle">{bookData.subtitle}</h2>
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
          {/* LCP-элемент первого экрана: AVIF/WebP + явные размеры против CLS. */}
          <picture>
            <source type="image/avif" srcSet="/cover.avif" />
            <source type="image/webp" srcSet="/cover.webp" />
            <img
              src="/cover.png"
              alt="Обложка книги «Цидукция. Жить, а не выжимать»"
              width={500}
              height={625}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
