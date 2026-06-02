import Seo from "../components/Seo";
import HeroWithImages from "../components/HeroWithImages";
import Features from "../components/Features";
import Showcase from "../components/Showcase";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <main>
      <Seo
        path="/"
        title="Premium Web Development & 3D Design Studio"
        description="Aether Studio blends immersive WebGL 3D experiences, pixel-perfect design, and high-performance engineering to build next-generation websites for visionary brands."
      />
      <HeroWithImages />

      <Features />
      <Showcase />
      <Cta />
    </main>
  );
};

export default Home;
