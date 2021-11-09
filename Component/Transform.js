import TransStyle from "../styles/Transform.module.css";
import Image from "next/image";
const Transform = () => {
  return (
    <div className={TransStyle.container}>
      <div className={TransStyle.left}>
        <div className={TransStyle.textWrapper}>
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you
          </p>
          <a>LEARN MORE</a>
        </div>
      </div>
      <div className={TransStyle.right}>
        <div className={TransStyle.imageWrapper}>
          <img src="/desktop/image-transform.jpg" alt="an egg" height="396"/>
        </div>
      </div>
    </div>
  );
};

export default Transform;
