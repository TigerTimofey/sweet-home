import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MiniRimiCard from "./MiniRimiCard";

function ModalMiniRimi({ showMiniRimi, handleCloseMiniRimi }) {
  const handleGoToMiniRimi = () => {
    window.open("https://goo.gl/maps/mh9t3nfNvJ4QTj5P9", "_blank");
  };

  return (
    <Modal show={showMiniRimi} onHide={handleCloseMiniRimi}>
      <Modal.Header>
        <Modal.Title className="container">
          <div className="text-center">
            Mini Rimi <br />
            <h6>
              7:30 AM - 10:00 PM
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
                <MiniRimiCard />
              </Col>
              {/* <Col></Col> */}
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleCloseMiniRimi}>
          Close
        </button>
        <button className="pressable-button-resto" onClick={handleGoToMiniRimi}>
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalMiniRimi;
