import { CloudflareProvider } from "@ethersproject/providers";

export default async (request, response) => {
  function setErrorValues() {
    resPayload.error = "missing or invalid address";
    response.status(400);
  }

  const resPayload = {
    requestType: "transactionCount",
  };

  const { address } = request.query;

  if (address) {
    try {
      const provider = new CloudflareProvider();
      const count = await provider.getTransactionCount(address);
      resPayload.response = {
        transactionCount: count,
        targetAddress: address,
      };
      response.status(200);
    } catch (err) {
      setErrorValues();
    }
  } else {
    setErrorValues();
  }

  response.json(resPayload);
};
