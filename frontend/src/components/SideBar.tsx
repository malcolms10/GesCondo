"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CiLogout } from "react-icons/ci";
import { AiFillSignal } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";


export default function Sidebar({ Option }) {

    const router = useRouter()

    function handleLogOut() {
        localStorage.clear()
        router.push('/')
    }

    return(
        <>
        {Option === "admin" && (
            <aside className="w-[17%] bg-primary">
                <hr className='mt-4'/>
                <div className='flex items-center justify-center pt-2'>
                    <nav className='w-full'>
                        <li className='list-none w-full flex-row justify-center items-center'>
                            <ul className='p-2 bg-second border-primary border w-full '>                
                                <Link href={'/pages/Dashboard'} className='text-primary flex ml-[10%] items-center gap-3'> <AiFillSignal size={24} color="primary"/><p>Dashboard</p></Link>    
                            </ul>
                            <ul className='p-2'>                
                                <div onClick={handleLogOut} className='flex ml-[10%] items-center gap-3 text-second'> 
                                    <CiLogout size={24} color="white"/>
                                    <p>Terminar Sessão</p>
                                </div>
                            </ul>
                        </li>
                    </nav>            
                </div>
            </aside>
        )}
        {Option === "client" && (
            <aside className="w-[17%] bg-primary">
                <hr className='mt-4'/>
                <div className='flex items-center justify-center pt-2'>
                    <nav className='w-full'>
                        <li className='list-none w-full flex-row justify-center items-center'>
                            <ul className='p-2 bg-second border-primary border w-full '>                
                                <Link href={'/pages/Dashboard'} className='text-primary flex ml-[10%] items-center gap-3'> <AiFillSignal size={24} color="primary"/><p>Dashboard</p></Link>    
                            </ul>
                            <ul className='p-2'>                
                                <div onClick={handleLogOut} className='flex ml-[10%] items-center gap-3 text-second'> 
                                    <CiCirclePlus size={24} color="white"/>
                                    <p>Solicitar serviço</p>
                                </div>
                            </ul>
                            <ul className='p-2'>                
                                <div onClick={handleLogOut} className='flex ml-[10%] items-center gap-3 text-second'> 
                                    <CiCirclePlus size={24} color="white"/>
                                    <p> Submeter pagamento</p>
                                </div>
                            </ul>
                            <ul className='p-2'>                
                                <div onClick={handleLogOut} className='flex ml-[10%] items-center gap-3 text-second'> 
                                    <CiLogout size={24} color="white"/>
                                    <p>Terminar Sessão</p>
                                </div>
                            </ul>
                        </li>
                    </nav>            
                </div>
            </aside>
        )}
        </>
    )
}