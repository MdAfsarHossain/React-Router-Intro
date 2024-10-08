import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex flex-col items-center py-11">
      <Header></Header>

      {
      navigation.state === "loading" ? 
      <p>Loading...</p> : <Outlet></Outlet>
      }
      {/* <Outlet></Outlet> */}

      <Footer></Footer>
    </div>
  );
};

export default Home;
