import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

import vikky from "./vikky.png";
import timmy from "./timmy.png";
import online from "./online.png";

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
            style={{ minWidth: "10rem", maxWidth: "12rem" }}
          >
            <div className="d-flex justify-content-center ">
              <Card.Img className="image-contact " variant="top" src={vikky} />
            </div>
            <Card.Body className="text-contact">
              <Card.Title className="text-contact-name">
                Viktoria <img src={online} alt="" className="online-status" />
              </Card.Title>
              <US title="United States" className="flag-size" />{" "}
              <EE title="Estonia" className="flag-size" />{" "}
              <RU title="Russia" className="flag-size" />{" "}
              <ES title="Spain" className="flag-size" />
            </Card.Body>
            <Stack
              direction="horizontal"
              gap={2}
              className="d-flex justify-content-center p-3"
            >
              <Badge pill bg="success" className="p-3 w-50 badge-contact">
                <a href="tel:+37255647759">Call</a>
              </Badge>
            </Stack>
          </Card>
        </Col>
        <Col xs={6}>
          <Card
            className=" contact-special d-flex justify-content-center"
            style={{ minWidth: "10rem", maxWidth: "12rem" }}
          >
            <div className="d-flex justify-content-center ">
              <Card.Img className="image-contact " variant="top" src={timmy} />
            </div>
            <Card.Body className="text-contact">
              <Card.Title className="text-contact-name">
                Timofey <img src={online} alt="" className="online-status" />{" "}
              </Card.Title>
              <US title="United States" className="flag-size" />{" "}
              <EE title="Estonia" className="flag-size" />{" "}
              <RU title="Russia" className="flag-size" />
            </Card.Body>
            <Stack
              direction="horizontal"
              gap={2}
              className="d-flex justify-content-center p-3"
            >
              <Badge pill bg="success" className="p-3 w-50 badge-contact">
                <a href="tel:+37258581912">Call</a>
              </Badge>
            </Stack>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactComponent;
