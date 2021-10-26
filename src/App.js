import "./App.css";
import Welcome from "./pages/Welcome";
import PlannedLayout from "./pages/Layout/PlannedLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PlannedLayout>
        <Welcome />
      </PlannedLayout>
    </BrowserRouter>
  );
}

export default App;
