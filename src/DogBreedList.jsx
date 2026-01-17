import FavoriteDogBreeds from "./components/FavoriteBreedList";
import DogBreedItem from "./DogBreedItem";

function DogBreedList({ breedArr, onBreedClick }) {
  return (
    <>
      <h2>Alla hundraser</h2>
      <ul>
        {breedArr.map((breed) => (
          <li
            key={breed}
            onClick={() => onBreedClick(breed)}
            style={{ cursor: "pointer" }}
          >
            {breed}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DogBreedList;
