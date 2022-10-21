import { img, links, titles } from "../atom";
import { Card } from "react-bootstrap";

export const card = ({ title, image }) => (
  <Card
    style={{
      margin: "1%",
      border: "1px solid black",
      borderRadius: "10px",
    }}
  >
    {links(
      `/links/${title}`,
      <a style={{ textDecoration: "none" }}>
        <Card.Header>{titles(title)}</Card.Header>
        <div
          style={{
            margin: "3% 25%",
          }}
        >
          {img(`data:image/png;base64,${image}`, 400)}
        </div>
      </a>
    )}
  </Card>
);
