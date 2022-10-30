import useAppContext from "../../src/hooks/useAppContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SlugTemplate from "../../src/components/templates/SlugTemplate";

const Slug = ({ len, links }) => {
  const { dispatch } = useAppContext();
  const query = useRouter().query.slug;

  useEffect(() => {
    if (links) {
      dispatch({
        type: "UPDATING_CATEGORY_PAGE",
        len: JSON.parse(len),
        pagination: JSON.parse(links),
      });
    }
  }, [dispatch, len, links]);

  return (
    <div>
      <SlugTemplate title={query} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;

  const len = await prisma.links.findMany({
    where: { categoryNames: { hasEvery: [slug] } },
  });

  const links = await prisma.links.findMany({
    where: { categoryNames: { hasEvery: [slug] } },
    take: 2,
  });

  return {
    props: {
      len: JSON.stringify(len.length),
      links: JSON.stringify(links),
    },
  };
};

export default Slug;
