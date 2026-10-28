const siteConfig = {
  siteName: "Daniel Gonzalez | Moto + Tech Blog",
  imageGuidelines: {
    standard: "Use 1600x900 images for cover photos (16:9). Minimum 1200x675."
  }
};

const tripPosts = [
  {
  id: "bsm-group-ride-hollywood-oxnard",
  type: "trip",
  featured: true,
  title: "A Perfect Weekend: Bikes, Brews, and BBQ",
  date: "2026-01-12",
  location: "Hollywood to Oxnard, CA",
  summary: "A 100+ bike group ride with Beach Side Moto from Hollywood through Beverly Hills and Glendale, down PCH, and capped off with BBQ in Oxnard.",
  cover: "assets/trips/bsm-group-ride-hollywood-oxnard-cover.jpg",
  coverAlt: "Large group of motorcycles gathered in a parking lot before the Beach Side Moto group ride",
  tags: ["Group Ride", "PCH", "Brewery Stop"],
  details: {
    bike: "Your Motorcycle Model",
    distance: "Add total mileage",
    duration: "1 day"
  },
  media: [
    { type: "image", src: "assets/trips/bsm-group-ride-hollywood-oxnard-cover.jpg", alt: "Large group of motorcycles gathered for the Beach Side Moto ride" }
  ],
  sections: [
    {
      heading: "Kickstands Up in Hollywood",
      text: "It all started at Thunder Road Cafe in Hollywood with a 10:30AM KSU. I joined the Beach Side Moto Group's monthly ride with two good friends, and my girlfriend riding 2-up. The turnout was massive — well over 100 bikes — and the energy in the parking lot before we rolled out was electric."
    },
    {
      heading: "Beverly Hills to Glendale",
      text: "Once the pack got moving, we thundered through Beverly Hills on our way to Glendale for a stop at Brew Yard brewery. Watching that many bikes roll together was a reminder of just how strong the riding community is. We hung out, grabbed tacos, and swapped stories with other riders before saddling back up."
    },
    {
      heading: "The Scenic Way Home",
      text: "For the ride back we skipped the freeway and took Las Virgenes Road down to PCH. Cruising the coastline with the ocean breeze — windy as it was — was the perfect way to decompress after the energy of the big group ride."
    },
    {
      heading: "BBQ in Oxnard",
      text: "We closed out the day at It's in the Sauce BBQ in Oxnard, a first-time stop that did not disappoint. Days like this aren't really about the miles — they're about the community, the friends along for the ride, and the food waiting at the end of it."
    }
  ]
}
];

const techPosts = [
  {
    "id": "building-my-personal-website-2026",
    "type": "project",
    "featured": true,
    "title": "Building a Website to Share My Work and My Story",
    "date": "2026-01-12",
    "location": "At Home",
    "summary": "I finally started building my own corner of the internet: a place to share my technology projects, keep learning, and document life on two wheels.",
    "cover": "assets/projects/building-my-personal-website-cover.jpg",
    "tags": [
      "personal-website",
      "learning-by-doing",
      "hostinger",
      "tech-projects",
      "motorcycle-blog"
    ],
    "details": {
      "stack": "HTML, CSS, JavaScript, Bootstrap",
      "difficulty": "Beginner",
      "status": "In Progress"
    },
    "media": [],
    "sections": [
      {
        "heading": "Project Goal",
        "text": "For a long time, I wanted to build a website and publish it online. I was curious about the process, but I kept putting it off. I wanted a place that connected both sides of my life: my journey in technology and my motorcycle rides. Creating this site gave me a reason to finally get started."
      },
      {
        "heading": "Approach",
        "text": "I organized the site around two main areas. Home Tech Projects gives me a place to document current and past builds, share what I am learning, and keep my skills sharp outside my work in tech. Motorcycle Trips is where I can write about local food stops, longer rides, and the views along the way. The site uses HTML, CSS, JavaScript, and Bootstrap, with Hostinger providing the hosting. Keeping the two sections consistent helps bring those different stories together."
      },
      {
        "heading": "Lessons Learned",
        "text": "Getting the website online is only the beginning. I want to keep adding stories about my work, personal projects, and motorcycle adventures, rather than leave it as a finished page that never changes. Documenting the process gives me a way to reflect on what I learn and share it with anyone who finds it useful. My next challenge is making regular updates part of the routine."
      }
    ]
  }
];
