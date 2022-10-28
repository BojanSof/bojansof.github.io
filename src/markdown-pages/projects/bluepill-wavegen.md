---
slug: "projects/stm32-bluepill-wavegen"
nameOfClass: "projects-items"
added: "2022-10-26"
title: "STM32 BluePill WaveGen"
video: "false"
listName: "🔲 /STM32 BluePill WaveGen"
popupImageSrc: "bluepill-wavegen.png"
popupImageAlt: "3D render of wavegen PCB"
popupLiveLink: ""
popupGithubLink: "https://github.com/BojanSof/BluePillWaveGen"
techIcons: [
        "c",
        "stmicroelectronics"
      ]
---

BluePill WaveGen is a DDS function generator implemented with STM32 BluePill board, based on STM32F103C8T6 microcontroller, 8-bit R-2R ladder DAC and additional circuitry for removing the DC offset.
The user interface is realized with OLED display based on SSD1306 controller and incremental rotary encoder.
The generator provides the basic waveform shapes, like sine waves, square waves and triangle waves.
The firmware is developed in C, using STM32 CubeIDE and HAL.