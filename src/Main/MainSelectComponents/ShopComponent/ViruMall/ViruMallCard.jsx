import Card from "react-bootstrap/Card";
import ViruMall from "./ViruMall";

function StockmannCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipOKJtApGGZqm-h2UQa4f0ypNl4c6kj3FCAxJ2_Z=w408-h306-k-no"
          />
          <Card.Body>
            <Card.Text>
              <ViruMall />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default StockmannCard;
