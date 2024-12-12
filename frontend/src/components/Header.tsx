import { LuFileStack } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbFileSettings } from "react-icons/tb";

export default function Page() {
    return(
        <div className="bg-second flex items-center shadow-xl m-[2%] rounded-lg gap-4">
            <div className="flex justify-center items-center w-full space-x-8">
                <div className="text-primary p-4 flex justify-center items-center">
                    <div className="p-4">
                        <LuFileStack size={50}   className="rounded-sm bg-gradient-to-r from-[#D3EEFF] via-[#D3EEFF80] to-[#D3EEFF00]" color="primary"/>
                    </div>
                    <div className="">
                        <p className="text-sm text-zinc-500">Total de solicitações</p>
                        <h2 className="text-primary text-2xl font-semibold">1000</h2>
                    </div>
                </div>
                <div className="text-primary flex justify-center items-center">
                    <div className="p-4">
                        <BiMoneyWithdraw size={50}   className="rounded-sm bg-gradient-to-r from-[#D3EEFF] via-[#D3EEFF80] to-[#D3EEFF00]" color="primary"/>
                    </div>
                    <div className="">
                        <p className="text-sm text-zinc-500">Solicitações de Pagamentos</p>
                        <h2 className="text-primary text-2xl font-semibold">1000</h2>
                    </div>
                </div>
                <div className="text-primary p-4 border-zinc-400 flex justify-center items-center">
                    <div className="p-4">
                        <TbFileSettings size={50}   className="rounded-sm bg-gradient-to-r from-[#D3EEFF] via-[#D3EEFF80] to-[#D3EEFF00]" color="primary"/>
                    </div>
                    <div className="">
                        <p className="text-sm text-zinc-500">Solicitações de Serviços</p>
                        <h2 className="text-primary text-2xl font-semibold">1000</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}