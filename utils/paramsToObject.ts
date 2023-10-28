export default function paramsToObject<T>(params: string): T {
  const searchParams = new URLSearchParams(params);
  return Object.fromEntries(searchParams.entries()) as T;
}
