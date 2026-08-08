/**
 * Prefixes public asset paths with the GitHub Pages basePath when present.
 * next/image with `images.unoptimized` does not apply basePath automatically.
 */
export function assetPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("http")) {
    return path;
  }
  return `${base}${path}`;
}
