import { LuFileStack } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbFileSettings } from "react-icons/tb";
import { PiBellSimpleThin } from "react-icons/pi";

export default function Page({ Option }) {
  return (
    <>
      {/* Condicional para exibir conteúdo baseado na prop Option */}
      {Option === "servicos" && (
        <div className="bg-second flex items-center shadow-xl m-[2%] rounded-lg gap-4">
          <div className="flex justify-between items-center w-full p-10">
            <h2 className="text-xl text-primary">Validar Solicitação de Serviço</h2>
            <h2 className="text-xl text-primary">Malcolm Silva</h2>
          </div>
        </div>
      )}

      {Option === "pagamentos" && (
        <div className="bg-second flex items-center shadow-xl m-[2%] rounded-lg gap-4">
          <div className="flex justify-between items-center w-full p-10">
            <h2 className="text-xl text-primary">Validar Solicitação de Pagamento</h2>
            <h2 className="text-xl text-primary">Malcolm Silva</h2>
          </div>
        </div>
      )}

      {Option === "geral" && (
        <div className="bg-second flex items-center shadow-xl m-[2%] rounded-lg gap-4">
          <div className="flex justify-center items-center w-full space-x-8">
            <div className="text-primary p-4 flex justify-center items-center">
              <div className="p-4">
                <LuFileStack
                  size={50}
                  className="rounded-sm bg-gradient-to-r from-[#D3EEFF] via-[#D3EEFF80] to-[#D3EEFF00]"
                  color="primary"
                />
              </div>
              <div className="">
                <p className="text-sm text-zinc-500">Total de solicitações</p>
                <h2 className="text-primary text-2xl font-semibold">1000</h2>
              </div>
            </div>
            <div className="text-primary flex justify-center items-center">
              <div className="p-4">
                <BiMoneyWithdraw
                  size={50}
                  className="rounded-sm bg-gradient-to-r from-[#D3EEFF] via-[#D3EEFF80] to-[#D3EEFF00]"
                  color="primary"
                />
              </div>
              <div className="">
                <p className="text-sm text-zinc-500">Solicitações de Pagamentos</p>
                <h2 className="text-primary text-2xl font-semibold">1000</h2>
              </div>
            </div>
            <div className="text-primary p-4 border-zinc-400 flex justify-center items-center">
              <div className="p-4">
                <TbFileSettings
                  size={50}
                  className="rounded-sm bg-gradient-to-r from-[#D3EEFF] via-[#D3EEFF80] to-[#D3EEFF00]"
                  color="primary"
                />
              </div>
              <div className="">
                <p className="text-sm text-zinc-500">Solicitações de Serviços</p>
                <h2 className="text-primary text-2xl font-semibold">1000</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {/**Cliente */}

      {Option === "perfil" && (
        <div className="bg-second flex items-center shadow-xl m-[2%] rounded-lg gap-4">
          <div className="flex justify-between items-center w-full p-10">
            <h2 className="text-xl text-primary">Bem Vindo</h2>
            <div className="flex items-center gap-6">
                <h2 className="text-xl text-primary">Malcolm Silva</h2>
                <PiBellSimpleThin className="rounded-sm bg-gradient-to-r from-[#D3EEFF] via-[#D3EEFF80] to-[#D3EEFF00]"
                  color="primary" size={25}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
