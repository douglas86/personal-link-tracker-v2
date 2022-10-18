import { caught } from "../../src/api/utils/caught";
import { s3 } from "../../src/lib/api/s3";
import { params } from "../../src/Helpers/api/s3/params";
import { then } from "../../src/api/utils/then";

const Handler = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      const { title, description, image } = body;
      return await prisma.category
        .create({ data: { title, description, image } })
        .then(async () => {
          await s3
            .upload(params(title, image))
            .promise()
            .then(async () => {
              await then(res, "Category successfully saved");
            })
            .catch(async (err) => await caught(res, err));
        })
        .catch(async (err) => await caught(res, err));
    default:
      return await caught(res);
  }
};

export default Handler;
