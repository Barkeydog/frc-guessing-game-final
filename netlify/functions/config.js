exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
    })
  };
};
