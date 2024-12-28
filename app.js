
const { Builder, By, Key, until } = require('selenium-webdriver');


(async () => {
    const driver = await new Builder()
        .forBrowser('chrome')
        .build();

    try {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleContains('webdriver - Google Search'), 10000);
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
      //  await driver.quit();
    }
})();