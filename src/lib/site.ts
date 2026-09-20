/**
 * Single source of truth for site-wide identity used in metadata,
 * structured data and bylines. Keep this in sync with the real clinic details.
 */
export const SITE_URL = "https://resknclinic.co.uk";
export const SITE_NAME = "ReSKN Clinic";

/**
 * Author shown on guides and ingredient pages and used for E-E-A-T structured data.
 * TODO(Nori): add full name and GPhC registration number once confirmed.
 */
export const AUTHOR = {
  name: "Nori",
  credentials: "MPharm, GPhC-registered pharmacist and Independent Prescriber",
  gphcNumber: "",
  url: `${SITE_URL}/about/`,
  jobTitle: "Clinical Lead, ReSKN Clinic",
};

/** ISO date used as the "last reviewed" date on clinical content. */
export const CONTENT_LAST_REVIEWED = "2026-09-20";

/** Turn a route path into the canonical URL Google should index (always trailing slash). */
export const canonicalFor = (path: string): string => {
  let p = path.split("?")[0].split("#")[0];
  if (!p.startsWith("/")) p = `/${p}`;
  if (p !== "/" && !p.endsWith("/")) p = `${p}/`;
  return `${SITE_URL}${p}`;
};

export const authorSchema = () => ({
  "@type": "Person",
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  description: AUTHOR.credentials,
  url: AUTHOR.url,
  worksFor: { "@type": "MedicalBusiness", name: SITE_NAME, url: SITE_URL },
  ...(AUTHOR.gphcNumber
    ? { identifier: { "@type": "PropertyValue", propertyID: "GPhC", value: AUTHOR.gphcNumber } }
    : {}),
});

export const publisherSchema = () => ({
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` },
});

/** Standard schema for an educational clinical page. */
export const medicalWebPageSchema = (opts: {
  path: string;
  headline: string;
  description: string;
  about?: string;
  lastReviewed?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline: opts.headline,
  description: opts.description,
  url: canonicalFor(opts.path),
  inLanguage: "en-GB",
  ...(opts.about ? { about: { "@type": "MedicalCondition", name: opts.about } } : {}),
  lastReviewed: opts.lastReviewed ?? CONTENT_LAST_REVIEWED,
  reviewedBy: authorSchema(),
  author: authorSchema(),
  publisher: publisherSchema(),
});
