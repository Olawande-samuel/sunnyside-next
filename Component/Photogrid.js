import PhotogridStyles from "../styles/Photogrid.module.css";

const Photogrid = () => {
  return (
    <div className={PhotogridStyles.container}>
      <div className={PhotogridStyles.imagewrapper}>
        <img src="/desktop/image-gallery-milkbottles.jpg" alt="milk bottle" />
      </div>
      <div className={PhotogridStyles.imagewrapper}>
        <img src="/desktop/image-gallery-orange.jpg" alt="orange on a plate" />
      </div>
      <div className={PhotogridStyles.imagewrapper}>
        <img src="/desktop/image-gallery-cone.jpg" alt="icecream cone" />
      </div>
      <div className={PhotogridStyles.imagewrapper}>
        <img src="/desktop/image-gallery-sugarcubes.jpg" alt="sugar cubes" />
      </div>
    </div>
  );
};

export default Photogrid;
