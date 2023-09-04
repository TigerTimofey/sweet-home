import Card from "react-bootstrap/Card";
import KohvikRein from "./KohvikRein";

function RestaurantCardRein() {
  return (
    <>
      <div className="d-flex justify-content-around ">
        <Card>
          <Card.Img
            variant="top"
            src="https://lh5.googleusercontent.com/p/AF1QipMMw37u2Af4VUx4ORYAgyNLTefQ-8eF46dKJ-K6=w491-h240-k-no"
          />
          <Card.Body>
            <Card.Text>
              <KohvikRein />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default RestaurantCardRein;
