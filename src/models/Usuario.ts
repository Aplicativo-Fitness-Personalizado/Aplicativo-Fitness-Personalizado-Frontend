import type Treino from "./Treino";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  altura: number;
  peso: number;
  treino?: Treino[] | null;
}