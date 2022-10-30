import useAppContext from "../../hooks/useAppContext";
import { heading, spinner, alert } from "../atom";
import { Container } from "react-bootstrap";

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

  console.log("category", category);

  return (
    <Container>
      {category !== null ? (
        <>
          {heading(category[0].title)}
          {alert("primary", category[0].description)}
          <div style={{ display: "flex" }}>
            <div style={{ width: "75%" }}>Left</div>
            <div style={{ width: "25%" }}>Right</div>
          </div>
        </>
      ) : (
        spinner()
      )}
    </Container>
  );
};

export default SlugTemplate;
