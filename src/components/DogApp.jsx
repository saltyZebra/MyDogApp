import { useState } from "react";
import DogBreedList from "../DogBreedList";
import DogHeader from "./DogHeader";
import FavoriteDogBreeds from "./FavoriteBreedList";

const breedList = [
  "Labrador Retriever",
  "Golden Retriever",
  "Tax",
  "Schäfer",
  "Bichon Havanais",
  "Fransk Bulldog",
  "Jämthund",
  "Jack Russel Terrier",
  "Border Collie",
  "Chihuahua",
  "Dansk-svensk Gårdshund",
  "Cocker Spaniel",
  "Pomeranian",
  "Staffordshire Bullterrier",
  "Finsk Lapphund",
  "Cavalier King Charles Spaniel",
  "Labradoodle",
  "Siberian Husky",
  "Corgi",
];

function DogApp() {
  const [favoriteBreeds, setFavoriteBreeds] = useState([]);
  //   const [newBreed, setNewBreed] = useState("");

  // funktion som tar emot en ras och lägger till den i favoriteBreeds arrayen
  function addFavoriteBreed(breed) {
    if (favoriteBreeds.includes(breed)) return; // Om rasen redan finns i listan, gör inget
    setFavoriteBreeds([...favoriteBreeds, breed]);
  }

  //   function handleClick() {
  //     const cleanedBreed = newBreed.trim(); // Trim tar bort mellanslag i början och slutet av strängen

  //     if (cleanedBreed === "") {
  //       return; // Om strängen är tom efter trimning, returnerar vi utan att göra något och avslutar funktionen tidigt
  //     }

  //     setFavoriteBreeds([...favoriteBreeds, cleanedBreed]);
  //     setNewBreed("");
  //   }

  function clearAllBreeds() {
    setFavoriteBreeds([]);
  }
  return (
    <>
      <DogHeader />
      {/* Vad man säger till DogBreedList: "Här är alla raser, och här är funktionen som ska användas när någon klickar" */}
      <DogBreedList breedArr={breedList} onBreedClick={addFavoriteBreed} />
      {/* Vad man säger till FavoriteDogBreed: "Här är min uppdaterade lista med favoriter - visa den" */}
      <FavoriteDogBreeds favoriteBreeds={favoriteBreeds} />
      <button onClick={clearAllBreeds}>Clear Breed List</button>
    </>
  );
}

export default DogApp;
