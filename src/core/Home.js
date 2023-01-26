import MobileBrands from "../components/Brands/mobileBrands";
import GlobalStyles from "../styles/global";
import Faq from "../components/Faq/faq";
import Issues from "../components/Issues/issues";
import NavBar from "../components/Navbar/navbar";
import Testimonials from "../components/Testimonials/testimonials";
import Footer from "../components/Footer/footer";
import BusinessDeals from "../components/BusinessDeals/businessDeals";
import CustomerForm from "../components/CustomerForm/index";
import Hero from "../components/Hero/hero";
import Float from "../Floating/float";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div className="App">
      <NavBar />
      <Hero />
      <GlobalStyles />
      <CustomerForm />

      <Issues />
      <Float />
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
    </motion.div>
  );
}

export default Home;
