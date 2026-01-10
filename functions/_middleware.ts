// Cloudflare Pages Functions middleware for SPA routing
// This ensures all routes serve index.html for React Router to handle

export async function onRequest(context: any) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Serve static assets directly
  if (
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_redirects') ||
    pathname.startsWith('/_headers') ||
    pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|txt|xml)$/)
  ) {
    return context.next();
  }

  // For all other routes, serve index.html
  const indexUrl = new URL('/index.html', context.request.url);
  return context.env.ASSETS.fetch(indexUrl);
}
