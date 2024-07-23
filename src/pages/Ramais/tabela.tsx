import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { X, Edit, Plus } from 'lucide-react';


const handleEditClick = (id: number) => {
    console.log(`Edit item with id: ${id}`);
};

const handleDeleteClick = (id: number) => {
    console.log(`Delete item with id: ${id}`);
};

const renderEdit = (params: GridRenderCellParams) => (
    <button onClick={() => handleEditClick(params.row.id)}><Edit size={20} color='#0059ff' /></button>
);
const renderDelete = (params: GridRenderCellParams) => (
    <button onClick={() => handleDeleteClick(params.row.id)}><X size={20} color='#ff0000' /></button>
);

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'departamento', headerName: 'Departamento', width: 130 },
    { field: 'colaborador', headerName: 'Colaborador', width: 130 },
    { field: 'email', headerName: 'E-mail', width: 180 },
    { field: 'ramal', headerName: 'Ramal', width: 110 },
    { field: 'descricao', headerName: 'Descrição', width: 150 },
    {
        field: 'edit',
        headerName: 'Editar',
        width: 60,
        renderCell: renderEdit
    },
    {
        field: 'delete',
        headerName: 'Deletar',
        width: 60,
        renderCell: renderDelete
    },
];

const rows = [
    { id: 1, departamento: 'TI', colaborador: 'Vitor Marinheiro', email: 'vitor@company.com', ramal: '0124', descricao: 'Gerente' },
    { id: 2, departamento: 'TI', colaborador: 'Lannister', email: 'lannister@company.com', ramal: '4234', descricao: '' },
    { id: 3, departamento: 'TI', colaborador: 'Tony', email: 'tony@company.com', ramal: '2452', descricao: '' },
    { id: 4, departamento: 'TI', colaborador: 'Stark', email: 'stark@company.com', ramal: '4245', descricao: '' },
    { id: 5, departamento: 'TI', colaborador: 'Targaryen', email: 'targaryen@company.com', ramal: '2452', descricao: '' },
    { id: 6, departamento: 'TI', colaborador: 'Melisandre', email: 'melisandre@company.com', ramal: '3435', descricao: '' },
    { id: 7, departamento: 'TI', colaborador: 'Clifford', email: 'clifford@company.com', ramal: '4353', descricao: '' },
    { id: 8, departamento: 'TI', colaborador: 'Frances', email: 'frances@company.com', ramal: '3545', descricao: '' },
    { id: 9, departamento: 'TI', colaborador: 'Roxie', email: 'roxie@company.com', ramal: '7533', descricao: '' },
    { id: 10, departamento: 'TI', colaborador: 'Ferrara', email: 'ferrara@company.com', ramal: '3753', descricao: '' },
    { id: 11, departamento: 'TI', colaborador: 'Rossini', email: 'rossini@company.com', ramal: '3752', descricao: '' },
    { id: 12, departamento: 'TI', colaborador: 'Harvey', email: 'harvey@company.com', ramal: '5377', descricao: '' },
    { id: 13, departamento: 'TI', colaborador: 'Daenerys', email: 'daenerys@company.com', ramal: '3753', descricao: '' },
    { id: 14, departamento: 'TI', colaborador: 'Roxie', email: 'roxie@company.com', ramal: '2433', descricao: '' },
    { id: 15, departamento: 'TI', colaborador: 'Arya', email: 'arya@company.com', ramal: '3243', descricao: '' },
    { id: 16, departamento: 'TI', colaborador: 'Roxie', email: 'roxie@company.com', ramal: '7447', descricao: '' },
    { id: 17, departamento: 'TI', colaborador: 'Jaime', email: 'jaime@company.com', ramal: '1411', descricao: '' },
    { id: 18, departamento: 'TI', colaborador: 'Roxie', email: 'roxie@company.com', ramal: '6534', descricao: '' },
    { id: 19, departamento: 'TI', colaborador: 'Cersei', email: 'cersei@company.com', ramal: '3545', descricao: '' },
    { id: 20, departamento: 'TI', colaborador: 'suporte', email: 'suporte@company.com', ramal: '5544', descricao: '' },
];

export function Tabela() {
    return (
        <div className='py-6'>
            <div className='flex gap-8 px-10'>
                <input className='outline-none w-[900px] pl-6 flex-2 py-2 bg-zinc-100 border-2 border-gray-300 rounded-full' type="text" placeholder='Search' />
                <button className='flex items-center gap-2 px-12 font-medium bg-zinc-100 border-2 border-gray-300 rounded-full whitespace-nowrap hover:bg-zinc-200 text-sm'><Plus size={24} />Adicionar item</button>
            </div>
            <div className='pt-6 px-12'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}
