import dataAssets from "../../../mock/assets/get-all.mock.json";
const assetsMock = (mock) => {
  mock.onGet("/asset").reply(200, {
    assets: dataAssets,
  });
};

export default assetsMock;
