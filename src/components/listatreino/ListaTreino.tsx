import { DNA } from 'react-loader-spinner';
import CardTreino from '../treino/CardTreino';
import type Treino from '../../models/Treino';


function ListaTreino({ atualizarLista, treinos }: { atualizarLista: () => void, treinos: Treino[] }) {

    return (
        <>
            {treinos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {treinos.map((treino) => (
                            <CardTreino atualizarLista={atualizarLista} key={treino.id} treino={treino} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaTreino