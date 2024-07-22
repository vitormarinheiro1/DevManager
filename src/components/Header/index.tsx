import { HeartPulse, Moon } from "lucide-react";

export function Header() {
    return (
        <header className="flex justify-around items-center h-16">
            <h1 className="flex items-center justify-center text-3xl text-primary gap-1">Hebrom <span className="mt-1"><HeartPulse color="#ff0000" size={32}/></span></h1>
            <nav>
                <ul className="flex gap-2 text-lg text-primary">
                    <li>Ramais</li>
                    <li>Estoque</li>
                    <li>Máquinas</li>
                    <li>Chamados</li>
                    <li><Moon /></li>
                </ul>
            </nav>
        </header>
    )
}