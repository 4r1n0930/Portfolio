import { useState } from "react";

const EXTENSIONS = ["jpg", "png", "webp", "jpeg"];

export default function SmartImage({ pic, remoteFallback, alt, ...rest }) {
  const base = import.meta.env.BASE_URL;
  const sources = [
    ...EXTENSIONS.map((ext) => `${base}images/pic${pic}.${ext}`),
    remoteFallback,
  ];
  const [idx, setIdx] = useState(0);
  const last = sources.length - 1;

  return (
    <img
      src={sources[idx]}
      alt={alt}
      {...rest}
      onError={() => {
        if (idx < last) setIdx(idx + 1);
      }}
    />
  );
}