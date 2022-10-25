import { caught } from "../../src/api/utils";
import { getSession } from "next-auth/react";

import PostLinks from "../../src/api/Controllers/links/PostLinks";

const Handler = async (req, res) => {
  const { method, body } = req;
  const session = await getSession({ req });

  switch (method) {
    case "POST":
      return await PostLinks(res, session, body);
    default:
      return await caught(res);
  }
};

export default Handler;
