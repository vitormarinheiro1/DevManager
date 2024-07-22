import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Edit, FileText, Plus, Sheet, X } from 'lucide-react';

const handleEditClick = (id: number) => {
  console.log(`Edit item with id: ${id}`);
};

const handleDeleteClick = (id: number) => {
  console.log(`Delete item with id: ${id}`);
};

const handlePDFExport = (id: number) => {
  console.log(`Export PDF item with id: ${id}`);
};

const handleExcelExport = (id: number) => {
  console.log(`Export Excel item with id: ${id}`);
};

const renderEdit = (params: GridRenderCellParams) => (
  <button onClick={() => handleEditClick(params.row.id)}><Edit size={20} color='#0059ff' /></button>
);
const renderDelete = (params: GridRenderCellParams) => (
  <button onClick={() => handleDeleteClick(params.row.id)}><X size={20} color='#ff0000' /></button>
);

const renderExcelEPDF = (params: GridRenderCellParams) => (
  <>
    <button onClick={() => handlePDFExport(params.row.id)}><FileText size={20} color='#ff0000' /></button>
    <button onClick={() => handleExcelExport(params.row.id)}><Sheet size={20} color='#007c02' /></button>
  </>
);

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'produto', headerName: 'Produto', width: 250 },
  { field: 'quantidade', headerName: 'Quantidade', width: 90 },
  {
    field: 'edit',
    headerName: 'Editar',
    width: 60,
    renderCell: renderEdit
  },
  {
    field: 'delete',
    headerName: 'Deletar',
    width: 0,
    renderCell: renderDelete
  },
  {
    field: 'exportar',
    headerName: 'Exportar',
    width: 0,
    renderCell: renderExcelEPDF
  },
];

const rows = [
  { id: 1, quantidade: 61, produto: 'Computador' },
  { id: 2, quantidade: 26, produto: 'Teclado' },
  { id: 3, quantidade: 83, produto: 'Mouse' },
  { id: 4, quantidade: 2, produto: 'HD 500 GB' },
  { id: 5, quantidade: 14, produto: 'Memória RAM' },
  { id: 6, quantidade: 52, produto: 'Headset' },
  { id: 7, quantidade: 25, produto: 'Fonte 240W' },
  { id: 8, quantidade: 62, produto: 'Microfone' },
  { id: 9, quantidade: 3, produto: 'Cabo de força' },
  { id: 10, quantidade: 11, produto: 'Celular S24' },
  { id: 11, quantidade: 26, produto: 'Impressora' },
  { id: 12, quantidade: 73, produto: 'Cartucho Preto' },
  { id: 13, quantidade: 36, produto: 'Monitor' },
  { id: 14, quantidade: 85, produto: 'WebCam' },
  { id: 15, quantidade: 32, produto: 'Mousepad' },
  { id: 16, quantidade: 45, produto: 'Processador I5-4590' },
  { id: 17, quantidade: 98, produto: 'Pilhas Duracell' },
  { id: 18, quantidade: 73, produto: 'Cabo Cat6' },
  { id: 19, quantidade: 66, produto: 'GTX 710' },
  { id: 20, quantidade: 70, produto: 'Bateria CMOS' },
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
