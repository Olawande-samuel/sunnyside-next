import Styles from "../styles/Contact.module.css"
const contact = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <img src="/desktop/image-graphic-design.jpg" alt="" />
            </div>
            <div className={Styles.right}>
                <div className={Styles.formWrapper}>
                    <h1>Contact Us Today</h1>
                    <form>
                        <div className={Styles.nameWrapper}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" className={Styles.name} />
                        </div>
                        <div className={Styles.mailWrapper}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" className={Styles.email} />
                        </div>
                        <div className={Styles.phoneWrapper}>
                            <label htmlFor="phone">Phone:</label>
                            <input type="phone" className={Styles.phone} />
                        </div>
                        <div className={Styles.textWrapper}>
                            <label htmlFor="name">Message</label>
                            <textarea name="message" id="message" cols="40" rows="8"></textarea>
                        </div>
                        <button type="submit" className={Styles.btn}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact
