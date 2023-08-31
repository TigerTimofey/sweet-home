import Card from "react-bootstrap/Card";

import vikky from "./vikky.png";
import US from "country-flag-icons/react/3x2/US";
import EE from "country-flag-icons/react/3x2/EE";
import RU from "country-flag-icons/react/3x2/RU";
import ES from "country-flag-icons/react/3x2/ES";

function ContactComponent() {
  return (
    <Card>
      <Card.Img className="image-contact" variant="top" src={vikky} />
      <Card.Body className="text-contact">
        <Card.Title>Viktoria</Card.Title>
        <US title="United States" className="flag-size" />{" "}
        <EE title="Estonia" className="flag-size" />{" "}
        <RU title="Russia" className="flag-size" />{" "}
        <ES title="Spain" className="flag-size" /> <br />
        <a href="tel:+37255647759">+372 55647759</a>
      </Card.Body>
    </Card>
  );
}

export default ContactComponent;
