import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./AlertStyles.css"; // Import custom CSS for SweetAlert

const MySwal = withReactContent(Swal);

const showAlert = (icon, title, text, customClass) => {
  MySwal.fire({
    icon,
    title,
    text,
    customClass: {
      popup: customClass,
    },
    showConfirmButton: false,
    timer: 1500,
  });
};

export const showSuccessAlert = (title, text) => {
  showAlert("success", title, text, "custom-success-alert");
};

export const showErrorAlert = (title, text) => {
  showAlert("error", title, text, "custom-error-alert");
};

export const showWarningAlert = (title, text) => {
  showAlert("warning", title, text, "custom-warning-alert");
};
