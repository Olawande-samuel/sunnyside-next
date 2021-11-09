import TestimonyStyles from "../styles/Testimony.module.css"

const Testimony = () => {
    return (
        <div className={TestimonyStyles.container}>
            <h4>CLIENTS TESTIMONIALS</h4>
            <div className={TestimonyStyles.testimonialWrapper}>
                <div className={TestimonyStyles.testimonial}>
                    <div className={TestimonyStyles.imgWrapper}>
                        <img src="/image-emily.jpg" alt="" />
                    </div>
                    <div className={TestimonyStyles.testText}>
                        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    </div>
                    <div className={TestimonyStyles.author}>
                        <p className={TestimonyStyles.testifier}>Emily R.</p>
                        <p className={TestimonyStyles.title}>Marketing Director</p>
                    </div>
                </div>
 
                <div className={TestimonyStyles.testimonial}>
                    <div className={TestimonyStyles.imgWrapper}>
                        <img src="/image-thomas.jpg" alt="" />
                    </div>
                    <div className={TestimonyStyles.testText}>
                        <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's successs made it a satisfying and enjoyable experience</p>
                    </div>
                    <div className={TestimonyStyles.author}>
                        <p className={TestimonyStyles.testifier}>Thomas S.</p>
                        <p className={TestimonyStyles.title}>Chief Operating Officer</p>
                    </div>
                </div>
                <div className={TestimonyStyles.testimonial}>
                    <div className={TestimonyStyles.imgWrapper}>
                        <img src="/image-jennie.jpg" alt="" />
                    </div>
                    <div className={TestimonyStyles.testText}>
                        <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended</p>
                    </div>
                    <div className={TestimonyStyles.author}>
                        <p className={TestimonyStyles.testifier}>Jennie F.</p>
                        <p className={TestimonyStyles.title}>Business Owner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony
