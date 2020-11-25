import { Builder, WebDriver } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import firefox from "selenium-webdriver/firefox";

const driversToCleanUp: WebDriver[] = [];

/** Configures a new WebDriver for e2e testing */
export async function buildDriver(): Promise<WebDriver> {
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(setChromeOptions(new chrome.Options()))
    .setFirefoxOptions(setFirefoxOptions(new firefox.Options()))
    .build();

  driversToCleanUp.push(driver);
  return driver;
}

function setChromeOptions<T extends chrome.Options>(options: T): T {
  options.windowSize({ width: 1600, height: 1200 });
  options.addArguments("dowload.set_download_behavior: true");
  options.addArguments("download.directory_upgrade: true");
  options.addArguments("download.prompt_for_download: false");
  options.addArguments("download.default_directory");
  options.headless();

  return options;
}

function setFirefoxOptions<T extends firefox.Options>(options: T): T {
  options.windowSize({ width: 1600, height: 1200 });
  options.headless();

  return options;
}

/** Sets the environment and provides base url */
export const baseWebappEnvironmentURL = function (): string {
  return "http://localhost:3000";
};

export const baseBridgeEnvironmentURL = function (): string {
  return "http://localhost:3001";
};

/** Cleans up all drivers created by this process */
export async function cleanupDrivers(): Promise<void> {
  await Promise.all(driversToCleanUp.map((driver) => driver.quit()));
}
