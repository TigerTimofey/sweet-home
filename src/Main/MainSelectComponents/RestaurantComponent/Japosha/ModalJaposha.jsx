import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import JaposhaCard from "./JaposhaCard";

import { useSelector } from "react-redux";

function ModalJaposha({ handleClose }) {
  const showJaposha = useSelector((state) => state.showJaposha);

  const handleGoToJaposha = () => {
    window.open("https://goo.gl/maps/28xcPwDJF9T9Fxm78", "_blank");
  };

  return (
    <Modal show={showJaposha} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="container">
          <div className="text-center">
            Sushi Japosha <br />
            <h6>
              11:00 AM - 10:00 PM
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
                <JaposhaCard />
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleClose}>
          Close
        </button>
        <button className="pressable-button-resto" onClick={handleGoToJaposha}>
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalJaposha;
