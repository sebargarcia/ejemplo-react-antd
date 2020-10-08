import React, { Reducer, useReducer, useState } from "react";
import { IUser } from "../models/user.model";
import { createContext } from "react";
import { Characters } from "../models/character.model";

export interface MyCharactersState {
  favoriteCharacters: Characters[];
}

const defaultStateCharacters: MyCharactersState = {
  favoriteCharacters: [],
};

export const CharactersContext = createContext(
  {} as [
    MyCharactersState,
    React.Dispatch<{ type: CharactersActionsEnum; payload: Characters }>
  ]
);

export enum CharactersActionsEnum {
  ADD_CHARACTER_1 = "ADD_CHARACTER",
  DELETE_CHARACTER = "DELETE_CHARACTER",
  CLEAN_STATE = "CLEAN_STATE",
}

const charactersReducer = (
  state: MyCharactersState,
  action: { type: CharactersActionsEnum; payload: Characters }
) => {
  switch (action.type) {
    case CharactersActionsEnum.ADD_CHARACTER_1: {
      // state.favoriteCharacters.push(action.payload);
      // return state;
      return {
        favoriteCharacters: [...state.favoriteCharacters, action.payload],
      };
    }
    case CharactersActionsEnum.DELETE_CHARACTER: {
      return {
        favoriteCharacters: state.favoriteCharacters.filter(
          (c) => c.name !== action.payload.name
        ),
      };
    }
    case CharactersActionsEnum.CLEAN_STATE: {
      return defaultStateCharacters;
    }
    default:
      return state;
  }
};

const CharacterContextProvider = ({ children }: { children: any }) => {
  const [favoriteCharacters, dispatchCharacters] = useReducer(
    charactersReducer,
    defaultStateCharacters
  );

  //ADD, DELETE

  return (
    <CharactersContext.Provider
      value={[favoriteCharacters, dispatchCharacters]}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacterContextProvider;
