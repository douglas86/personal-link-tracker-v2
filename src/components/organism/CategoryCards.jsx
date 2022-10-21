import useAppContext from "../../hooks/useAppContext";
import { spinner } from "../atom";
import { CardGroup } from "react-bootstrap";
import { card } from "../molecule/card";

const CategoryCards = () => {
  const { state } = useAppContext();
  const { dataReducers } = state;
  const { categoryData } = dataReducers;

  return (
    <CardGroup>
      {categoryData
        ? categoryData.map((items) => <div key={items.id}>{card(items)}</div>)
        : spinner()}
    </CardGroup>
  );
};

export default CategoryCards;
