import CFA from "@/componants/page/CFA";
import Counters from "@/componants/page/Counters";
import Footer from "@/componants/page/Footer";
import Get_started from "@/componants/page/Get_started";
import Hero from "@/componants/page/Hero";
import Plans from "@/componants/page/Plans";
import Services from "@/componants/page/services";
import Steps from "@/componants/page/Steps";
import Testimonials from "@/componants/page/Testimonials";

export default function Home() {
  return (
    <>
  {/* <div className="container flex flex-col justify-center items-center w-[85rem]"> */}
<Hero />
 <Services />
<Get_started />
<Counters />
<Steps />
<Testimonials />
<Plans />
<CFA />
<Footer />
  {/* </div> */}
  </>
  );
}
