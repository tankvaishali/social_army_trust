import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import './App.css';
import Homepage from "./Component/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charity from "./Component/Charity";
import ScrollToTop from "./Component/ScrollToTop";
import Contactus from "./Component/Contactus";
import Eventpage from "./Component/Eventpage";
import Volunteerpage from "./Component/Volunteerpage";
import CowEvent01 from "./Component/CowEvent01";
import CowEvent02 from "./Component/CowEvent02";
import CowEvent03 from "./Component/CowEvent03";
import FoodEvent01 from "./Component/FoodEvent01";
import FoodEvent02 from "./Component/FoodEvent02";
import FoodEvent03 from "./Component/FoodEvent03";
import EnvirEvent01 from "./Component/EnvirEvent01";
import EnvirEvent02 from "./Component/EnvirEvent02";
import EnvirEvent03 from "./Component/EnvirEvent03";
import ShikshaEvent01 from "./Component/ShikshaEvent01";
import ShikshaEvent02 from "./Component/ShikshaEvent02";
import ShikshaEvent03 from "./Component/ShikshaEvent03";
import BloodEvent01 from "./Component/BloodEvent01";
import BloodEvent02 from "./Component/BloodEvent02";
import BloodEvent03 from "./Component/BloodEvent03";
import DrugEvent01 from "./Component/DrugEvent01";
import DrugEvent02 from "./Component/DrugEvent02";
import DrugEvent03 from "./Component/DrugEvent03";
import WomenEvent01 from "./Component/WomenEvent01";
import WomenEvent02 from "./Component/WomenEvent02";
import WomenEvent03 from "./Component/WomenEvent03";
import Payment from "./Component/Payment";
import SeeAll from "./Component/SeeAll";
import HeartLine from "./Component/HeartLine";
import Awards from "./Component/Awards";
import Certificate from "./Component/Certificate";
import EmailContactForm from "./Component/EmailContactForm";
import Mediacoverage from "./Component/Mediacoverage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/HeartLine" element={<HeartLine />} />
          <Route path="/charitypage" element={<Charity />} />
          <Route path="/eventpage" element={<Eventpage />} />
          <Route path="/contactuspage" element={<Contactus />} />
          <Route path="/volunteerpage" element={<Volunteerpage />} />
          <Route path="/paymentpage" element={<Payment />} />
          <Route path="/Awards" element={<Awards />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Mediacoverage" element={<Mediacoverage />} />

          <Route path="/seeallpage" element={<SeeAll />} />
          <Route path="/CowEvent01" element={<CowEvent01 />} />
          <Route path="/CowEvent02" element={<CowEvent02 />} />
          <Route path="/CowEvent03" element={<CowEvent03 />} />
          <Route path="/FoodEvent01" element={<FoodEvent01 />} />
          <Route path="/FoodEvent02" element={<FoodEvent02 />} />
          <Route path="/FoodEvent03" element={<FoodEvent03 />} />
          <Route path="/EnvirEvent01" element={<EnvirEvent01 />} />
          <Route path="/EnvirEvent02" element={<EnvirEvent02 />} />
          <Route path="/EnvirEvent03" element={<EnvirEvent03 />} />
          <Route path="/ShikshaEvent01" element={<ShikshaEvent01 />} />
          <Route path="/ShikshaEvent02" element={<ShikshaEvent02 />} />
          <Route path="/ShikshaEvent03" element={<ShikshaEvent03 />} />
          <Route path="/BloodEvent01" element={<BloodEvent01 />} />
          <Route path="/BloodEvent02" element={<BloodEvent02 />} />
          <Route path="/BloodEvent03" element={<BloodEvent03 />} />
          <Route path="/DrugEvent01" element={<DrugEvent01 />} />
          <Route path="/DrugEvent02" element={<DrugEvent02 />} />
          <Route path="/DrugEvent03" element={<DrugEvent03 />} />
          <Route path="/WomenEvent01" element={<WomenEvent01 />} />
          <Route path="/WomenEvent02" element={<WomenEvent02 />} />
          <Route path="/WomenEvent03" element={<WomenEvent03 />} />
          <Route path="/EmailContactForm" element={<EmailContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
