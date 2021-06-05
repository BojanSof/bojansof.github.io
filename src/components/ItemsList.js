import React from "react"
import ReactDOM from "react-dom"
import { useStaticQuery, graphql } from "gatsby"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"

import PopupTerminalWindow from "../components/PopupTerminalWindow"

export default function ItemsList() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              listName
              nameOfClass
              popupGithubLink
              popupImageAlt
              popupImageSrc
              popupLiveLink
              techIcons
              title
            }
            html
          }
        }
      }
    }
  `)

  const checkScreenWidth = () => {
    return window.screen.width > 1000 ? "60%" : "100%"
  }
  const listItems = data.allMarkdownRemark.edges.map(item =>
    item.node.frontmatter.title ? (
      <li className={item.node.frontmatter.nameOfClass}>
        <button
          className="popupWindowLinkButton"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const win = new WinBox({
              title: item.node.frontmatter.title,
              width: checkScreenWidth(),
              height: checkScreenWidth(),
              x: "center",
              y: "center",
              onfocus: function () {
                this.setBackground("#00aa00")
              },
              onblur: function () {
                this.setBackground("#777")
              },
            })
            ReactDOM.render(
              React.createElement(PopupTerminalWindow, {
                title: item.node.frontmatter.title,
                popupImageSrc: item.node.frontmatter.popupImageSrc,
                popupImageAlt: item.node.frontmatter.popupImageAlt,
                popupGithubLink: item.node.frontmatter.popupGithubLink,
                popupLiveLink: item.node.frontmatter.popupLiveLink,
                techIcons: item.node.frontmatter.techIcons,
                html: item.node.html,
              }),
              win.body
            )
          }}
        >
          {item.node.frontmatter.listName}
        </button>
      </li>
    ) : (
      <li className="projects">{item.node.frontmatter.listName}</li>
    )
  )

  return <ul className="mappedItemsList">Projects: {listItems}</ul>
}
