import Page from "./page.js";

class LoginPage extends Page {
    get header() {
      return $("//h1");
    }
    get fname() {
      return $("//input[@name='firstname']");
    }
    get lname() {
      return $("//input[@name='lastname']");
    }
    get gender_radio() {
      return $$("//input[@name='sex']");
    }
    get year_radio() {
      return $$("//input[@name='exp']");
    }
    get Profession() {
      return $$("//input[@name='profession']");
    }
    get Flavours() {
      return $$("//input[@name='tool']");
    }
    get continent() {
      return $("//select[@name='continents']");
    }
    get commands() {
      return $("//select[@name='selenium_commands']");
    }
    get submit() {
      return $("//button[@name='submit']");
    }
    getHeader() {
      return this.header;
    }
  
    async selectDropdowm(element: WebdriverIO.ElementArray, value: string) {
      for (let i = 0; i < element.length; i++) {
        const elem = await element[i].getAttribute("value");
        if (elem == value) {
          await element[i].click();
          break;
        }
      }
    }
  
    async enterfirstname(fname: string) {
      await (await this.fname).setValue(fname);
    }
  
    async enterlastname(lname: string) {
      await (await this.lname).setValue(lname);
    }
  
    async enterGender(gender: string) {
      await this.selectDropdowm(await this.gender_radio, gender);
    }
    async enterYear(yrs: string) {
      await this.selectDropdowm(await this.year_radio, yrs);
    }
    async enterProfession(Profession: string) {
      await this.selectDropdowm(await this.Profession, Profession);
    }
    async enterFlavours(Flavours: string) {
      await this.selectDropdowm(await this.Flavours, Flavours);
    }
    async entercontinent(continents: string) {
      await (await this.continent).selectByVisibleText(continents);
    }
    async entercommands(command: string) {
      await (await this.commands).selectByVisibleText(command);
    }
    async clicksubmit() {
      await (await this.submit).click();
    }
}
export default new LoginPage();
