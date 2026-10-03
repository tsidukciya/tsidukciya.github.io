import { bookData, siteUrl } from "../data/bookData";

const authorProfile = {
  "@type": "Person",
  "@id": `${siteUrl}/#author`,
  name: bookData.author,
  jobTitle: "Разработчик ПО, Скрам-мастер, автор и спикер",
  email: bookData.contact,
  description: bookData.authorBio,
  // sameAs берём из того же списка, что и ссылки с rel="me" в блоке «Об авторе».
  sameAs: bookData.authorProfiles.map((profile) => profile.url),
  // knowsAbout повторяет видимый список компетенций — сигнал E-E-A-T.
  knowsAbout: bookData.authorExpertise,
};

const book = {
  "@type": "Book",
  "@id": `${siteUrl}/#book`,
  name: `${bookData.title}. ${bookData.subtitle}`,
  author: authorProfile,
  datePublished: bookData.year,
  inLanguage: "ru",
  isAccessibleForFree: true,
  license: bookData.license,
  image: `${siteUrl}/cover.png`,
  description: bookData.description,
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    url: bookData.platforms[0].url,
  },
  workTranslation: bookData.platforms.map((p) => ({
    "@type": "CreativeWork",
    name: `«${bookData.title}» на ${p.name}`,
    url: p.url,
    inLanguage: "ru",
  })),
  chapter: bookData.chapters.map((c) => ({
    "@type": "Chapter",
    position: c.num,
    name: c.title,
    url: `${siteUrl}/#chapter-${c.num}`,
    isPartOf: { "@id": `${siteUrl}/#book` },
  })),
};

// VideoObject без contentUrl/uploadDate не даёт видео-расширения,
// но описывает эпизоды для краулеров; данные эпизодов берём из bookData.
const videos = bookData.episodes.map((e) => ({
  "@type": "VideoObject",
  name: `«${bookData.title}», выпуск ${e.num}`,
  description: `Видеовыпуск ${e.num} по книге «${bookData.title}. ${bookData.subtitle}» — читает Алексей Пименов.`,
  url: e.vkvideo,
  thumbnailUrl: `${siteUrl}/cover.png`,
  inLanguage: "ru",
  uploader: authorProfile,
  contentLocation: [
    { "@type": "Place", name: "VK Video", sameAs: e.vkvideo },
    { "@type": "Place", name: "RuTube", sameAs: e.rutube },
  ],
}));

// Ответы берутся из того же bookData.faq, что и видимый блок <Faq /> —
// разметка обязана совпадать с контентом страницы.
const faq = {
  "@type": "FAQPage",
  mainEntity: bookData.faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// Публичные материалы автора (статьи и доклады) связываются с Person через @id:
// поисковые системы видят подтверждённый опыт и экспертизу (E-E-A-T), а не
// просто список ссылок на странице.
const authorWorks = [
  ...bookData.authorLinks.articles.map((item) => ({
    "@type": "Article",
    name: item.title,
    url: item.url,
    inLanguage: "ru",
    author: { "@id": `${siteUrl}/#author` },
  })),
  ...bookData.authorLinks.talks.map((item) => ({
    "@type": "VideoObject",
    name: item.title,
    description: `Доклад ${bookData.author}${item.note ? ` — ${item.note}` : ""}.`,
    url: item.url,
    inLanguage: "ru",
    author: { "@id": `${siteUrl}/#author` },
  })),
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: bookData.title,
      inLanguage: "ru",
      publisher: authorProfile,
    },
    authorProfile,
    book,
    faq,
    ...authorWorks,
    ...videos,
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
