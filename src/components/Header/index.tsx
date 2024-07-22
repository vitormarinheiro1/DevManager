import { CircleUser, FileCheck, LayoutDashboard, Monitor, Phone } from 'lucide-react';

export function Header() {
    return (
        <div className="flex h-screen">
            <aside className="bg-zinc-900 h-full w-56 text-zinc-50 py-12 px-6">
                <p className='flex items-center gap-2'><CircleUser size={32} />Vitor Marinheiro</p>
                <ul className='py-20'>
                    <li className='flex flex-row gap-4 mb-6'><LayoutDashboard />Dashboard</li>
                    <li className='flex flex-row gap-4 mb-6'><Phone />Ramais</li>
                    <li className='flex items-center flex-row gap-4 mb-6'><FileCheck />Inventário TI</li>
                    <li className='flex items-center flex-row gap-4 mb-6'><Monitor />Controle Máquinas</li>
                </ul>
            </aside>
            <main className="flex-grow text-gray-950">
                Conteúdo principal
            </main>
        </div>
    )
}
