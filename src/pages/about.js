import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import companyThumbnail from "../images/company.jpg"
import PageHeader from "../components/pageHeader"
import AboutCard from "../components/aboutCard"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutdataQuery {
      site {
        siteMetadata {
          title
          fullTitle
        }
      }
    }
  `)

  const { title, fullTitle } = data.site.siteMetadata

  const aboutContent = [
    `AluExpress is a professional construction company specializing in the design, manufacture, and installation of high quality aluminum doors and windows. Our range of products are durable, energy-efficient, and stylish solutions for residential and commercial projects, tailored to meet the unique needs of each client.`,
    `Upholding the highest standards of honesty and transparency in all our dealings together with a focus on precision, innovation, and customer satisfaction, our team ensures seamless integration of aluminium ﬁxtures that enhance both functionality and aesthetics.`,
    `Our products include Residential buildings, Casement windows, Sliding windows, Louvres, Foldaway windows, Doors, Galaxy hinged doors, Foldaway doors, Commercial shop ﬁtting, Shopfronts, Partitioning, Drywalls and Aluminium partitions, Suspended ceilings`,
  ]
  return (
    <section id="about">
      <PageHeader title="About Us" />
      <Container>
        <main className="about-page section-lg">
          <h2 className="header-title text-center font-weight-bold">{title}</h2>
          <section className="about-content">
            <img
              src={companyThumbnail}
              alt="Company Thumbnail"
              className="img-thumbnail w-50 mr-3"
              align="left"
            />
            <p className="content-title font-weight-bold">{fullTitle}</p>
            {aboutContent.map(para => (
              <p>{para}</p>
            ))}
          </section>
          <hr />
          <Row>
            <Col md="6">
              <AboutCard title="Mission">
                <p>
                  <strong>{fullTitle} </strong> aims to deliver high-quality, sustainable construction solutions that exceed client expectations, 
                  through innovation, craftsmanship, and a commitment to safety and environmental responsibility.
                </p>
                <ol>
                  <li>
                    Providing a mixture of services to a variety of industries
                    and geographical locations.
                  </li>
                  <li>
                    Continually improving communications with our customers and
                    between departments.
                  </li>
                  <li>Providing training for personnel’s enhancement.</li>
                  <li>
                    Recruiting and hiring only those who share our vision.
                  </li>
                </ol>
              </AboutCard>
            </Col>
            <Col md="6">
              <AboutCard title="Vision">
                <p>
                To be a leading construction company known for excellence, integrity, and 
                shaping the future of communities by creating lasting structures that inspire 
                and stand the test of time to the domestic and commercial building sectors
                </p>
              </AboutCard>
              <AboutCard title="Core Values">
                <p>
                AluExpress is committed to upholding the highest standards of honesty and transparency in all it's dealings.
                We committ to delivering superior workmanship and attention to detail in every project, embracing cutting-edge technology and practices to offer creative and sustainable solutions. 
                We foster collaboration and respect within our teams and with our clients and partners.
                </p>
                <ul>
                  <li>Integrity</li>
                  <li>Quality</li>
                  <li>Innovation</li>
                  <li>Team Work</li>
                </ul>
              </AboutCard>
            </Col>
          </Row>
          <hr />
        </main>
      </Container>
    </section>
  )
}

export default AboutPage
