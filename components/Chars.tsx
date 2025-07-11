import type { FunctionalComponent } from "preact/src/index.d.ts";
import type { Character } from "../type.ts";
import { Char } from "./Char.tsx";

export const Chars: FunctionalComponent<{Characters: Character[]}> =({Characters})=>{
    return(
        <>{Characters.map((elem)=>{
            return(
                <Char Character = {elem}></Char>
            
        )})}</>
    )
}