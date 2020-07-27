import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sarah Jarque-Deakin | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Let's get to work", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey there, my name is',
  name: 'Sarah Jarque-Deakin',
  subtitle: "I'm a Web Developer at",
  company: "Starling Bank",
  companyUrl: 'https://www.starlingbank.com/',
  cta: "Find out more",
};

// ABOUT DATA
export const aboutData = {
  paragraphOne: 'From starting my career in Customer Service, to working in Marketing and moving into Engineering, I love all aspects of working in tech.',
  paragraphTwo: 'I am passionate about personal development, and I believe that with proper support, an individual can achieve anything they wish to within a company.',
  paragraphThree: 'Committed to diversity in business.',
  skill1: 'JavaScript',
  skill2: 'React',
  skill3: 'Gatsby',
  skill4: 'SEO',
  skill5: 'Content Management',
  resume: 'https://github.com/Sdeakin93', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'starling-cards.jpg',
    title: 'Starling Bank',
    info: 'When I joined Starling in 2017, I joined as a member of the customer service team - I moved then into events marketing, then to SEO, and into my current role as a web developer. Having a variety of roles at Starling has allowed me to work amongst different teams, and get a much wider understanding of the entire company. I understand our customers, and their needs from our website. I work every day in JS, with a focus on React, and working with Gatsby.',
    info2: 'Starling is a UK-based digital bank, disrupting the financial services industry. Founded in 2014 by Anne Boden, it was granted a banking licence by the Bank of England in July 2016 and launched its first mobile personal current account in May 2017 available as a mobile app for both iOS and Android phones.',
    url: 'https://www.starlingbank.com/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sarahmariondeakin@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sjarquedeakin',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarah-deakin-0679aa98/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Sdeakin93',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
