module.exports = {
    name: "tricking-admin-favorite-animal",
    timeout: 5000,
    async execute(browser, url) {
        const page = await browser.newPage();
        await page.setCookie({
            name: "username",
            value: "admin-0e775a1a67cd29bb93fc91fc9d3540b6",
            url: "http://favorite-animal.acmcyber.com/",
        });
        await page.goto(url);
        await page.waitForNetworkIdle({
            timeout: 5000,
        });
        await page.close();
    },
};
