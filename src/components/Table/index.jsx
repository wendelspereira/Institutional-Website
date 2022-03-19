import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "var(--text-secondary)",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  lineHeight: 0,
}));

export default function CustomizedTables({ rows }) {
  return (
      <TableContainer component={Paper}>
        <Table
          sx={{}}
          size="medium"
          aria-label="Emolumentos e despesas mensais"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Referência</StyledTableCell>
              <StyledTableCell align="right">Emolumentos</StyledTableCell>
              <StyledTableCell align="right">Despesas</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.ref}
                </StyledTableCell>
                <StyledTableCell align="right">{row.emol}</StyledTableCell>
                <StyledTableCell align="right">{row.desp}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
