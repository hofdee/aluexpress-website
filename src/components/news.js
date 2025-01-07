import React from "react"
import { Container, Row, Col } from "reactstrap"

import NewsCard from "./newsCard"

import imgBuilding from "../images/news/building.jpg"
import imgSeminar from "../images/news/seminar.jpg"
import imgTeamBuilding from "../images/news/team-building.jpg"

const companyNews = [
  {
    title: `ISO Seminars 2023`,
    date: `Mar. 23, 2019`,
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque debitis quis corporis magni cupiditate aperiam autem. Nostrum, fugit dolor.`,
    img: imgSeminar,
    slug: `iso-seminars-2019`,
  },
  {
    title: `Alu Express Glass`,
    date: `May. 19, 2024`,
    about: `!`,
    img: imgBuilding,
    slug: `tpcenter-construction`,
  },
  {
    title: `Glass Works`,
    date: `August. 5, 2023`,
    about: `Glass finish on bathroom design?`,
    img: imgTeamBuilding,
    slug: `company-teambuilding2019`,
  },
]

const News = () => {
  return (
    <div className="news section-lg bg-light-gray">
      <Container>
        <h2 className="header-title text-center text-capitalize">
          Our Services
        </h2>
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
