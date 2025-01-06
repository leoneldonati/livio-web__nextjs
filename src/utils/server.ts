type ResponseStatus = 200 | 400 | 401 | 403 | 404 | 500;
export function res(body: object, status: ResponseStatus | null = null) {
  return new Response(JSON.stringify(body), { status: status ?? 200 });
}
