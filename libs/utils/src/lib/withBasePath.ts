export const withBasePath = (
  url: string,
  basePath = process.env.NEXT_PUBLIC_BASE_PATH
): string => `${basePath}/${url}`.replace('//', '/');
