import React from "react";
import { useParams } from "react-router-dom";

export default function SingleCocktail() {
  // console.log(useParams());
  const { id } = useParams();
  return <h1>single cocktail page id : {id}</h1>;
}
