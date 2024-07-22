import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'produto', headerName: 'Produto', width: 250 },
  { field: 'quantidade', headerName: 'Quantidade', width: 90 },
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

export function TabelaInventario() {
  return (
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
  );
}
