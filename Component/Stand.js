import Image from "next/image";
import StandStyle from "../styles/Stand.module.css";

const Stand = () => {
  return (
    <div>
      <div className={StandStyle.container}>
        <div className={StandStyle.left}>
          <div className={StandStyle.imageWrapper}>
            <img src="/desktop/image-stand-out.jpg" alt="an egg" height="420" />
          </div>
        </div>
        <div className={StandStyle.right}>
          <div className={StandStyle.textWrapper}>
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers and copywriters, we'll build and
              extend yout brand in digital places
            </p>
            <a>LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stand;
