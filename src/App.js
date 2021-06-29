import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { useState } from "react";
const Data = React.createContext(null);
export { Data };
function App() {
  const [isVoiceSearch, setIsVoiceSearch] = useState(false);

  return (
    <Data.Provider value={{ isVoiceSearch, setIsVoiceSearch }}>
      <HomePage />
    </Data.Provider>
  );
}

export default App;
