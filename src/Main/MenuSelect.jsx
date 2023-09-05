import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import WiFiComponent from "./MainSelectComponents/WiFiComponent";
import TrashComponent from "./MainSelectComponents/TrashComponent/TrashComponent";

import RestaurantsComponent from "./MainSelectComponents/RestaurantComponent/RestaurantsComponent";
import ContactComponent from "./MainSelectComponents/ContactComponent/ContactComponent";
import ShopComponent from "./MainSelectComponents/ShopComponent/ShopComponent";

function MenuSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = async () => {
    const { value: question } = await Swal.fire({
      title: "MENU",
      input: "select",
      inputOptions: {
        FAQ: {
          "Wi-fi": "Wi-fi",
          "Trash disposal location": "Trash disposal location",
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
      case "Trash disposal location":
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
