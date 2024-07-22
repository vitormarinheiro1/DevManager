import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'usuario', headerName: 'Usuário', width: 180 },
  { field: 'colaborador', headerName: 'Colaborador', width: 130 },
  { field: 'hostname', headerName: 'Hostname', width: 110 },
  { field: 'ip', headerName: 'IP', width: 120 },
];

const rows = [
  { id: 1, colaborador: 'Vitor Marinheiro', usuario: 'Suporte', hostname: 'MAQUIN001', ip: '192.168.0.1' },
  { id: 2, colaborador: 'Lannister', usuario: 'Cersei', hostname: 'MAQUIN002', ip: '192.168.0.2' },
  { id: 3, colaborador: 'Lannister', usuario: 'Jaime', hostname: 'MAQUIN003', ip: '192.168.0.3' },
  { id: 4, colaborador: 'Stark', usuario: 'Arya', hostname: 'MAQUIN004', ip: '192.168.0.4' },
  { id: 5, colaborador: 'Targaryen', usuario: 'Daenerys', hostname: 'MAQUIN005', ip: '192.168.0.5' },
  { id: 6, colaborador: 'Melisandre', usuario: 'Cersei', hostname: 'MAQUIN006', ip: '192.168.0.6' },
  { id: 7, colaborador: 'Clifford', usuario: 'Ferrara', hostname: 'MAQUIN007', ip: '192.168.0.7' },
  { id: 8, colaborador: 'Frances', usuario: 'Rossini', hostname: 'MAQUIN008', ip: '192.168.0.8' },
  { id: 9, colaborador: 'Roxie', usuario: 'Harvey', hostname: 'MAQUIN009', ip: '192.168.0.9' },
  { id: 10, colaborador: 'Ferrara', usuario: 'Frances', hostname: 'MAQUIN010', ip: '192.168.0.10' },
  { id: 11, colaborador: 'Rossini', usuario: 'Roxie', hostname: 'MAQUIN011', ip: '192.168.0.11' },
  { id: 12, colaborador: 'Harvey', usuario: 'Harvey', hostname: 'MAQUIN012', ip: '192.168.0.12' },
  { id: 13, colaborador: 'Daenerys', usuario: 'Arya', hostname: 'MAQUIN013', ip: '192.168.0.13' },
  { id: 14, colaborador: 'Roxie', usuario: 'Jaime', hostname: 'MAQUIN014', ip: '192.168.0.14' },
  { id: 15, colaborador: 'Arya', usuario: 'suporte', hostname: 'MAQUIN015', ip: '192.168.0.15' },
  { id: 16, colaborador: 'Roxie', usuario: 'Melisandre', hostname: 'MAQUIN016', ip: '192.168.0.16' },
  { id: 17, colaborador: 'Jaime', usuario: 'Stark', hostname: 'MAQUIN017', ip: '192.168.0.17' },
  { id: 18, colaborador: 'Roxie', usuario: 'Targaryen', hostname: 'MAQUIN018', ip: '192.168.0.18' },
  { id: 19, colaborador: 'Cersei', usuario: 'Daenerys', hostname: 'MAQUIN019', ip: '192.168.0.19' },
  { id: 20, colaborador: 'suporte', usuario: 'Daenerys', hostname: 'MAQUIN020', ip: '192.168.0.20' },
];

export function Tabela() {
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
