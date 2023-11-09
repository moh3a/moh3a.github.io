import { USERNAME } from "../consts";

export const languages = {
  en: "English",
  fr: "Français",
  ar: "عربي",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "seo.title": `Welcome | ${USERNAME}`,
    "seo.description": "Welcome to my small corner of the web.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.CV": "CV",
    "nav.blog": "Blog",
    "nav.about": "About",
    "home.mynameis": "Hello, I'm",
    "home.name": "AIT ABDELMALEK Mohamed",
    "cv.credentials.title": "Credentials",
    "cv.credentials.city": "Zeralda, Algeria",
    "cv.professional_profile.title": "Professional Profile",
    "cv.professional_profile.p1":
      "Professional, with many years of experience in (after-sale) customer service and SMD production, combined with a solid academic background in the field of geotechnics and a strong aptitude for acquiring new knowledge.",
    "cv.professional_profile.p2":
      "Software development is my passion, being self-taught and ready to start a careet in web development. Able to both work in a team and function independently, I demonstrate a strong sense of organization and team spirit.",
  },
  fr: {
    "seo.title": `Bienvenu | ${USERNAME}`,
    "seo.description": "Bienvenue dans mon petit coin du web.",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.CV": "CV",
    "nav.blog": "Blog",
    "nav.about": "À propos",
    "home.mynameis": "Salut, je suis",
    "home.name": "AIT ABDELMALEK Mohamed",
    "cv.credentials.title": "Informations",
    "cv.credentials.city": "Zéralda, Algérie",
    "cv.professional_profile.title": "Profil Professionnel",
    "cv.professional_profile.p1":
      "Professionnel, avec de nombreuses années d'expérience en service client (après-vente) et la production de SMD, combinées à une solide formation académique dans le domaine de la géotechnique et une forte aptitude à acquérir de nouvelles connaissances.",
    "cv.professional_profile.p2":
      "Le développement de logiciels est ma passion, étant autodidacte et prêt à me lancer dans le développement Web. Capable à la fois de travailler en équipe et de fonctionner de manière autonome, je fais preuve d'un fort sens de l'organisation et de l'esprit d'équipe.",
  },
  ar: {
    "seo.title": `مرحبا | ${USERNAME}`,
    "seo.description": "مرحبًا بكم في زاويتي الصغيرة في الويب.",
    "nav.home": "الصفحة الرئيسية",
    "nav.projects": "المشاريع",
    "nav.CV": "السيرة الذاتية",
    "nav.blog": "المدونة",
    "nav.about": "عني",
    "home.mynameis": "اسمي",
    "home.name": "ايت عبد المالك محمد",
    "cv.credentials.title": "معلومات شخصية",
    "cv.credentials.city": "زرالدة، الجزائر",
    "cv.professional_profile.title": "الوصف المهني",
    "cv.professional_profile.p1":
      "محترف، مع العديد من سنوات الخبرة في خدمة العملاء (ما بعد البيع) وإنتاج SMD، تكونت في مجال الجيوتقنية و املك قدرة كبيرة على اكتساب المعرفة الجديدة.",
    "cv.professional_profile.p2":
      "تطوير البرمجيات هو شغفي، كوني تعلمت ذاتيًا وجاهزًا لبدء مسيرة مهنية في تطوير الويب. قادر على العمل ضمن فريق والعمل بشكل مستقل، وأظهر إحساسًا قويًا بالتنظيم وروح الفريق.",
  },
} as const;
