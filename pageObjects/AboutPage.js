let BasePage = require('./BasePage.js').BasePage

class AboutPage extends BasePage {

    constructor() {
        super()
        this.createSocialIconSelector = (iconClass) => '.profile-social-links .fa-' + iconClass
        this.iconArrowLeft = $(this.createSocialIconSelector('arrow-left'))
        this.iconGithub = $(this.createSocialIconSelector('github'))
        this.iconTwitter = $(this.createSocialIconSelector('twitter'))
    }

}

// Exports this page object to use it in all other files
module.exports.AboutPage = AboutPage
