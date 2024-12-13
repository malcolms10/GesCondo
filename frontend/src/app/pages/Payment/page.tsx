"use client"

import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import { FiFileText } from "react-icons/fi";
import { useState } from "react";

export default function Payment() {

    const [nota, setNota] = useState("");

    const handleChange = (event) => {
        setNota(event.target.value)
    }

    // Estado para controlar a exibição das modals
    const [showApproveModal, setShowApproveModal] = useState(false);
    const [showRejectModal, setShowRejectModal] = useState(false);

    // Funções para abrir os modais
    const openApproveModal = () => setShowApproveModal(true);
    const openRejectModal = () => setShowRejectModal(true);

    // Funções para fechar os modais
    const closeApproveModal = () => setShowApproveModal(false);
    const closeRejectModal = () => setShowRejectModal(false);

    return(
        <>
            <div className="flex flex-col h-screen">
            <div className="flex flex-1">
                <Sidebar Option={"admin"}></Sidebar>
                <main className="bg-zinc-100 flex-1">
                    <Header Option={"pagamentos"}></Header>
                    <div className="flex flex-col bg-second shadow-xl m-[2%] rounded-lg p-8 gap-6">
                        <h2 className="text-xl font-semibold">Detalhes do Pagamento</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-zinc-400">
                                <p>Número de Processo</p>
                                <p>Criador</p>
                                <p>Data de Entrada</p>
                                <p>Solicitação</p>
                                <p>Quarteirão</p>
                                <p>Estado</p>
                            </div>
                            <hr />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <p>202412121</p>
                                <p>Malcolm Silva</p>
                                <p>27/02/2024</p>
                                <p>Solicitação de pagamento</p>
                                <p>H</p>
                                <p className="bg-waitbg border-b-waitborder text-waittext p-2 text-sm rounded-md">Pro tratar</p>
                            </div>
                            <hr />
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <FiFileText size={120}/>
                                <p className="text-zinc-400 text-xs">*Clique no ícone para <br/> abrir o documento</p>
                            </div>
                            <p>Processo: 202412121</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-end m-[2%] gap-6">
                        <button className="p-4 hover:bg-white border-primary border-2 rounded-sm w-[15%] hover:text-primary duration-300 transition-all"  onClick={openRejectModal}>Recusar</button>
                        <button className="p-4 rounded-sm w-[15%] border-2 border-primary bg-primary text-white hover:bg-white hover:text-black duration-300 transition-all" onClick={openApproveModal}>Aprovar</button>
                    </div>
                </main>
            </div>
            </div>

             {/* Modal de Aprovação */}
             {showApproveModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-semibold text-green-500">Solicitação Aprovada!</h3>
                        <p className="text-lg text-zinc-600">O pagamento foi aprovado com sucesso.</p>
                        <div className="mt-4 flex justify-center gap-4">
                            <button
                                onClick={closeApproveModal}
                                className="px-4 py-2 bg-primary text-white rounded-sm hover:bg-gray-200"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Recusa */}
            {showRejectModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center space-y-3">
                        <h3 className="text-2xl font-semibold text-red-500">Solicitação Recusada!</h3>
                        <p className="text-lg text-zinc-600">O pagamento foi recusado.</p>
                        <input value={nota} onChange={handleChange} type="text" name="" id="" placeholder="Quer deixar alguma nota?" className="p-2 border w-72"/>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={closeRejectModal}
                                className="px-4 py-2 bg-primary text-white rounded-sm hover:bg-gray-200"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}