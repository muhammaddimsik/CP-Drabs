import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  type: string;
  name: string;
  image: string;
  url: string;
}

const Seo: React.FC<Props> = ({
  title,
  description,
  type,
  name,
  image,
  url,
}) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:url" content={url}></meta>
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image}></meta>
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
      <meta name="robots" content="index, follow" />
      {/* End Twitter tags */}
    </Helmet>
  );
};

export default Seo;
