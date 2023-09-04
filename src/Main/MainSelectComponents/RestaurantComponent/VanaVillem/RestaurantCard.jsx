import Card from "react-bootstrap/Card";

import VanaVillemPub from "./VanaVillemPub";

function RestaurantCard() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipPa_gQIBfG9-dWLDCA-KtLyFoSs219_d96_0mNA=w408-h306-k-no"
          />
          <Card.Body>
            <Card.Text>
              <VanaVillemPub />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default RestaurantCard;
