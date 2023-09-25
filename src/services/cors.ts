export async function handleRequest(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);

    if (url.pathname === '/')
      return new Response(`
        Usage:\n
          ${url.origin}/<url>
      `);
    let response = await fetch(request.url, {
      method: request.method,
      credentials: request.credentials,
      headers: request.headers,
      redirect: 'follow',
      body: request.body,
    });
    response = new Response(response.body, response);
    console.log('body:');
    console.dir(response.json().then((res) => console.log(res)));
    response.headers.set('Access-Control-Allow-Origin', 'https://elenahrudavenka.github.io');
    return response;
  } catch (err: any) {
    console.log('Ошибка тут!');
    return new Response(err.stack || err, { status: 500 });
  }
}
