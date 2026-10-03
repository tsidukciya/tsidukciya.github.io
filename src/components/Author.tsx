import { bookData } from "../data/bookData";

const linkGroups = [
  { title: "Статьи", items: bookData.authorLinks.articles },
  { title: "Доклады", items: bookData.authorLinks.talks },
  { title: "Сообщество и переводы", items: bookData.authorLinks.community },
];

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
            <p className="author__role">{bookData.authorRole}</p>
            <p className="author__bio">{bookData.authorBio}</p>
            {/* rel="me" заявляет эти профили как принадлежность автора:
                то же самое дублируется в Person.sameAs (см. JsonLd.tsx). */}
            <p className="author__links">
              {bookData.authorProfiles.map((profile) => (
                <a
                  className="author__link"
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  {profile.name}
                </a>
              ))}
            </p>
          </div>
        </div>

        <div className="author__details">
          <div className="author__card reveal">
            <h3 className="author__card-title">Чем могу быть полезен</h3>
            <ul className="author__list">
              {bookData.authorExpertise.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {linkGroups.map((group) => (
            <div className="author__card reveal" key={group.title}>
              <h3 className="author__card-title">{group.title}</h3>
              <ul className="author__refs">
                {group.items.map((item) => (
                  <li key={item.url}>
                    <a
                      className="author__ref"
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="author__ref-title">{item.title}</span>
                      {item.note && (
                        <span className="author__ref-note">{item.note}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}