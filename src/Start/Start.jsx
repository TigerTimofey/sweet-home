import React, { useEffect } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { passwordLogin } from "../services/PasswordLogin";

import { setPasswordCheck } from "../services/stateServices";
import { useDispatch } from "react-redux";

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
      console.log(typeof enteredPassword);
      console.log(typeof passwordLogin);
    };

    passwordControl();
  }, [dispatch]);

  return (
    <div>
      {/* {passwordCheck ? (
        <div>
          <p>Password correct! New component is shown.</p>
        </div>
      ) : (
        <p>Password is incorrect! New component is shown.</p>
      )} */}
    </div>
  );
}

export default Start;
