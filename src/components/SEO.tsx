import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

/**
 * SEO Component - Manages meta tags, structured data, and SEO for each page
 * 
 * Usage:
 * <SEO 
 *   title="Page Title | ReSKN Clinic"
 *   description="Page description"
 *   keywords="specific, page, keywords, ReSKN"
 *   canonical="https://www.resknclinic.co.uk/page-url"
 * />
 */
const SEO = ({
  title = "ReSKN Clinic | Personalised Skin Plans in Windsor, Berkshire",
  description = "Expert skin consultations, personalised treatment plans, and laser hair removal at ReSKN Clinic, Windsor. Book online or in-clinic appointments.",
  keywords = "ReSKN, ReSKN Clinic, skin clinic Windsor, laser hair removal, personalised skin plans",
  canonical = "https://www.resknclinic.co.uk/",
  ogImage = "https://www.resknclinic.co.uk/favicon.png",
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </>
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="ReSKN Clinic" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@resknclinic" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
