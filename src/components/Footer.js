import React from "react"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ margin: "auto" }}>
        <Link to="/">Home</Link>{" | "}
        <a
          href="https://www.github.com/BojanSof"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <span
        style={{
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        © {new Date().getFullYear()} Bojan Sofronievski {" | "} Source code
        distributed under MIT License<br/>
        Original by&nbsp;
        <a
          href="https://github.com/Kielx/terminal-portfolio"
        >
          Krzysztof Pantak
        </a>.
      </span>
    </footer>
  )
}

export default Footer
