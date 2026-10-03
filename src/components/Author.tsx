import { bookData } from "../data/bookData";

export function Author() {
  return (
    <section className="section section--alt" id="author">
      <div className="container">
        <div className="author__grid">
          <picture className="reveal">
            <source type="image/avif" srcSet="/author.avif" />
            <source type="image/webp" srcSet="/author.webp" />
            <img
              className="author__avatar"
              src="/author.png"
              alt={`Фото автора — ${bookData.author}`}
              width={180}
              height={180}
              loading="lazy"
              decoding="async"
              style={{ objectFit: "cover" }}
            />
          </picture>
          <div className="reveal">
            <span className="eyebrow">Об авторе</span>
            <h2 className="author__name">{bookData.author}</h2>
            <p className="author__role">Разработчик · Автор · Спикер</p>
            <p className="author__bio">{bookData.authorBio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
