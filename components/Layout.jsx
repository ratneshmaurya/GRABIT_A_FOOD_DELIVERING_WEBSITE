import Footer from "./Footer";
import Navbar from "./Navbar";

//we have to render our page components btwn navbar and footer
// we are using this layoyt in _app.js file, thus making here children
const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
  
};

export default Layout;
