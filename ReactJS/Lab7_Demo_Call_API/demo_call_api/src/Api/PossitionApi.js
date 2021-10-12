import Api from "./Api";

const url = "/possitions";

const getAll = () => {
  return Api.get(url);
};

const PossitionApi = { getAll };
export default PossitionApi;
