import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  colaborador: string,
  email: string,
  ramal: number,
  descricao: string,
  departamento: string,
) {
  return { colaborador, email, ramal, descricao, departamento };
}

const rows = [
  createData('Vitor Marinheiro', 'suporte2@hebrombeneficios.com.br', 2451, '', 'TI'),
  createData('Vitor Marinheiro', 'suporte2@hebrombeneficios.com.br', 2451, '', 'TI'),
  createData('Vitor Marinheiro', 'suporte2@hebrombeneficios.com.br', 2451, '', 'TI'),
  createData('Vitor Marinheiro', 'suporte2@hebrombeneficios.com.br', 2451, '', 'TI'),
  createData('Vitor Marinheiro', 'suporte2@hebrombeneficios.com.br', 2451, '', 'TI'),
];

export function Hero() {
  return (
    <div className="">
      <div className="flex py-32 mb-6 bg-gradient-to-r to-[#00536A] from-[#00374D] justify-center items-center">
        <p className="text-2xl text-white">
          Controle Hebrom: Gerencie Ramais, Estoque e Chamados com Facilidade
        </p>
      </div>
      <div className='text-zinc-50 w-[1200px]'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Colaborador</TableCell>
                <TableCell align="right">E-mail</TableCell>
                <TableCell align="right">Ramal</TableCell>
                <TableCell align="right">Descrição</TableCell>
                <TableCell align="right">Departamento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.colaborador}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.colaborador}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.ramal}</TableCell>
                  <TableCell align="right">{row.descricao}</TableCell>
                  <TableCell align="right">{row.departamento}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
