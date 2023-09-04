import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import vikky from "./vikky.png";
import timmy from "./timmy.png";

import US from "country-flag-icons/react/3x2/US";
import EE from "country-flag-icons/react/3x2/EE";
import RU from "country-flag-icons/react/3x2/RU";
import ES from "country-flag-icons/react/3x2/ES";

function ContactComponent() {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Card
            className=" contact-special d-flex justify-content-center"
            style={{ width: "12rem" }}
          >
            <div className="d-flex justify-content-center ">
              <Card.Img className="image-contact " variant="top" src={vikky} />
            </div>
            <Card.Body className="text-contact">
              <Card.Title className="text-contact-name">Viktoria</Card.Title>
              <US title="United States" className="flag-size" />{" "}
              <EE title="Estonia" className="flag-size" />{" "}
              <RU title="Russia" className="flag-size" />{" "}
              <ES title="Spain" className="flag-size" /> <br />
              <a href="tel:+37255647759">+372 55647759</a>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card
            className=" contact-special d-flex justify-content-center"
            style={{ width: "12rem" }}
          >
            <div className="d-flex justify-content-center ">
              <Card.Img className="image-contact " variant="top" src={timmy} />
            </div>
            <Card.Body className="text-contact">
              <Card.Title className="text-contact-name">Timofey</Card.Title>
              <US title="United States" className="flag-size" />{" "}
              <EE title="Estonia" className="flag-size" />{" "}
              <RU title="Russia" className="flag-size" /> <br />
              <a href="tel:+37258581912">+372 58581912</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactComponent;
