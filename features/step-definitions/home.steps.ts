import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^User open the browser and load the url (.+)$/, async(homepage) => {
	await browser.url(homepage)
    await browser.maximizeWindow()
    await browser.pause(3000)

});

Then(/^User should see a header with text (.+)$/, async(headerText) => {
	const header = await $('.heading')
    expect(await header.getText()).toEqual(headerText)
});
