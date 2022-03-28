import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const icons = {
  facebook: "/assets/icons/facebook.svg",
  instagram: "/assets/icons/instagram.svg",
  twitter: "/assets/icons/twitter.svg",
  linkedin: "/assets/icons/linkedin.svg",
};

export interface Props {
  icon: keyof typeof icons;
  navigateTo: string;
  newTab?: boolean;
  opacity?: number;
}

const LinkIcon = ({ icon, navigateTo, newTab = true, opacity = 1 }: Props) => {
  const renderIconImage = useCallback(() => {
    return (
      <Image
        src={icons[icon]}
        alt={icon}
        width={20}
        height={20}
        layout="fixed"
        objectFit="contain"
      />
    );
  }, [icon]);

  if (newTab) {
    return (
      <a
        style={{ opacity }}
        href={navigateTo}
        target="_blank"
        rel="noopener noreferrer"
      >
        {renderIconImage()}
      </a>
    );
  }

  return (
    <Link href={navigateTo}>
      <a style={{ opacity }}>{renderIconImage()}</a>
    </Link>
  );
};

export default LinkIcon;
