import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import Table from "@/components/Table";

export default function DashboardClient() {
    return(
        <>
            <div className="flex flex-col h-screen">
                <div className="flex flex-1">
                    <Sidebar Option={"client"}></Sidebar>
                    <main className="bg-zinc-100 flex-1">
                        <Header Option={"perfil"}></Header>
                        <Table></Table>
                    </main>
                </div>
            </div>
        </>
    )
}