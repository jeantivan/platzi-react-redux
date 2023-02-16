import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";

const PokemonCard = ({ name, image, abilities }) => {
  const description = abilities.map(({ ability }) => ability.name).join(", ");
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} loading="lazy" />}
      extra={<StarOutlined />}
    >
      <Card.Meta description={description} />
    </Card>
  );
};

export default PokemonCard;
