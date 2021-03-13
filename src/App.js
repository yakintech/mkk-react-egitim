// import HContent from "./hamgurgersite/HContent";
// import HFooter from "./hamgurgersite/HFooter";
// import HHeader from "./hamgurgersite/HHeader";
// import HNavbar from "./hamgurgersite/HNavbar";

import EContent from "./emlaksite/EContent";
import EFooter from "./emlaksite/EFooter";
import EHeader from "./emlaksite/EHeader";
import ENavbar from "./emlaksite/ENavbar";
import Csssample from "./Csssample";
import Csssample2 from "./Csssample2";
import Jsxsample from "./Jsxsample";
import Categoryselect from "./components/Categoryselect";
import Statesample from "./Statesample";
import Statesample2 from "./Statesample2";
import Statesample3 from "./Statesample3";
import Effecthooksample from "./Effecthooksample";
import Categorylistsample from "./Categorylistsample";
import Productcrud from "./fetchsamples/Productcrud";



function App() {

  let menus = [
    { name: 'Projects', link: '#projects' },
    { name: 'About', link: '#about' },
    { name: 'Contact', link: '#contact' },
  ]

  let categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Kamp Malzemeleri' },
    { id: 3, name: 'Spor' }

  ]

  return (
    <>
    <Productcrud></Productcrud>
    {/* <Categorylistsample></Categorylistsample> */}
    {/* <Effecthooksample></Effecthooksample> */}
    {/* <Statesample3></Statesample3> */}
      {/* <Statesample></Statesample> */}
      {/* <Jsxsample></Jsxsample> */}
      {/* <Csssample></Csssample>
    <Csssample2></Csssample2> */}
      {/* <Categoryselect data={categories}></Categoryselect> */}
      {/* <ENavbar logotitle='Merkezi Kayıt Kurumu' menu={menus}/>
      <EHeader />
      <EContent />
      <EFooter /> */}
      {
        // Hamburger Site Template
        /* <HNavbar></HNavbar>
        <HHeader></HHeader>
        <HContent></HContent>
        <HFooter></HFooter> */
      }
    </>
  );

}

export default App;
