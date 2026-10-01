import { bookData } from "../data/bookData";

export function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text reveal">
            <span className="eyebrow">О книге</span>
            <h2 className="section-title">Продуктивность для «цифровых» профессий</h2>
            <p>{bookData.description}</p>
            <p>
              «Цидукция» — новое слово, образованное от «цифровая продукция». Книга
              разбита на разделы, каждый следующий дополняет предыдущий и даёт более
              конкретные советы. Её можно читать целиком или пользоваться как
              справочником: каждая глава отвечает на конкретный вопрос, вынесенный в её
              название.
            </p>
          </div>

          <blockquote className="quote reveal">
            Любая работа занимает всё отведённое под неё время.
            <span className="quote__author">— Сирил Норкот Паркинсон</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
