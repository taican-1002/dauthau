import dataFinances from "../../../mock/finances/get-all.mock.json";
const financesMock = (mock) => {
  mock.onGet("/finance").reply(200, {
    finances: dataFinances,
  });

  mock.onPost("/finance").reply(201, {
    finances: [{}],
  });
};

export default financesMock;
