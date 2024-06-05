import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultiCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h3>MultiCustomHooks</h3>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={data?.sprites.other.dream_world.front_default}
        />
      )}

      <button
        className="btn btn-primary mt-2"
        onClick={counter > 1 ? decrement : null}
      >
        Prev
      </button>

      <button className="btn btn-secondary mt-2" onClick={reset}>
        RESET
      </button>

      <button className="btn btn-primary mt-2" onClick={increment}>
        Next
      </button>
    </>
  );
};
