export const handler = async (event) => {
  // events/2018  👉  /events/2018
  const raw   = event.queryStringParameters.path || "";
  const path  = raw.startsWith("/") ? raw : "/" + raw;

  const url   = "https://www.thebluealliance.com/api/v3" + path;
  console.log("➡️  TBA →", url);

  const resp  = await fetch(url, {
    headers: {
      "X-TBA-Auth-Key": process.env.TBA_KEY,
      "User-Agent":     "frc-guessing-game"
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
};
