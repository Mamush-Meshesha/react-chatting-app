import { FC } from "react";
import Dashboardheader from "../components/ui/dashboardheader";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="!w-[80%] ml-[20%] h-screen" style={{ backgroundImage: `url("./back.png")`}}>
      
          
          <div>
             <Dashboardheader />
          </div>
    </div>
  );
};

export default Home;
