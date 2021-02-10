export const rows = [
    {level: ['i'], topic: 'Semantic HTML', hours: 12},
    {level: ['i'], topic: 'CSS, Media Objects & Layout', hours: 12},
    {level: ['i'], topic: 'CSS Frameworks', hours: 3},
    {level: ['i'], topic: 'Mobile Responsive Design', hours: 6},
    {level: ['i'], topic: 'Accessibility & UI/UX', hours: 3},
    {level: ['i'], topic: 'Individual Portfolio Project', hours: 3},
    {level: ['i'], topic: 'GitHub & VSCode', hours: 3},
    {level: ['i'], topic: 'Web Browsers and the DOM', hours: 9},
    {level: ['ii'], topic: 'JavaScript & ES6 Essentials', hours: 12},
    {level: ['ii'], topic: 'Javascript Data Structures', hours: 3},
    {level: ['ii'], topic: 'JSON & AJAX & HTTP/S', hours: 6},
    {level: ['ii'], topic: 'REST & GraphQL APIS', hours: 6},
    {level: ['ii'], topic: 'Git & Version Control', hours: 3},
    {level: ['ii'], topic: 'Functional Programming & CS Concepts', hours: 6},
    {level: ['ii'], topic: 'SASS', hours: 3},
    {level: ['ii'], topic: 'Javascript Design Patterns', hours: 9},
    {level: ['ii'], topic: 'Javascript Application Project', hours: 3},
    {level: ['iii'], topic: 'Intro to React & JS Frameworks', hours: 9},
    {level: ['iii'], topic: 'Advanced JavaScript & Beyond ES6', hours: 12},
    {level: ['iii'], topic: 'JS Build Tools (Babel, Parcel, Snowpack)', hours: 6},
    {level: ['iii'], topic: 'Advanced React', hours: 9},
    {level: ['iii'], topic: 'State Management (Context, Redux)', hours: 6},
    {level: ['iii'], topic: 'Firebase, NodeJS', hours: 9},
    {level: ['iii'], topic: 'Linting & Testing', hours: 3},
    {level: ['iii'], topic: 'Performance & Debugging', hours: 3},
    {level: ['iii'], topic: 'Final Project (CRUD Application)', hours: 12},
    {level: ['iii'], topic: 'Resume, Interviewing and Career Skills', hours: 9},
  ].map((obj, ind) => ({...obj, key: ind}));


  export const details = [
    {
      "title": "Time:",
      "content": "Tuesdays & Thursdays, 5:30pm - 8:30pm",
      "icon": "notes.svg"
    },
    {
      "title": "Instructor:",
      "content": "W. Jamie Vaughn wvaughniv@monroecc.edu",
      "icon": "notes.svg"
    }
  ]
  
  export const sections = [
    {
      "title": "Tool Tips!",
      "content": "Overview of the most useful web development tools for every developer",
      "icon": "checked_circle.svg"
    },
    {
      "title": "Main Lecture Topic",
      "content": "Review of concepts and web standards via slides and documentation",
      "icon": "checked_circle.svg"
    },
    {
      "title": "Survey of Computer Science",
      "content": "Practical computer science topics and concepts",
      "icon": "checked_circle.svg"
    },
    {
      "title": "Code-Along",
      "content": "Hands-on, guided coding exercises",
      "icon": "checked_circle.svg"
    },
    {
      "title": "Assessments & Challenges",
      "content": "Quizes and challenges to test comprehension",
      "icon": "checked_circle.svg"
    },
    {
      "title": "Project Workshops",
      "content": "Advisory sessions for working on assigned projects",
      "icon": "checked_circle.svg"
    },
    {
      "title": "Assigned Homework",
      "content": "Homework exercises from Freecodecamp.org",
      "icon": "checked_circle.svg"
    }
  ]