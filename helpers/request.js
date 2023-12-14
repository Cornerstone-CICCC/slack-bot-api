const { default: axios } = require("axios");

const getReq = async (endpoint) => {
  console.log("requesting");
  const url = `${process.env.API_URL}/${endpoint}`;
  console.log("url", url);
  try {
    console.log("before fetching");
    const response = await axios.get(url, {
      auth: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
      },
    });
    console.log("after fetching", response);
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
