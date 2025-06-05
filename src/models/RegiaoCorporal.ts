import type Treino from "./Treino";


export default interface RegiaoCorporal {
    id: number;
    nome: string;
    descricao: string;
    treino?: Treino [] | null;
}