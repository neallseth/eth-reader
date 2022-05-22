export default (request, response) => {
  response.status(200).json({
    availableEndpoints: [
      "/api/get-balance/{address || ens}",
      "/api/transaction-count/{address || ens}",
      "/api/resolve-ens/{ens}",
    ],
    sourceRepo: "https://github.com/neallseth/eth-reader",
  });
};
