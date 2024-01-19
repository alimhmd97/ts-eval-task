import "./App.css";
import Navigation from "./components/navigation/navigation";
import { Snackbar } from "./shared/UI/snackbar";
import { Layout } from "./shared/layout/layout";
import { useEffect, useState } from "react";


function App() {
  const [snackbarMsg, setSnackbarMsg] = useState('');

  useEffect(() => {
    setSnackbarMsg('Welcome, Explore joyfully, stay delighted!')
  }, []);
  return (
    <Layout>
    {snackbarMsg&&<Snackbar message={snackbarMsg} handleClose={ setSnackbarMsg } classes={'bg-warning !text-dark'}/>}
          <Navigation/>
    </Layout>

  );
}

export default App;
