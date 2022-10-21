import { s3 } from "../../../lib/api";

import prisma from "../../../lib/api/prisma";
import { keys } from "../../../lib/api";

const { aws } = keys;
const { aws_bucket_name } = aws;

const GetCategory = async (res) => {
  let data = [];
  return await prisma.category.findMany({}).then(async (r) => {
    if (r.length >= data.length) {
      let promises = r.map(async (item) => {
        const { id, title, description } = item;

        const params = {
          Bucket: aws_bucket_name,
          Key: `category/${title}.png`,
        };

        await s3
          .getObject(params)
          .promise()
          .then((re) => {
            data.push({
              id,
              title,
              description,
              image: re.Body.toString("base64"),
            });
          });
      });

      Promise.all(promises).then(() => {
        res.json({
          data,
          status: 200,
          message: "All data retrieved successfully",
        });
      });
    }
  });
};

export default GetCategory;
