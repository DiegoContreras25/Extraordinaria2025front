import { useSignal } from "@preact/signals";
import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import type { Character } from "../type.ts";
import { Chars } from "../components/Chars.tsx";

//buscar -> CSR
//Character -> SSR

export const handler: Handlers<Character[]> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Character[]>) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character`);
    const data: Character[] = await res.json();
    return (ctx.render(data));
  },
};

export default function Home(pp: PageProps<Character[]>) {
  return (
    <div class="container">
   <h1 class="title">Rick and Morty Characters</h1>
   <div>
      <form class="search-form"><input class="search-input" value="" placeholder="Nombre del personaje"></input><button type="submit" class="button">Buscar</button></form>
      <div class="characters">
         <a href="/character/1" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"></img>
            <p>Rick Sanchez</p>
         </a>
         <a href="/character/2" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="Morty Smith"></img>
            <p>Morty Smith</p>
         </a>
         <a href="/character/3" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt="Summer Smith"></img>
            <p>Summer Smith</p>
         </a>
         <a href="/character/4" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" alt="Beth Smith"></img>
            <p>Beth Smith</p>
         </a>
         <a href="/character/5" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt="Jerry Smith"></img>
            <p>Jerry Smith</p>
         </a>
         <a href="/character/6" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/6.jpeg" alt="Abadango Cluster Princess"></img>
            <p>Abadango Cluster Princess</p>
         </a>
         <a href="/character/7" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/7.jpeg" alt="Abradolf Lincler"></img>
            <p>Abradolf Lincler</p>
         </a>
         <a href="/character/8" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/8.jpeg" alt="Adjudicator Rick"></img>
            <p>Adjudicator Rick</p>
         </a>
         <a href="/character/9" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/9.jpeg" alt="Agency Director"></img>
            <p>Agency Director</p>
         </a>
         <a href="/character/10" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/10.jpeg" alt="Alan Rails"></img>
            <p>Alan Rails</p>
         </a>
         <a href="/character/11" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/11.jpeg" alt="Albert Einstein"></img>
            <p>Albert Einstein</p>
         </a>
         <a href="/character/12" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/12.jpeg" alt="Alexander"></img>
            <p>Alexander</p>
         </a>
         <a href="/character/13" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/13.jpeg" alt="Alien Googah"></img>
            <p>Alien Googah</p>
         </a>
         <a href="/character/14" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/14.jpeg" alt="Alien Morty"></img>
            <p>Alien Morty</p>
         </a>
         <a href="/character/15" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/15.jpeg" alt="Alien Rick"></img>
            <p>Alien Rick</p>
         </a>
         <a href="/character/16" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/16.jpeg" alt="Amish Cyborg"></img>
            <p>Amish Cyborg</p>
         </a>
         <a href="/character/17" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/17.jpeg" alt="Annie"></img>
            <p>Annie</p>
         </a>
         <a href="/character/18" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/18.jpeg" alt="Antenna Morty"></img>
            <p>Antenna Morty</p>
         </a>
         <a href="/character/19" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="Antenna Rick"></img>
            <p>Antenna Rick</p>
         </a>
         <a href="/character/20" class="character-card">
            <img src="https://rickandmortyapi.com/api/character/avatar/20.jpeg" alt="Ants in my Eyes Johnson"></img>
            <p>Ants in my Eyes Johnson</p>
         </a>
      </div>
      <div class="pagination"><button disabled="" class="button">Anterior</button><span>1 / 42</span><button class="button">Siguiente</button></div>
   </div>
</div>
  );
}
/*<div class="container">
      <Chars Characters={pp.data}></Chars>
    </div>*/