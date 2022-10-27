---
slug: "projects/embeddedgfx"
nameOfClass: "projects-items"
added: "2022-10-27"
title: "EmbeddedGfx"
video: "false"
listName: "🖼️ /EmbeddedGfx"
popupImageSrc: "embeddedgfx.webp"
popupImageAlt: "canvas for drawing"
popupLiveLink: ""
popupGithubLink: "https://github.com/nikodinovska/EmbeddedGfx"
techIcons: [
        "cplusplus",
        "cmake",
      ]
---

EmbeddedGfx is a library allowing easy drawing of shapes and text on 2D array of pixels, or directly drawing pixel-by-pixel to a device. 

The purpose of the project is to create small and optimized graphics library to be used for managing graphics for displays on embedded platforms.
The library is header-only and the C++17 standard is used.
It provides two canvas types:
- Buffered, to be used for small displays sizes, and
- Unbuffered, to be used for larger displays, when the target does not have enough memory for holding the buffer.

The library provides drawing of shapes, including polygons and circles, filled and unfilled, and text.
To fill the polygons, scan line fill algorithm is used.
Currently, the library is used for OLED and TFT-LCD interfaces, found in the [stm32f4x1-cpp-libs](https://github.com/BojanSof/stm32f4x1-cpp-libs) project.