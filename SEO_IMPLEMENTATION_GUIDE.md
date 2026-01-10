# SEO Implementation Guide for ReSKN Clinic

This guide explains the SEO improvements made to the website and how to apply them to other pages.

## What Was Done

### 1. **Enhanced index.html** (Root HTML File)
- ✅ Added comprehensive keywords meta tag with "ReSKN" variations to prevent autocorrect
- ✅ Added AI-friendly robots directives (max-snippet:-1, max-image-preview:large)
- ✅ Added specific tags for googlebot, bingbot
- ✅ Added brand identity meta tags (copyright, application-name)
- ✅ Added comprehensive JSON-LD structured data for MedicalBusiness

### 2. **Created SEO Component** (`src/components/SEO.tsx`)
- Reusable component for managing meta tags on each page
- Handles: title, description, keywords, canonical URLs, Open Graph, Twitter cards, structured data
- Always includes "ReSKN" in keywords to prevent search engine autocorrect

### 3. **Wrapped App with HelmetProvider** (`src/App.tsx`)
- Enables dynamic meta tag management throughout the app
- Required for the SEO component to work

### 4. **Updated Pages to Use SEO Component**
- ✅ Homepage (`Index.tsx`) - with WebSite, Organization, and WebPage schemas
- ✅ Laser Hair Removal (`LaserHairRemoval.tsx`) - with Service schema
- ⚠️ Other pages need to be updated (see instructions below)

### 5. **Enhanced robots.txt**
- Added modern AI crawlers: ClaudeBot, Applebot-Extended, cohere-ai, Meta-ExternalAgent
- Allows all major search engines and AI crawlers

### 6. **Enhanced sitemap.xml**
- Added lastmod (last modified) dates to all URLs
- Added image sitemap namespace for future optimization

## Why This Prevents "ReSKN" Autocorrect

Google's autocorrect is triggered when it doesn't recognize a brand name. We've addressed this by:

1. **Keywords Meta Tag**: Includes "ReSKN", "ReSKN Clinic", "Re-SKN" in meta keywords
2. **alternateName in Structured Data**: JSON-LD schema includes `"alternateName": ["Re-SKN", "ReSKN"]`
3. **Repeated Usage**: Brand name appears consistently throughout content and meta tags
4. **MedicalBusiness Schema**: Establishes brand as a legitimate business entity

## How to Add SEO to Other Pages

For each page in your app, follow this pattern:

### Step 1: Import the SEO component

```tsx
import SEO from "@/components/SEO";
```

### Step 2: Add SEO component at the top of your page's return statement

```tsx
const YourPage = () => {
  return (
    <>
      <SEO
        title="Page Title | ReSKN Clinic"
        description="Specific description for this page (150-160 characters)"
        keywords="ReSKN, ReSKN Clinic, page-specific, keywords, here"
        canonical="https://resknclinic.co.uk/your-page-url"
      />
      {/* Rest of your page content */}
    </>
  );
};
```

### Step 3: (Optional) Add structured data for rich results

```tsx
const YourPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article", // or Service, FAQPage, etc.
    "headline": "Your Page Title",
    "description": "Your page description",
    // Add more relevant fields
  };

  return (
    <>
      <SEO
        title="Page Title | ReSKN Clinic"
        description="Your description"
        keywords="ReSKN, specific, keywords"
        canonical="https://resknclinic.co.uk/your-url"
        structuredData={structuredData}
      />
      {/* Page content */}
    </>
  );
};
```

## SEO Component Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | No | Page title (appears in browser tab and search results) |
| `description` | string | No | Meta description (150-160 chars for best display) |
| `keywords` | string | No | Comma-separated keywords (always include "ReSKN") |
| `canonical` | string | No | Full canonical URL of the page |
| `ogImage` | string | No | Social media preview image URL |
| `ogType` | string | No | Open Graph type (website, article, etc.) |
| `noindex` | boolean | No | Set true to prevent indexing (e.g., for quiz results) |
| `structuredData` | object | No | JSON-LD structured data object |

## Common Structured Data Types

### For Service Pages
```tsx
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Service Name",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "ReSKN Clinic",
    "alternateName": ["Re-SKN", "ReSKN"]
  },
  "description": "Service description"
}
```

### For Article/Blog Pages
```tsx
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Article Title",
  "description": "Article description",
  "author": {
    "@type": "Organization",
    "name": "ReSKN Clinic"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ReSKN Clinic",
    "logo": {
      "@type": "ImageObject",
      "url": "https://resknclinic.co.uk/favicon.png"
    }
  }
}
```

### For FAQ Pages
```tsx
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
}
```

## Pages That Still Need SEO Component

Priority order:

1. **High Priority** (Main service/content pages):
   - `/skin-clinic`
   - `/concerns/*` (all concern pages)
   - `/services/*` (all service pages)
   - `/about`
   - `/contact`

2. **Medium Priority** (Secondary pages):
   - `/ingredients` and all ingredient pages
   - `/booking`
   - `/quiz`

3. **Low Priority**:
   - `/privacy`
   - `/terms`
   - `/quiz/results` (use `noindex={true}`)

## Testing Your SEO

### 1. Google Rich Results Test
- Visit: https://search.google.com/test/rich-results
- Enter your page URL to validate structured data

### 2. Check Meta Tags
- View page source (Ctrl+U or Cmd+U)
- Look for `<meta>` tags in the `<head>` section

### 3. Google Search Console
- Submit your sitemap: https://resknclinic.co.uk/sitemap.xml
- Monitor indexing and any errors

### 4. AI Crawler Verification
- Check robots.txt: https://resknclinic.co.uk/robots.txt
- Verify AI crawlers can access your site

## Best Practices

1. **Always include "ReSKN"** in keywords on every page
2. **Keep descriptions 150-160 characters** for optimal display in search results
3. **Use descriptive, unique titles** for each page
4. **Update sitemap.xml lastmod dates** when you update content
5. **Test on mobile** - Google uses mobile-first indexing
6. **Check page speed** - Use Lighthouse in Chrome DevTools

## Next Steps

1. Apply SEO component to all remaining pages (see list above)
2. Add high-quality images with descriptive alt tags
3. Submit sitemap to Google Search Console
4. Monitor Google Analytics for improved traffic
5. Check Google Search Console for any crawl errors

## Support Resources

- Google Search Central: https://developers.google.com/search
- Schema.org Documentation: https://schema.org
- React Helmet Async Docs: https://github.com/staylor/react-helmet-async
