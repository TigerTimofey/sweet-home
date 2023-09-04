import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";
import ModalVanaVillem from "./VanaVillem/ModalVanaVillem";
import ModalKohvikRein from "./KohvikReinCard/ModalKohvikRein";
import ModalJaposha from "./Japosha/ModalJaposha";
import ModalPreciousCafe from "./Preciuos/ModalPreciousCafe";
import ModalArgentina from "./Argentina/ModalArgentina";

function RestaurantsComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showRein, setShowRein] = useState(false);
  const handleCloseRein = () => setShowRein(false);
  const handleShowRein = () => setShowRein(true);

  const [showJaposha, setShowJaposha] = useState(false);
  const handleCloseJaposha = () => setShowJaposha(false);
  const handleShowJaposha = () => setShowJaposha(true);

  const [showPrecious, setShowPrecious] = useState(false); // Corrected variable name
  const handleClosePrecious = () => setShowPrecious(false);
  const handleShowPrecious = () => setShowPrecious(true);

  const [showArgentina, setShowArgentina] = useState(false); // Corrected variable name
  const handleCloseArgentina = () => setShowArgentina(false);
  const handleShowArgentina = () => setShowArgentina(true);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <button onClick={handleShow} className="pressable-button-resto">
            Vana Villem
          </button>
          <ModalVanaVillem
            handleShow={handleShow}
            show={show}
            handleClose={handleClose}
          />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowPrecious}
            className="pressable-button-resto"
          >
            Precious Cafe
          </button>
          <ModalPreciousCafe
            showPrecious={showPrecious} // Corrected prop name
            handleClosePrecious={handleClosePrecious}
          />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button onClick={handleShowRein} className="pressable-button-resto">
            Rein Cafe
          </button>
          <ModalKohvikRein
            showRein={showRein}
            handleCloseRein={handleCloseRein}
          />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowJaposha}
            className="pressable-button-resto"
          >
            Japosha Sushi
          </button>
          <ModalJaposha
            showJaposha={showJaposha}
            handleCloseJaposha={handleCloseJaposha}
          />
        </Col>
        <Col xs={12}>
          <button
            onClick={handleShowArgentina}
            className="pressable-button-resto"
          >
            Restoran Argentina
          </button>
          <ModalArgentina
            showArgentina={showArgentina}
            handleCloseArgentina={handleCloseArgentina}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default RestaurantsComponent;
