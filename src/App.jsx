import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <div>
        <Navbar />
        <Timer />
      </div>
    </SettingsProvider>
  );
}

export default App;
