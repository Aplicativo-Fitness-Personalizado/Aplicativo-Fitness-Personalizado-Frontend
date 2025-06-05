/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import type Treino from '../../models/Treino';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar } from '../../services/Service';
import { ToastAlerts } from '../../util/ToastAlerts';
import { DNA } from 'react-loader-spinner';
import CardTreino from '../treino/CardTreino';


function ListaTreino() {

   const navigate = useNavigate();
   const [treinos, setTreino] = useState<Treino[]>([]);

   const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarTreinos() {
        try {
            await buscar('/treinos', setTreino, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerts('Você precisa estar logado', 'info')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTreinos()
    }, [treinos.length])





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
                            <CardTreino key={treino.id} treino={treino} />
                        ))}
                    </div>
                </div>
            </div>
        </>
  )
}

export default ListaTreino