import Card from "react-bootstrap/Card";
import PreciousCafe from "./PreciousCafe";

function PreciousCafeCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipMN3SZ8WRYXt_-WEql8CfQcrg0w5fLkt8rJkHUq=w408-h306-k-no"
          />
          <Card.Body>
            <Card.Text>
              <PreciousCafe />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default PreciousCafeCard;
