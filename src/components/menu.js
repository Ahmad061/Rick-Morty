import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { history } from "../helpers";
import Gallery from "./gallery";

function Menu(props) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const installFn = async () => {
    if (deferredPrompt !== null) {
      if (deferredPrompt) {
        deferredPrompt.prompt();
      }
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    }
  };

  const changeComponent = (component) => {
    if (props.onChangeComponent) {
      props.onChangeComponent(component);
    }
  };

  //---------------- return -----------------\\
  return (
    <Box
      component="span"
      sx={{
        p: 3,
        borderRadius: "5px",
        backgroundColor: "#474747cc",
        // "&:hover": {
        //   backgroundColor: "primary.main",
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      {/* Galery */}
      <Button
        onClick={() => changeComponent(<Gallery />)}
        variant="contained"
        color="inherit"
        sx={{ m: 2 }}
      >
        Gallery
      </Button>

      {/* Install */}
      {deferredPrompt ? (
        <Button
          onClick={installFn}
          variant="contained"
          color="info"
          sx={{ m: 2 }}
        >
          Install
        </Button>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Menu;
