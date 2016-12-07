if (process.env.TRAVIS_BUILD_NUMBER) {
    module.exports.configCI = {
        multiCapabilities = [
            {
                browserName: 'chrome',
                chromeOptions: {
                    // Run without sandbox, set browser language
                    args: ['--no-sandbox', 'lang=en-US'],
                    // Set Accept-Language header
                    prefs: {
                        intl: { accept_languages: "en-US" },
                    }
                },
                build: process.env.TRAVIS_BUILD_NUMBER,
                name: 'Preserver Tests Job - Chrome',
                shardTestFiles: true,
                maxInstances: 5,
                specs: ['specs/*.spec.js']
            },
            // {
            //     browserName: 'firefox',
            //     build: process.env.TRAVIS_BUILD_NUMBER,
            //     name: 'Preserver Tests Job -  Firefox',
            //     shardTestFiles: true,
            //     maxInstances: 4,
            //     specs: ['specs/*.spec.js']
            // }
        ]
    }

}
