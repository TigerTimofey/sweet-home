import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import {
  setShowMiniRimi,
  setShowStockmann,
  setShowPrismaShop,
  setShowViruMall,
} from "../../../services/stateServices";

import ModalMiniRimi from "./MiniRimi/ModalMiniRimi";
import ModalStockmann from "./Stockmann/ModalStockmann";
import ModalPrismaShop from "./PrismaShop/ModalPrismaShop";
import ModalViruMall from "./ViruMall/ModalViruMall";

const shops = [
  {
    name: "Mini Rimi",
    showAction: setShowMiniRimi,
    modalComponent: ModalMiniRimi,
  },
  {
    name: "Stockmann",
    showAction: setShowStockmann,
    modalComponent: ModalStockmann,
  },
  {
    name: "Prisma 24/7",
    showAction: setShowPrismaShop,
    modalComponent: ModalPrismaShop,
  },
  {
    name: "Viru Mall",
    showAction: setShowViruMall,
    modalComponent: ModalViruMall,
  },
];

function ShopComponent() {
  const dispatch = useDispatch();

  const handleToggle = (showAction) => () => {
    dispatch(showAction(true));
  };

  const handleClose = (showAction) => () => {
    dispatch(showAction(false));
  };

  return (
    <Container>
      <Row xs={6}>
        {shops.map((shop, index) => (
          <Col xs={12} key={index}>
            <button
              onClick={handleToggle(shop.showAction)}
              className="pressable-button-resto"
            >
              {shop.name}
            </button>
            <shop.modalComponent handleClose={handleClose(shop.showAction)} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShopComponent;
