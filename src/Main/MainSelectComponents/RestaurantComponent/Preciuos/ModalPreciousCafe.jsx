import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PreciousCafeCard from "./PreciousCafeCard";

import { useSelector } from "react-redux";

function ModalPreciousCafe({ handleClose }) {
  const showPrecious = useSelector((state) => state.showPrecious);

  const handleGoToPrecious = () => {
    window.open("https://goo.gl/maps/ACkSPwgjuwCRivPS8", "_blank");
  };

  return (
    <Modal show={showPrecious} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="container">
          <div className="text-center">
            Precious Cafe
            <br />{" "}
            <h6>
              8:00 AM - 11:00 AM
              <br />
              Monday-Friday
            </h6>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <Container fluid="md">
            <Row>
              <Col>
                <PreciousCafeCard />
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleClose}>
          Close
        </button>
        <button className="pressable-button-resto" onClick={handleGoToPrecious}>
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalPreciousCafe;
