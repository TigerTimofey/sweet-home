import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { loginWifi, passwordWifi } from "../../../services/dataForComponents";
import Badge from "react-bootstrap/Badge";

function WiFiComponent() {
  const [copied, setCopied] = useState(false);

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(passwordWifi);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const handlePasswordClick = () => {
    copyPasswordToClipboard();
  };

  return (
    <div className="text-contact d-flex  text-wifi ">
      <Container>
        <br />

        <Row>
          <Col xs={12}>
            Login:{" "}
            <div>
              <span className="text-black">{loginWifi}</span>
            </div>
          </Col>
          <Col xs={12}>
            Password:{" "}
            <span
              className="text-black"
              onClick={handlePasswordClick}
              style={{ cursor: "pointer" }}
            >
              <div>
                {" "}
                {passwordWifi}
                {copied && ( // Conditionally render the Badge when copied is true
                  <h6>
                    <Badge bg="secondary">Copied</Badge>
                  </h6>
                )}
              </div>
            </span>
          </Col>
          <br /> <br /> <br />
        </Row>
      </Container>
    </div>
  );
}

export default WiFiComponent;
