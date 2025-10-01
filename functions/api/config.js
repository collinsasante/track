export async function onRequest(context) {
  return new Response(JSON.stringify({
    airtable: {
      baseId: context.env.AIRTABLE_BASE_ID || "",
      apiKey: context.env.AIRTABLE_API_KEY || ""
    }
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
