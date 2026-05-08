import type { Metadata } from "next";
import { NAV_LINKS, RESTAURANT } from "@/lib/data";
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dongyu.com"),
  alternates: {
    canonical: "https://dongyu.com",
  },
  title: {
    default: `${RESTAURANT.name} — ${RESTAURANT.awards[0].title}新派鲁菜餐厅`,
    template: `%s | ${RESTAURANT.name}`,
  },
  description: RESTAURANT.description,
  keywords: [
    "济南岽渔",
    "崬渔",
    "黑珍珠一钻",
    "新派鲁菜",
    "胶东海鲜",
    "王太震",
    "济南高端餐厅",
    "济南CBD餐厅",
    "鲁菜",
    "金葱阿胶鲍鱼",
    "济南名菜",
    "京鲁菜餐厅",
    "米其林食遇",
    "金梧桐一星",
    "国家级五钻酒家",
  ],
  openGraph: {
    title: `${RESTAURANT.name} — 黑珍珠一钻新派鲁菜餐厅`,
    description: RESTAURANT.description,
    type: "website",
    locale: "zh_CN",
    url: "https://dongyu.com",
    siteName: RESTAURANT.name,
    images: [{ url: "/images/brand/beijing.png", width: 1486, height: 780 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-primary text-text antialiased">
        {/* 全局 Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
        />
        {/* 全局 WebSite JSON-LD — 声明站点整体身份 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteJsonLd()),
          }}
        />
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-border">
          <nav
            className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between"
            aria-label="主导航"
          >
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/images/brand/logo.png"
                alt={`${RESTAURANT.name} Logo`}
                className="h-10 w-auto transition-opacity group-hover:opacity-80"
              />
            </a>
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent transition-colors text-sm tracking-widest uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-text-muted hover:text-accent"
              aria-label="打开菜单"
              id="mobile-menu-btn"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
          {/* Mobile nav */}
          <div id="mobile-menu" className="hidden md:hidden border-t border-border">
            <ul className="px-6 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-text-muted hover:text-accent transition-colors text-sm tracking-widest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <main className="pt-[72px]">{children}</main>

        <footer className="border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <img
                src="/images/brand/logo.png"
                alt={`${RESTAURANT.name} Logo`}
                className="h-8 w-auto mb-4"
              />
              <p className="text-text-muted text-sm">
                {RESTAURANT.awards.map((a) => a.title).join(" · ")}
              </p>
            </div>
              <div>
                <h3 className="text-accent font-serif text-lg mb-4">联系方式</h3>
                <address className="not-italic text-text-muted text-sm space-y-2">
                  <p>{RESTAURANT.address.full}</p>
                  <p>
                    <a
                      href={`tel:${RESTAURANT.phone}`}
                      className="hover:text-accent transition-colors"
                    >
                      {RESTAURANT.phone}
                    </a>
                  </p>
                  <p>
                    午餐 {RESTAURANT.openingHours[0].time}
                    <br />
                    晚餐 {RESTAURANT.openingHours[1].time}
                  </p>
                </address>
              </div>
              <div>
                <h3 className="text-accent font-serif text-lg mb-4">在线预订</h3>
                <p className="text-text-muted text-sm">
                  电话预订或关注公众号「济南岽渔」
                </p>
                <a
                  href={`tel:${RESTAURANT.phone}`}
                  className="inline-block mt-4 px-6 py-2 border border-accent text-accent text-sm hover:bg-accent hover:text-primary transition-colors"
                >
                  立即预订
                </a>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border text-center text-text-muted text-xs">
              © {new Date().getFullYear()} {RESTAURANT.name} · 黑珍珠一钻新派鲁菜餐厅
            </div>
          </div>
        </footer>

        {/* Mobile menu toggle */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('mobile-menu-btn').addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.toggle('hidden');
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
