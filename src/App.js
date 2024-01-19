import "./App.css";
import Navigation from "./shared/navigation/navigation";
import { Snackbar } from "./shared/snackbar/snackbar";
import { Layout } from "./shared/layout/layout";
import {  useState } from "react";


function App() {
  const [snackbarMsg, setSnackbarMsg] = useState('Welcome, Explore joyfully, stay delighted!');


  return (
    <Layout>
    {snackbarMsg&&<Snackbar message={snackbarMsg} handleClose={ setSnackbarMsg } classes={'bg-warning !text-dark'}/>}
          <Navigation/>
    </Layout>

  );
}

export default App;
