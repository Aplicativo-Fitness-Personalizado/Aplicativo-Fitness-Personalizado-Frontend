import type RegiaoCorporal from "./RegiaoCorporal";
import type Usuario from "./Usuario";

export default interface Treino {
  id: number;
  titulo: string;
  descricao: string;
  repeticao: number;
  tempoDescanso: string;
  regiaocorporal: RegiaoCorporal | null;
  usuario: Usuario | null;
}