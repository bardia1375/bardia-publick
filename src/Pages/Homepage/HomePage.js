import React from "react";

import Application from "./Application/Application";
import BestFactor from "./BestFactor/BestFactor";
import CustomerSatisfaction from "./CustomerSatisfaction/CustomerSatisfaction";
import CustomizableProduct from "./CustomizableProduct/CustomizableProduct";
import FamilierNahor from "./FamilierNahor/FamilierNahor";
import FeacherOfNahor from "./feacherOfNahor/feacherOfNahor";
import Footer from "./footer/footer";
// import Header from "./Header/Header";
import HeaderSample from "./Header/Header2";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeaderSample />
      <FeacherOfNahor />
      <FamilierNahor />
      <BestFactor />
      <Application />
      <CustomizableProduct />
      <CustomerSatisfaction />
      <Footer />
    </div>
  );
};

export default HomePage;
