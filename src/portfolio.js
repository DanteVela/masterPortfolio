/* Change this file to get your Personal Porfolio */

// Website Related settings
// This is the Intro Loading screen before the Home Page such as a Splash screen
const settings = {
  isSplash: false, // Change to false if you don't want Splash screen | Change to true if you want Splash screen
};

// Search Engine Optimization Related settings
const seo = {
  title: "Dante Vela's Portfolio",
  description:
    "A software engineer specializing in website development combines innovative design with robust coding practices to build secure, responsive, and user-centric digital experiences.",
  og: {
    title: "Dante Vela Portfolio",
    type: "website",
    url: "http://DanteVela.com/", // ***Maybe change URL Name Later?***
    // url: "http://ashutoshhathidara.com/",
  },
};

// Home Page
// -----------------------------------------------------------------------------------------------------------------------------
// "This is the 1st Page that loads in after the Splash screen"
const greeting = {
  title: "Dante Vela", // Intro Page & Made by "Name"
  logo_name: "Dante Vela", // Cursive Name Logo
  nickname: "IT Specialist | Programmer", // Nickname or Status
  subTitle:
    "A software engineer specializing in website development who combines innovative design with robust coding practices to build secure, responsive, and user-centric digital experiences.",
  resumeLink:
    // When the [See my Resume] Button is clicked in the [Contact Me] Page, it will take the user to the Resume
    "https://1drv.ms/b/c/7604ad3657907d92/EURpaZg0X0RGhK_vGdVEcEEBAniqjtwMMdaD-7-sUq2F9Q?e=078MrE",
  // "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/DanteVela/masterPortfolio",
  githubProfile: "https://github.com/DanteVela",
};

// Social Media Links for the [Home Page] and [Contact Me Page]
// Clicking on the Icons will take the user to the respective Social Media sites
const socialMediaLinks = [
  /* Social Media Links */
  // github: "https://github.com/DanteVela",
  // linkedin: "https://www.linkedin.com/in/dante-vela-544284192/",
  // outlook: "dante.vela@outlook.com",

  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/DanteVela",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dante-vela-544284192/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#005FF9", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    // Microsoft Logo is a substitute for Outlook Email Icon
    name: "Outlook",
    link: "mailto:dante.vela@outlook.com",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#004788", // Reference https://simpleicons.org/?q=gmail
    // backgroundColor: "transparent", (Icon appears white until mouse hovers over it)
  },
  /*
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  */
];

// Home Page - [Skills Section]
// -----------------------------------------------------------------------------------------------------------------------------
// BackgroundColor is needed for specific logos with only letters
// Use "black" or "white" to test for Background and Logo compatibility colors
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Drives continuous innovation by developing scalable solutions that align with modern industry demands",
        "⚡ Experience working with programming methodologies and paradigms in projects",
        "⚡ Leveraging emerging technologies and best practices to enhance scalability, performance, and business insights",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus", // logos-tensorflow
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            color: "#f89820",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#9179E4",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            backgroundColor: "transparent",
            color: "#CC342D",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        /*
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        */
        {
          skillName: "Deeplearning",

          // For changing imageSrc, add/change img in public/skills folder
          // Remove the fontAwesomeClassName property or leave it empty
          imageSrc: "deeplearning_ai_logo.png", // Red
          // imageSrc: "deeplearning_ai_logo2.png",   // Black

          // fontAwesomeClassName property does nothing with ""
          fontAwesomeClassname: "",

          // You can use the style property to customize an img
          style: {
            // backgroundColor: "white",
            // color: "#F65B66",
          },
        },
      ],
    },
    {
      // title: "Full Stack Development",
      title: "Web Developer",
      fileName: "FullStackImg",
      skills: [
        // Front-End Proficiency
        "⚡ Creating refined, responsive interfaces by using HTML5, CSS3, JavaScript, jQuery, Ajax, Bootstrap, Sass, and Tailwind CSS",

        // Full-Stack Development
        "⚡ Developing dynamic web applications using ReactJS, NodeJS, and Express, with efficient data handling via JSON and RESTful API/services",

        // Optimized Workflow
        "⚡ Utilizing Postman, NPM, and Yarn to ensure robust testing, seamless dependency management, and streamlined workflows",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        /*
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        */
      ],
    },
    {
      // title: "Cloud Infra-Architecture",
      title: "Cloud Stack Foundation",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Design and deploy adaptable cloud solutions using Microsoft Azure and Heroku",
        "⚡ Building flexible, high-performance databases with MySQL and PostgreSQL",
        "⚡ Leverages Docker for efficient and reliable containerization",
        "⚡ Optimize cloud architectures for peak performance, security, and scalability",
      ],
      softwareSkills: [
        /*{
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },*/
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        /*{
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },*/
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications using Miro, Adobe, and Gimp",
        "⚡ Customizing logos and building brand identities from ideation to production",
        "⚡ Create logical application flows to optimize user experience and drive engagement",
      ],
      softwareSkills: [
        {
          skillName: "Miro",
          fontAwesomeClassname: "simple-icons:miro",
          style: {
            color: "#050038",
          },
        },
        {
          skillName: "Gimp",
          fontAwesomeClassname: "simple-icons:gimp",
          style: {
            color: "#5C5543",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe InDesign",
          fontAwesomeClassname: "simple-icons:adobeindesign",
          style: {
            color: "#E749A0",
          },
        },
        {
          skillName: "Adobe Acrobat",
          imageSrc: "adobeacrobat_logo.png",
          fontAwesomeClassname: "",
          style: {
            // color: "#F40F02",
          },
        },
        {
          skillName: "Adobe Flash",
          imageSrc: "adobeflash_pro_logo.png",
          fontAwesomeClassname: "",
          style: {
            // color: "#CF302A",
          },
        },
        {
          skillName: "Adobe Express",
          imageSrc: "adobeexpress_logo.png",
          fontAwesomeClassname: "",
          style: {
            // color: "#FF0000",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        /*
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        */
      ],
    },
  ],
};

// Education Page
// -----------------------------------------------------------------------------------------------------------------------------
// profileLink: [Without the comments] - Links to sites are Enabled | [With the comments] - Links to sites are Disabled
const competitiveSites = {
  competitiveSites: [
    {
      // Due to "Babbel's logo difficulties, resorted to using Iconify's website as an alterative solution"
      // Iconify's extensive library of icons is useful for various categories including skills, companies, etc.
      siteName: "Babbel",
      iconifyClassname: "vscode-icons:folder-type-www-opened",
      style: {
        // backgroundColor: "transparent",
        // color: "",
      },
      // profileLink: "https://www.babbel.com/DanteV/",
    },
    {
      // Resorted to using "logos method" for grabbing Microsoft's logo with built-in color
      siteName: "Microsoft Learn",
      iconifyClassname: "logos-microsoft",
      style: {
        backgroundColor: "transparent",
      },
      // profileLink: "https://learn.microsoft.com/en-us/users/dantevela/",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#43A047",
      },
      // profileLink: "https://www.geeksforgeeks.org/",
    },
    {
      siteName: "FreeCodeCamp (Codefinity)",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#0A0A23",
      },
      // profileLink: "https://codefinity.com/layman_brother/",
    },
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#0056D2",
      },
      // profileLink: "https://coursera.org/layman_brother/",
    },
    {
      siteName: "HubSpot Academy",
      iconifyClassname: "simple-icons:hubspot",
      style: {
        color: "#FF7A59",
      },
      // profileLink: "https://www.academy.hubspot.com/layman_brother/",
    },
    {
      // Due to "simplilearn's logo difficulties, resorted to using Iconify's website as an alterative solution"
      // Iconify's extensive library of icons is useful for various categories including skills, companies, etc.
      siteName: "simplilearn",
      iconifyClassname: "vscode-icons:folder-type-www-opened",
      style: {
        // backgroundColor: "transparent",
        // color: "",
      },
      // profileLink: "https://www.simplilearn.com/layman_brother/",
    },
    /*{
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      // profileLink: "https://leetcode.com/layman_brother/",
    },*/
    /*{
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      // profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },*/
  ],
};

// Education Page - [Degrees Section]
const degrees = {
  degrees: [
    {
      title: "The University of Texas Rio Grande Valley",
      subtitle: "Bachelors of Science in Computer Science",
      logo_path: "utrgv_logo.png",
      alt_name: "UTRGV",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ At UTRGV, I mastered a comprehensive range of computer science disciplines - including algorithms, automata, computer networks, assembly language, and software engineering - while also honing my skills in data science, internet programming, and technical communication.",
        "⚡ Completed an intensive series of readings in philosophy and technological ethics, cultivating a nuanced perspective on the ethical challenges in today's tech landscape.",
        "⚡ Over 3 consecutive years, I have earned the prestigious recognition in being on the Presidents List, demonstrating my steadfast commitment to academic excellence.",
        "⚡ During my time at university, I formed study groups and provided peer tutoring across diverse coursework, fostering a collaborative environment for academic success.",
        "⚡ During the COVID-19 pandemic, UTRGV transitioned to remote learning while enforcing strict safety protocols for necessary on-site interactions.",
      ],
      website_link: "https://www.utrgv.edu/",
    },
    {
      title: "South Texas College",
      subtitle: "Associate of Science in Engineering",
      logo_path: "stc_logo.png",
      alt_name: "STC",
      duration: "2016 - 2019",
      descriptions: [
        "⚡ At STC, I pursued an interdisciplinary curriculum spanning Art, History, Composition, Calculus, Electrical Circuits, Digital Systems, Physics, and Programming Fundamentals, cultivating a versatile blend of creative and analytical expertise.",
        "⚡ Completed an intensive series of readings in philosophy and technological ethics, cultivating a nuanced perspective on the ethical challenges in today's tech landscape.",
        "⚡During my time at college, I formed study groups and provided peer tutoring across diverse coursework, fostering a collaborative environment for academic success.",
      ],
      website_link: "https://www.southtexascollege.edu/",
    },
    {
      title:
        "Business, Education, Technology, Academy (BETA): AKA [World Scholars]",
      subtitle: "High School Diploma",
      logo_path: "beta_logo.png",
      alt_name: "BETA",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ At STISD, I completed rigorous courses in Animation, Computer Maintenance, Digital Interactive Media (DIM), Principles of Information Technology, Research in IT Solutions, and Web Tech, building a comprehensive blend of technical expertise and creative innovation.",
        "⚡ During my Information Technology Internship, I installed and maintained computer systems to minimize downtime, resolved network issues to enhance connectivity, managed equipment inventory, collaborated with staff and clients to deliver tailored technical solutions while supporting diverse projects.",
        "⚡ From 2012-2016, as a dedicated member of the Technology Student Association, I excelled in innovation and coding competitions by securing first place in two regionals (2015-2016), demonstrating strong proficiency in web development using HTML, CSS, and leadership.",
      ],
      website_link: "https://worldscholars.stisd.net/",
    },
  ],
};

// Education Page - [Certifications Section]
// -----------------------------------------------------------------------------------------------------------------------------
// When a certificate is clicked, the "certificate_link" takes you to the LinkedIn website
// The "certificate_link" can be replaced with the actual certificate link directly
const certifications = {
  certifications: [
    {
      title: "Develop AI Solutions with Azure OpenAI and Semantic Kernel",
      subtitle: "- Satya Narayana Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Microsoft Learn",
      color_code: "#FFFFFF",
    },
    {
      title: "President's List Recognition (2020)",
      subtitle: "- Guy Bailey",
      logo_path: "utrgv_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "UTRGV",
      color_code: "#FFFFFF",
    },
    {
      title: "President's List Recognition (2016)",
      subtitle: "- BETA (AKA World Scholars)",
      logo_path: "beta_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "BETA",
      color_code: "#FFFFFF",
    },
    {
      title: "Microsoft Technology Associate: Networking Fundamentals",
      subtitle: "- Satya Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Microsoft Technology Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "Microsoft Technology Associate: Security Fundamentals",
      subtitle: "- Satya Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Microsoft Technology Associate",
      color_code: "#FFFFFF",
    },
    {
      title:
        "Microsoft Technology Associate: Windows Operating System Fundamentals",
      subtitle: "- Satya Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Microsoft Technology Associate",
      color_code: "#FFFFFF",
    },
    {
      title:
        "Microsoft Technology Associate: Windows Server Administration Fundamentals",
      subtitle: "- Satya Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Microsoft Technology Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "Microsoft Office Specialist",
      subtitle: "- Satya Nadella",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Microsoft Office Specialist",
      color_code: "#FFFFFF",
    },
    {
      title: "Graphic Design & Illustration Using Adobe Illustrator",
      subtitle: "- Shantanu Narayen",
      logo_path: "adobe_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Adobe Certified Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "Interactive Media using Adobe Flash Professional",
      subtitle: "- Shantanu Narayen",
      logo_path: "adobe_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Adobe Certified Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "Print & Digital Media Publication Using Adobe InDesign",
      subtitle: "- Shantanu Narayen",
      logo_path: "adobe_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Adobe Certified Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "Rich Media Communication using Adobe Flash CS6",
      subtitle: "- Shantanu Narayen",
      logo_path: "adobe_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Adobe Certified Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "Visual Communication Using Adobe Photoshop CS5",
      subtitle: "- Shantanu Narayen",
      logo_path: "adobe_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Adobe Certified Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "Visual Communication Using Adobe Photoshop CS6",
      subtitle: "- Shantanu Narayen",
      logo_path: "adobe_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Adobe Certified Associate",
      color_code: "#FFFFFF",
    },
    {
      title: "CIW Internet Business Associate",
      subtitle: "- Lisa Harnish",
      logo_path: "CIW_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Certified Internet Web Professional",
      color_code: "#FFFFFF",
    },
    {
      title: "CIW Network Technology Associate",
      subtitle: "- Lisa Harnish",
      logo_path: "CIW_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Certified Internet Web Professional",
      color_code: "#FFFFFF",
    },
    {
      title: "CIW Site Development Associate",
      subtitle: "- Lisa Harnish",
      logo_path: "CIW_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "Certified Internet Web Professional",
      color_code: "#FFFFFF",
    },
    {
      title: "IC3 GS3",
      subtitle: "- Dr. Gary Gates",
      logo_path: "IC3_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "IC3 GS3",
      color_code: "#FFFFFF",
    },
    {
      title: "IC3 GS4 - Computing Fundamentals",
      subtitle: "- Certiport",
      logo_path: "IC3_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "IC3 GS4",
      color_code: "#FFFFFF",
    },
    {
      title: "IC3 GS4 - Key Applications",
      subtitle: "- Certiport",
      logo_path: "IC3_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "IC3 GS4",
      color_code: "#FFFFFF",
    },
    {
      title: "IC3 GS5 - Key Applications",
      subtitle: "- Certiport",
      logo_path: "IC3_logo.png",
      certificate_link: "https://www.linkedin.com/in/dante-vela-544284192",
      alt_name: "IC3 GS5",
      color_code: "#FFFFFF",
    },
    /*{
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },*/
  ],
};

// Experience Page
// -----------------------------------------------------------------------------------------------------------------------------
// !!!***This webpage needs to be maintained as more experience is gained through multiple job positions and etc***!!!
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Driven by a lifelong passion for technology, I thrive at the intersection of full-stack web development, AI innovation, and IT support-delivering innovative, user-centric solutions with a steadfast commitment to communication, collaboration, time management, critical thinking, attention to detail, problem solving, and accountability.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Independent Online Seller",
          company: "Independent Online Seller",

          // Various sites were used to sell products or services
          // company_url: "https://www.tiktok.com/en/",

          // There is no logo or brand as a Online Independent Seller -> yet...
          // Placeholder logo is used for now... only temporary
          // !!!***Must find and use family logo possibly or make own logo in future***!!!
          logo_path: "bestseller_logo.png",
          duration: "June 2016 - Present",
          location: "Remote, TX, USA",
          description:
            "Provided online customer service to clients across e-commerce platforms ensuring customer satisfaction; marketed and sold products by effectively managing inventory, pricing, promotions, while improving financial tracking efficiency through a USB-based filing system integrated with spreadsheets.",
          color: "#000000",
        },
        /*{
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },*/
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Information Technology Intern",
          company:
            "Business, Education, Technology, Academy (BETA) - AKA World Scholars",
          company_url: "https://worldscholars.stisd.net/",
          logo_path: "beta_logo.png",
          duration: "Jan 2016 - May 2016",
          location: "On-Site, Edinburg TX, USA",
          description:
            "Experienced IT professional proficient in installing, maintaining, and troubleshooting computer systems and networks to minimize downtime, while managing inventories and collaborating with staff, clients, and management to implement tailored technical solutions.",
          color: "#0071C5",
        },
        /*{
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Technology Student Association (TSA) Club Member",
          company:
            "Business, Education, Technology, Academy (BETA) - AKA World Scholars",
          company_url: "https://worldscholars.stisd.net/",
          logo_path: "tsa_logo.png",
          duration: "Jan 2012 - Jan 2016",
          location: "On-Site, Edinburg TX, USA",
          description:
            "Innovative web developer with HTML/CSS expertise, recognized for securing first place in two regional coding competitions (2015, 2016) and excelling in collaborative innovation challenges.",
          color: "#0C9D58",
        },
        /*{
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },*/
      ],
    },
  ],
};

// Projects Page | [Open Source Page] uses the same data as [Projects Page] but mainly focuses on GitHub Projects
// -----------------------------------------------------------------------------------------------------------------------------
// For GitHub Projects, use "node git_data_fetcher.mjs" to update the data from a GitHub account
// Within the scope of "src/shared/opensource" JSON files is the data that is fetched from GitHub
// Make sure the ".env" file has your GitHub Token and GitHub Username for OAuth (Treat it like a password)
// -----------------------------------------------------------------------------------------------------------------------------
// Within the scope of "src/pages/projects", the "Projects.js" file contains the Text for Buttons in the [Projects Page]
// To change the text, look for details like "btn-div" and "<Button/>" to find the text that needs to be changed
const projectsHeader = {
  title: "Projects",
  description:
    "My skills leverage a diverse array of cutting-edge technologies, building cloud-based data science projects, responsive websites, optimized databases, and intuitive Java GUI applications-while adeptly managing ecommerce operations, game development initiatives, and project coordination.",
  avatar_image_path: "projects_image.svg",
};

// Projects Page - [Publication Header Section]
const publicationsHeader = {
  title: "Publications",
  description:
    "My collection of Articles, Blogs, Readings, and Research that showcase my expertise and innovative insights.",
  avatar_image_path: "projects_image.svg",
};

// Projects Page - [Publications Section]
// -----------------------------------------------------------------------------------------------------------------------------
// When a publication article is clicked, the "url" takes the user directly to the publication
const publications = {
  data: [
    {
      id: "the-13-layout-sins",
      name: "The 13 Layout Sins (Reading)",
      createdAt: "10-02-2019T00:00:00Z",
      description:
        "How to revise Written Instructions as well as provide feedback to group members.",
      url:
        "https://eng307pack.wordpress.com/wp-content/uploads/2012/12/layout-sins.pdf",
    },
    {
      id: "shitty-first-drafts-anne-lamott",
      name: "Shitty First Drafts by Anne Lamott (Reading)",
      createdAt: "09-11-2019T00:00:00Z",
      description:
        "To accept first drafts of assignments/projects regardless of status, always improve.",
      url:
        "https://jlserna1125.wordpress.com/wp-content/uploads/2013/07/shitty_drafts_2_-1.pdf",
    },
    {
      id:
        "rhetoric-making-sense-of-human-interaction-and-meaning-making-doug-downs",
      name:
        "Rhetoric: Making Sense of Human Interaction and Meaning-Making by Doug Downs (Reading/Discussion)",
      createdAt: "09-04-2019T00:00:00Z",
      description:
        "Pairing article excerpts with dynamic visuals & a #hashtag capturing the core message.",
      url:
        "https://dougdownsteaching.wordpress.com/wp-content/uploads/2018/01/downs-rhetoric.pdf",
    },
    {
      id: "layered-literacies-cook-kelli-cargile",
      name: "Layered Literacies by Cook, Kelli Cargile (Reading/Discussion)",
      createdAt: "08-28-2019T00:00:00Z",
      description:
        "The six layered literacies of technical communication and how its used in the world or professionally.",
      url:
        "https://engl775f15.wordpress.com/wp-content/uploads/2015/10/cargile-cook-layered-literacies.pdf",
    },
    /*{
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },*/
  ],
};

// Contact Page
// -----------------------------------------------------------------------------------------------------------------------------
// Within the scope of "src/pages/contact", the "ContactComponent.js" file contains the Text for Buttons in the [Contact Page]
// To change the text, look for details like "btn-div" and "<Button/>" to find the text that needs to be changed
const contactPageData = {
  contactSection: {
    title: "Connect with Me",
    profile_image_path: "Self_Portrait.png",
    description:
      "I'm available nearly every day. You can contact me thru email, message, phone call, or social media. Expect responses within 48 hours.",
  },
  blogSection: {
    title: "Documentation",
    subtitle:
      "I like to document my experiences and share some technical knowledge in a detailed step-by-step process for easy learning.",
    link: "https://www.linkedin.com/in/dante-vela-544284192",
    // link: "https://blogs.ashutoshhathidara.com/", (Blog/Blogsite)
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Contact Information",
    subtitle: "You can reach me at (956) 404-5085 or at dante.vela@outlook.com",
    avatar_image_path: "address_image.svg",
    location_map_link: "mailto:dante.vela@outlook.com",
  },
  /*addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },*/
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
