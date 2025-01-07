import React from "react"
import "./service.scss"

const Service = ({ services }) => {
  const { title, icon, description } = services
  return (
    <div className="service-card quicksand-aluexpress">
      <section className="service-icon">
        <img src={icon} alt={title} />
      </section>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Service
