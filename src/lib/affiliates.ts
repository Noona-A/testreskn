/**
 * Affiliate configuration. Referral codes live here so they can be rotated
 * in one place. Tags are read from Vite env so they never need a code change.
 *
 *   VITE_AMAZON_TAG=reskn-21          Amazon Associates UK tracking ID
 *   VITE_BELANTTI_REF=10398409.xxxx   Shopify Collabs referral for belantti.co.uk
 */
export const AMAZON_TAG: string = import.meta.env.VITE_AMAZON_TAG ?? "";
export const BELANTTI_REF: string = import.meta.env.VITE_BELANTTI_REF ?? "10398409.mtv59NQvcFqb1MU";

const withParam = (url: string, key: string, value: string) => {
  if (!value) return url;
  const u = new URL(url);
  u.searchParams.set(key, value);
  return u.toString();
};

/** Belantti (Korean skincare UK retailer) product link with referral code. */
export const belantti = (handle: string) =>
  withParam(`https://www.belantti.co.uk/products/${handle}`, "sca_ref", BELANTTI_REF);

/** Amazon UK search link. Search links are permitted under the Associates programme. */
export const amazonSearch = (query: string) =>
  withParam(`https://www.amazon.co.uk/s?k=${encodeURIComponent(query)}`, "tag", AMAZON_TAG);

/** Amazon UK product link by ASIN. */
export const amazonProduct = (asin: string) =>
  withParam(`https://www.amazon.co.uk/dp/${asin}`, "tag", AMAZON_TAG);

/** True when a URL carries one of our referral parameters. */
export const isAffiliate = (url: string) => /[?&](sca_ref|tag)=/.test(url);
