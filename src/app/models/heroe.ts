export interface Heroe {
  _id: string;
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  __v?: number;
  index?: number;
}

export interface ApiResponse {
  superheroes: Heroe[];
  superheroe: Heroe;
}
