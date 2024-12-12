import React from "react";


export default function App() {

  return (
    <div className="flex flex-col bg-second shadow-xl m-[2%] rounded-lg">
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
                <table className="min-w-full">
                <thead>
                    <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Número de Processo</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Criador</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Data de Entrada</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Solicitação</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Quarteirão</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Estado</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">202411281</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">John Brown</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">2024/11/28</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">Solicitação de serviços</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">U</td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" className="items-center px-2 text-sm rounded-sm border-waitborder border text-waittext bg-waitbg ">Por tratar</button>
                        </td>
                    </tr>
                    <tr>                    
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">202411281</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">John Doe</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">2024/11/28</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">Solicitação de pagamento</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">H</td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button type="button" className="items-center px-2 text-sm rounded-sm border-acceptBorder border text-acceptText bg-acceptBg ">Aceite</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
  );
}
