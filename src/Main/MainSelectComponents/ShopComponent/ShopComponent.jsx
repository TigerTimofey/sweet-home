import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";
import ModalMiniRimi from "./MiniRimi/ModalMiniRimi";
import ModalStockmann from "./Stockmann/ModalStockmann";
import ModalPrismaShop from "./PrismaShop/ModalPrismaShop";
import ModalViruMall from "./ViruMall/ModalViruMall";

function ShopComponent() {
  const [showMiniRimi, setShowMiniRimi] = useState(false);
  const handleCloseMiniRimi = () => setShowMiniRimi(false);
  const handleShowMiniRimi = () => setShowMiniRimi(true);

  const [showStockmann, setShowStockmann] = useState(false);
  const handleCloseStockmann = () => setShowStockmann(false);
  const handleShowStockmann = () => setShowStockmann(true);

  const [showPrismaShop, setShowPrismaShop] = useState(false);
  const handleClosePrismaShop = () => setShowPrismaShop(false);
  const handleShowPrismaShop = () => setShowPrismaShop(true);

  const [showViruMall, setShowViruMall] = useState(false);
  const handleCloseViruMall = () => setShowViruMall(false);
  const handleShowViruMall = () => setShowViruMall(true);
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
          <ModalMiniRimi
            showMiniRimi={showMiniRimi}
            handleCloseMiniRimi={handleCloseMiniRimi}
          />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowStockmann}
            className="pressable-button-resto"
          >
            Stockmann
          </button>
          <ModalStockmann
            showStockmann={showStockmann}
            handleCloseStockmann={handleCloseStockmann}
          />
        </Col>
        <br /> <br />
        <Col xs={12}>
          <button
            onClick={handleShowPrismaShop}
            className="pressable-button-resto"
          >
            Prisma 24/7
          </button>
          <ModalPrismaShop
            showPrismaShop={showPrismaShop}
            handleClosePrismaShop={handleClosePrismaShop}
          />
        </Col>
        <Col xs={12}>
          <button
            onClick={handleShowViruMall}
            className="pressable-button-resto"
          >
            Viru Mall
          </button>
          <ModalViruMall
            showViruMall={showViruMall}
            handleCloseViruMall={handleCloseViruMall}
          />
        </Col>
        <br /> <br />
      </Row>
    </Container>
  );
}
export default ShopComponent;
