import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <h2>Hi there!</h2>
      <img
        src={"/happy-clown-612x612.jpg"}
        alt="logo"
        className="happy-clown"
      />
      <p>I'm not a clown, you are.</p>
    </Layout>
  )
}
