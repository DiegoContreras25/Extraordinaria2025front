import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import type { Character } from "../../type.ts";


export const handler: Handlers<Character> = {
    GET: async(_req: Request, ctx:FreshContext<unknown,Character>)=>{
        const id= ctx.params.id;
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        //const data: Character[]= await res.json;
        return(ctx.render(undefined))
    }
}

export default function Page(pepe: PageProps<Character>){
    return(
        <body>
   <div class="container">
      <a href="/" class="back-link" data-ancestor="true" aria-current="true">Volver</a>
      <div class="character-detail">
         <img src={pepe.data.image} alt={pepe.data.name} width="200"></img>
         <div class="character-info">
            <h1 class="title">{pepe.data.name}</h1>
            <ul>
               <li><strong>Status:</strong> {pepe.data.status}</li>
               <li><strong>Species:</strong> {pepe.data.species}</li>
               <li><strong>Gender:</strong> {pepe.data.gender}</li>
               <li><strong>Origin:</strong> {pepe.data.origin}</li>
               <li><strong>Location:</strong> {pepe.data.location}</li>
            </ul>
         </div>
      </div>
   </div>
</body>
    )
}