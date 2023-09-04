import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArgentinaCard from "./ArgentinaCard";

function ModalArgentina({ showArgentina, handleCloseArgentina }) {
  const handleGoToArgentina = () => {
    window.open("https://goo.gl/maps/fgVaGTa5Ga1Sw8HX7", "_blank");
  };

  return (
    <Modal show={showArgentina} onHide={handleCloseArgentina}>
      <Modal.Header closeButton>
        <Modal.Title className="container">
          <div className="text-center">
            Argentina <br />
            <h6>
              12:00 AM - 10:00 PM
              <br />
              Monday-Sunday
            </h6>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <Container fluid="md">
            <Row>
              <Col>
                <ArgentinaCard />
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleCloseArgentina}>
          Close
        </button>
        <button
          className="pressable-button-resto"
          onClick={handleGoToArgentina}
        >
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalArgentina;
