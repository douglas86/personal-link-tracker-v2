import useAppContext from "../../hooks/useAppContext";
import { heading, spinner, alert, img } from "../atom";
import { Container } from "react-bootstrap";
import Pagination from "../organism/Pagination";

const SlugTemplate = ({ title }) => {
  const { state } = useAppContext();
  const { dataReducers } = state;
  const { categoryData } = dataReducers;

  const category = categoryData
    ? categoryData.filter((items) => {
        if (items.title === title) {
          return items;
        }
      })
    : null;

  return (
    <Container>
      {category !== null ? (
        <>
          {heading(category[0].title)}
          {alert("primary", category[0].description)}
          <div style={{ display: "flex" }}>
            <div style={{ width: "75%" }}>
              <Pagination slug={title} />
            </div>
            <div style={{ width: "25%" }}>
              {img(`data:image/png;base64,${category[0].image}`, 500)}
              <p>Popular Links Go Here?</p>
            </div>
          </div>
        </>
      ) : (
        spinner()
      )}
    </Container>
  );
};

export default SlugTemplate;
