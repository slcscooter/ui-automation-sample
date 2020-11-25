import { By, WebDriver, until } from "selenium-webdriver";
import { buildDriver } from "../../config";

let driver: WebDriver;

/** Creates Driver then Login */
export async function loginHelper(userName: string, userPassword: string): Promise<WebDriver> {
  // builds the driver
  driver = await buildDriver();

  // navigates to sample login page
  const loginPageURL = "http://www.stealmylogin.com/demo.html";
  await driver.get(loginPageURL)

  // validates on sample login page
  await driver.wait(until.urlContains(loginPageURL))
  const currentURL = await driver.getCurrentUrl();
  expect(currentURL).toBe(loginPageURL)

  // finds and populates username
  const username = await driver.wait(until.elementLocated(By.css("[name='username']")))
  await driver.wait(until.elementIsVisible(username))
  await username.sendKeys(userName)

  // finds and populates username
  const password = await driver.wait(until.elementLocated(By.css("[name='username']")))
  await driver.wait(until.elementIsVisible(password))
  await username.sendKeys(userPassword)

  // finds and clicks login button
  const loginButton = await driver.wait(until.elementLocated(By.css("[type='submit']")))
  await driver.wait(until.elementIsVisible(loginButton))
  await loginButton.click()

  return driver;
}
