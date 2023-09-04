import Card from "react-bootstrap/Card";
import Japosha from "./Japosha";

function JaposhaCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipMcO_wyzOOeNhBG0mjAUjimc2-JqrEh28Q5VHuC=w426-h240-k-no"
          />
          <Card.Body>
            <Card.Text>
              <Japosha />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default JaposhaCard;
