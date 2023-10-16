import React, { useState } from 'react';
import './App.css'; // Create a CSS file for styling

const charactersData = [
  {
    id: 1,
    name: 'SpongeBob SquarePants',
    description: 'A sea sponge who lives in a pineapple under the sea.',
    image: 'https://p7.hiclipart.com/preview/831/290/321/spongebob-squarepants-patrick-star-squidward-tentacles-image-character-19.jpg'
  },
  {
    id: 2,
    name: 'Patrick Star',
    description: 'An overweight coral pink starfish, Patrick lives under a rock in the underwater city of Bikini Bottom.',
    image: 'https://www.vhv.rs/dpng/d/437-4377884_characters-clipart-spongebob-patrick-star-transparent-hd-png.png'
  },
  {
    id: 3,
    name: 'Squidwrd Tentacles',
    description: 'Although his name has the word "squid" in it and he has only six tentacles, Squidward is an anthropomorphic octopus.',
    image: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Squidward-Tentacles.SpongeBob-SquarePants.webp'
  },
  {
    id: 4,
    name: 'Mr Krabs',
    description: 'Krabs owns and operates the Krusty Krab.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/640px-Mr._Krabs.svg.png'
  },
  {
    id: 5,
    name: 'Plankton',
    description: 'Plankton and Karen are the married owners of the unsuccessful Chum Bucket restaurant.',
    image: 'https://featuredanimation.com/wp-content/uploads/2021/07/Plankton-from-SpongeBob-Squarepants-series.jpg'
  },
  {
    id: 6,
    name: 'Gary the Snail',
    description: 'Gary the Snail is SpongeBobs pet snail who lives with him in their pineapple house.',
    image: 'data:image/png;base64,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'
  },
  
];

const App = () => {
  const [characters, setCharacters] = useState(charactersData);

  const handleDelete = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };

  const handleEdit = (id) => {
    // Implement editing logic here
    console.log('Editing character with ID:', id);
  };

  return (
    <div className="app">
      <h1>SpongeBob Characters Dashboard</h1>
      <div className="characters-container">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            <img src={character.image} alt={character.name} />
            <div className="character-details">
              <h2>{character.name}</h2>
              <p>{character.description}</p>
              <button onClick={() => handleEdit(character.id)}>Edit</button>
              <button onClick={() => handleDelete(character.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
