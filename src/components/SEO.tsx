import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Mubarik Guray - Software Engineer Student & AI SaaS Builder",
  description = "Software Engineer Student & AI SaaS Builder from Hargeisa, Somaliland. Specializing in AI-powered applications, SaaS systems, and modern web solutions.",
  keywords = "software engineer, AI developer, SaaS builder, Python, JavaScript, React, Next.js, Somaliland tech, multilingual AI",
  image = "https://mubarikguray.dev/og-image.jpg",
  url = "https://mubarikguray.dev/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mubarik Guray" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;