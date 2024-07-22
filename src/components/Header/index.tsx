import { ArrowLeft } from "lucide-react";

interface Props {
    titulo: string
}

export function Header({ titulo }: Props) {
    return (
        <div className='flex items-center gap-12 px-6'>
            <button className='flex gap-2 text-zinc-400 text-sm'><ArrowLeft size={18} />Back</button>
            <h1 className='font-medium text-2xl'>{titulo}</h1>
        </div>
    )
}