import React from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

interface Props {
  url: string;
  size: string;
}

const ShareMedsos: React.FC<Props> = ({ url, size }) => {
  return (
    <div className="flex justify-center gap-1">
      <WhatsappShareButton url={url}>
        <WhatsappIcon className={`rounded-full w-${size} h-${size}`} />
      </WhatsappShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon className={`rounded-full w-${size} h-${size}`} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon className={`rounded-full w-${size} h-${size}`} />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon className={`rounded-full w-${size} h-${size}`} />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareMedsos;
