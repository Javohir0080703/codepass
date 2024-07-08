import { Outlet } from "react-router-dom";
import VerifyFooter from "../components/VerifyFooter";

const VerifyLayout = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="">
        {/* <Header/> */}
      </div>
      <main className="grow">
        <Outlet/>
      </main>
      <VerifyFooter/>
    </div>
  );
};

export default VerifyLayout;
