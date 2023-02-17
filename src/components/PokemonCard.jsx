import { Card } from "antd";
import { useDispatch } from "react-redux";
import { setFavoritePokemon } from "../slices/dataSlice";
import StarButton from "./StarButton";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const description = types.map(({ type }) => type.name).join(", ");

  const handleClick = () => {
    dispatch(setFavoritePokemon({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} loading="lazy" />}
      extra={<StarButton isFavorite={favorite} onClick={handleClick} />}
    >
      <Card.Meta description={description} />
    </Card>
  );
};

export default PokemonCard;
