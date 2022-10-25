import { then } from "../../utils";

const PostLinks = async (res, session, data) => {
  const { checkbox, types, medium, title, url } = data;
  return await prisma.links
    .create({
      data: {
        postedBy: { connect: { email: session?.user?.email } },
        userName: session?.user?.name,
        categoryNames: checkbox,
        type: types,
        medium,
        title,
        url,
      },
    })
    .then(async () => {
      return await then(res, "Link successfully saved");
    });
};

export default PostLinks;
