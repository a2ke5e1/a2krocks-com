import SocialMediaUrls from "./SocialMediaUrls";

class AboutMe {

    mName: string
    mail: string
    social_media: SocialMediaUrls

    constructor() {
        this.mName = "Apurv Ajay Kumar"
        this.mail = "me@a2krocks.com"
        this.social_media = new SocialMediaUrls()
    }

}
export default AboutMe;