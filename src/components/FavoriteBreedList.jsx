import DogBreedItem from "../DogBreedItem";

function FavoriteDogBreeds({ favoriteBreeds }) {
  return (
    <>
      <h2>Mina favoritraser</h2>
      {favoriteBreeds.length === 0 ? (
        <p>Inga favoriter ännu — klicka på en ras!</p>
      ) : (
        <ul>
          {favoriteBreeds.map((breed) => (
            <DogBreedItem key={breed} text={breed} />
          ))}
        </ul>
      )}
    </>
  );
}

export default FavoriteDogBreeds;
