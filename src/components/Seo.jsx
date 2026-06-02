import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, path }) => {
  const siteName = "Aether Studio";
  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} — Digital Production Studio`;
  const desc =
    description ||
    "Aether Studio is a premium creative digital production studio. We blend WebGL 3D experiences, pixel-perfect design, and high-performance engineering for visionary brands.";
  const url = `https://aetherstudio.com${path || "/"}`;
  const ogImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteName,
        url: "https://aetherstudio.com",
        logo: "https://aetherstudio.com/vite.svg",
        description: desc,
        foundingDate: "2018",
        sameAs: [
          "https://twitter.com/aetherstudio",
          "https://linkedin.com/company/aetherstudio",
          "https://instagram.com/aetherstudio",
          "https://github.com/aetherstudio",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "100 Innovation Drive",
          addressLocality: "San Francisco",
          addressRegion: "CA",
          postalCode: "94103",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-555-123-4567",
          contactType: "sales",
          email: "hello@aetherstudio.com",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        name: siteName,
        url: "https://aetherstudio.com",
        description: desc,
        inLanguage: "en",
      },
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default Seo;
