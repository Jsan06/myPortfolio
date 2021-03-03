import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'John Santhosh',
  subtitle: "I'm the Web Developer." ,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Profile2.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://resume.io/r/pmzvjYdCt', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'JokeTeller.jpg',
    title: 'Joke Teller',
    info: 'Joke Teller app, you can ask the robot to tell a joke and it responds, with a joke',
    info2: "By joining 2 api's, one for speech and one a joke telling api, user will have a memorable laughter experience",
    url: 'https://jsan06.github.io/Joke-Teller',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project1.jpeg',
    title: 'E Commerce Website',
    info: "A website designed by watching my friend's business, we can book camera, lens, etc... rentals as per our schedule for shooting purposes",
    info2: 'The website has several options to filter their prescribed product, be it through price, size, availability, etc... ',
    url: 'https://john-santhosh-studio.netlify.app',
    // repo: 'https://john-santhosh-studio.netlify.app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'faceDetection.jpeg',
    title: 'Face Detection App',
    info: 'Face Detection App has the objective to precisely calculate the face in a portrait, landscape image',
    info2: "The website has it's own database and server to interact, with the tables created for register and signing-in purpose",
    url: 'https://smart-brain06.herokuapp.com',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.jpg',
    title: 'Infinite Scroll',
    info: 'The Infinite Scroll website is designed for the users to scroll through images infinitely',
    info2: "Using api services the design provides the user the beauty of nature, landscapes, portrait'screen, etc...",
    url: 'https://jsan06.github.io/infinityScroll/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.jpg',
    title: 'RoboAmigos',
    info: 'Website created through react, my first react project',
    info2: 'It has the services to filter our search, as per our need',
    url: 'https://jsan06.github.io/RoboAmigos/',
    // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/home?lang=en',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/feed/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.instagram.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
