export async function handleRequest(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);

    if (url.pathname === '/') console.log('url.pathname');
    /*      return new Response(`
        Usage:\n
          ${url.origin}/<url>
      `);*/
    let response = await fetch(request.url, {
      method: request.method,
      //mode: request.mode,
      credentials: request.credentials,
      headers: request.headers,
      redirect: 'follow',
      body: request.body,
    });
    response = new Response(response.body, response);
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  } catch (err: any) {
    console.log('Ошибка тут!');
    return new Response(err.stack || err, { status: 500 });
  }
}
