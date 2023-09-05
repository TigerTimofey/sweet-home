import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { loginWifi, passwordWifi } from "../../services/dataForComponents";

function WiFiComponent() {
  const [copied, setCopied] = useState(false);

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(passwordWifi);
    setCopied(true);
    setTimeout(() => setCopied(false), 10000); // Уберет текст "Скопировано" через 2 секунды
  };

  return (
    <div className="text-contact d-flex  text-wifi ">
      <Container>
        <Row>
          <Col xs={6}>
            Login: <span className="text-black">{loginWifi}</span>
          </Col>

          <Col xs={6}>
            Password: <span className="text-black">{passwordWifi}</span>{" "}
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              {" "}
              <button
                className="pressable-button-wifi "
                onClick={copyPasswordToClipboard}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WiFiComponent;
