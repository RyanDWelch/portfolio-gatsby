import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLayoutContainer = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const StyledListLinkLi = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const ListLink = props => (
  <StyledListLinkLi>
    <Link to={props.to}>{props.children}</Link>
  </StyledListLinkLi>
)

const Navigation = () => (
  <nav>
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </nav>
)

const Footer = () => (
  <footer>
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </footer>
)

export default function Layout({ children }) {
  return (
    <StyledLayoutContainer className="layout-container">
      <StyledHeader>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline`}}>Ryan Welch</h3>
        </Link>
        <Navigation />
      </StyledHeader> 
      {children}
      <Footer />
    </StyledLayoutContainer>
  )
}