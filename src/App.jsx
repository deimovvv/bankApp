import styles from "./style";
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Hero from './components/Hero'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import NavBar from "./components/NavBar";
import Billing from './components/Billing'
import Bussines from './components/Bussines'
import CardDeal from './components/CardDeal'
import Clients from './components/Clients'
import CTA from './components/CTA'
import Button from './components/Button'


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div> 

      <div className={`bg-primary ${styles.flexStart}`} > 
        <div className={`${styles.boxWidth}`}>
            <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} > 
        <div className={`${styles.boxWidth}`}>
            <Stats/>
            <Bussines/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
           <Clients/>
           <CTA/>
            <Footer/>
        </div>
      </div>

    </div>
  );
};

export default App;
