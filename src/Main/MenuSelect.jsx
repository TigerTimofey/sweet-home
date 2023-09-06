import { useSelector, useDispatch } from "react-redux";

import { setSelectedOption } from "../services/stateServices";
import WiFiComponent from "./MainSelectComponents/WifiComponent/WiFiComponent";
import TrashComponent from "./MainSelectComponents/TrashComponent/TrashComponent";

import RestaurantsComponent from "./MainSelectComponents/RestaurantComponent/RestaurantsComponent";
import ContactComponent from "./MainSelectComponents/ContactComponent/ContactComponent";
import ShopComponent from "./MainSelectComponents/ShopComponent/ShopComponent";

import Swal from "sweetalert2/dist/sweetalert2.js";

function MenuSelect() {
  const dispatch = useDispatch();

  const selectedOption = useSelector((state) => state.selectedOption);

  const handleSelectOption = async () => {
    const { value: question } = await Swal.fire({
      title: "MENU",
      input: "select",
      inputOptions: {
        FAQ: {
          "Wi-Fi": "Wi-Fi",
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
      dispatch(setSelectedOption(question));
    } else {
      Swal.fire("Please choose a question");
    }
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "Wi-Fi":
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
      <button className="pressable-button" onClick={handleSelectOption}>
        MENU
      </button>
      <br />
      <br />
      {selectedOption && (
        <div>
          <h3>{selectedOption}</h3>
          {renderSelectedComponent()}
        </div>
      )}
    </div>
  );
}

export default MenuSelect;
