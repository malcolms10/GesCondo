"use client"

import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import { PiUploadSimpleThin } from "react-icons/pi";
import { useState } from "react";

export const animals = [
    {key: "1", label: "Desentupir cano"},
    {key: "2", label: "Pintar porta"},
    {key: "3", label: "Trocar lâmpada"},
    {key: "4", label: "Outros"}
  ];

export default function AskService() {

    const [showApproveModal, setShowApproveModal] = useState(false);

    const openApproveModal = () => setShowApproveModal(true);

    const closeApproveModal = () => setShowApproveModal(false);

    const [selectedOption, setSelectedOption] = useState("");

    // Função chamada quando o valor do select muda
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return(
        <>
            <div className="flex flex-col h-screen">
                <div className="flex flex-1">
                    <Sidebar Option={"client"}></Sidebar>
                    <main className="bg-zinc-100 flex-1">
                        <Header Option={"pagamentos"}></Header>
                        <div className="flex flex-col bg-second shadow-xl m-[2%] rounded-lg p-8 gap-6">
                            <h2 className="text-xl font-semibold">Informações do serviço:</h2>
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
                            <div>
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-semibold">Tipo de serviço</h2>
                                        <div>
                                            {/* Select com as opções */}
                                            <select
                                                value={selectedOption}  // O valor selecionado vem do estado
                                                onChange={handleChange}  // Atualiza o estado quando o usuário muda a opção
                                            >
                                                <option value="">Escolha uma opção</option>  {/* Opção inicial vazia */}
                                                {animals.map((animal) => (
                                                <option key={animal.key} value={animal.key}>
                                                    {animal.label}
                                                </option>
                                                ))}
                                            </select>
                                            </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-semibold">Descrição do serviço</h2>
                                        <input className="rounded-lg border p-2 w-72" placeholder="Opcional..." type="text" name="" id="" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-semibold">Data pretendida</h2>
                                        <input type="date" name="" id="" />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-4">
                                    <p>Adicione uma foto</p>
                                    <div >
                                        <PiUploadSimpleThin className="ml-10" size={40}/>
                                        <p className="text-zinc-400 text-xs">*A fotografia é opcional</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="flex justify-end items-end m-[2%] gap-6">
                            <button className="p-4 rounded-sm w-[15%] border-2 border-primary bg-primary text-white hover:bg-white hover:text-black duration-300 transition-all" onClick={openApproveModal}>Solicitar</button>
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
                                className="px-4 py-2 bg-primary text-white rounded-sm hover:bg-gray-200 hover:text-black"
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