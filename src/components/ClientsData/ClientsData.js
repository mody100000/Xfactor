import event1 from "@assets/user.webp";
import event2 from "@assets/RegisterCoach (1).jpg";
import event3 from "@assets/review2.jpeg";
import event4 from "@assets/review1.jpeg";

export const clientData = [
  {
    id: 1,
    coachName: "Emily",
    sessionType: "Yoga",
    sessionLocation: "Studio",
    img: event1,
    description:
      "Experienced yoga instructor specializing in mindfulness and stress reduction techniques. Offers personalized sessions for all skill levels.",
    time: "10:00AM",
    upcomingSessions: [
      {
        id: 101,
        img: event1,
        description:
          "Experienced yoga instructor specializing in mindfulness and stress reduction techniques. Offers personalized sessions for all skill levels.",
        time: "10:00AM",
        date: new Date(2024, 11, 20),
      },
    ],
    completedSessions: [
      {
        id: 102,
        coachName: "Mark",
        sessionType: "Tennis",
        sessionLocation: "Online",
        img: event2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.",
        time: "1:30PM",
        date: new Date(2024, 10, 5),
      },
    ],
  },
  {
    id: 2,
    coachName: "Mark",
    sessionType: "Tennis",
    sessionLocation: "Online",
    img: event3,
    description:
      "Professional tennis coach with years of competitive experience. Provides technique improvement and strategic training.",
    time: "1:30PM",
    upcomingSessions: [
      {
        id: 201,
        img: event1,
        description:
          "Experienced yoga instructor specializing in mindfulness and stress reduction techniques. Offers personalized sessions for all skill levels.",
        time: "10:00AM",
        date: new Date(2024, 11, 15),
      },
    ],
    completedSessions: [
      {
        id: 202,
        coachName: "Mark",
        sessionType: "Tennis",
        sessionLocation: "Online",
        img: event2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.",
        time: "1:30PM",
        date: new Date(2024, 10, 5),
      },
    ],
  },
  {
    id: 3,
    coachName: "Jhin",
    sessionType: "Football",
    sessionLocation: "Online",
    img: event4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ipsam commodi odit molestiae debitis, maiores tempore in! Dolorum, fugit obcaecati! Voluptates provident eius ad laudantium exercitationem, vel corrupti aliquid quo?",
    time: "8:30PM",
    date: new Date(2024, 11, 28),
    upcomingSessions: [
      {
        id: 301,
        img: event1,
        description:
          "Experienced yoga instructor specializing in mindfulness and stress reduction techniques. Offers personalized sessions for all skill levels.",
        time: "10:00AM",
        date: new Date(2024, 11, 15),
      },
    ],
    completedSessions: [
      {
        id: 302,
        coachName: "Mark",
        sessionType: "Tennis",
        sessionLocation: "Online",
        img: event2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.",
        time: "1:30PM",
        date: new Date(2024, 10, 5),
      },
    ],
  },
  {
    id: 4,
    coachName: "Taric",
    sessionType: "Swimming",
    sessionLocation: "Campus",
    img: event3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in error rem eveniet, quisquam et eaque. Rem ducimus, quo accusantium possimus veritatis, quos dolores reiciendis et dignissimos fugiat cupiditate enim!",
    time: "5:30PM",
    date: new Date(2024, 11, 5),
    upcomingSessions: [
      {
        id: 401,
        img: event1,
        description:
          "Experienced yoga instructor specializing in mindfulness and stress reduction techniques. Offers personalized sessions for all skill levels.",
        time: "10:00AM",
        date: new Date(2024, 11, 15),
      },
    ],
    completedSessions: [
      {
        id: 402,
        coachName: "Mark",
        sessionType: "Tennis",
        sessionLocation: "Online",
        img: event2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.",
        time: "1:30PM",
        date: new Date(2024, 10, 5),
      },
    ],
  },
  {
    id: 5,
    coachName: "Leo",
    sessionType: "Football",
    sessionLocation: "On-site",
    img: event2,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates blanditiis velit distinctio iusto nulla eos quidem quos cupiditate dolorum vel reprehenderit praesentium architecto libero excepturi esse molestiae quas, temporibus nam?",
    time: "11:30AM",
    date: new Date(2024, 11, 21),
    upcomingSessions: [
      {
        id: 501,
        img: event1,
        description:
          "Experienced yoga instructor specializing in mindfulness and stress reduction techniques. Offers personalized sessions for all skill levels.",
        time: "10:00AM",
        date: new Date(2024, 11, 15),
      },
    ],
    completedSessions: [
      {
        id: 502,
        coachName: "Mark",
        sessionType: "Tennis",
        sessionLocation: "Online",
        img: event2,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore error eveniet voluptates maiores quasi ab quam accusantium expedita, et in eligendi officia vitae aut libero consequuntur accusamus voluptas numquam.",
        time: "1:30PM",
        date: new Date(2024, 10, 5),
      },
    ],
  },
];
