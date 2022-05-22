export default (request, response) => {
  response.status(200).json({
    availableEndpoints: [
      "/api/get-balance/{address}",
      "/api/transaction-count/{address}",
      "/api/resolve-ens/{ens}",
    ],
    sourceRepo: "https://github.com/neallseth/eth-reader",
  });
};
