export interface languages {
  head: {
    title: string;
    description: string;
  };
  nav: {
    menu: { link: string; section: string }[];
    linkedin: string;
    github: string;
  };
  header: {
    welcome: string;
    title: string;
    text: string;
  };
  main: main;
  footer: {
    copyright: string;
    localization: string;
  };
}

export interface main {
  aboutMe: {
    photo: string;
    title: string;
    text: string;
  };
  skills: {
    title: string;
    text: string;
    list: {
      image: string;
      skill_name: string;
      seniority: { level: number; name: string };
    }[];
  };
  portfolio: {
    title: string;
    text: string;
    projects: {
      name: string;
      photo: string;
      stage: { text: string; percent: string };
      description: string;
      list: string[];
      link: string;
    }[];
    buttonVisit: string;
  };
  contact: {
    title: string;
    text: string;
    phone: string;
    number: string;
    email: string;
    linkedin: string;
    github: string;
    whatsapp: string;
    form: {
      name: string;
      email: string;
      message: string;
      button: string;
    };
  };
}

//export default languages
