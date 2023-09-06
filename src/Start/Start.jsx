import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { passwordLogin } from "../services/PasswordLogin";
import { setPasswordCheck } from "../services/stateServices";

import Swal from "sweetalert2/dist/sweetalert2.js";

function Start() {
  const dispatch = useDispatch();

  useEffect(() => {
    const passwordControl = async () => {
      const { value: enteredPassword } = await Swal.fire({
        title: "Enter your password",
        input: "password",
        inputPlaceholder: "Enter your password",
        inputAttributes: {
          maxlength: 10,
          autocapitalize: "off",
          autocorrect: "off",
        },
      });
      if (enteredPassword === passwordLogin) {
        dispatch(setPasswordCheck(true));
      } else if (enteredPassword === "") {
        Swal.fire("Enter password");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        Swal.fire("Incorrect password");
        dispatch(setPasswordCheck(false));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    };

    passwordControl();
  }, [dispatch]);

  return null;
}

export default Start;
