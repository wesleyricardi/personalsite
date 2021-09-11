export interface languages {
  header: {
    welcome: string;
    title: string;
    text: string;
  };
  main: main;
  footer: {
    autor: string;
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
  };
  portfolio: {
    title: string;
    text: string;
    projects: {
      name: string;
      photo: string;
      description: string;
      list: string[];
    }[];
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