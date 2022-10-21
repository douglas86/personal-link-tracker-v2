import { params } from "../../../Helpers/api/s3/params";
import { s3 } from "../../../lib/api";
import { then } from "../../utils/then";
import { caught } from "../../utils/caught";

const PostCategory = async (res, data) => {
  const { title, description, image } = data;
  return await prisma.category
    .create({ data: { title, description } })
    .then(async () => {
      return await s3
        .upload(params(title, image))
        .promise()
        .then(async () => {
          return await then(res, "Category successfully saved");
        })
        .catch((err) => caught(res, err));
    })
    .catch((err) => caught(res, err));
};

export default PostCategory;
