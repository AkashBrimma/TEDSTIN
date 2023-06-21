import { Given, When, Then } from "@wdio/cucumber-framework";

// import LoginPage from '../pageobjects/login.page.js';
import LoginPage from "../pageobjects/register.page.js";


Given(/^I am on practice page "([^"]*)"$/, async (appurl: string) => {
  await browser.url(appurl);
  await browser.maximizeWindow()
});

Then(/^I validat page header "([^"]*)"$/, async (headertext: string) => {
    // const header = $('//h1')
    // expect(await header).toHaveText(headertext)
    await expect(LoginPage.getHeader()).toHaveText(headertext);
  
});

When(
  /^I enter firstname (.+) and lastname (.+)$/,
  async (fname: string, lname: string) => {
    // await (await LoginPage.fname).setValue(fname)
    // await (await LoginPage.lname).setValue(lname)
    await LoginPage.enterfirstname(fname);
    await LoginPage.enterlastname(lname);
  }
);

When(
  /^I select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/,
  async (gender: string, yrs: string, Profession: string, Flavours: string) => {
    await LoginPage.enterGender(gender)
    await LoginPage.enterYear(yrs)
    await LoginPage.enterProfession(Profession)
    // await LoginPage.enterFlavours(Flavours)
    //  await LoginPage.selectDropdowm(await LoginPage.gender_radio, gender)
    //  await LoginPage.selectDropdowm(await LoginPage.year_radio, yrs)
    //  await LoginPage.selectDropdowm(await LoginPage.Profession, Profession)
    //  await LoginPage.selectDropdowm(await LoginPage.Flavours, Flavours)
});

When(
  /^I select continent (.+) and commands (.+)$/,
  async (continents: string, command: string) => {
   await LoginPage.entercontinent(continents)
   await LoginPage.entercommands(command)
    // await(await LoginPage.continent).selectByVisibleText(continents)
    // await(await LoginPage.commands).selectByVisibleText(command)
await browser.pause(4000)
  });

When(/^I click on submit button$/, async () => {
  await LoginPage.clicksubmit()
    // await (await LoginPage.submit).click()
});
