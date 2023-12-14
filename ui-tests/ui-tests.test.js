import { describe, it } from 'vitest';
import { Builder, until, By, Key } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import fs from "fs";

const ADDR = 'http://localhost:5173';

const saveScreenshot = name => ss => {
    fs.writeFile("ui-tests/" + name + ".png", ss, 'base64', console.error)
}

const mkDriver = () => new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options()
        .headless()
        .addArguments([
            "--no-sandbox",
            "--disable-dev-shm-usage"
        ])
        .windowSize({ width: 1200, height: 2000 }))
    .build();

const openMyst = (driver) => driver.get(ADDR)
    .then(() => driver.wait(until.titleContains('MyST'), 1000))


describe('UI Screenshots', () => {
    it('Check "Both" view', async () => {
        const driver = await mkDriver();
        try {
            await openMyst(driver)
            await driver.takeScreenshot().then(saveScreenshot("both"))
        } finally {
            await driver.quit();
        }
    })

    it('Check "Source" view', async () => {
        const driver = await mkDriver();
        try {
            await openMyst(driver);
            const elem = await driver.findElement(By.name("Source"))
            await elem.click()
            await driver.takeScreenshot().then(saveScreenshot("source"))
        } finally {
            await driver.quit();
        }
    })

    it('Check "Preview" view', async () => {
        const driver = await mkDriver();
        try {
            await openMyst(driver);
            const elem = await driver.findElement(By.name("Preview"))
            await elem.click()
            await driver.takeScreenshot().then(saveScreenshot("preview"))
        } finally {
            await driver.quit();
        }
    })

    it('Check "Diff" view', async () => {
        const driver = await mkDriver();
        try {
            await openMyst(driver);

            // Make some changes
            const lines = await driver.findElements(By.className("cm-line"));
            await lines[0].sendKeys('\n# Some Section\n\nSome text some text some text some text some text');
            for (let i = 23; i < 30; i++) {
                await lines[i].clear();
                await lines[i].sendKeys(Key.BACK_SPACE);
            }

            const elem = await driver.findElement(By.name("Diff"))
            await elem.click()
            await driver.takeScreenshot().then(saveScreenshot("diff"))
        } finally {
            await driver.quit();
        }
    })
})
