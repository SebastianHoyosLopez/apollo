import React from "react";
import { gql, useQuery } from "@apollo/client";

const CharactersQuery = () => {
  const { loading, error, data } = useQuery(gql`
    {
      characters {
        results {
          id
          name
          image
          species
        }
      }
    }
  `);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="container">
      <div className="row">
        {data.characters.results.map((character) => {
          return (
            <div key={character.id} style={{background: 'gray'}} className="col-sm-6 col-lg-4">
              <p>{character.name}</p>
              <p>especie: {character.species}</p>
              <img src={character.image} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharactersQuery;
