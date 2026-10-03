import chapters from "./chapters.json";

export const siteUrl = "https://tsidukciya.ru";

export const bookData = {
  title: "Цидукция",
  subtitle: "Жить, а не выжимать",
  author: "Артём Кротов",
  year: "2025",
  license: "https://creativecommons.org/licenses/by/4.0/deed.ru",
  description:
    "Автор обобщил свой опыт и инструменты, которые будут актуальны во второй половине 20-х годов XXI века для представителей «цифровых» профессий. Эта книга будет полезна широкой аудитории, но особенно разработчикам ПО, дизайнерам, копирайтерам, менеджерам, представителям бизнеса, всем профессиям, которые сейчас заняты в разработке и развитии цифровых продуктов.",
  tagline:
    "Чувствуете, что ничего не успеваете или просто хотите успевать больше? Эта книга может вам дать несколько идей.",
  platforms: [
    {
      name: "Литрес",
      url: "https://www.litres.ru/book/artem-krotov/cidukciya-zhit-a-ne-vyzhimat-72794674/",
      icon: "📖",
    },
    {
      name: "MyBook",
      url: "https://mybook.ru/author/artyom-krotov/cidukciya-zhit-a-ne-vyzhimat/",
      icon: "📚",
    },
  ],
  audio: [
    {
      name: "Неогенда Telegram",
      url: "https://t.me/neogenda",
      icon: "✈️",
    },
    {
      name: "Неогенда MAX",
      url: "https://max.ru/channel_neogenda",
      icon: "🎧",
    },
  ],
  episodes: [
    {
      num: 1,
      vkvideo: "https://vkvideo.ru/video-210997384_456240380",
      rutube: "https://rutube.ru/video/11dbbb77d1b884c80c144033bb3e1f2a/",
    },
    {
      num: 2,
      vkvideo: "https://vkvideo.ru/video-210997384_456240381",
      rutube: "https://rutube.ru/video/7601d0dd14c383a7e32bab3f8e3c1aff/",
    },
    {
      num: 3,
      vkvideo: "https://vkvideo.ru/video-210997384_456240382",
      rutube: "https://rutube.ru/video/2d240528dd1375a529158aed9ebb1e95/",
    },
    {
      num: 4,
      vkvideo: "https://vkvideo.ru/video-210997384_456240383",
      rutube: "https://rutube.ru/video/5eec48be431e52c0bd8a96eabbfaec31/",
    },
    {
      num: 5,
      vkvideo: "https://vkvideo.ru/video-210997384_456240384",
      rutube: "https://rutube.ru/video/06324f1a34c20e7cd5b521a4e8ae09e1/",
    },
    {
      num: 6,
      vkvideo: "https://vkvideo.ru/video-210997384_456240385",
      rutube: "https://rutube.ru/video/58a09cc3e13da8933dfb2074efd6da63/",
    },
  ],
  // Список живёт в chapters.json: тот же файл на билде читает плагин
  // noscript-seo (vite.config.ts), чтобы текстовый дубль не разъезжался с рендером.
  chapters,
  // Ответы должны совпадать с видимым контентом блока FAQ — иначе разметка невалидна.
  faq: [
    {
      q: "Сколько стоит книга «Цидукция»?",
      a: "Книга распространяется бесплатно по лицензии CC BY 4.0 и доступна на Литрес и MyBook.",
    },
    {
      q: "Для кого написана «Цидукция»?",
      a: "Для представителей «цифровых» профессий: разработчиков ПО, дизайнеров, копирайтеров, менеджеров, продактов, аналитиков, предпринимателей и фрилансеров.",
    },
    {
      q: "Сколько глав в книге «Цидукция»?",
      a: "30 глав-инструментов: от видения и матрицы Эйзенхауэра до хронофагов, атомных привычек и автоматизации с ИИ. Каждую главу можно читать отдельно как справочник.",
    },
    {
      q: "Кто автор книги «Цидукция»?",
      a: "Артём Кротов — разработчик ПО с 2007 года, с 2017 года публикует статьи о продуктивности и выступает на профессиональных мероприятиях.",
    },
  ],
  authorBio:
    "С 2007 на рынке разработке ПО, а с 2017 регулярно публикую статьи о своей работе. Регулярно выступаю на профессиональных мероприятиях. За последние два десятилетия освоил широкий ряд навыков в сфере разработки цифровых продуктов и накопил богатый опыт в области личной эффективности и продуктивности.",
  contact: "timmson666@mail.ru",
  // Профили, которыми владеет автор: на сайте они идут с rel="me",
  // в JSON-LD попадают как Person.sameAs. Один список на оба случая.
  authorProfiles: [
    { name: "MyBook", url: "https://mybook.ru/author/artyom-krotov/" },
    { name: "Telegram", url: "https://t.me/neogenda" },
    { name: "MAX", url: "https://max.ru/channel_neogenda" },
  ],
};
