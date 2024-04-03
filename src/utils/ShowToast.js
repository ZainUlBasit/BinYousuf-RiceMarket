import toast from "react-hot-toast";
import { MdWarning } from "react-icons/md";

export const SuccessToast = (msg) => {
  return toast.success(msg, {
    duration: 4000,
    position: "top-right",
    style: {
      border: "1px solid green",
      padding: "16px",
      color: "green",
      backgroundColor: "white",
      fontFamily: "Quicksand",
    },
    // icon:  size={24} color="#ff9800" />,

    iconTheme: {
      primary: "green",
      secondary: "white",
    },
  });
};

export const ErrorToast = (msg) => {
  return toast.error(msg, {
    duration: 4000,
    position: "top-right",
    style: {
      border: "1px solid red",
      padding: "16px",
      color: "red",
      backgroundColor: "white",
      fontFamily: "Quicksand",
    },
    iconTheme: {
      primary: "red",
      secondary: "white",
    },
  });
};
export const WarningToast = (msg) => {
  return toast(msg, {
    duration: 4000,
    position: "top-right",
    style: {
      border: "1px solid #ff9800",
      padding: "16px",
      color: "#ff9800",
      backgroundColor: "white",
      fontFamily: "Quicksand",
    },
    // Custom Icon
    icon: <MdWarning size={24} color="#ff9800" />,
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
    // iconTheme: {
    // primary: "red",
    // secondary: "white",
    // },
  });
};
