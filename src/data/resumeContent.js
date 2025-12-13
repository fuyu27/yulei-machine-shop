export const LABELS = {
  ix_Bedframe: "Ideas I'm Sleeping On",
  ix_Humanoid: "About Me",
  ix_Macbook: "Resume",
  ix_MbotAssembled: "Projects",
  ix_AprilTagCube: "Planning & Perception",
  ix_Dremmel: "FIRST Robotics",
  ix_BostonDynamicsDog: "Languages + Core Competencies",
  ix_Drawers: "Dev Skills & Technical Tools",
  // ix_Flowers: "Skills & Tools",
};

export const CONTENT = {
  ix_Humanoid: {
    title: "Hej, I'm Yulei Fu!",
    sections: [
      {
        heading: "About Me",
        intro: "I'm currently a junior at the University of Michigan studying Robotics Engineering and Computer Science, graduating in May 2027.",
        bullets: [
          "I'm interested in novel topics (robotics), and everything that comes with the territory (embedded software, some mechanical engineering, and mostly perception)",
          "I enjoy indulging in challenging problems, whether it be stalking research papers, tinkering with \"jank\" (favorite FRC term) robots, or building somewhat relevant software",
          "Some of my favorite projects remain NDA or private, but I'm always excited to share what I can about my work in robotics and embedded systems. I hate to admit it, but I apparently still do enjoy CAD in my retirment as a design team member on my FRC team, so much so that I made this model in Fusion360 to avoid using the more complex parts of Blender.",
          "Outside of robotics, I play electric guitar (decently, I like to believe) and would like to pick up drums soon. I love painting and enjoy using my talents for goofy cards for friends"
        ]
      },
      {
        heading: "Contact",
        bullets: [
          "Website: yulei-machine-shop.com",
          "Email: yuleifu@umich.edu",
          "LinkedIn: linkedin.com/in/yulei-fu",
          "Phone: 734-239-4771"
        ]
      }
    ],
    chips: [
      "Robotics",
      "Embedded Systems",
      "Software Engineering",
      "Team Leadership",
      "Problem Solving"
    ]
  },

  ix_Macbook: {
    title: "Resume",
    isResume: true,
    resumePath: "/Fu_Yulei_Resume_12:13.pdf",
    sections: [
      {
        heading: "View My Resume",
        bullets: [
          "Click the button below to view or download my resume",
          "Updated: December 2024"
        ]
      }
    ],
    chips: [
      "Resume",
      "PDF",
      "Download"
    ]
  },

  ix_MbotAssembled: {
    title: "Projects",
    sections: [
      {
        heading: "Amazon Robotics - Embedded Software Engineer Co-Op",
        subheading: "Jan 2025 - June 2025 | Westborough, MA",
        bullets: [
          "Designed and owned a C++ logging and system log capture pipeline for a safety-certified controller, cutting issue-reproduction time by 85% (6 hrs to 0.75 hrs)",
          "Developed a robust multithreaded D-Bus service for embedded Linux controllers, aggregating logs from multiple subsystems with safe batching and low-latency IPC",
          "Deployed remote diagnostics stack with Wi-Fi health API, reducing field-troubleshooting from 2+ hours to 0.03 hours",
          "Shipped a telemetry pipeline delivering 10K+ messages/day to AWS over MQTT, cutting data-loss by 94%"
        ]
      },
      {
        heading: "Stirling Research Group - Research Intern",
        subheading: "Nov 2024 - Jan 2025 | Ann Arbor, MI",
        bullets: [
          "Implemented the Keytel metabolic-rate model in JavaScript for 4+ hour EVA simulations with real-time BTU tracking",
          "Architected data parsing from wearable heart-rate sensors at 20-second intervals with 100% uptime",
          "Designed participant interface and experimenter dashboard, improving post-session analysis efficiency by 40%",
          "Connected nRF52840 based heart-rate wearable to testbench via Bluetooth"
        ]
      },
      {
        heading: "MBot Planning and Perception (ROS2, C++)",
        bullets: [
          "Implemented SLAM-based localization and mapping on an MBot using ROS2 and SLAM Toolbox, achieving sub-10 cm pose accuracy",
          "Built clearance-aware A* planner with obstacle-distance grid (8-connected flood-fill), reducing waypoints by 60% via line-of-sight pruning",
          "Integrated LiDAR, odometry, and camera data for full-robot autonomy with AprilTag detection and wall-color classification"
        ]
      },
      {
        heading: "Interactive 3D Portfolio Website (React, Three.js)",
        subheading: "Dec 2024 | Personal Project",
        bullets: [
          "Built an immersive 3D portfolio using React and Three.js, transforming traditional resume into an explorable virtual machine shop",
          "Implemented object-based navigation system with raycasting for interactive resume sections, hover effects, and smooth animations",
          "Integrated custom 3D models created in Blender (305MB GLB file) with Git LFS for version control",
          "Designed responsive UI components including contact forms, animated social buttons, and tutorial overlays for optimal UX"
        ]
      }
    ],
    chips: [
      "C++",
      "Python",
      "ROS2",
      "SLAM",
      "AWS",
      "D-Bus",
      "Embedded Linux",
      "MQTT",
      "Computer Vision",
      "React",
      "Three.js",
      "Blender"
    ]
  },

  ix_Bedframe: {
    title: "Ideas I'm Sleeping On",
    sections: [
      {
        heading: "Future Interests",
        bullets: [
          "Advanced robotic manipulation and control systems for complex tasks",
          "Real-time embedded systems optimization and safety-critical software",
          "Multi-robot coordination and swarm robotics",
          "Autonomous navigation in unstructured environments",
          "Human-robot interaction and collaborative robotics"
        ]
      },
      {
        heading: "Technologies I Want to Explore",
        bullets: [
          "Advanced control theory and model predictive control",
          "Deep learning for robotics perception and planning",
          "Hardware acceleration (FPGAs, custom ASICs) for real-time processing",
          "Formal verification methods for safety-critical systems",
          "Novel sensor fusion techniques for robust state estimation"
        ]
      }
    ],
    chips: [
      "Future Goals",
      "Research",
      "Innovation",
      "Continuous Learning",
      "Robotics"
    ]
  },

  ix_AprilTagCube: {
    title: "SLAM & Perception Projects",
    sections: [
      {
        heading: "Occupancy Grid Mapping",
        bullets: [
          "Implemented log-odds occupancy grid mapping with arc-based motion model to eliminate rotational drift",
          "Achieved stable rectangular map generation with consistent wall thickness and minimal distortion",
          "Tuned hit/miss odds parameters (kHitOdds = 0.85, kMissOdds = -0.4) for optimal confidence accumulation",
          "Validated mapping accuracy using square_move and square_still2 rosbags with sub-pixel reprojection error"
        ]
      },
      {
        heading: "Particle Filter Localization & Action Model",
        bullets: [
          "Developed particle filter with custom sensor model incorporating refined range validation and sharper likelihood decay",
          "Implemented motion propagation using odometry-based action model with tuned noise parameters (k₁, k₂)",
          "Achieved real-time performance with 400-500 particles maintaining 6 Hz update rate on Raspberry Pi",
          "Integrated closed-loop correction reducing pose drift from open-loop divergence to stable localization"
        ]
      },
      {
        heading: "Vision Challenge - Camera Calibration & AprilTag Detection",
        bullets: [
          "Performed camera intrinsic calibration achieving 0.46 pixel average reprojection error across wide spatial coverage",
          "Implemented robust AprilTag detection pipeline with pose estimation for relative localization",
          "Developed color detection system using RGB channel analysis with adaptive thresholding for maze navigation",
          "Integrated multi-frame filtering to handle detection outliers and improve navigation stability"
        ]
      },
      {
        heading: "A* Planning & Frontier Exploration",
        bullets: [
          "Built obstacle distance grid using 8-connected BFS for safe path planning with wall clearance penalties",
          "Implemented A* planner with Euclidean heuristic achieving <0.01s planning time for maze navigation",
          "Developed frontier detection using adjacency analysis to identify exploration boundaries between known/unknown space",
          "Created 4-state autonomous exploration system (IDLE → EXPLORING → RETURNING → ESCAPING) with dynamic goal replanning"
        ]
      }
    ],
    photos: [
      { src: "/images/slam_and_perception/map.png", caption: "Occupancy Grid Map" },
      { src: "/images/slam_and_perception/particle_detection.png", caption: "Particle Filter Detection" },
      { src: "/images/slam_and_perception/SLAM_pose_particle_particle_filter.png", caption: "SLAM Pose & Particles" },
      { src: "/images/slam_and_perception/checkerboard_detection.png", caption: "Camera Calibration" },
      { src: "/images/slam_and_perception/frontiers.png", caption: "Frontier Detection" },
      { src: "/images/slam_and_perception/perception_and_mapping_casualty.png", caption: "Perception & Mapping Blooper" }
    ],
    chips: [
      "SLAM",
      "Particle Filter",
      "A* Planning",
      "Computer Vision",
      "ROS",
      "Occupancy Grid",
      "AprilTag",
      "Frontier Exploration",
      "Camera Calibration",
      "Autonomous Navigation"
    ]
  },

  ix_Dremmel: {
    title: "FIRST Robotics Experience",
    sections: [
      {
        heading: "Team 3322 - Team Captain",
        subheading: "May 2021 - Jun 2023",
        bullets: [
          "Led a team of 57 students in developing competition robots from conceptualization to manufacturing",
          "Managed the complete robot lifecycle, dividing team into specialized sub-teams with different focal points",
          "Established Notion for project management, creating 50+ live tool domains for future leaders",
          "Led team to compete at FRC World Championships as one of the top 2% teams in Michigan"
        ]
      },
      {
        heading: "Design Team Lead",
        bullets: [
          "Spearheaded robot design using Autodesk Fusion and SolidWorks, manufacturing 30+ robot parts",
          "Coordinated mechanical, electrical, and software integration for competition-ready systems",
          "Implemented rigorous timelines and project management to meet strict 6-week build deadlines",
          "Mentored team members in CAD, fabrication techniques, and systems thinking"
        ]
      },
      {
        heading: "Technical Skills Developed",
        bullets: [
          "Rapid prototyping and iterative design under pressure",
          "Cross-functional team leadership and coordination",
          "Mechanical design, systems integration, and manufacturing",
          "Foundation in problem-solving and creative engineering"
        ]
      }
    ],
    photos: [
      { src: "/images/FRC3322/captains.jpeg", caption: "Team Captains" },
      { src: "/images/FRC3322/comp_ready.jpeg", caption: "Competition Ready" },
      { src: "/images/FRC3322/2021_bot.jpeg", caption: "2021 Robot" },
      { src: "/images/FRC3322/build.jpeg", caption: "Build Session" },
      { src: "/images/FRC3322/build_2.jpeg", caption: "Build Session 2" },
      { src: "/images/FRC3322/testing.png", caption: "Robot Testing" },
      { src: "/images/FRC3322/pit_ready.jpeg", caption: "Pit Ready" },
      { src: "/images/FRC3322/pit_inspection_passed.jpeg", caption: "Inspection Passed" },
      { src: "/images/FRC3322/pit_activities.jpg", caption: "Pit Activities" },
      { src: "/images/FRC3322/wines_demo.jpeg", caption: "Wine's Demo" },
      { src: "/images/FRC3322/prototying_hs_rob.JPG", caption: "Prototyping" },
      { src: "/images/FRC3322/testing_prototype.jpg", caption: "Prototype Testing" }
    ],
    chips: [
      "Team Captain",
      "Leadership",
      "CAD",
      "Mechanical Design",
      "Project Management",
      "Manufacturing",
      "Mentorship"
    ]
  },

  ix_Drawers: {
    title: "Dev Skills & Technical Tools",
    sections: [
      {
        heading: "Programming Languages",
        bullets: [
          "C / C++ - Embedded systems, robotics, performance-critical applications",
          "Python - Data analysis, scripting, rapid prototyping",
          "Bash - System automation and scripting",
          "JavaScript - Web development and real-time data visualization",
          "Julia - Numerical computing and robotics simulation",
          "MATLAB - Control systems and algorithm development"
        ]
      },
      {
        heading: "Frameworks & Libraries",
        bullets: [
          "ROS2 - Robot Operating System for distributed robotics applications",
          "scikit-learn - Machine learning and data analysis",
          "NumPy - Numerical computing and array operations",
          "OpenCV - Computer vision and image processing",
          "Flask - Web application development"
        ]
      },
      {
        heading: "Tools & Platforms",
        bullets: [
          "Docker - Containerization and deployment",
          "AWS (S3, IoT Core) - Cloud services and data management",
          "Yocto Linux - Custom embedded Linux distributions",
          "Fusion360 - CAD and mechanical design",
          "Blender - 3D modeling and visualization",
          "Git - Version control and collaboration"
        ]
      }
    ],
    chips: [
      "C++",
      "Python",
      "ROS2",
      "AWS",
      "Docker",
      "Embedded Linux",
      "OpenCV",
      "CAD"
    ]
  },

  ix_BostonDynamicsDog: {
    title: "Languages + Core Competencies",
    sections: [
      {
        heading: "Technical Expertise",
        bullets: [
          "Languages: C, C++, Python, Bash, JavaScript, Julia, MATLAB",
          "Frameworks: ROS2, scikit-learn, NumPy, OpenCV, Flask",
          "Tools: Docker, AWS (S3, IoT Core), Yocto Linux, Fusion360, Blender"
        ]
      },
      {
        heading: "Core Competencies",
        bullets: [
          "Embedded Linux development and multithreading",
          "SLAM, localization, and path planning algorithms",
          "Real-time systems and safety-critical software",
          "Cloud infrastructure (AWS IoT, MQTT, S3)",
          "Computer vision and sensor fusion",
          "CAD and mechanical design"
        ]
      }
    ],
    chips: [
      "C++",
      "Python",
      "ROS2",
      "Embedded Systems",
      "SLAM",
      "AWS",
      "Computer Vision"
    ]
  },

  // ix_Drawers: {
  //   title: "Dev Skills & Technical Tools",
  //   sections: [
  //     {
  //       heading: "Development Skills",
  //       bullets: [
  //         "Strong foundation in C/C++ for systems programming and robotics",
  //         "Proficient in Python for automation, data analysis, and prototyping",
  //         "Experience with ROS2 for distributed robotics systems",
  //         "Cloud development with AWS (IoT Core, S3, MQTT)",
  //         "Embedded Linux development with Yocto and custom distributions"
  //       ]
  //     },
  //     {
  //       heading: "Technical Tools",
  //       bullets: [
  //         "Version Control: Git, GitHub",
  //         "Containerization: Docker",
  //         "CAD: Fusion360, SolidWorks",
  //         "3D Modeling: Blender",
  //         "Computer Vision: OpenCV",
  //         "Numerical Computing: NumPy, MATLAB"
  //       ]
  //     }
  //   ],
  //   chips: [
  //     "Software Development",
  //     "Robotics",
  //     "Cloud Computing",
  //     "CAD",
  //     "Version Control"
  //   ]
  // }
};
