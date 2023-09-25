module.exports = {
    name: "tricking-admin-favorite-animal.js",
    timeout: 5000,
    async execute(browser, url) {
        const page = await browser.newPage();
        await page.setCookie({
            name: "username",
            value: "admin-0e775a1a67cd29bb93fc91fc9d3540b6",
            domain: "favorite-animal.acmcyber.com",
            httpOnly: true,
        });
        await page.goto(url);
        await page.waitForNetworkIdle({
            timeout: 5000,
        });
        await page.close();
    },
};
