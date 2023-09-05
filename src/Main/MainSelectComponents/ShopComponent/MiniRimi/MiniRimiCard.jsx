import Card from "react-bootstrap/Card";
import MiniRimi from "./MiniRimi";

function MiniRimiCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipPhSp8DhGIxmn0gPAuiyNSYwYT2J4PILUW94R0=w408-h306-k-no"
          />
          <Card.Body>
            <Card.Text>
              <MiniRimi />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default MiniRimiCard;
