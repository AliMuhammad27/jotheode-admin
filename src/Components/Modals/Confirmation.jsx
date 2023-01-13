import Swal from "sweetalert2";
export default function Confirmation(
  title,
  confirmButtonText,
  successFunction
) {
  return Swal.fire({
    title,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText: "No",
    customClass: {
      confirmButton:
        "main-modalbtn-light me-md-3 mb-2 .swal2-styled.swal2-confirm:focus",
      cancelButton: "main-modalbtn mb-2",
      title: "modal-text mt-2 fw-lighter",
    },
    background: "#fff",
    color: "black",
    width: 595,
    heightAuto: true,
    icon: "info",
  }).then((result) => {
    if (result.isConfirmed) {
      successFunction();
    }
  });
}
