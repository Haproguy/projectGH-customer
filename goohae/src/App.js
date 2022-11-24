import "./CommonFiles/Common.css";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Header from "./CommonFiles/Header/Header";
import Footer from "./CommonFiles/Footer/Footer";
import MainPage from "./MainPage/MainPage";
import SubPageLiving from "./SubPage/Living/SubPageLiving";
import SubPageBedroom from "./SubPage/Bedroom/subPageBedroom";
import SubPageDressroom from "./SubPage/Dressroom/SubPageDressroom";
import SubPageDining from "./SubPage/Dining/SubPageDining";
import ProductDetail from "./ProductDetail/ProductDetail";
import CustomerMain from "./customer/customerMain/customerMain";
import Notice from "./customer/notice/notice";
import BoardWrite from './customer/boardWrite/boardWrite';
import ReadPage from "./customer/customerCommonComponant/readPage";
import FAQ from "./customer/FAQ/FAQ";
import Inquiry from './customer/inquiry/Inquiry'
import FAQRead from "./customer/FAQ/FAQread";
import { useState } from "react";

export default function App() {
  const [CategoryIdx, setCategoryIdx] = useState();

  function navEvt(e) {
    setCategoryIdx(+e.target.id.split(".")[1]);
    window.scrollTo({ top: 0 });
  }


  return (
    <>
      <BrowserRouter>
        <Header navEvt={navEvt} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subPageLiving" element={<SubPageLiving getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/subPageBedroom" element={<SubPageBedroom getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/subPageDining" element={<SubPageDining getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/subPageDressroom" element={<SubPageDressroom getIdx={CategoryIdx} navEvt={navEvt} />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/cutomerMain" element={<CustomerMain />} />
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/boardWrite" element={<BoardWrite/>}/>
          <Route path="/ReadPage" element={<ReadPage/>}/>
          <Route path="/FAQ" element={<FAQ/>}/>
          <Route path="/inquiry" element={<Inquiry/>}/>
          <Route path="/FAQRead" element={<FAQRead/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}