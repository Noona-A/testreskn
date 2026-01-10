// Cloudflare Pages Functions middleware for SPA routing
// This ensures all routes serve index.html for React Router to handle

export async function onRequest(context: any) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Serve index.html and static files directly to avoid infinite loops
  if (
    pathname === '/' ||
    pathname === '/index.html' ||
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/_redirects') ||
    pathname.startsWith('/_headers') ||
    pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot|json|txt|xml|html)$/)
  ) {
    return context.next();
  }

  // For all other routes (like /ingredients), rewrite to serve index.html
  // Use a rewrite, not a redirect, with the original URL preserved
  const request = new Request(url.origin + '/index.html', context.request);
  return context.env.ASSETS.fetch(request);
}
