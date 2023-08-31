import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Button from "react-bootstrap/Button";
import WiFiComponent from "./MainSelectComponents/WiFiComponent";
import TrashComponent from "./MainSelectComponents/TrashComponent";
import ShopComponent from "./MainSelectComponents/ShopComponent";
import RestaurantsComponent from "./MainSelectComponents/RestaurantsComponent";
import ContactComponent from "./MainSelectComponents/ContactComponent";

function MenuSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = async () => {
    const { value: question } = await Swal.fire({
      title: "FAQ",
      input: "select",
      inputOptions: {
        FAQ: {
          wifi: "Wi-fi password",
          trash: "Where to dispose of trash",
          shop: "Nearest stores",
          restaurants: "Nearest restaurants",
          contact: "Contact",
        },
      },
      inputPlaceholder: "Choose question",
      showCancelButton: true,
    });

    if (question) {
      setSelectedOption(question);
    } else {
      Swal.fire("Please choose a question");
    }
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "wifi":
        return <WiFiComponent />;
      case "trash":
        return <TrashComponent />;
      case "shop":
        return <ShopComponent />;
      case "restaurants":
        return <RestaurantsComponent />;
      case "contact":
        return <ContactComponent />;
      default:
        return null;
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <br />
      <Button className="pressable-button" onClick={handleSelectOption}>
        Select an Option
      </Button>
      {selectedOption && (
        <div>
          <h3>{capitalizeFirstLetter(selectedOption)}</h3>
          {renderSelectedComponent()}
        </div>
      )}
    </div>
  );
}

export default MenuSelect;
