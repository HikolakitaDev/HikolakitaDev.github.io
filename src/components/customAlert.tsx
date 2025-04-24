
import { Alert, Snackbar, Slide } from "@mui/material";

function CustomAlert({ open, onClose, title, text }) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={(props) => <Slide {...props} direction="down" />}
      autoHideDuration={4000}
    >
      <Alert
        onClose={onClose}
        severity="info"
        sx={{
          width: "100%",
          backgroundColor: "#1976d2",
          color: "white",
        }}
      >
        <strong>{title}</strong>
        <div>{text}</div>
      </Alert>
    </Snackbar>
  );
}

export default CustomAlert;
