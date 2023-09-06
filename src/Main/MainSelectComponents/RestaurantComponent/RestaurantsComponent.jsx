import React from "react";
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

const restaurants = [
  {
    name: "Vana Villem",
    showAction: setShow,
    modalComponent: ModalVanaVillem,
  },
  {
    name: "Precious Cafe",
    showAction: setShowPrecious,
    modalComponent: ModalPreciousCafe,
  },
  {
    name: "Rein Cafe",
    showAction: setShowRein,
    modalComponent: ModalKohvikRein,
  },
  {
    name: "Japosha Sushi",
    showAction: setShowJaposha,
    modalComponent: ModalJaposha,
  },
  {
    name: "Restoran Argentina",
    showAction: setShowArgentina,
    modalComponent: ModalArgentina,
  },
];

function RestaurantsComponent() {
  const dispatch = useDispatch();

  const handleToggle = (showAction) => () => {
    dispatch(showAction(true));
  };

  return (
    <Container>
      <Row>
        {restaurants.map((restaurant, index) => (
          <Col xs={12} key={index}>
            <button
              onClick={handleToggle(restaurant.showAction)}
              className="pressable-button-resto"
            >
              {restaurant.name}
            </button>
            <restaurant.modalComponent
              handleClose={() => dispatch(restaurant.showAction(false))}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RestaurantsComponent;
