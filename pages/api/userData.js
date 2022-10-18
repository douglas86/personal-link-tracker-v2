import prisma from "../../src/lib/api/prisma";
import { getSession } from "next-auth/react";

const Handler = async (req, res) => {
  const { method } = req;
  const session = await getSession({ req });

  switch (method) {
    case "GET":
      return await prisma.user
        .findMany({ where: { email: session?.user.email } })
        .then((items) => {
          res.json({ data: items });
        });
    default:
      return res.json({
        status: 400,
        message: "You have hit the incorrect endpoint",
      });
  }
};

export default Handler;
