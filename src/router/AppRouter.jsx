import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import FaqPages from "../pages/FaqPages";
import ContactPage from "../pages/ContactPage";
import MenuPage from "../pages/MenuPage";

const AppRouter = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/"  element={<App />}>
           <Route path="/" index element={<HomePage />} /> 
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/faq" element={<FaqPages />} />
           <Route path="/gallery" element={<Gallery />} />
           <Route path="/menu" element={<MenuPage />} />
        </Route>
        </>
        
    )
);

export default AppRouter