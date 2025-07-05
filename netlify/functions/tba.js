export const handler = async (event) => {
  const rawPath = event.queryStringParameters.path || "";   // "events/2023"
  const path    = rawPath.startsWith("/") ? rawPath : "/" + rawPath;

  const url = "https://www.thebluealliance.com/api/v3" + path;
  console.log("➡️  TBA →", url);             // should log “…/api/v3/events/2023”
  console.log("➡️  Calling TBA:", url);
  const resp = await fetch(url, {
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
