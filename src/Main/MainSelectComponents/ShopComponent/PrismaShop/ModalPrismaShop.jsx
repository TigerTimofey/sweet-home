import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PrismaShopCard from "./PrismaShopCard";

import { useSelector } from "react-redux";

function ModalPrismaShop({ handleClose }) {
  const showPrismaShop = useSelector((state) => state.showPrismaShop);

  const handleGoToPrismaShop = () => {
    window.open("https://goo.gl/maps/JCLFxoWVqEeV74Uf7", "_blank");
  };

  return (
    <Modal show={showPrismaShop} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="container">
          <div className="text-center">
            Prisma 24/7 <br />
            <h6>
              24H
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
                <PrismaShopCard />
              </Col>
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
          onClick={handleGoToPrismaShop}
        >
          Route to the place
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalPrismaShop;
