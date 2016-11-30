module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: ['specs/*.spec.js'],
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/notes',
    // Custom parameters can be specified here
    params: {
        // Custom timeouts to wait for elements on the page
        customTimeout: 3000,
        customMinTimeout: 500,
    },
    onPrepare: function () {
        //jasmine.getEnv().addReporter({})

        beforeEach(function () {
            browser.get('')
            browser.sleep(browser.params.customTimeout)
        })

        //This function will be executed after each IT block in this DESCRIBE block
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
