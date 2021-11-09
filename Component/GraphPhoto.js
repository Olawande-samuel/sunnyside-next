import GraphPhotoStyle from "../styles/GraphPhoto.module.css"

const GraphPhoto = () => {
    return (
        <div className={GraphPhotoStyle.container}>
        <div className={GraphPhotoStyle.graphics}>
          <div className={GraphPhotoStyle.textWrapper}>
            <h3>Graphic Design</h3>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention</p>
            
          </div>
        </div>
        <div className={GraphPhotoStyle.photo}>
            <div className={GraphPhotoStyle.textWrapper}>
                <h3>Photography</h3>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image </p>
            </div>
        </div>
      </div>
    )
}

export default GraphPhoto
