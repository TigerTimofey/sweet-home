import Card from "react-bootstrap/Card";
import PrismaShop from "./PrismaShop";

function PrismaShopCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipOCGrNaORRs4Ehw9xpDyrbwTeVgpy0td5f2xIyO=w501-h240-k-no"
          />
          <Card.Body>
            <Card.Text>
              <PrismaShop />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default PrismaShopCard;
