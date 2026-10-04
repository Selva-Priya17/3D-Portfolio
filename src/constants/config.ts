type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "SelvaPriya Packiam — 3D Portfolio",
    fullName: "SelvaPriya Packiam",
    email: "selvapriya0017@gmail.com",
  },
  hero: {
    name: "SelvaPriya",
    p: ["I develop full-stack applications,", "Java solutions, and responsive web interfaces"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a results-driven Software Developer skilled in Java, C++, Python and full-stack development. Experienced in building scalable applications using React.js, Firebase, and SQL, with hands-on work in Azure WAF integration, Python chatbot development, and real-time legacy system fixes based on client requirements. Passionate about solving real-world problems and contributing to impactful software solutions. Let's build something amazing!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through real-world examples of my work. It reflects my ability to solve complex problems, work with different frontend and backend technologies, and deliver complete software solutions effectively.`,
    },
  },
};
