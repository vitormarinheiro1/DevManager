import { Bell, CircleUser, Moon } from "lucide-react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Tabela } from "./tabela";

export function ControleMaquinas() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-grow text-gray-950 bg-gray-100">
                <div className='flex justify-between text-center py-6 bg-white'>
                    <Header titulo="Controle Máquinas" />
                    <div className='flex items-center px-12 gap-4 text-zinc-400'>
                        <Moon size={20} />
                        <Bell size={20} />
                        <div className='bg-zinc-400 h-10 w-px' />
                        <p>Vitor Marinheiro</p>
                        <CircleUser size={36} />
                    </div>
                </div>
                <div>
                    <Tabela />
                </div>
            </main>
        </div>
    )
}