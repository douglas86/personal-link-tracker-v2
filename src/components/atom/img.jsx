import Image from "next/image";

export const img = (src, width, height = null) => (
  <Image
    src={src}
    alt="No Images to display"
    width={width}
    height={height === null ? width : height}
  />
);
