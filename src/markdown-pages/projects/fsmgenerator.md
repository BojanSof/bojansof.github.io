---
slug: "projects/fsmgenerator"
nameOfClass: "projects-items"
added: "2022-10-27"
title: "Compile-time FSM Generator"
video: "false"
listName: "🛠 /FSM Generator"
popupImageSrc: "fsm.webp"
popupImageAlt: "finite state machine"
popupLiveLink: ""
popupGithubLink: "https://github.com/BojanSof/FSM-Generator"
techIcons: [
        "cplusplus",
        "cmake",
      ]
---

FSM-Generator is a header-only library providing compile-time event-based FSM(Finite State Machine generator), using modern C++.
The library can save writing boiler-plate `if-else` code found typically when implementing FSMs and keep the state machine code more organized and easy to read.
The C++17 standard is used. The library doesn't use dynamic allocation or run-time polymorphism, making it suitable for embedded platforms.