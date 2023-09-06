import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ViruMallCard from "./ViruMallCard";

import { useSelector } from "react-redux";

function ModalViruMall({ handleClose }) {
  const showViruMall = useSelector((state) => state.showViruMall);

  const handleGoToViruMall = () => {
    window.open("https://goo.gl/maps/QKpQ7KmxPEzYghM26", "_blank");
  };

  return (
    <Modal show={showViruMall} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="container">
          <div className="text-center">
            Viru Mall <br />
            <h6>
              10:00 AM - 9:00 PM
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
                <ViruMallCard />
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleClose}>
          Close
        </button>
        <button className="pressable-button-resto" onClick={handleGoToViruMall}>
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalViruMall;
