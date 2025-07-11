import type { FunctionalComponent } from "preact/src/index.d.ts";
import type { Character } from "../type.ts";

export const Char: FunctionalComponent<{ Character: Character }> = (
   { Character }
) => {
   return (
      <body>
         <div class="container">
            <a
               href="/"
               class="back-link"
               data-ancestor="true"
               aria-current="true"
            >
               Volver
            </a>
            <div class="character-detail">
               <img
                  src={Character.image}
                  alt={Character.name}
                  width="200"
               >
               </img>
               <div class="character-info">
                  <h1 class="title">{Character.name}</h1>
                  <ul>
                     <li>
                        <strong>Status:</strong> {Character.status}
                     </li>
                     <li>
                        <strong>Species:</strong> {Character.species}
                     </li>
                     <li>
                        <strong>Gender:</strong> {Character.gender}
                     </li>
                     <li>
                        <strong>Origin:</strong> {Character.origin}
                     </li>
                     <li>
                        <strong>Location:</strong> {Character.location}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </body>
   );
};
