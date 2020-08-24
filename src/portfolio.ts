// Your Summary And Greeting Section

import emoji from 'react-easy-emoji';

const greeting = {
  /* Your Summary And Greeting Section */
  username: 'Dominic Kudiabor',
  title: "Hi all, I'm Dominic",
  subTitle: emoji(
    'A passionate Full Stack Developer 🚀 having extensive experience in building full stack web applications with JavaScript/ Typescript / Reactjs / Nodejs / Expressjs and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://assets.ctfassets.net/4oximl3a85zh/3FA3IsKsQO5m5WQ0HRhzy8/5b53f1c7308c1ca6d9b83c1c0d7bbd05/Dominic_Travis_Kudiabor_-_Integrify_CV_-_6.8.2020.pdf',
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/dominickudiabor',
  linkedin: 'https://www.linkedin.com/in/dominickudiabor/',
  gmail: 'dominickudd@gmail.com',
  medium: 'https://medium.com/@dominickudd',
  stackoverflow: 'https://stackoverflow.com/users/12138070/dominictraviskudix',
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle:
    'VERSATILE FULL STACK DEVELOPER WITH A TENACIOUS DESIRE  TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji('⚡ Design overall architecture of the web applications'),
    emoji(
      '⚡ Develop interactive Full Stack web applications using MERN stack'
    ),
    emoji("⚡ Designing and implementing API's  "),
    emoji('⚡ Integrating the front-end UI with the constructed API '),
    emoji(
      '⚡ Design and implementation of continuous integration and deployment '
    ),
  ],
  // eslint-disable-next-line
  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'fas fa-laptop-code',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    ,
    {
      skillName: 'Expressjs',
      fontAwesomeClassname: 'fas fa-server',
    },
    {
      skillName: 'React-Native',
      fontAwesomeClassname: 'fas fa-mobile-alt',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'Jest Testing',
      fontAwesomeClassname: 'fas fa-code ',
    },
    {
      skillName: 'PostgreSQL-database',
      fontAwesomeClassname: 'fas fa-database',
    },

    {
      skillName: 'MongoDB-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '80%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '78%',
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Integrify',
      companylogo: require('./assets/images/integrify.png'),
      date: 'May 2020 – Present',
      desc: '',
      descBullets: [
        'Collaborated on diverse full stack  and React native projects.',
        'Reviewed code and assisted colleagues in debugging.',
        'Design and implementation of continuous integration and deployment',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Dude Project',
      companylogo: require('./assets/images/dude.png'),
      date: 'September 2019 – February 2020',
      desc: '',
      descBullets: [
        'Developed e-commerce websites for local shops.',
        'Designed  landing pages for small businesses.',
        'Maintained and added features to existing websites for various local companies.',
      ],
    },

    {
      role: 'Customer Service ',
      company: 'Buildmart Architectural ',
      companylogo: require('./assets/images/build.png'),
      date: 'March 2015 – September 2016',
      desc: '',
      descBullets: [
        'Acquired clients for the company to solicit services for architectural projects.',
        'Established marketing campaigns to increase the profit margin of the company.',
        'Sustained client relationships by follow up calls.',
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'dominickudiabor', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achivementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://medium.com/@dominickud/a-quick-guide-to-setup-react-native-4065ae624405',
      title: 'A quick guide to setup React Native with Typescript on MacOS',
      description:
        'This publication is intended to assist anyone who is new to React Native and would like to setup an environment in less than 6 mins',
    },
  ],
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '046 9496179',
  email_address: 'dominickudd@gmail.com',
};

//Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
