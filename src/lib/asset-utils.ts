/**
 * Get the full URL for a public asset, accounting for the base URL
 * @param path - The path to the asset (with or without leading slash)
 * @returns The full URL to the asset
 */
export const getAssetUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.replace(/^\//, '');
  // Combine with base URL, ensuring no double slashes
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
