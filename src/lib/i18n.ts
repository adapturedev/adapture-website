export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

const translations = {
  pt: {
    nav: {
      services: "Serviços",
      about: "Sobre",
      contact: "Contacto",
      cta: "Fale connosco",
    },
    hero: {
      badge: "Automação com IA & Transformação Digital",
      heading1: "Automatize melhor.",
      heading2: "Cresça mais rápido.",
      description:
        "Ajudamos pequenas e médias empresas a otimizar operações com automação inteligente e transformação digital — para que se possam focar no que realmente importa.",
      cta: "Vamos conversar",
      secondary: "O que fazemos",
    },
    marquee: [
      "Automação com IA",
      "Transformação Digital",
      "Soluções Cloud",
      "Integrações Personalizadas",
      "Dados & Analytics",
      "Soluções de API",
      "Workflows Inteligentes",
      "Dashboards Inteligentes",
    ],
    services: {
      label: "Serviços",
      heading: "O que fazemos",
      subtitle:
        "Desenhamos e construímos soluções de automação com IA que se adaptam à sua organização — e não o contrário.",
      cards: [
        {
          title: "Automação com IA",
          description:
            "Elimine tarefas repetitivas e processos manuais com workflows de automação inteligentes — potenciados por IA e adaptados ao seu negócio.",
        },
        {
          title: "Transformação Digital",
          description:
            "Modernize as suas operações com as ferramentas digitais certas — desde migração de sistemas legacy a soluções cloud-native.",
        },
        {
          title: "Integrações Personalizadas",
          description:
            "Conecte as suas ferramentas e sistemas de forma integrada para que os dados fluam para onde precisam, automaticamente.",
        },
        {
          title: "Dados & Analytics",
          description:
            "Transforme dados em insights acionáveis com dashboards potenciados por IA, construídos para a sua tomada de decisão.",
        },
      ],
    },
    whyUs: {
      label: "Porquê nós",
      heading: "Porquê a Adapture?",
      subtitle:
        "Não somos uma agência genérica. Cada solução é desenhada à medida dos seus workflows, objetivos e equipa.",
      points: [
        {
          title: "Soluções personalizadas",
          description:
            "Estudamos o seu negócio primeiro, depois desenhamos automação à medida — sem templates genéricos.",
        },
        {
          title: "Engenharia pragmática",
          description:
            "Usamos as ferramentas certas — desde IA e machine learning a integrações comprovadas. Sem overengineering, sem complexidade desnecessária.",
        },
        {
          title: "Orientados a resultados",
          description:
            "Cada projeto tem resultados mensuráveis. Se não faz diferença, não o fazemos.",
        },
      ],
    },
    howWeWork: {
      label: "Processo",
      heading: "Como trabalhamos",
      subtitle:
        "Um processo direto desenhado para entregar resultados reais, rápido.",
      steps: [
        {
          title: "Descobrir",
          description:
            "Mapeamos os seus workflows, pontos de dor e objetivos para entender onde a automação gera mais valor.",
        },
        {
          title: "Desenhar",
          description:
            "Arquitetamos uma solução à medida — leve, prática e alinhada com as suas ferramentas existentes.",
        },
        {
          title: "Entregar",
          description:
            "Implementamos, testamos e fazemos deploy — e ficamos por perto para garantir que tudo funciona sem problemas.",
        },
      ],
    },
    cta: {
      label: "Começar",
      heading: "Pronto para automatizar?",
      subtitle:
        "Vamos conversar sobre como a IA e automação podem otimizar as suas operações. Sem compromisso, sem pitch de vendas — apenas uma conversa sobre as suas necessidades.",
    },
    contact: {
      name: "Nome",
      namePlaceholder: "O seu nome",
      email: "Email",
      emailPlaceholder: "voce@empresa.com",
      message: "Mensagem",
      messagePlaceholder: "Fale-nos sobre o seu projeto...",
      send: "Enviar mensagem",
      sending: "A enviar...",
      successTitle: "Mensagem enviada!",
      successMessage:
        "Entraremos em contacto em breve. Obrigado por nos contactar.",
      successAction: "Enviar outra mensagem",
      error: "Algo correu mal. Por favor tente novamente.",
      subject: "Novo contacto de Adapture",
    },
    footer: {
      tagline: "Automatize melhor. Cresça mais rápido.",
      copyright: "Adapture. Todos os direitos reservados.",
    },
    meta: {
      title: "Adapture — Automação com IA para PMEs",
      description:
        "A Adapture usa IA e automação para acelerar pequenas e médias empresas através de transformação digital e soluções personalizadas. Otimize as suas operações hoje.",
      ogDescription:
        "Usamos IA e automação para acelerar organizações através de transformação digital e soluções personalizadas.",
    },
  },
  en: {
    nav: {
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: "AI-Powered Automation & Digital Transformation",
      heading1: "Automate smarter.",
      heading2: "Grow faster.",
      description:
        "We help small and medium businesses streamline operations through AI-driven automation and digital transformation — so you can focus on what matters most.",
      cta: "Let's talk",
      secondary: "See what we do",
    },
    marquee: [
      "AI-Powered Automation",
      "Digital Transformation",
      "Cloud Solutions",
      "Custom Integrations",
      "Data & Analytics",
      "API Solutions",
      "Intelligent Workflows",
      "Smart Dashboards",
    ],
    services: {
      label: "Services",
      heading: "What we do",
      subtitle:
        "We design and build AI-powered automation solutions that fit your organization — not the other way around.",
      cards: [
        {
          title: "AI-Powered Automation",
          description:
            "Eliminate repetitive tasks and manual processes with intelligent automation workflows — powered by AI and tailored to your business.",
        },
        {
          title: "Digital Transformation",
          description:
            "Modernize your operations with the right digital tools — from legacy migration to cloud-native solutions.",
        },
        {
          title: "Custom Integrations",
          description:
            "Connect your existing tools and systems seamlessly so data flows where it needs to, automatically.",
        },
        {
          title: "Data & Analytics",
          description:
            "Turn raw data into actionable insights with AI-enhanced dashboards and reporting built for your decision-making.",
        },
      ],
    },
    whyUs: {
      label: "Why us",
      heading: "Why Adapture?",
      subtitle:
        "We're not a one-size-fits-all agency. Every solution is crafted around your actual workflows, goals, and team.",
      points: [
        {
          title: "Personalized solutions",
          description:
            "We study your business first, then design automation that fits — not generic templates.",
        },
        {
          title: "Pragmatic engineering",
          description:
            "We use the right tools for the job — from AI and machine learning to proven integrations. No overengineering, no unnecessary complexity.",
        },
        {
          title: "Results-driven",
          description:
            "Every project has measurable outcomes. If it doesn't move the needle, we don't do it.",
        },
      ],
    },
    howWeWork: {
      label: "Process",
      heading: "How we work",
      subtitle:
        "A straightforward process designed to deliver real results, fast.",
      steps: [
        {
          title: "Discover",
          description:
            "We map your workflows, pain points, and goals to understand where automation delivers the most value.",
        },
        {
          title: "Design",
          description:
            "We architect a tailored solution — lean, practical, and aligned with your existing tools.",
        },
        {
          title: "Deliver",
          description:
            "We implement, test, and deploy — then stick around to make sure everything runs smoothly.",
        },
      ],
    },
    cta: {
      label: "Get started",
      heading: "Ready to automate?",
      subtitle:
        "Let's talk about how AI and automation can streamline your operations. No commitment, no sales pitch — just a conversation about your needs.",
    },
    contact: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      send: "Send message",
      sending: "Sending...",
      successTitle: "Message sent!",
      successMessage:
        "We'll get back to you soon. Thanks for reaching out.",
      successAction: "Send another message",
      error: "Something went wrong. Please try again.",
      subject: "New inquiry from Adapture",
    },
    footer: {
      tagline: "Automate smarter. Grow faster.",
      copyright: "Adapture. All rights reserved.",
    },
    meta: {
      title: "Adapture — AI-Powered Automation for SMBs",
      description:
        "Adapture uses AI and automation to accelerate small-to-medium businesses through digital transformation and personalized solutions. Streamline your operations today.",
      ogDescription:
        "We use AI and automation to accelerate organizations through digital transformation and personalized solutions.",
    },
  },
};

type DeepString<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? DeepString<U>[]
      : DeepString<T[K]>;
};

export type Translations = DeepString<(typeof translations)["en"]>;
export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
