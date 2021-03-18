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
import Categorycrud from "./fetchsamples/Categorycrud";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import Homepage from './Routesample/Homepage'
import Aboutpage from './Routesample/Aboutpage'
import Contactpage from './Routesample/Contactpage'
import Productlistpage from "./Routesample/Productlistpage";
import Productdetailpage from "./Routesample/Productdetailpage";
import Footerpage from "./Routesample/Footerpage";
import Nomatch from "./Routesample/Nomatch";
import Userlist from "./contextsample/Userlist";
import Userdetail from "./axiossample/Userdetail";
import Addprice from "./contextsample/Addprice";
import Pricetable from "./contextsample/Pricetable";
import { PriceProvider } from './context/Pricecontext'
import { Userprovider } from './context/Usercontext'
import Adduser from "./contextsample/Adduser";
import 'antd/dist/antd.css';
import Introant from "./antdesignsample/Introant";
import Antproductlist from "./antdesignsample/Antproductlist";
import Antaddcategory from "./antdesignsample/Antaddcategory";


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

      <Antaddcategory></Antaddcategory>
      {/* <Antproductlist></Antproductlist> */}
      {/* <Introant></Introant> */}

      {/* <PriceProvider>
        <Userprovider>
          <BrowserRouter>

            <Route path='/Adduser'>
              <Adduser></Adduser>
            </Route>

            <Route path='/Userlist'>
              <Userlist></Userlist>
            </Route>

          </BrowserRouter>
        </Userprovider>
      </PriceProvider> */}

      {/* <PriceProvider>
        <Addprice></Addprice>
        <Pricetable></Pricetable>
      </PriceProvider> */}
      {/* <BrowserRouter>
        <Route exact path='/Users'>
          <Userlist></Userlist>
        </Route>

        <Route path='/Users/:id'>
          <Userdetail></Userdetail>
        </Route>
      </BrowserRouter> */}

      {/* Route ları sırayla okuyor. exact anahtar kelimesinin önemi
      <BrowserRouter>


        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li>
            <Link to='/Productlist'>Products</Link>
          </li>
        </ul>


        <Switch>

          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>

          <Route exact path='/Product/Detail/:id'>
            <Productdetailpage></Productdetailpage>
          </Route>


          <Route path='/About'>
            <Aboutpage></Aboutpage>
          </Route>

          <Route path='/Contact'>
            <Contactpage></Contactpage>
          </Route>

          <Route path='/Productlist'>
            <Productlistpage></Productlistpage>
          </Route> */}

      {/* Herhangi bir route ile eşleşmediği durumlarda 404 sayfası olarak aşağıdaki blok çalışır */}
      {/* <Route path='*'>
            <Nomatch></Nomatch>
          </Route>

        </Switch>

        <Footerpage></Footerpage>
      </BrowserRouter> */}
      {/* <Categorycrud></Categorycrud> */}
      {/* <Productcrud></Productcrud> */}
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
