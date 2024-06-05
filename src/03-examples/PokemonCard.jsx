import React from "react";

export const PokemonCard = ({ id, name, sprites }) => {
  return (
    <section style={{ height: 200 }} className="text-capitalized">
      <h4>
        Pokemon: #{id} {name}
      </h4>
      <img className="" src={sprites} alt="pokemon img" />
    </section>
  );
};
