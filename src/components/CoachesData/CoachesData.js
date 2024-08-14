import img1 from "@assets/girl.jpg";
import img2 from "@assets/Strength Coach.jpg";
import img3 from "@assets/legGroup.webp";
import img4 from "@assets/user.webp";
export const sampleCoaches = [
  {
    id: 0,
    name: "John Doe",
    category: "Fitness Coach",
    categories: ["Football", "Fitness", "Swimming", "Basketball"],
    rating: 3,
    reviews: 90,
    badge: "Gold",
    trainingOffer: true,
    verified: true,
    summary:
      "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
    location: "LA",
    distance: 6.5,
    salary: 22,
    image: img1,
    recommended: true,
    trainingType: "In-Person",
    gender: "Male",
    packages: [
      {
        id: 1,
        packageType: "Light",
        trainingType: "in-person",
        recommended: false,
        title: "In-Person Training for up to 4 athletes",
        description: `3 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 105,
        sessionSalary: "3 sessions ($35/ea)",
      },
      {
        id: 2,
        packageType: "Standard",
        trainingType: "in-person",
        recommended: true,
        title: "In-Person Training for up to 10 athletes",
        description: `6 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 175,
        sessionSalary: "6 sessions ($35/ea)",
      },
      {
        id: 3,
        packageType: "Pro",
        trainingType: "online",
        recommended: false,
        title: "Online Training for a single athlete",
        description: `10 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 250,
        sessionSalary: "10 sessions ($35/ea)",
      },
    ],
    credentials: [
      {
        id: 1,
        college: ["x EssexxCounty", "Community College (NJ)"],
        experience: "30 years",
        accreditations: [
          "x EssexxCounty Qualified",
          "Private Coach",
          "Passed Coach Course",
        ],
      },
    ],
    services: [
      {
        ages: ["Kids", "Teenagers"],
        positions: [
          "Offensive Line",
          "Defensive Back",
          "Kicker",
          "Quarterback",
          "Running Back",
          "Tight End",
          "Wide Receiver",
          "Defensive Line",
          "Linebacker",
        ],
        specialties: [
          "Blocking",
          "Catching",
          "Jamming",
          "Kicking",
          "Special Teams",
          "Tackling",
          "Throwing",
          "Pass Defense",
          "Footwork",
          "Route Running",
          "Hand Placement",
        ],
      },
    ],
  },
  {
    id: 1,
    name: "leo",
    category: "Fitness Coach",
    categories: ["Football", "Fitness", "Swimming", "Basketball"],
    rating: 4,
    reviews: 100,
    badge: "silver",
    trainingOffer: true,
    verified: true,
    summary:
      "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
    location: "LA",
    distance: 5.5,
    verified: true,
    salary: 80,
    image: img2,
    recommended: false,
    trainingType: "Online",
    gender: "Male",
    packages: [
      {
        id: 1,
        packageType: "Light",
        trainingType: "in-person",
        recommended: false,
        title: "In-Person Training for up to 4 athletes",
        description: `3 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 105,
        sessionSalary: "3 sessions ($35/ea)",
      },
      {
        id: 2,
        packageType: "Standard",
        trainingType: "in-person",
        recommended: true,
        title: "In-Person Training for up to 10 athletes",
        description: `6 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 175,
        sessionSalary: "6 sessions ($35/ea)",
      },
      {
        id: 3,
        packageType: "Pro",
        trainingType: "online",
        recommended: false,
        title: "Online Training for a single athlete",
        description: `10 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 250,
        sessionSalary: "10 sessions ($35/ea)",
      },
    ],
    credentials: [
      {
        id: 2,
        college: ["x EssexxCounty", "Community College (NJ)"],
        experience: "30 years",
        accreditations: [
          "x EssexxCounty Qualified",
          "Private Coach",
          "Passed Coach Course",
        ],
      },
    ],
    services: [
      {
        ages: ["Kids", "Teenagers"],
        positions: [
          "Offensive Line",
          "Defensive Back",
          "Kicker",
          "Quarterback",
          "Running Back",
          "Tight End",
          "Wide Receiver",
          "Defensive Line",
          "Linebacker",
        ],
        specialties: [
          "Blocking",
          "Catching",
          "Jamming",
          "Kicking",
          "Special Teams",
          "Tackling",
          "Throwing",
          "Pass Defense",
          "Footwork",
          "Route Running",
          "Hand Placement",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "leo",
    category: "Fitness Coach",
    categories: ["Football", "Fitness", "Swimming", "Basketball"],
    rating: 4,
    reviews: 100,
    badge: "silver",
    trainingOffer: true,
    summary:
      "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
    location: "LA",
    distance: 5.5,
    verified: true,
    salary: 110,
    image: img4,
    recommended: false,
    trainingType: "Online",
    gender: "Male",
    packages: [
      {
        id: 1,
        packageType: "Light",
        trainingType: "in-person",
        title: "In-Person Training for up to 4 athletes",
        description: `3 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 105,
        sessionSalary: "3 sessions ($35/ea)",
      },
      {
        id: 2,
        packageType: "Standard",
        trainingType: "in-person",
        title: "In-Person Training for up to 10 athletes",
        description: `6 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 175,
        sessionSalary: "6 sessions ($35/ck, Quaea)",
      },
      {
        id: 3,
        packageType: "Pro",
        trainingType: "online",
        title: "Online Training for a single athlete",
        description: `10 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 250,
        sessionSalary: "10 sessions ($35/ea)",
      },
    ],
    credentials: [
      {
        id: 3,
        college: ["x EssexxCounty", "Community College (NJ)"],
        experience: "30 years",
        accreditations: [
          "x EssexxCounty Qualified",
          "Private Coach",
          "Passed Coach Course",
        ],
      },
    ],
    services: [
      {
        ages: ["Kids", "Teenagers"],
        positions: [
          "Offensive Line",
          "Defensive Back",
          "Kicker",
          "Quarterback",
          "Running Back",
          "Tight End",
          "Wide Receiver",
          "Defensive Line",
          "Linebacker",
        ],
        specialties: [
          "Blocking",
          "Catching",
          "Jamming",
          "Kicking",
          "Special Teams",
          "Tackling",
          "Throwing",
          "Pass Defense",
          "Footwork",
          "Route Running",
          "Hand Placement",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "leo",
    category: "Fitness Coach",
    categories: ["Football", "Fitness", "Swimming", "Basketball"],
    rating: 4,
    reviews: 100,
    badge: "silver",
    summary:
      "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
    location: "LA",
    distance: 5.5,
    verified: true,
    salary: 60,
    image: img2,
    recommended: false,
    trainingType: "Online",
    gender: "Male",
    packages: [
      {
        id: 1,
        packageType: "Light",
        trainingType: "in-person",
        recommended: false,
        title: "In-Person Training for up to 4 athletes",
        description: `3 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 105,
        sessionSalary: "3 sessions ($35/ea)",
      },
      {
        id: 2,
        packageType: "Standard",
        trainingType: "in-person",
        recommended: true,
        title: "In-Person Training for up to 10 athletes",
        description: `6 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 175,
        sessionSalary: "6 sessions ($35/ea)",
      },
      {
        id: 3,
        packageType: "Pro",
        trainingType: "online",
        recommended: false,
        title: "Online Training for a single athlete",
        description: `10 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 250,
        sessionSalary: "10 sessions ($35/ea)",
      },
    ],
    credentials: [
      {
        id: 4,
        college: ["x EssexxCounty", "Community College (NJ)"],
        experience: "30 years",
        accreditations: [
          "x EssexxCounty Qualified",
          "Private Coach",
          "Passed Coach Course",
        ],
      },
    ],
    services: [
      {
        ages: ["Kids", "Teenagers"],
        positions: [
          "Offensive Line",
          "Defensive Back",
          "Kicker",
          "Quarterback",
          "Running Back",
          "Tight End",
          "Wide Receiver",
          "Defensive Line",
          "Linebacker",
        ],
        specialties: [
          "Blocking",
          "Catching",
          "Jamming",
          "Kicking",
          "Special Teams",
          "Tackling",
          "Throwing",
          "Pass Defense",
          "Footwork",
          "Route Running",
          "Hand Placement",
        ],
      },
    ],
  },
  {
    id: 4,
    name: "leo",
    category: "Fitness Coach",
    categories: ["Football", "Fitness", "Swimming", "Basketball"],
    rating: 4,
    reviews: 100,
    badge: "Gold",
    summary:
      "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
    location: "LA",
    distance: 5.5,
    verified: true,
    salary: 50,
    image: img3,
    recommended: false,
    trainingType: "In-Person",
    gender: "Female",
    packages: [
      {
        id: 1,
        packageType: "Light",
        trainingType: "in-person",
        recommended: false,
        title: "In-Person Training for up to 4 athletes",
        description: `3 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 105,
        sessionSalary: "3 sessions ($35/ea)",
      },
      {
        id: 2,
        packageType: "Standard",
        trainingType: "in-person",
        recommended: true,
        title: "In-Person Training for up to 10 athletes",
        description: `6 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 175,
        sessionSalary: "6 sessions ($35/ea)",
      },
      {
        id: 3,
        packageType: "Pro",
        trainingType: "online",
        recommended: false,
        title: "Online Training for a single athlete",
        description: `10 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 250,
        sessionSalary: "10 sessions ($35/ea)",
      },
    ],
    credentials: [
      {
        id: 5,
        college: ["x EssexxCounty", "Community College (NJ)"],
        experience: "30 years",
        accreditations: [
          "x EssexxCounty Qualified",
          "Private Coach",
          "Passed Coach Course",
        ],
      },
    ],
    services: [
      {
        ages: ["Kids", "Teenagers"],
        positions: [
          "Offensive Line",
          "Defensive Back",
          "Kicker",
          "Quarterback",
          "Running Back",
          "Tight End",
          "Wide Receiver",
          "Defensive Line",
          "Linebacker",
        ],
        specialties: [
          "Blocking",
          "Catching",
          "Jamming",
          "Kicking",
          "Special Teams",
          "Tackling",
          "Throwing",
          "Pass Defense",
          "Footwork",
          "Route Running",
          "Hand Placement",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "leo",
    category: "Fitness Coach",
    categories: ["Football", "Fitness", "Swimming", "Basketball"],
    rating: 4,
    reviews: 100,
    badge: "bronze",
    summary:
      "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
    location: "LA",
    distance: 5.5,
    verified: true,
    salary: 50,
    image: img3,
    recommended: true,
    trainingType: "Online",
    gender: "Male",
    packages: [
      {
        id: 1,
        packageType: "Light",
        trainingType: "in-person",
        recommended: false,
        title: "In-Person Training for up to 4 athletes",
        description: `3 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 105,
        sessionSalary: "3 sessions ($35/ea)",
      },
      {
        id: 2,
        packageType: "Standard",
        trainingType: "in-person",
        recommended: true,
        title: "In-Person Training for up to 10 athletes",
        description: `6 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 175,
        sessionSalary: "6 sessions ($35/ea)",
      },
      {
        id: 3,
        packageType: "Pro",
        trainingType: "online",
        recommended: false,
        title: "Online Training for a single athlete",
        description: `10 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 250,
        sessionSalary: "10 sessions ($35/ea)",
      },
    ],
    credentials: [
      {
        id: 6,
        college: ["x EssexxCounty", "Community College (NJ)"],
        experience: "30 years",
        accreditations: [
          "x EssexxCounty Qualified",
          "Private Coach",
          "Passed Coach Course",
        ],
      },
    ],
    services: [
      {
        ages: ["Kids", "Teenagers"],
        positions: [
          "Offensive Line",
          "Defensive Back",
          "Kicker",
          "Quarterback",
          "Running Back",
          "Tight End",
          "Wide Receiver",
          "Defensive Line",
          "Linebacker",
        ],
        specialties: [
          "Blocking",
          "Catching",
          "Jamming",
          "Kicking",
          "Special Teams",
          "Tackling",
          "Throwing",
          "Pass Defense",
          "Footwork",
          "Route Running",
          "Hand Placement",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "leo",
    category: "Fitness Coach",
    categories: ["Football", "Fitness", "Swimming", "Basketball"],
    rating: 4,
    reviews: 100,
    badge: "bronze",
    summary:
      "Professional trainer, experience with athletes ranging from pro to youth. As a former pro athlete, I understand what it takes to reach your fitness goals. Sports Science degree",
    location: "LA",
    distance: 5.5,
    salary: 50,
    image: img4,
    recommended: true,
    trainingType: "In-Person",
    gender: "Female",
    packages: [
      {
        id: 1,
        packageType: "Light",
        trainingType: "in-person",
        recommended: false,
        title: "In-Person Training for up to 4 athletes",
        description: `3 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 105,
        sessionSalary: "3 sessions ($35/ea)",
      },
      {
        id: 2,
        packageType: "Standard",
        trainingType: "in-person",
        recommended: true,
        title: "In-Person Training for up to 10 athletes",
        description: `6 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 175,
        sessionSalary: "6 sessions ($35/ea)",
      },
      {
        id: 3,
        packageType: "Pro",
        trainingType: "online",
        recommended: false,
        title: "Online Training for a single athlete",
        description: `10 session package with Coach John Doe. 60 minute session length`,
        sessionLength: "1 hour",
        salary: 250,
        sessionSalary: "10 sessions ($35/ea)",
      },
    ],
    credentials: [
      {
        id: 7,
        college: ["x EssexxCounty", "Community College (NJ)"],
        experience: "30 years",
        accreditations: [
          "x EssexxCounty Qualified",
          "Private Coach",
          "Passed Coach Course",
        ],
      },
    ],
    services: [
      {
        ages: ["Kids", "Teenagers"],
        positions: [
          "Offensive Line",
          "Defensive Back",
          "Kicker",
          "Quarterback",
          "Running Back",
          "Tight End",
          "Wide Receiver",
          "Defensive Line",
          "Linebacker",
        ],
        specialties: [
          "Blocking",
          "Catching",
          "Jamming",
          "Kicking",
          "Special Teams",
          "Tackling",
          "Throwing",
          "Pass Defense",
          "Footwork",
          "Route Running",
          "Hand Placement",
        ],
      },
    ],
  },
];
