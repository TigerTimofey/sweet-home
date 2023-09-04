import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { loginWifi, passwordWifi } from "../../services/dataForComponents";
function WiFiComponent() {
  return (
    <div className="text-contact d-flex text-start-special ">
      <Container>
        <Row>
          <Col xs={12}>
            Login: <span className="text-black">{loginWifi}</span>
          </Col>
          <Col xs={12}>
            {" "}
            Password: <span className="text-black">{passwordWifi}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default WiFiComponent;
