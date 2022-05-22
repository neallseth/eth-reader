export default (request, response) => {
  response.status(200).json({
    availableRequestTypes: [
      "/get-balance/{address}",
      "/transaction-count/{address}",
      "/resolve-ens/{ens}",
    ],
  });
};
