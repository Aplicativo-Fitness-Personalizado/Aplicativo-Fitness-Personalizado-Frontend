import type Treino from "./Treino";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  altura: string;
  peso: string;
  treino?: Treino[] | null;
}