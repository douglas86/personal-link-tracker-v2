import { caught } from "../../src/api/utils";
import { getSession } from "next-auth/react";

import PostLinks from "../../src/api/Controllers/links/PostLinks";
import GetLinks from "../../src/api/Controllers/links/GetLinks";

const Handler = async (req, res) => {
  const { method, body, query } = req;
  const session = await getSession({ req });

  switch (method) {
    case "POST":
      return await PostLinks(res, session, body);
    case "GET":
      return await GetLinks(res, query);
    default:
      return await caught(res);
  }
};

export default Handler;
