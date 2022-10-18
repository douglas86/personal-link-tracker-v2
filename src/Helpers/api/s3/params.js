import { keys } from "../../../lib/api/keys";

const { aws } = keys;
const { aws_bucket_name } = aws;

export const params = (title, image) => {
  const base64Data = (image) => {
    return new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
  };

  return {
    Bucket: aws_bucket_name,
    Key: `category/${title}.${image.split(";")[0].split("/")[1]}`,
    Body: base64Data(image),
    ACL: "public-read",
    ContentEncoding: "base64",
    ContentType: `image/${image.split(";")[0].split("/")[1]}`,
  };
};
