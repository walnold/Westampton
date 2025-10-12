import React from "react";
import { Helmet } from "react-helmet-async";

export default function SiteMeta({ title, description, keywords, ogImage, path }){
  const siteTitle = title ? `${title} | Westampton Solutions Limited` : "Empowering Digital Transformation | Westampton Solutions Limited";
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description || "Westampton Solutions Limited is a boutique business solutions and advisory firm..."}/>
      {keywords && <meta name="keywords" content={keywords} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {path && <meta property="og:url" content={path} />}
      <meta property="og:title" content={siteTitle} />
    </Helmet>
  );
}
