import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import { FiFileText } from "react-icons/fi";

export default function ViewPayment() {
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
                            <hr />
                            <div>
                            <h2 className="text-lg font-semibold space-y-4">Nota:</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid quis placeat qui beatae facilis sapiente quisquam consectetur. Fugit debitis sunt sint beatae, quod minus quos cum voluptas iusto nostrum.</p> 
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}