import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import RestaurantCardRein from "./RestaurantCardRein";

import { useSelector } from "react-redux";

function ModalKohvikRein({ handleCloseRein }) {
  const showRein = useSelector((state) => state.showRein);

  const handleGoToRein = () => {
    window.open("https://goo.gl/maps/AS5z5h2xuw5JMHG89", "_blank");
  };

  return (
    <Modal show={showRein} onHide={handleCloseRein}>
      <Modal.Header>
        <Modal.Title className="container">
          <div className="text-center">
            Cafe Rein <br />{" "}
            <h6>
              9:00 AM - 4:30 PM
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
                <RestaurantCardRein />
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleCloseRein}>
          Close
        </button>
        <button className="pressable-button-resto" onClick={handleGoToRein}>
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalKohvikRein;
