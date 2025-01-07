import React from "react"
import { Container, Row, Col } from "reactstrap"

import NewsCard from "./newsCard"

import imgBuilding from "../images/news/building.jpg"
import imgSeminar from "../images/news/seminar.jpg"
import imgTeamBuilding from "../images/news/team-building.jpg"
import imgWindow from "../images/news/window.jpg"
import imgDoor from "../images/news/door.jpg"
import imgSlide from "../images/news/slide.jpg"

const companyNews = [
  {
    title: `Windows and Doors`,
    date: `Mar. 23, 2019`,
    about: `dolor.`,
    img: imgSeminar,
    slug: `iso-seminars-2019`,
  },
  {
    title: `Bifold doors`,
    date: `May. 19, 2024`,
    about: `!`,
    img: imgBuilding,
    slug: `tpcenter-construction`,
  },
  {
    title: `Lift and Slide doors`,
    date: `August. 5, 2023`,
    about: `Glass finish on bathroom design?`,
    img: imgTeamBuilding,
    slug: `company-teambuilding2019`,
  },
  {
    title: `Store Front`,
    date: `Mar. 23, 2019`,
    about: `.`,
    img: imgWindow,
    slug: `nb`,
  },
  {
    title: `Patio Enclosing`,
    date: `May. 19, 2024`,
    about: `!`,
    img: imgDoor,
    slug: `tpcenter-construction`,
  },
  {
    title: `Tilt and Turn`,
    date: `August. 5, 2023`,
    about: `Glass finish on bathroom design?`,
    img: imgSlide,
    slug: `company-teambuilding2019`,
  },
]

const News = () => {
  return (
    <div className="news section-lg bg-light-gray">
      <Container>
        <h3 className="text-center text-uppercase">
          Our Services
        </h3>
        <p className="header-title text-center text-capitalize">
          We Are Committed To Providing Best Quality!
        </p>
        <Row>
          {companyNews.map(news => {
            return (
              <Col lg="4" md="6" sm="12">
                <NewsCard news={news} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default News
