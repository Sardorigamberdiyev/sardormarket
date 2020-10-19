import React from "react";
import UpperFooter from "../components/footer/upper-footer";
import LowerFooter from "../components/footer/lower-footer";
import AdaptiveFooter from "../components/responsive/adaptive-footer";

const FooterContainer = () => {
  return (
      <div>
          <UpperFooter />
          <LowerFooter />
          <AdaptiveFooter />
      </div>
  )
};

export default FooterContainer;