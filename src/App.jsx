import { Button, Container } from "@mui/material";
import "./App.css";
import {
  ConfirmationNumber,
  Delete,
  Edit,
  Gamepad,
  Send,
} from "@mui/icons-material";

function App() {
  return (
    <>
      <Container>
        <h1>Hello world</h1>
        <Button variant="text">Send</Button>
        <Button variant="contained" color="error" startIcon={<Delete />}>
          Delete
        </Button>
        <Button variant="contained" color="success" startIcon={<Edit />}>
          Edit
        </Button>
        <Button variant="outlined" endIcon={<Gamepad />}>
          Controls
        </Button>
      </Container>
    </>
  );
}

export default App;
