import Swal from "sweetalert2/dist/sweetalert2.js";

function Success() {
  console.log("success");
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1500,
  });

  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
  return null;
}
export default Success;
