import Nav from "./Nav";
import HeroStyles from "../styles/Hero.module.css";
const Hero = () => {
  return (
    <div className={HeroStyles.container}>
      <Nav />
      <div className={HeroStyles.content}>
        <h1>WE ARE CREATIVES</h1>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Hero;
