import axios from "axios";
const generateToken = async (req, res, next) => {
  const consumerKey = process.env.CONSUMER_KEY;
  const consumerSecret = process.env.CONSUMER_SECRET;

  const auth = new Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64"
  );
  try {
    const { data } = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: { Authorization: `Basic ${auth}` },
      }
    );

    res.send(data);
    next();
  } catch (error) {
    next(error);
  }
};

export default generateToken;
