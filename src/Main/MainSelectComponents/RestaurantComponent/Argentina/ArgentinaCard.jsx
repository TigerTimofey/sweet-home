import Card from "react-bootstrap/Card";
import Argentina from "./Argentina";

function ArgentinaCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipNfxLyotmUmHq3jnek--KTiukXbzZJ9amYuhBLX=w408-h272-k-no"
          />
          <Card.Body>
            <Card.Text>
              <Argentina />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ArgentinaCard;
