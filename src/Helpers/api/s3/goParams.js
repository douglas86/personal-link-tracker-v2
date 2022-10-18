import { keys } from "../../../lib/api/keys";

const { aws } = keys;
const { aws_bucket_name } = aws;

export const goParams = (title) => {
  return {
    Bucket: aws_bucket_name,
    Key: `category/${title}.jpeg`,
  };
};
