const siteConfig = {
  siteName: "Daniel Gonzalez | Moto + Tech Blog",
  imageGuidelines: {
    standard: "Use 1600x900 images for cover photos (16:9). Minimum 1200x675."
  }
};

const tripPosts = [
  {
    id: "big-sur-weekend",
    type: "trip",
    featured: true,
    title: "Weekend Ride to Big Sur",
    date: "2026-05-10",
    location: "California Coast",
    summary: "A scenic coastal weekend ride with ocean views, cool morning weather, and a few unforgettable stops.",
    cover: "assets/trips/big-sur-cover.jpg",
    tags: ["Scenic Route", "Coastal Ride", "Weekend Trip"],
    details: {
      bike: "Your Motorcycle Model",
      distance: "312 miles",
      duration: "2 days"
    },
    media: [
      { type: "image", src: "assets/trips/big-sur-cover.jpg", alt: "Motorcycle parked near a scenic coastal overlook" }
    ],
    sections: [
      {
        heading: "Route Overview",
        text: "This trip focused on a clean coastal route with scenic stops, manageable mileage, and enough flexibility to take photos along the way."
      },
      {
        heading: "Ride Notes",
        text: "Morning temperatures were cool and visibility was excellent. The road conditions were mostly great, but a few sections required slower riding and extra attention."
      },
      {
        heading: "What I Learned",
        text: "For longer scenic rides, lightweight packing and quick-access camera gear make a huge difference. Planning fuel stops in advance also helps keep the day smooth."
      }
    ]
  },
  {
    id: "desert-run",
    type: "trip",
    featured: true,
    title: "Early Morning Desert Run",
    date: "2026-04-02",
    location: "Southern California",
    summary: "An early start, clear skies, open roads, and a test of endurance riding in dry conditions.",
    cover: "assets/trips/desert-run-cover.jpg",
    tags: ["Sunrise Ride", "Desert", "Day Trip"],
    details: {
      bike: "Your Motorcycle Model",
      distance: "220 miles",
      duration: "1 day"
    },
    media: [
      { type: "image", src: "assets/trips/desert-run-cover.jpg", alt: "Motorcycle in a desert highway landscape" }
    ],
    sections: [
      {
        heading: "Why This Ride",
        text: "This was a shorter but focused ride meant to test comfort, pacing, and gear choices for longer solo trips."
      },
      {
        heading: "Conditions",
        text: "Cool early temperatures gave way to dry midday heat. Keeping hydrated and layering correctly made the ride much more comfortable."
      },
      {
        heading: "Takeaways",
        text: "The route worked well for a quick reset ride. I’d bring more water, use lighter gloves for later hours, and plan one additional scenic stop next time."
      }
    ]
  }
];

const techPosts = [
  {
    id: "homelab-dashboard",
    type: "project",
    featured: true,
    title: "Building a Home Lab Dashboard",
    date: "2026-05-25",
    location: "At Home",
    summary: "A personal dashboard to organize systems, services, and quick links across my home lab environment.",
    cover: "assets/projects/homelab-dashboard.jpg",
    tags: ["Home Lab", "Dashboard", "Documentation"],
    details: {
      stack: "HTML, CSS, JavaScript",
      difficulty: "Intermediate",
      status: "In Progress"
    },
    media: [
      { type: "image", src: "assets/projects/homelab-dashboard.jpg", alt: "Screenshot of a personal home lab dashboard" }
    ],
    sections: [
      {
        heading: "Project Goal",
        text: "The goal was to create a single view for services, devices, and bookmarks so I could navigate my home environment more efficiently."
      },
      {
        heading: "Approach",
        text: "I started with a simple front-end structure, grouped systems by category, and focused on clarity over complexity."
      },
      {
        heading: "Lessons Learned",
        text: "Even a small internal tool benefits from a clean UI, naming conventions, and a visible status structure."
      }
    ]
  },
  {
    id: "smart-garage-monitor",
    type: "project",
    featured: true,
    title: "Smart Garage Status Monitor",
    date: "2026-03-18",
    location: "At Home",
    summary: "A simple project to monitor garage open/close status and create a better at-a-glance check from home.",
    cover: "assets/projects/smart-garage.jpg",
    tags: ["Automation", "DIY", "Monitoring"],
    details: {
      stack: "JavaScript, Sensors, Home Automation",
      difficulty: "Intermediate",
      status: "Completed"
    },
    media: [
      { type: "image", src: "assets/projects/smart-garage.jpg", alt: "Smart garage project with sensor and monitoring interface" }
    ],
    sections: [
      {
        heading: "Problem",
        text: "I wanted a simple way to confirm status without guessing or manually checking the door."
      },
      {
        heading: "Build Process",
        text: "The build focused on clear status feedback, simple wiring, and a readable dashboard view."
      },
      {
        heading: "Result",
        text: "The final setup made it easier to verify status quickly and gave me a useful small-scale automation project to document."
      }
    ]
  }
];