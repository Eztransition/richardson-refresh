const wpAssets = import.meta.glob<{ url: string }>("/src/assets/wp/*.asset.json", { eager: true, import: "default" });

/** Images copied from the old WordPress uploads into the project's asset storage. */
export const wpImage = (file: string) => {
  const hit = Object.entries(wpAssets).find(([k]) => k.endsWith(`/${file}.asset.json`));
  if (!hit) throw new Error(`Missing image asset: ${file}`);
  return hit[1].url;
};
