const PUBLIC = process.env.PUBLIC_URL || '';

/** Header / hero KGZ mark — file in `public/logo.png`. */
export const LOGO_SRC = `${PUBLIC}/logo.png`;

/** Original CV PDF — place the file at `public/CV_Kristina.pdf`. */
export const CV_ORIGINAL_HREF = `${PUBLIC}/CV_Kristina.pdf`;

/** Default gallery image for D-ID (clear face works best for talking avatars). */
export const DEFAULT_DID_PHOTO_FILE = 'profile photo.jpg';

/** Filenames in `public/photos/` (URLs are built with encodeURIComponent). */
export const GALLERY_PHOTO_FILENAMES: readonly string[] = [
  'collection  7.jpg',
  'collection 1.jpeg',
  'collection 10.jpg',
  'collection 11.jpg',
  'collection 2.JPG',
  'collection 3.jpg',
  'collection 4.png',
  'collection 5.jpg',
  'collection 6.jpg',
  'collection 6.png',
  'collection 8.jpg',
  'collection 9.jpg',
  'Painted Silk & Paper  Performance Collection 002.jpg',
  'Painted Silk & Paper  Performance Collection 004.jpg',
  'Painted Silk & Paper  Performance Collection 005.JPG',
  'Painted Silk & Paper  Performance Collection 006.jpg',
  'painting 1.JPG',
  'painting 2.PNG',
  'painting 3.JPG',
  'profile photo.jpg',
  'sketch003.jpg',
  'sketch004.jpg',
  'sketch005.png',
  'sketch01.png',
];

export function urlPhotoInGallery(filename: string): string {
  return `${PUBLIC}/photos/${encodeURIComponent(filename)}`;
}

/** Absolute URL for D-ID `source_url` (same host as the deployed or dev site). */
export function getAbsolutePhotoUrlForDid(filename: string): string {
  if (typeof window === 'undefined' || !window.location?.origin) return '';
  return `${window.location.origin}${urlPhotoInGallery(filename)}`;
}

export function getInitialDidImageUrl(): string {
  const env = process.env.REACT_APP_SILK_PAINTING_URL?.trim();
  if (env) return env;
  return getAbsolutePhotoUrlForDid(DEFAULT_DID_PHOTO_FILE);
}
