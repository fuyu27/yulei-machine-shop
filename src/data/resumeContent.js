export const LABELS = {
  ix_yuleibot: "About Me",
  ix_resume: "Resume",
  ix_shelf: "Projects",
  ix_mbot: "SLAM & Perception",
  ix_embedded: "Embedded Systems",
  ix_FRC: "FIRST Robotics",
  ix_toolbench: "Dev Skills & Tools",
  ix_progress_plant: "Budding Projects",
  ix_frames: "Photo Gallery"
};

export const CONTENT = {
  ix_yuleibot: {
    title: "Hi, I'm Yulei (yoo-lay) :)",
    headshot: "/images/Bio/2025headshot.jpeg",
    photos: [
      {
        src: "/images/Bio/guitar.png",
        caption: "Kilby Girl - No Video Attached (sry)"
      }
    ],
    sections: [
      {
        heading: "About Me",
        intro: "I'm currently a junior at the University of Michigan studying Robotics Engineering and Computer Science, graduating in May 2027.",
        bullets: [
          "I'm interested in novel topics (robots I guess...), and everything that comes with the territory (SLAM/perception, design, and mostly middleware (torture))",
          "I enjoy indulging in challenging problems, whether it be stalking research papers, tinkering with \"jank\" (favorite FRC term) robots, or experimenting with relevant software",
          "Some of my favorite projects I keep private (be moving on the dl) or are NDA altogether, but I'm always excited to share what I can about my work in robotics and embedded systems. Hate to admit it, but I apparently still (secretly) enjoy CADing in my retirement as a design team member on my FRC team.",
          "Outside of robotics, I play electric guitar (mediocre-ly) and would like to pick up drums soon (if Facebook Marketplace allows...). I love messing around with artistic mediums in my free time, tattooing being the next."
        ]
      },
      {
        heading: "Contact",
        bullets: [
          "Website: yulei-machine-shop.com",
          "Email: yuleifu@umich.edu",
          "LinkedIn: linkedin.com/in/yulei-fu"
        ]
      },
      {
        heading: "Credits",
        bullets: [
          "HDRI environment (\"Studio Small 09\") courtesy of Poly Haven, CC0",
          "Site code licensed MIT — see the LICENSE file in the repo"
        ]
      }
    ],
    chips: [
      "Robotics",
      "Embedded Systems",
      "Software Engineering"
    ]
  },

  ix_resume: {
    title: "Resume",
    isResume: true,
    resumePath: "/yulei_resume.pdf",
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

  ix_shelf: {
    title: "Projects",
    sections: [
      {
        heading: "The Bookshelf",
        intro: "Each item on this shelf represents a chapter of my work — the MBot covers SLAM & perception, the circuit board covers my embedded systems experience, and the trophy covers FIRST Robotics. Click them individually for the full story. Below are the projects that don't live on the shelf (yet).",
        bullets: []
      },
      {
        heading: "Stirling Research Group - Research Intern",
        subheading: "Nov 2024 - Jan 2025 | Ann Arbor, MI",
        bullets: [
          "Implemented the Keytel metabolic-rate model in JavaScript to convert real-time heart-rate data into energy-expenditure estimates, enabling accurate British Thermal Unit (BTU) tracking for 4+ hour extravehicular activity (EVA) simulations",
          "Architected data parsing from wearable heart-rate data at 20-second intervals, applied time-weighted averaging, and updated metabolic-rate estimates with 100% uptime across all test sessions",
          "Designed and developed the participant interface, displaying cumulative BTU burn and max BTU limits, allowing participants to monitor resource consumption during geological deviation tasks",
          "Created the experimenter dashboard with real-time heart rate monitoring, configurable alert thresholds, labeled task segments, and automatic data export, improving post-session analysis efficiency by 40%",
          "Connected the nRF52840 based heart-rate wearable to the testbench via bluetooth"
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
      "JavaScript",
      "React",
      "Three.js",
      "Blender",
      "Data Visualization",
      "Bluetooth"
    ]
  },

  ix_mbot: {
    title: "SLAM & Perception",
    sections: [
      {
        heading: "Radiation Mapping SLAM (Current)",
        bullets: [
          "Extending SLAM-based mapping to fuse radiation sensor data into spatial maps — details coming soon"
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
          "Created 4-state autonomous exploration system (IDLE -> EXPLORING -> RETURNING -> ESCAPING) with dynamic goal replanning"
        ]
      }
    ],
    photos: [
      { src: "/images/SlamAndPerception/high_fidelity_slam.png", caption: "High-Fidelity SLAM" },
      { src: "/images/SlamAndPerception/map.png", caption: "Occupancy Grid Map" },
      { src: "/images/SlamAndPerception/particle_detection.png", caption: "Particle Filter Detection" },
      { src: "/images/SlamAndPerception/SLAM_pose_particle_particle_filter.png", caption: "SLAM Pose & Particles" },
      { src: "/images/SlamAndPerception/checkerboard_detection.png", caption: "Camera Calibration" },
      { src: "/images/SlamAndPerception/frontiers.png", caption: "Frontier Detection" },
      { src: "/images/SlamAndPerception/perception_and_mapping_casualty.png", caption: "Perception & Mapping Blooper" }
    ],
    chips: [
      "SLAM",
      "Particle Filter",
      "A* Planning",
      "Computer Vision",
      "ROS2",
      "Occupancy Grid",
      "AprilTag",
      "Frontier Exploration",
      "Camera Calibration",
      "Autonomous Navigation"
    ]
  },

  ix_embedded: {
    title: "Embedded Systems",
    sections: [
      {
        heading: "Amazon Robotics - Embedded Software Engineer Co-Op",
        subheading: "Jan 2025 - June 2025 | Westborough, MA",
        bullets: [
          "Designed and owned a C++ logging and system log capture pipeline for a safety-certified controller to replace an ad-hoc debugging process, cutting issue-reproduction time by 85% (6 hrs to 0.75 hrs)",
          "Developed a robust multithreaded D-Bus service for embedded Linux safety systems, aggregating logs from multiple subsystems with safe batching, deterministic behavior, and low-latency IPC",
          "Deployed and designed a remote Wi-Fi diagnostics API, adding to the system’s hardware-diagnostics suite, reducing field-troubleshooting from 2+ hours to 0.03 hours for on-sites that previously had no remote pathway to inspect connectivity issues",
          "Architected, implemented, and shipped a telemetry pipeline delivering 10K+ messages/day to AWS S3 over MQTT, cutting data-loss by 94% and enabling a 7-engineer diagnostics team to finally access consistent, fleet-reliable field data"
        ]
      },
      {
        heading: "Stirling Research Group - Research Intern",
        subheading: "Nov 2024 - Jan 2025 | Ann Arbor, MI",
        bullets: [
          "Implemented the Keytel metabolic-rate model in JavaScript to convert real-time heart-rate data into energy-expenditure estimates, enabling accurate British Thermal Unit (BTU) tracking for 4+ hour extravehicular activity (EVA) simulations",
          "Architected data parsing from wearable heart-rate data at 20-second intervals, applied time-weighted averaging, and updated metabolic-rate estimates with 100% uptime across all test sessions",
          "Designed and developed the participant interface, displaying cumulative BTU burn and max BTU limits, allowing participants to monitor resource consumption during geological deviation tasks",
          "Created the experimenter dashboard with real-time heart rate monitoring, configurable alert thresholds, labeled task segments, and automatic data export, improving post-session analysis efficiency by 40%",
          "Connected the nRF52840 based heart-rate wearable to the testbench via bluetooth"
        ]
      }
    ],
    chips: [
      "C++",
      "Embedded Linux",
      "D-Bus",
      "MQTT",
      "AWS",
      "Multithreading",
      "Safety-Critical Software",
      "JavaScript",
      "Bluetooth"
    ]
  },

  ix_FRC: {
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

  ix_toolbench: {
    title: "Dev Skills, Tools & Core Competencies",
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
      "AWS",
      "Docker",
      "Embedded Linux",
      "OpenCV",
      "CAD"
    ]
  },

  ix_progress_plant: {
    title: "Budding Projects",
    sections: [
      {
        heading: "Currently Growing",
        bullets: [
          "Radiation mapping SLAM — fusing radiation sensing into spatial maps",
          "This 3D portfolio itself — remodeled scene, new interactions, and a photo gallery on the way"
        ]
      },
      {
        heading: "Future Interests",
        bullets: [
          "Advanced robotic manipulation and control systems for complex tasks",
          "Real-time embedded systems optimization and safety-critical software",
          "Multi-robot coordination and swarm robotics",
          "Autonomous navigation in unstructured environments"
        ]
      },
      {
        heading: "Technologies I'd Love to Explore",
        bullets: [
          "Advanced control theory and model predictive control",
          "Deep learning for robotics perception and planning",
          "Hardware acceleration (FPGAs, custom ASICs) for real-time processing",
          "Novel sensor fusion techniques for robust state estimation"
        ]
      }
    ],
  },

  ix_frames: {
    title: "Photo Gallery",
    sections: [
      {
        heading: "The Full Archive",
        intro: "Every photo from around this shop — robots, builds, bloopers, and the occasional guitar."
      }
    ],
    photos: [
      // Bio
      { src: "/images/Bio/2025headshot.jpeg", caption: "2025 Headshot" },
      { src: "/images/Bio/guitar.png", caption: "Kilby Girl - No Video Included" },
      // FRC 3322
      { src: "/images/FRC3322/cover_img.jpg", caption: "FRC 3322" },
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
      { src: "/images/FRC3322/testing_prototype.jpg", caption: "Prototype Testing" },
      // SLAM & Perception
      { src: "/images/SlamAndPerception/high_fidelity_slam.png", caption: "High-Fidelity SLAM" },
      { src: "/images/SlamAndPerception/map.png", caption: "Occupancy Grid Map" },
      { src: "/images/SlamAndPerception/particle_detection.png", caption: "Particle Filter Detection" },
      { src: "/images/SlamAndPerception/SLAM_pose_particle_particle_filter.png", caption: "SLAM Pose & Particles" },
      { src: "/images/SlamAndPerception/checkerboard_detection.png", caption: "Camera Calibration" },
      { src: "/images/SlamAndPerception/frontiers.png", caption: "Frontier Detection" },
      { src: "/images/SlamAndPerception/perception_and_mapping_casualty.png", caption: "Perception & Mapping Blooper" },
      // AR
      { src: "/images/AR/goofy_AR_activity.JPG", caption: "AR Activity" },
      { src: "/images/AR/goofy_ar.JPG", caption: "Goofing Around in AR" },
      // Portfolio / this site
      { src: "/images/Portfolio/updated_model_blender_final_render.png", caption: "Machine Shop - Final Render" },
      { src: "/images/Portfolio/updated_model_draft.png", caption: "Machine Shop - Draft" },
      { src: "/images/Portfolio/fusion_prototype.png", caption: "Fusion Prototype" },
      { src: "/images/Portfolio/nuked_robot_cad.png", caption: "Nuked Robot CAD" }
    ],
    chips: [
      "Photography",
      "Memories"
    ]
  },

};
