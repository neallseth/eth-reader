import { CloudflareProvider } from "@ethersproject/providers";

export default async (request, response) => {
  function setErrorValues() {
    resPayload.error = "missing or invalid ENS";
    response.status(400);
  }

  const resPayload = {
    requestType: "resolveENS",
  };

  const { ens } = request.query;

  if (ens) {
    try {
      const provider = new CloudflareProvider();
      const address = await provider.resolveName(ens);
      resPayload.response = {
        resolvedAddress: address,
        targetENS: ens,
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
