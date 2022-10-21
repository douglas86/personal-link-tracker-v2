import { caught } from "../../src/api/utils/caught";
import PostCategory from "../../src/api/Controllers/category/PostCategory";

import GetCategory from "../../src/api/Controllers/category/GetCategory";

const Handler = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      return await PostCategory(res, body);
    case "GET":
      return await GetCategory(res);
    default:
      return await caught(res);
  }
};

export default Handler;
