import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { canonicalFor, SITE_URL } from '@/lib/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  /** Full canonical URL. Defaults to the current route, normalised with a trailing slash. */
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object | object[];
}

/**
 * SEO Component - Manages meta tags, structured data, and SEO for each page.
 *
 * Every page must render exactly one <SEO />. The canonical URL is derived from the
 * router location when not supplied, so a page can never accidentally claim to be
 * a duplicate of the homepage.
 */
const SEO = ({
  title = "ReSKN Clinic | Personalised Skin Plans in Windsor, Berkshire",
  description = "Expert skin consultations, personalised treatment plans, and laser hair removal at ReSKN Clinic, Windsor. Book your online consultation today.",
  keywords = "ReSKN, ReSKN Clinic, skin clinic Windsor, laser hair removal, personalised skin plans",
  canonical,
  ogImage = `${SITE_URL}/favicon.png`,
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const { pathname } = useLocation();
  const canonicalUrl = canonical ? canonicalFor(canonical.replace(SITE_URL, "")) : canonicalFor(pathname);
  const schemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ReSKN Clinic" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@resknclinic" />

      {/* Structured Data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
