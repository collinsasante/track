// Cloudflare Pages Middleware to handle order URL routing

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Check if path matches /ORD-XXXXX pattern (alphanumeric after ORD-)
  const orderMatch = path.match(/^\/ORD-([A-Z0-9]+)$/i);

  if (orderMatch) {
    const orderId = orderMatch[1];
    console.log("Middleware: Order ID detected:", orderId);

    // Redirect to index.html with order parameter
    const newUrl = new URL('/index.html', url.origin);
    newUrl.searchParams.set('order', `ORD-${orderId}`);

    console.log("Middleware: Redirecting to:", newUrl.toString());

    // Fetch the index.html with the query parameter
    const response = await context.next();

    // Create a rewritten request
    const rewrittenRequest = new Request(newUrl, context.request);
    return context.env.ASSETS.fetch(rewrittenRequest);
  }

  // For all other paths, continue normally
  return context.next();
}
