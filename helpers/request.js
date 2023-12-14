const getReq = async (endpoint) => {
  const url = `${process.env.API_URL}/${endpoint}`;
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(
        process.env.API_USERNAME + ":" + process.env.API_PASSWORD
      ).toString("base64")
  );
  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });
    return response;
  } catch (error) {
    console.error(`error at fetching ${url}`, error);
  }
};

const postReq = async (endpoint, body) => {
  const url = `${process.env.API_URL}/${endpoint}`;
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(
        process.env.API_USERNAME + ":" + process.env.API_PASSWORD
      ).toString("base64")
  );

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  return response.json();
};

module.exports = { getReq, postReq };
