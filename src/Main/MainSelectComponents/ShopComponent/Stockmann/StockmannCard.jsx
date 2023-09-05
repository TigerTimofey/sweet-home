import Card from "react-bootstrap/Card";
import Stockmann from "./Stockmann";

function StockmannCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipPKgQCCHhDo3wND7Mhq-UqS_nM7MSH5pwnzMStP=w408-h261-k-no"
          />
          <Card.Body>
            <Card.Text>
              <Stockmann />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default StockmannCard;
