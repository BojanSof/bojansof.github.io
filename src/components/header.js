import React, { useState } from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

import "react-toggle/style.css"

const Header = ({ siteTitle }) => {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("isLoaded") || false
      : false
  )

  return (
    <header>
      <div style={{ display: "inline-flex" }}>
        <h1>{">"}</h1>
        <h1>
          {isLoaded ? (
            "Bojan Sofronievski"
          ) : (
            <Typewriter
              style={{ marginTop: 0, paddingTop: 0 }}
              options={{
                deleteSpeed: "natural",
              }}
              onInit={typewriter => {
                typewriter
                  .typeString("Electrical Engineer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Embedded Software Developer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Signal Processing Engineer")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Problem solver")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Bojan Sofronievski")
                  .callFunction(() => {
                    setIsLoaded(true)
                  })
                  .start()
              }}
            />
          )}
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
