import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
    titulo: string
}

export function Header({ titulo }: Props) {
    return (
        <div className='flex items-center gap-12 px-6'>
            <Link to="/"><button className='flex gap-2 text-zinc-400 text-sm'><ArrowLeft size={18} />Voltar</button></Link>
            <h1 className='font-medium text-2xl'>{titulo}</h1>
        </div>
    )
}