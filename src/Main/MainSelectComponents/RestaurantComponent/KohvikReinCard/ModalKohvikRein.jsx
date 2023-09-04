import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RestaurantCardRein from "./RestaurantCardRein";

function ModalKohvikRein({ showRein, handleCloseRein }) {
  const handleGoToRein = () => {
    window.open("https://goo.gl/maps/AS5z5h2xuw5JMHG89", "_blank");
  };

  return (
    <Modal show={showRein} onHide={handleCloseRein}>
      <Modal.Header closeButton>
        <Modal.Title className="container">
          <p className="text-center">
            Cafe Rein <br />
            9:00 AM - 4:30 PM
            <br />
            Monday-Friday
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <Container fluid="md">
            <Row>
              <Col>
                <RestaurantCardRein />
              </Col>
              {/* <Col></Col> */}
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
