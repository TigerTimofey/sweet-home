import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";

function MenuSelect() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleSelectFruit = async () => {
    const { value: fruit } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        Fruits: {
          apples: "Apples",
          bananas: "Bananas",
          grapes: "Grapes",
          oranges: "Oranges",
        },
        Vegetables: {
          potato: "Potato",
          broccoli: "Broccoli",
          carrot: "Carrot",
        },
        icecream: "Ice cream",
      },
      inputPlaceholder: "Select a fruit",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "oranges") {
            resolve();
          } else {
            resolve("You need to select oranges :)");
          }
        });
      },
      customClass: {
        input: "custom-dropdown", // Apply custom style to the dropdown
      },
      // ... rest of your Swal.fire options ...
    });

    if (fruit) {
      setSelectedFruit(fruit);
      Swal.fire(`You selected: ${fruit}`);
    }
  };

  return (
    <div>
      {selectedFruit ? (
        <div>You selected: {selectedFruit}</div>
      ) : (
        <button onClick={handleSelectFruit}>Select a Fruit</button>
      )}
    </div>
  );
}

export default MenuSelect;
