import Sidebar from "@/components/SideBar";
import Header from "@/components/Header";
import Table from "@/components/Table";


export default function Page() {

  return (
    <div className="flex flex-col h-screen">
        <div className="flex flex-1">
            <Sidebar Option={"admin"}></Sidebar>
            <main className="bg-zinc-100 flex-1">
                <Header Option={"geral"}></Header>
                <Table></Table>
            </main>
        </div>
    </div>
  );
}
