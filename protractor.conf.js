module.exports.config = {

    useAllAngular2AppRoots: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox']
        },
        name: 'Preserver Tests Job',
        logName: 'Chrome - English',
        shardTestFiles: true,
        maxInstances: 3
    },
    specs: ['specs/*.spec.js'],
    suites: {
        about: 'specs/about.spec.js',
        all: 'specs/*.spec.js'
    },
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/notes',
    // Custom parameters can be specified here
    params: {
        // Custom timeouts to wait for elements on the page
        customTimeout: 3000,
        customMinTimeout: 500,
    },

    // The timeout in milliseconds for each script run on the browser.
    allScriptsTimeout: 60000,
    // How long to wait for a page to load in milliseconds.
    getPageTimeout: 30000,

    onPrepare: function () {
        //jasmine.getEnv().addReporter({})

        // Smartly searches for the element for additional time, works on the browser side
        browser.manage().timeouts().implicitlyWait(2000);

        beforeEach(function () {
            browser.get('')
            browser.sleep(browser.params.customTimeout)
        })

        // This function will be executed after each IT block in this DESCRIBE block
        afterEach(function () {
            // Wiping cookie files ONLY for current domain
            browser.manage().deleteAllCookies()
            // Wiping local and session storage
            browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
                    .then(undefined,
                function (err) {
                // Errors will be thrown when browser is on default data URL.
                // Session and Local storage is disabled for data URLs
                })
            // Wiping indexedDB
            browser.executeScript(`
            indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
                for (let dbname of sender.target.result) {
                    indexedDB.deleteDatabase(dbname)
                }
            };
            `).then(undefined,
                function (err) {
                // Errors will be thrown when browser is on default data URL.
                // indexedDB storage is disabled for data URLs
            })
        })
    }

}
