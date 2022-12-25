import MobileBrands from "./components/Brands/mobileBrands";
import GlobalStyles from "./styles/global";
import Faq from "./components/Faq/faq";
import Issues from "./components/Issues/issues";
import NavBar from "./components/Navbar/navbar";
import Testimonials from "./components/Testimonials/testimonials";
import Footer from "./components/Footer/footer";
import BusinessDeals from "./components/BusinessDeals/businessDeals";
import CustomerForm from "./components/CustomerForm/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GlobalStyles />
      <CustomerForm />

      <Issues />
      <div className="site-wrapper">
        <Faq />
      </div>
      <BusinessDeals />
      <div className="site-wrapper">
        <Testimonials />
      </div>
      <div className="site-wrapper">
        <MobileBrands />
      </div>
      <Footer />
    </div>
  );
}

export default App;
