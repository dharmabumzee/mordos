import React from "react";
import { Desktop } from "./containers/Desktop";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="min-h-screen App bg-thistle">
      <Desktop />
      <Title />
    </div>
  );
}

export default App;
