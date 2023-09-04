import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RestaurantCard from "./RestaurantCard";

function ModalVanaVillem({ show, handleClose }) {
  const handleGoToVanaVillem = () => {
    window.open("https://goo.gl/maps/af1EC11J758Q414J7", "_blank");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="container">
          <p className="text-center">
            {" "}
            Vana Villem Pub
            <br />
            11:00 AM - 9:00 PM
            <br />
            Monday-Sunday
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around">
          <Container fluid="md">
            <Row>
              <Col>
                <RestaurantCard />
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleClose}>
          Close
        </button>
        <button
          className="pressable-button-resto"
          onClick={handleGoToVanaVillem}
        >
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalVanaVillem;
