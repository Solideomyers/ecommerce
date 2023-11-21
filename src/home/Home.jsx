import React from "react";
import { Banner } from "./Banner";
import { HomeCategory } from "./HomeCategory";
import { BannerTop } from "./BannerTop";
import { CategoryShowCase } from "./CategoryShowCase";
import { Register } from "./Register";
import { SliderHome } from "../components/SliderHome";

export const Home = () => {
  return (
    <div>
      {/* <BannerTop /> */}
      {/* <Banner /> */}
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <SliderHome />
    </div>
  );
};
