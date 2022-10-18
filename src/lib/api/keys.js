export const keys = {
  db: {},
  email: {
    secret: process.env.NEXTAUTH_SECRET,
    email_server: process.env.NEXTAUTH_EMAIL_SERVER,
    email_client: process.env.NEXTAUTH_EMAIL_FROM,
  },
  aws: {
    aws_bucket_name: process.env.NEXT_PUBLIC_AWS_S3BUCKET_NAME,
    aws_accessKey: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    aws_secretKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
    aws_region: process.env.NEXT_PUBLIC_AWS_REGION,
  },
  google: {
    google_client: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
    google_secret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
  },
  github: {
    github_client: process.env.NEXTAUTH_GITHUB_ID,
    github_secret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
  },
};
