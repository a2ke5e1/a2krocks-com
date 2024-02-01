import SocialMediaUrls from "./SocialMediaUrls";

class AboutMe {

    mName: string
    mail: string
    social_media: SocialMediaUrls

    constructor() {
        this.mName = "Apurv Ajay Kumar"
        this.mail = "aakapurv@gmail.com"
        this.social_media = new SocialMediaUrls()
    }

}
export default AboutMe;