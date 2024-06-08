export function generateQueryParams(params?: Record<string, any>): string {
  const queryParams = new URLSearchParams();

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const value = params[key];

      if (Array.isArray(value)) {
        value.forEach((val) => queryParams.append(key, val));
      } else {
        queryParams.append(key, value);
      }
    }
  }

  return `?${queryParams.toString()}`;
}
