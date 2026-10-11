export default {
  async fetch() {
    const r = await fetch("S3_LINK");
    const headers = new Headers(r.headers);
    headers.set("Content-Type", "text/plain; charset=utf-8");
    headers.set("Cache-Control", "public, max-age=300");
    return new Response(r.body, { status: r.status, headers });
  },
};
