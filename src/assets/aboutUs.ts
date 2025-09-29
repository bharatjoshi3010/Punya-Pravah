export const us = {
  "problem_statement": "Temple & Pilgrimage Crowd Management (Somnath, Dwarka, Ambaji, Pavagadh). Temples witness heavy crowds during peak hours, festivals, and weekends, leading to long queues, discomfort, and safety risks. Current manual systems struggle to manage both entry flow and inside temple crowd density effectively.",

  "proposed_solution": "AI-Driven Smart Token, NFC & Surveillance System",

  "core_idea": [
    "AI/ML model predicts the best time slots for peaceful darshan.",
    "Digital tokens with time limits regulate entry flow into the temple.",
    "Priority queue for token holders vs. general queue for walk-ins.",
    "AI-enabled CCTV cameras monitor crowd density inside/outside.",
    "NFC smart bands for elderly, differently-abled, or people with health issues.",
    "Refundable token system with penalties ensures accountability.",
    "Three interfaces: Devotee App, Temple Committee Dashboard, Police Dashboard."
  ],

  "ai_ml_time_management": "ML model predicts low-rush time slots using historical data, weather, festivals, and patterns. Tokens come with specific time limits for darshan entry to ensure even distribution.",

  "token_system_priority": "Token holders get access to a faster, organized line while non-token devotees wait in a slower general queue and can only book tokens for their next visit.",

  "refund_penalty_mechanism": "Devotees pay ₹100 for booking. ₹90 refunded on successful exit scan. ₹50 penalty for no-shows. Full refund for timely cancellations.",

  "ai_surveillance": "Smart cameras with AI detect overcrowding, congestion, panic, or unusual movements. Real-time alerts sent to police and temple staff.",

  "nfc_smart_bands": "Issued to elderly, differently-abled, or devotees with health issues. Provides priority access and emergency alerts.",

  "devotee_app": "Token booking, QR/NFC generation, darshan timing updates, refund/penalty details, and emergency contacts.",

  "temple_committee_dashboard": "Manage slot availability, festival schedules, maintenance updates, and dynamic token distribution.",

  "police_dashboard": "Live AI-camera feed, crowd hotspot alerts, medical emergency updates, and law & order monitoring.",

  "before_visit": "Devotee books token (₹100). ML model assigns best time slot. QR/NFC generated for priority queue.",

  "on_arrival": "Token holders use priority queue. Non-token devotees use general queue. AI cameras and NFC bands track movements and crowd density.",

  "inside_temple": "Controlled entry based on time-limited tokens. Emergency alerts handled via NFC and AI surveillance.",

  "after_darshan": "Devotee scans QR/NFC at exit → refund of ₹90. No-shows penalized automatically.",

  "expected_impact": [
    "Crowd balance inside temple using ML-predicted time slots.",
    "Faster darshan for token holders reduces pressure on general queue.",
    "Refund/penalty model ensures accountability and discipline.",
    "Safety and inclusivity for elderly and differently-abled devotees.",
    "Integrated platform improves coordination between staff, police, and pilgrims.",
    "Scalable model for major temples and large festivals."
  ],

  "team_roles": [
    "Bharat(Team Lead) - UI and Mobile App Development, Backend Development",
    "Kartik - Machine Learning (Crowd Prediction, Time-slot Optimization)",
    "Shivam - Machine Learning (Crowd Prediction, Time-slot Optimization)",
    "Sujal - Backend Development and Cloud Infrastructure",
    "Anmol - Backend Development and Cloud Infrastructure",
    "Shalini - Presentation (PPT) and UI Support"
  ],

  "technologies_used": [
    "UI: React Native",
    "Backend: Node.js, Express.js",
    "Database (Structured): PostgreSQL",
    "Database (Unstructured): MongoDB",
    "Event Streaming: Apache Kafka",
    "Cloud Platforms: AWS, Microsoft Azure"
  ],

  "system_overview": [
    "UI (React Native) - Devotee App, Temple Committee App, Police Dashboard",
    "Backend (Node.js + Express.js) - APIs for booking, refunds, authentication, ML integration",
    "Databases (PostgreSQL + MongoDB) - Manage structured and unstructured temple data",
    "ML Models - Predict crowd surges and assign time slots",
    "Event Handling (Apache Kafka) - Process camera data, IoT feeds, emergency alerts",
    "Cloud (AWS/Azure) - Hosting, scalability, security, AI deployment"
  ],

  "expected_outcome": [
    "Smooth division of work among team members",
    "Scalable, reliable, and modern tech stack (UI + ML + Backend + Cloud)",
    "Hybrid database usage for both structured and unstructured data",
    "End-to-end solution covering prediction, monitoring, safety, and engagement"
  ]
}