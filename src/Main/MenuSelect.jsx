import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import WiFiComponent from "./MainSelectComponents/WiFiComponent";
import TrashComponent from "./MainSelectComponents/TrashComponent";
import ShopComponent from "./MainSelectComponents/ShopComponent/Map/ShopComponent";
import RestaurantsComponent from "./MainSelectComponents/RestaurantComponent/RestaurantsComponent";
import ContactComponent from "./MainSelectComponents/ContactComponent/ContactComponent";

function MenuSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = async () => {
    const { value: question } = await Swal.fire({
      title: "MENU",
      input: "select",
      inputOptions: {
        FAQ: {
          "Wi-fi": "Wi-fi",
          "Where to dispose of trash": "Where to dispose of trash",
          "Nearest stores": "Nearest stores",
          "Nearest restaurants": "Nearest restaurants",
          contact: "Contact",
        },
      },
      inputPlaceholder: "Select question",
      showCancelButton: false,
      showConfirmButton: true,
      confirmButtonText: "Confirm",
    });

    if (question) {
      setSelectedOption(question);
    } else {
      Swal.fire("Please choose a question");
    }
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "Wi-fi":
        return <WiFiComponent />;
      case "Where to dispose of trash":
        return <TrashComponent />;
      case "Nearest stores":
        return <ShopComponent />;
      case "Nearest restaurants":
        return <RestaurantsComponent />;
      case "contact":
        return <ContactComponent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button className="pressable-button " onClick={handleSelectOption}>
        MENU
      </button>
      <br />
      <br />
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

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
