import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"

const StyledLayoutContainer = styled.div`
  margin: 2rem auto;
  max-width: 950px;
  padding: 0 1rem;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  width: 100%;
`

const StyledListLinkLi = styled.li`
  display: inline-block;
  margin-right: 3rem;
`

const PageContentsContainer = styled.div`
  width: 100%;
`

const ListLink = props => (
  <StyledListLinkLi>
    <Link to={props.to}>{props.children}</Link>
  </StyledListLinkLi>
)

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName)
  document.documentElement.className = themeName
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light")
  } else {
    setTheme("theme-dark")
  }
}

// Immediately invoked function to set the theme on initial load
;(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark")
  } else {
    setTheme("theme-light")
  }
})()

const Navigation = () => (
  <nav>
    <ul>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/contact">Contact</ListLink>
      {/* <ListLink to="/"><FontAwesomeIcon icon={faGithub} /></ListLink> */}
      <ListLink>
        <button id="switch" onClick={toggleTheme}>
          <FontAwesomeIcon
            icon={faSun}
            className="toggle-sun"
            alt="Switch to Light Mode"
            title="Switch to Light Mode"
          />
          <FontAwesomeIcon
            icon={faMoon}
            className="toggle-moon"
            alt="Switch to Dark Mode"
            title="Switch to Dark Mode"
          />
        </button>
      </ListLink>
    </ul>
  </nav>
)

export default function Layout({ children }) {
  return (
    <StyledLayoutContainer className="layout-container">
      <StyledHeader>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline` }}>Ryan Welch</h1>
        </Link>
        <Navigation />
      </StyledHeader>
      <PageContentsContainer className="page-contents-container">
        {children}
      </PageContentsContainer>
    </StyledLayoutContainer>
  )
}
