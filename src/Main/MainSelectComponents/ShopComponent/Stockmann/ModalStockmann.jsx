import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import StockmannCard from "./StockmannCard";

import { useSelector } from "react-redux";

function ModalStockmann({ handleCloseStockmann }) {
  const showStockmann = useSelector((state) => state.showStockmann);

  const handleGoToStockmann = () => {
    window.open("https://goo.gl/maps/g5dEA1ikrJAhchHu9", "_blank");
  };

  return (
    <Modal show={showStockmann} onHide={handleCloseStockmann}>
      <Modal.Header>
        <Modal.Title className="container">
          <div className="text-center">
            Stockmann <br />
            <h6>
              9:00 AM - 9:00 PM
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
                <StockmannCard />
              </Col>
            </Row>
          </Container>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center align-items-center">
        <button className="pressable-button-red" onClick={handleCloseStockmann}>
          Close
        </button>
        <button
          className="pressable-button-resto"
          onClick={handleGoToStockmann}
        >
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalStockmann;
