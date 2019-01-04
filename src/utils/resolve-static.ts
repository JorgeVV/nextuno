export default (path: string) =>
  `${process.env.NEXT_STATIC_ASSET_PREFIX || ""}/_next/static/${path}`;
