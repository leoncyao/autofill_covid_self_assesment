// TODO
// Add function to get cookie from browser if current cookie is null
// or invalid
const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function complete_covid_self_assesment(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://checkin.uwaterloo.ca")
    await driver.manage().addCookie({name:'checkinkey', value: 'Ml1fVjEyyIQsIpsULHssmvf9V1Xj6VAw', domain: 'checkin.uwaterloo.ca', path: '/'});
    await driver.get("https://checkin.uwaterloo.ca/campuscheckin/screen.php?m=a");
    
    for (var i = 1; i < 8; i++){
        var no_button = await driver.findElements(By.name("q" + i.toString()))
        no_button[1].click()
    }

    await driver.findElement(By.name("what")).click()

    // Is there a better way to do this? not sure how to setTimeouts for async functions
    async function quit_browser(){
        await driver.quit();
    }
     setTimeout(quit_browser, 10000)
}

complete_covid_self_assesment()