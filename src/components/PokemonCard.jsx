import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";

const PokemonCard = ({ name }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Card.Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
