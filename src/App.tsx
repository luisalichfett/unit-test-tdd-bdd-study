import "./App.css";
import { Button } from "components";

function App() {
  return (
    <div className="App">
      <h1>Content Session: Unit Test, TDD & BDD</h1>
      <Button
        type="primary"
        label="Submit"
        className="submitButton"
        onClick={() => window.alert("Form submitted!")}
      />
      <Button
        type="primary"
        label="Submit"
        className="disabledButton"
        disabled
        onClick={() => window.alert("Button is disabled it won't be trigered")}
      />
    </div>
  );
}

export default App;
