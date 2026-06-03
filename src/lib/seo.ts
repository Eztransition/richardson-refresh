export const SITE_ORIGIN = "https://richardson-revamp-joy.lovable.app";

type MetaAttr = "name" | "property";

const setMeta = (key: string, content: string, attr: MetaAttr = "name") => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
};

const setJsonLd = (id: string, data: unknown) => {
  document.getElementById(id)?.remove();
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

const removeJsonLd = (id: string) => {
  document.getElementById(id)?.remove();
};

export interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  noindex?: boolean;
}

/**
 * Apply per-page SEO: title, description, canonical, og:* and twitter:*.
 * Returns a cleanup function suitable for useEffect.
 */
export const applyPageSeo = ({
  title,
  description,
  path,
  ogType = "website",
  noindex = false,
}: PageSeoOptions) => {
  const url = `${SITE_ORIGIN}${path}`;
  document.title = title;

  setMeta("description", description);
  setCanonical(url);

  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:url", url, "property");
  setMeta("og:type", ogType, "property");

  setMeta("twitter:title", title);
  setMeta("twitter:description", description);

  if (noindex) {
    setMeta("robots", "noindex, nofollow");
  } else {
    setMeta("robots", "index, follow");
  }
};

export { setMeta, setCanonical, setJsonLd, removeJsonLd };
