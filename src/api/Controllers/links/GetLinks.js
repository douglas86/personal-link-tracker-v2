const GetLinks = async (res, query) => {
  const { slug, skip } = query;

  return await prisma.links
    .findMany({
      where: { categoryNames: { has: slug } },
      skip: parseInt(skip),
      take: 2,
    })
    .then((items) => {
      res.json({ data: items });
    });
};

export default GetLinks;
