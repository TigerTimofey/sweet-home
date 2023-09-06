import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useDispatch } from "react-redux";

import {
  setShow,
  setShowRein,
  setShowJaposha,
  setShowPrecious,
  setShowArgentina,
} from "../../../services/stateServices";

import ModalVanaVillem from "./VanaVillem/ModalVanaVillem";
import ModalKohvikRein from "./KohvikReinCard/ModalKohvikRein";
import ModalJaposha from "./Japosha/ModalJaposha";
import ModalPreciousCafe from "./Preciuos/ModalPreciousCafe";
import ModalArgentina from "./Argentina/ModalArgentina";

function RestaurantsComponent() {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(setShow(false));
  const handleShow = () => dispatch(setShow(true));

  const handleCloseRein = () => dispatch(setShowRein(false));
  const handleShowRein = () => dispatch(setShowRein(true));

  const handleCloseJaposha = () => dispatch(setShowJaposha(false));
  const handleShowJaposha = () => dispatch(setShowJaposha(true));

  const handleClosePrecious = () => dispatch(setShowPrecious(false));
  const handleShowPrecious = () => dispatch(setShowPrecious(true));

  const handleCloseArgentina = () => dispatch(setShowArgentina(false));
  const handleShowArgentina = () => dispatch(setShowArgentina(true));

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <button onClick={handleShow} className="pressable-button-resto">
            Vana Villem
          </button>
          <ModalVanaVillem handleClose={handleClose} />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowPrecious}
            className="pressable-button-resto"
          >
            Precious Cafe
          </button>
          <ModalPreciousCafe handleClosePrecious={handleClosePrecious} />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button onClick={handleShowRein} className="pressable-button-resto">
            Rein Cafe
          </button>
          <ModalKohvikRein handleCloseRein={handleCloseRein} />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowJaposha}
            className="pressable-button-resto"
          >
            Japosha Sushi
          </button>
          <ModalJaposha handleCloseJaposha={handleCloseJaposha} />
        </Col>
        <Col xs={12}>
          <button
            onClick={handleShowArgentina}
            className="pressable-button-resto"
          >
            Restoran Argentina
          </button>
          <ModalArgentina handleCloseArgentina={handleCloseArgentina} />
        </Col>
      </Row>
    </Container>
  );
}
export default RestaurantsComponent;
