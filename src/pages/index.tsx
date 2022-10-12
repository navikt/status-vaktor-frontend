import type { NextPage } from "next";
import VaktorTimeline from "../components/VaktorTimeline";
import moment from "moment";
import "moment/locale/nb";
import Admin from "../components/ApproveSchema";
import NavBar from "../components/NavBar";
import { RouterAdmin, RouterVaktor } from '../types/routes';

const Home: NextPage = () => {
  moment.locale("nb");
  return (
    <>
      <NavBar></NavBar>
      <div className="Container">
        <VaktorTimeline></VaktorTimeline>
      </div>
    
    </>
  );
};

export default Home;


