using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Playwright;

namespace Kokbok.Api.Services;

public sealed class PlaywrightService(IMemoryCache memoryCache)
{
    public async Task<IPage> NewPageAsync()
    {
        var browser = await GetBrowser();

        var ctx = await browser.NewContextAsync(
            new()
            {
                UserAgent =
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Safari/537.36 Edg/150.0.0.0",
                Locale = "sv",
                ViewportSize = new() { Width = 1656, Height = 978 },
            }
        );
        var page = await ctx.NewPageAsync();
        // Patch navigator.webdriver before any page script runs so Cloudflare sees undefined.
        await page.AddInitScriptAsync("Object.defineProperty(navigator, 'webdriver', { get: () => undefined })");
        return page;
    }

    private async Task<IBrowser> GetBrowser() =>
        (await memoryCache.GetOrCreateAsync("PlaywrightBrowser", CreateBrowser))!;

    private async Task<IBrowser> CreateBrowser(ICacheEntry cacheEntry)
    {
        var playwright = await Playwright.CreateAsync();
        var browser = await playwright.Chromium.LaunchAsync(
            new BrowserTypeLaunchOptions
            {
                Args =
                [
                    "--disable-blink-features=AutomationControlled",
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                    "--disable-gpu",
                    // "new" headless mode has a much closer fingerprint to headed Chrome
                    // than the legacy headless implementation, helping bypass bot detection.
                    "--headless=new",
                ],
            }
        );

        cacheEntry.SlidingExpiration = TimeSpan.FromMinutes(5);
        cacheEntry.RegisterPostEvictionCallback(
            (key, value, reason, state) => (state as IPlaywright)?.Dispose(),
            state: playwright
        );

        return browser;
    }
}
