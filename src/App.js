import  React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Footer from "./components/Footer";
import Medium from "./components/medium";
import Header from './components/Navbar';
import FormValidation from "./components/pr";


function App() {
  return (
    <div className="App">
{/* <Header/>
<Medium/>
<Footer/> */}
<BrowserRouter>
<Routes>
  <Route path="/new" element={<FormValidation/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
