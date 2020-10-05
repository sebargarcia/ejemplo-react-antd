import React, { useState } from "react";
import { IUser } from "../models/user.model";
import { createContext } from "react";
import { Characters } from "../models/character.model";

export interface MyCharactersContext {
  favoriteCharacters: Characters[];
  setFavoriteCharacters: (characters: Characters[]) => void;
}

export const CharactersContext = createContext({} as MyCharactersContext);

const CharacterContextProvider = ({ children }: { children: any }) => {
  const [favoriteCharacters, setFavoriteCharacters] = useState<Characters[]>(
    []
  );

  //ADD, DELETE, EDIT

  return (
    <CharactersContext.Provider
      value={{ favoriteCharacters, setFavoriteCharacters }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacterContextProvider;
