import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alba Gallego García — Programadora de videojuegos",
  author: "Alba Gallego García",
  description:
    "Programadora de videojuegos formada en Unreal Engine",
  lang: "es",
  siteLogo: "/Alba Gallego.jpg",
  navLinks: [
    //{ text: "Experience", href: "#experience" },
    { text: "Proyectos destacados", href: "#projects" },
    { text: "Sobre mí", href: "#about" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/Alba-Gallego" }
  ],
  socialImage: "/alba-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alba Gallego",
    specialty: "Programadora de videojuegos",
    summary:
      "Programadora de videojuegos formada en Unreal Engine",
    email: "alvaroggblanes@gmail.com",
  },
  //experience: [],
  projects: [
    {
      name: "Proyecto de Final de curso de Unreal Engine",
      summary: "El proyecto final que hice para el curso de Unreal Engine de Idesigner.",
      linkSource: "https://github.com/Alba-Gallego/Proyecto-Final-Idesigner",
      image: "/Github.jpg",
    }
  ],
  about: {
    description: `
      Soy programadora de videojuegos formada en Unreal Engine. Soy apasionada del mundo de los videojuegos, con un gran interés tanto por jugarlos cómo por desarrollarlos, estudiarlos, y deconstruir y reinterpretar teóricamente sus elementos.  Creo en los videojuegos como el arte más completo y personal. Siempre en busca de oportunidades para aprender más sobre ellos.
    `,
    image: "/Alba Gallego.jpg",
  },
};

// #5755ff
