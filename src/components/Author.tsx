import { bookData } from "../data/bookData";

export function Author() {
  return (
    <section className="section section--alt" id="author">
      <div className="container">
        <div className="author__grid">
          <img
            className="author__avatar reveal"
            src="/author.png"
            alt={`Фото автора — ${bookData.author}`}
            style={{ objectFit: "cover" }}
          />
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
