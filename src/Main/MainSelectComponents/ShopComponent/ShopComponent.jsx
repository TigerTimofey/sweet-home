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

function ShopComponent() {
  const dispatch = useDispatch();

  const handleCloseMiniRimi = () => dispatch(setShowMiniRimi(false));
  const handleShowMiniRimi = () => dispatch(setShowMiniRimi(true));

  const handleCloseStockmann = () => dispatch(setShowStockmann(false));
  const handleShowStockmann = () => dispatch(setShowStockmann(true));

  const handleClosePrismaShop = () => dispatch(setShowPrismaShop(false));
  const handleShowPrismaShop = () => dispatch(setShowPrismaShop(true));

  const handleCloseViruMall = () => dispatch(setShowViruMall(false));
  const handleShowViruMall = () => dispatch(setShowViruMall(true));
  return (
    <Container>
      <Row xs={6}>
        <Col xs={12}>
          <button
            onClick={handleShowMiniRimi}
            className="pressable-button-resto"
          >
            Mini Rimi
          </button>
          <ModalMiniRimi handleCloseMiniRimi={handleCloseMiniRimi} />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowStockmann}
            className="pressable-button-resto"
          >
            Stockmann
          </button>
          <ModalStockmann handleCloseStockmann={handleCloseStockmann} />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowPrismaShop}
            className="pressable-button-resto"
          >
            Prisma 24/7
          </button>
          <ModalPrismaShop handleClosePrismaShop={handleClosePrismaShop} />
        </Col>
        <Col xs={12}>
          <button
            onClick={handleShowViruMall}
            className="pressable-button-resto"
          >
            Viru Mall
          </button>
          <ModalViruMall handleCloseViruMall={handleCloseViruMall} />
        </Col>
        <br /> <br />
      </Row>
    </Container>
  );
}
export default ShopComponent;
