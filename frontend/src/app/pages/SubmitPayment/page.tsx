"use client"

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import { VscNewFile } from "react-icons/vsc";

export default function SubmitPayment() {

    const [showApproveModal, setShowApproveModal] = useState(false);

    const openApproveModal = () => setShowApproveModal(true);

    const closeApproveModal = () => setShowApproveModal(false);


    return(
        <>
            <div className="flex flex-col h-screen">
                <div className="flex flex-1">
                    <Sidebar Option={"client"}></Sidebar>
                    <main className="bg-zinc-100 flex-1">
                        <Header Option={"pagamentos"}></Header>
                        <div className="flex flex-col bg-second shadow-xl m-[2%] rounded-lg p-8 gap-6">
                            <h2 className="text-xl font-semibold">Detalhes do Pagamento</h2>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-zinc-400">
                                    <p>Criador</p>
                                    <p>Data de Solicitação</p>
                                    <p>Quarteirão</p>
                                    <p>Operação</p>
                                </div>
                                <hr />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <p>Malcolm Silva</p>
                                    <p>27/02/2024</p>
                                    <p>H</p>
                                    <p>Pagamento</p>
                                </div>
                                <hr />
                            </div>
                            <div className="flex gap-4 pb-4">
                                <div>
                                    <VscNewFile size={120}/>
                                    <p className="text-zinc-400 text-xs">*Clique no ícone para <br/> importar o documento</p>
                                </div>
                                <p>Importar Ficheiro</p>
                            </div>
                            <hr />
                        </div>
                        <div className="flex justify-end items-end m-[2%] gap-6">
                            <button className="p-4 rounded-sm w-[15%] border-2 border-primary bg-primary text-white hover:bg-white hover:text-black duration-300 transition-all" onClick={openApproveModal}>Submeter</button>
                        </div>
                    </main>
                </div>
            </div>

            {/* Modal de Aprovação */}
            {showApproveModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-semibold text-green-500">Solicitação Submetida!</h3>
                        <p className="text-lg text-zinc-600">O pagamento foi submetido com sucesso.</p>
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
        </>
    )
}