import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Ariyarathna B.D.T.S.P. — Security Portfolio", 
  description = "Ariyarathna B.D.T.S.P. — Security Software Engineer specialising in application security, DevSecOps, cloud and network security.",
  name = "Ariyarathna B.D.T.S.P.",
  type = "website",
  url = "https://theneth-is-a-dev.vercel.app" // Default placeholder, user can update later
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={name} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {/* Fallback image if not specified */}
      <meta property="og:image" content="/theneth-hero-premium.png" /> 
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/theneth-hero-premium.png" />
    </Helmet>
  );
}
