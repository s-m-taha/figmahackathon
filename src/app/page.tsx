import Categories from "./component/Categories";
import CompanyLogo from "./component/companyLogo";

import Hero from "./component/Hero";
import HotProduct from "./component/hotProducts";
import OurProduct from "./component/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      

      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}