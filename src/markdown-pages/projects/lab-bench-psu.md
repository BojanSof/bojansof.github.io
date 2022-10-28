---
slug: "projects/lab-bench-psu"
nameOfClass: "projects-items"
added: "2022-10-26"
title: "Lab bench PSU"
video: "false"
listName: "⚡ /Lab bench PSU"
popupImageSrc: "lab-bench-psu.png"
popupImageAlt: "3D render of PSU PCB"
popupLiveLink: ""
popupGithubLink: "https://github.com/BojanSof/Lab-Bench-PSU"
techIcons: [
        "c"
      ]
---

The goal of this project is to create power supply with adjustable voltage and current limit, using cheap parts or parts I had lying around.
The power supply is based on a linear regulator, comprised of LM324 operation amplifier and TIP41 BJT as pass transistor, and switching-mode preregulator, which is buck converter realised with LM2576-ADJ.
The preregulator keeps constant 1.5 V on the linear regulator.
For controlling the power supply, PIC16F18855 microcontroller is used, with LCD with 2 rows and 16 columns and rotary encoder for user interface.
The firmware is develop using Mplab X IDE, with the free version of the XC8 compiler.