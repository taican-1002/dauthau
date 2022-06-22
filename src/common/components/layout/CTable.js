import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";

import CPagination from "../controls/CPagination/CPagination";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount, headCells } = props;
  return (
    <TableHead sx={{ backgroundColor: "rgba(237,246,251,1)" }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.name}
            align="left"
            sx={{
              color: "#147DB8",
              fontWeight: 700,
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            {headCell.name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number,
};

export default function EnhancedTable({
  headCells,
  rows,
  totalRows,
  children,
  numSelected,
  onSelectAllClick,
  page,
  handleChangePage,
  value,
  handleChangePageSize,
  rowsPerPage,
  handleGoToPage,
}) {
  /**Table */
  const [dense, setDense] = React.useState(false);
  /**Pagination */
  const countNum = Number(Math.ceil(totalRows / rowsPerPage));

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={numSelected}
              onSelectAllClick={onSelectAllClick}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {children}
              {/** Muốn trang nào cũng 6 rows thì mở này ra*/}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      <CPagination
        handleChangePage={handleChangePage}
        defaultPage={1}
        page={page}
        total={totalRows}
        count={countNum}
        value={value}
        handleChangePageSize={handleChangePageSize}
        handleGoToPage={handleGoToPage}
        color="primary"
        size="small"
      />
    </Box>
  );
}
