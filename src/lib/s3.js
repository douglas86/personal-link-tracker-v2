import AWS from "aws-sdk";
import { keys } from "./keys";

const { aws_accessKey, aws_secretKey, aws_region } = keys;

AWS.config.update({
  accessKeyId: aws_accessKey,
  secretAccessKey: aws_secretKey,
  region: aws_region,
});

export const s3 = new AWS.S3();
