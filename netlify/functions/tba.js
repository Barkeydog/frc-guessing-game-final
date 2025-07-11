// netlify/functions/tba.js
export const handler = async (event) => {
  const endpoint = event.queryStringParameters.path || "/";
  const url = "https://www.thebluealliance.com/api/v3" + endpoint;

  try {
    const resp = await fetch(url, {
      headers: {
        "X-TBA-Auth-Key": process.env.TBA_KEY,
        "User-Agent": "frc-guess-proxy"
      }
    });

    return {
      statusCode: resp.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: await resp.text()
    };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: err.message }) };
  }
};
