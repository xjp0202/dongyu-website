import { SITE_URL, RESTAURANT } from "@/lib/data";

type Crumb = { name: string; url: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ name: RESTAURANT.name, url: SITE_URL }, ...items];

  return (
    <nav aria-label="面包屑导航" className="py-3 px-6 border-b border-border/50">
      <ol
        className="mx-auto max-w-7xl flex items-center gap-2 text-xs text-text-muted"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-2"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {i > 0 && <span className="text-border/50" aria-hidden="true">/</span>}
            {i === allItems.length - 1 ? (
              <span className="text-text-muted" aria-current="page" itemProp="name">
                {item.name}
              </span>
            ) : (
              <a href={item.url} className="hover:text-accent transition-colors" itemProp="item">
                <span itemProp="name">{item.name}</span>
              </a>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
