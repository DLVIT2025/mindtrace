🧠 MindTrace – A Smart Digital Distraction Tracker
📌 Project Overview
MindTrace is an innovative and non-intrusive Chrome extension crafted to promote digital well-being by making users more mindful of their time spent on entertainment and social media platforms. Rather than blocking access to websites, MindTrace empowers users to make better choices through awareness, visual cues, and gentle motivation.

Whether you're a student, professional, or someone who often finds themselves getting pulled into endless scrolling on platforms like YouTube, Instagram, or Netflix, MindTrace provides real-time nudges to help you pause and regain focus.

This tool is especially helpful during study hours, work sessions, or deep focus periods, enabling conscious screen time without the harshness of website blockers.

🎯 Core Concept
At its heart, MindTrace is about accountability and positive reinforcement.

The extension keeps track of how often you visit distracting platforms, delivers motivational quotes, and creates a mild disturbance using sound beeps and screen flashes to help you become aware of your habits — but without locking or punishing you.

It blends design, psychology, and behavior nudging to help people take control of their attention span.

🚀 Key Features
🔍 1. Automatic Distraction Detection
MindTrace actively monitors when you open popular distraction websites, such as:

YouTube

Instagram

Netflix

Twitter

Facebook

Reddit

Hotstar

And more...

Whenever a monitored platform is opened in a tab, the extension recognizes it and triggers a set of awareness mechanisms to nudge the user gently.

💬 2. Motivational Quote Pop-Ups
To help users reset their focus and mindset:

The extension displays a motivational quote at the center of the screen.

Quotes are selected randomly from a large collection, ensuring fresh and varied inspiration.

The background of the screen is blurred to emphasize the message and reduce visual distraction.

The quote pop-up is styled for clarity, readability, and emotional impact — acting like a mini mindfulness prompt.

🔊 3. Auditory Alerts (Alarm Beeps)
When a distracting site is accessed:

A mild alarm sound is played 10 times in quick succession.

The sound is noticeable but not irritating — just enough to pull your attention back.

No external sound files are needed — a default alarm sound is embedded in the script and played using Web Audio APIs.

Helps auditory learners become aware of their digital behavior instantly.

🔴 4. Red Screen Flash Warning
Along with quotes and sound:

The screen flashes red around the edges or across the screen up to 3 times.

These flashes are smooth, timed, and fade out gracefully.

This visual effect serves as a warning cue, making users realize they're drifting from focus — without being overwhelming or harmful to the eyes.

Works as a strong but safe signal, especially for visual learners.

📊 5. Distraction Count and Time Tracking
The extension tracks:

Number of visits (distractions) to each individual platform like YouTube, Instagram, Netflix, etc.

Time spent on each distracting site — counted cumulatively per platform.

This data is presented inside the extension popup (dashboard) for the user to review their habits.

Users can analyze their personal trends, recognize problematic platforms, and work on self-improvement.

📂 Tech Stack & Architecture
JavaScript – Core logic for tracking, alerts, and interface.

Chrome Extension APIs – For tab monitoring, script injection, and storage.

HTML & CSS – For quote display overlays and red flash animations.

Web Audio API – For generating default beep alarm sounds.

🔐 Permissions Required
To function properly, MindTrace requests the following Chrome extension permissions:

Permission	Why It’s Needed
tabs	To read the currently opened tab’s URL.
activeTab	To inject overlay and audio scripts into active sites.
storage	To store distraction counts and visit data locally.
scripting	To dynamically add overlays and effects to visited websites.

All processing is handled locally — no data is sent to external servers, ensuring full privacy and offline functionality.

✅ Benefits
Helps users develop self-control without relying on site blockers.

Uses visual + audio feedback to cover different types of learners.

Encourages habit change via positive reinforcement instead of punishment.

Promotes mindfulness and focus, especially helpful during exams, deadlines, or goal-oriented sessions.

Fully customizable and lightweight – does not slow down browser performance.

📈 Future Enhancements 
(These are not currently implemented, but are ideas for expansion.)

User-defined distraction site list.

Quote customization or categories.

Time-based reminders (e.g., Pomodoro cycles).

Weekly productivity summaries.

Dark mode and personalization options.

