import React from "react"
import { Container } from "reactstrap"
import { Button } from "reactstrap"
import { Link } from "gatsby"
import "./hero.scss"

const Hero = ({ title, description }) => {
  return (
    <div className="hero" id="hero">
      <section className="h-100 d-flex align-items-center text-center bg-dark-40">
        <Container>
          <main className="hero-content">
            <h3 className="title">{title}</h3>
            <hr className="h-separator" />
            <p className="hero-description">{description}</p>
            <section className="hero-buttons">
              <Button href="#services">Read More</Button>
              <Link to="projects/#project">
                <Button outline>Projects</Button>
              </Link>
            </section>
          </main>
        </Container>
      </section>
    </div>
  )
}

export default Hero
