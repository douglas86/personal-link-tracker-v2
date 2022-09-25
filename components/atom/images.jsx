import Image from "next/image";

export const images = (src, width, height) => (
  <Image src={src} alt="No Images to display" width={width} height={height} />
);
