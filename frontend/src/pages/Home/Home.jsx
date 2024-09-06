import Helmet from "react-helmet";
import { HomeHero } from "../../components";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeHero />
    </>
  );
}

export default Home;
