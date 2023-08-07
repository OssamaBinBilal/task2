import {
  createContext,
  useContext,
  useState,
  useEffect,
  forwardRef,
} from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const SnackbarContext = createContext();

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function SnackbarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsOpen(false);
  };

  const popSnackbar = (passedMessage, passedType) => {
    setMessage(passedMessage);
    setType(passedType);
    setIsOpen(true);
  };

  const value = {
    popSnackbar,
  };

  return (
    <SnackbarContext.Provider value={value}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={isOpen} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={type}
            sx={{ width: "100%", fontWeight: "bold" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Stack>
      {children}
    </SnackbarContext.Provider>
  );
}
