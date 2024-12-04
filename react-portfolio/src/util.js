// This JavaScript function, getImageUrl, is designed to generate an absolute URL 
// for an image or other asset file based on a relative path.
export const getImageUrl = (path) => {
    return new URL(`assets/${path}`, import.meta.url).href;
};