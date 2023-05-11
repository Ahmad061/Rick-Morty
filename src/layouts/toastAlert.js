/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast, Flip, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { history } from "../helpers";

export const ToastAlert = (props) => {
  const alertRedux = useSelector((state) => state.alert);

  useEffect(() => {
    alertRedux.type = null;
  }, []);

  useEffect(() => {
    if (alertRedux?.type) {
      handleLoad(alertRedux);
    }
  }, [alertRedux]);

  //--------------------------- functions -----------------------------\\
  const handleLoad = (alertData) => {
    //toast.dismiss();

    switch (alertData.type) {
      case "alert-danger":
        toast.error(alertData.message);
        break;
      case "alert-success":
        toast.success(alertData.message);
        break;
      case "alert-warning":
        toast.warn(alertData.message);
        break;
      case "alert-info":
        toast.info(alertData.message);
        break;
      //_________________
      default:
        toast.error(alert.message);
        break;
    }
  };

  //============================= Return ================================\\
  return (
    <div>
      <ToastContainer
        position={"top-right"}
        autoClose={4000}
        hideProgressBar={true}
        //newestOnTop={true}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        //draggable
        pauseOnHovertransition={Bounce}
        transition={Bounce}
        //closeButton={<button>sss</button>}
        className="mt-5 height-60 overflow-hidden"
        //toastClassName=""
        // enableMultiContainer={false}
        // containerId={1}
      />
    </div>
  );
};
