import "./App.css";
import Welcome from "./pages/Welcome";
import PlannedLayout from "./pages/Layout/PlannedLayout";
import { BrowserRouter, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";

function App() {
  return (
    <BrowserRouter>
      <PlannedLayout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
        <Route exact path="/code_confirm" component={CodeConfirm} />
      </PlannedLayout>
    </BrowserRouter>
  );
}

export default App;
