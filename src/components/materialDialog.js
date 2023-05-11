/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MaterialDialog(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.open) {
      setOpen(true);
    }
  }, []);

  //-------------------------- Functions ----------------------------\\
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  //=============================== Return ============================\\
  return (
    <div>
      <Dialog
        //fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth
        className={props.className}
        sx={{ margin: "0 auto" }}
      >
        {props.customField(handleClose, handleOpen)}
      </Dialog>
    </div>
  );
}
