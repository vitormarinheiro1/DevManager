import { Avatar, Stack } from "@mui/material";
import { FileCheck, LayoutDashboard, LogOut, Monitor, Phone, TicketCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <aside className="w-60 bg-zinc-900 h-full text-zinc-50 py-12 px-6">
            <p className='flex items-center gap-2'>
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/src/assets/Perfil.png" />
                </Stack>
                Company
            </p>
            <ul className='pt-12 text-sm'>
                        <Link to="/dashboard"><li className='flex items-center flex-row gap-4 mb-6 py-2'><LayoutDashboard size={20} />Dashboard</li></Link>
                        <Link to="/ramais"><li className='flex items-center flex-row gap-4 mb-6 py-2'><Phone size={20} />Ramais</li></Link>
                        <Link to="/inventario"><li className='flex items-center flex-row gap-4 mb-6 py-2'><FileCheck size={20} />Inventário TI</li></Link>
                        <Link to="/controle-maquinas"><li className='flex items-center flex-row gap-4 mb-6 py-2'><Monitor size={20} />Controle Máquinas</li></Link>
                        <Link to="/chamados"><li className='flex items-center flex-row gap-4 mb-6 py-2'><TicketCheck size={20} />Chamados</li></Link>
                        <Link to="#"><li className='flex items-center flex-row gap-4 mt-64 '><LogOut size={20} />Logout</li></Link>
            </ul>
        </aside>
    )
}