const baseUrl = import.meta.env.BASE_URL ?? '/';
/**
 * makes sure to have the correct public url from a given file path
 *
 * @param {string} path - file path
 * @returns string - updated file path
 */
export const updatePublicPath = (path: string) => `${baseUrl}${path}`;

export default updatePublicPath;
