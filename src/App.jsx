import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import { SettingsProvider } from "./context/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <div>
        <Navbar />
        <Timer />
        <Footer />
      </div>
    </SettingsProvider>
  );
}

export default App;
