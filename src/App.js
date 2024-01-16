import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import { Layout } from "./shared/layout/layout";


function App() {
  return (
    <BrowserRouter >
    <Layout>
    <Navigation/>
    </Layout>
    </BrowserRouter >

  );
}

export default App;
