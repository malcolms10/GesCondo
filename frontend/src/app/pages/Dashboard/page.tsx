'use client'
import { useState } from "react";
import Sidebar from "@/components/SideBar";
import Header from "@/components/Header";
import Table from "@/components/Table";


const dataSource = [
  {
    key: '1',
    id: '20230',
    tipo: 'Circularização',
    identificacao: '(BI)005434787LA044',
    entidade: 'Malcolm Silva',
    requisitante: 'Cliente',
    sla: 'Atrasado',
    estado: 'Na Dpo contratação',
    recebido: '13/06/2023 13:35',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    className: 'px-8 text-xs',
  },
  {
    title: 'Tipo',
    dataIndex: 'tipo',
    key: 'tipo',
    className: 'px-8 text-xs',
  },
  {
    title: 'Identificação',
    dataIndex: 'identificacao',
    key: 'identificacao',
    className: 'px-10 text-xs',
  },
  {
    title: 'Entidade',
    dataIndex: 'entidade',
    key: 'entidade',
    className: 'px-14 text-xs',
  },
  {
    title: 'Requisitante',
    dataIndex: 'requisitante',
    key: 'requisitante',
    className: 'px-8 text-xs',
  },
  {
    title: 'SLA',
    dataIndex: 'sla',
    key: 'sla',
    className: 'px-10 text-xs',
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    key: 'estado',
    className: 'px-18 text-xs',
  },
  {
    title: 'Recebido',
    dataIndex: 'recebido',
    key: 'recebido',
    className: 'px-10 text-xs',
  },
];

export default function Page() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleMenuClick = (e) => {
      setSelectedOption(e.key);
  };
  

  return (
    <div className="flex flex-col h-screen">
        <div className="flex flex-1">
            <Sidebar></Sidebar>
            <main className="bg-zinc-100 flex-1">
                <Header></Header>
                <Table></Table>
            </main>
        </div>
    </div>
  );
}
