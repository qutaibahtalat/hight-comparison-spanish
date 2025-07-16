export const APP_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://es.heightcomparisonchart.com";

type link = {
  title: string;
  path: string;
  showInNav: boolean;
  target?: "_blank" | "_self";
};
export const routes: Record<string, link> = {
  home: {
    title: "Comparación de estatura",
    path: "/",
    showInNav: true,
  },

  about: {
    title: "Sobre nosotras",
    path: "/sobre-nosotras",
    showInNav: true,
  },
  contact: {
    title: "Contacto",
    path: "/contacto",
    showInNav: true,
  },
  faq: {
    title: "Preguntas Frecuentes",
    path: "/preguntas-frecuentes",
    showInNav: false,
  },
  privacy: {
    title: "política de privacidad",
    path: "/politica-de-privacidad",
    showInNav: false,
  },
  terms: {
    title: "Términos",
    path: "/terminos",
    showInNav: false,
  },
  blog: {
    title: "Blog",
    path: "https://guides.heightcomparisonchart.com/",
    showInNav: true,
    target: "_blank",
  },
};
