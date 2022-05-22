import { CloudflareProvider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";

export default async (request, response) => {
  function setErrorValues() {
    resPayload.error = "missing or invalid address";
    response.status(400);
  }

  const resPayload = {
    requestType: "getBalance",
  };

  const { address } = request.query;

  if (address) {
    try {
      const provider = new CloudflareProvider();
      const balance = await provider.getBalance(address);
      resPayload.response = {
        balance: formatEther(balance),
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
