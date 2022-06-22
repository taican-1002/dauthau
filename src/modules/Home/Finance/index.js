import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import CTable from "../../../common/components/layout/CTable";
import CSelect from "../../../common/components/controls/CInput/CSelect/CSelect";
import CButton from "../../../common/components/controls/CButton/CButton";
import ModalDetail from "./ModalDetail";

import baseReq from "../../../apis/baseReq";

const headCells = [
  {
    name: "STT",
  },
  {
    name: "Họ & Tên",
  },
  {
    name: "Năm",
  },
  {
    name: "Tổng Tài Sản",
  },
  {
    name: "Tổng Nợ Phải Trả",
  },
  {
    name: "Tài Sản Ngắn Hạn",
  },
  {
    name: "Nợ Ngắn Hạn",
  },
  {
    name: "Doanh Thu",
  },
  {
    name: "Lợi nhuận trước thuế",
  },
  {
    name: "Lợi nhuận sau thuế",
  },
  {
    name: "Tờ khai quyết thuế",
  },
];

const financialYearArr = [
  {
    id: 1,
    name: 2022,
  },
  {
    id: 2,
    name: 2023,
  },
];

const companyArr = [
  {
    id: 1,
    name: "VTCO",
  },
  {
    id: 2,
    name: "FPT",
  },
];

function Finance() {
  /**Start Table */
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState("");
  const [selected, setSelected] = useState([]);
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  /**End Table */

  /**Start Pagination */
  const [page, setPage] = React.useState(1);
  const [value, setValue] = React.useState(10);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePageSize = (event) => {
    setRowsPerPage(event.target.value);
    setValue(event.target.value);
  };
  const handleChangePage = (e, newPage) => {
    if (e.target.value) {
      setPage(Number(e.target.value));
    } else if (newPage) {
      setPage(newPage);
    }
  };
  /**End Pagination */

  /**Start Năm tài chính */
  const [financialYear, setFinancialYear] = useState(-1);
  const onChangeFinancialYear = (e) => {
    setFinancialYear(e);
  };
  /**End Năm tài chính */

  /**Start Công ty */
  const [company, setCompany] = useState(-1);
  const onChangeCompany = (e) => {
    setCompany(e);
  };
  /**End Công ty */

  /**Start Tìm kiếm */
  const handleSearch = () => {
    console.log("searched");
  };
  /**End tìm kiếm */

  useEffect(() => {
    /**Start get all finance */
    baseReq
      .get("finance?_page=" + page + "&_limit=" + rowsPerPage)
      .then((response) => {
        setRows(response.data);
        setTotalRows(11);
      })
      .catch(function (error) {
        console.log(error);
      });
    /**End get all finance */
    /**Start set go to page */
    const goToPage = document.querySelector("#go_to_page");
    goToPage.value = page;
    /**End set go to page */
  }, [page, rowsPerPage]);
  return (
    <Box>
      <h3 className="title">Danh sách báo cáo tài chính</h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "20px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        <CSelect
          value={financialYear}
          onChange={onChangeFinancialYear}
          options={financialYearArr}
          defaultValue="Năm tài chính"
          sx={{ width: "260px" }}
        />
        <CSelect
          value={company}
          onChange={onChangeCompany}
          options={companyArr}
          defaultValue="Công ty"
          sx={{ width: "260px" }}
        />

        <CButton color="primary" variant="contained" onClick={handleSearch}>
          Tìm kiếm
        </CButton>
      </Box>
      <ModalDetail></ModalDetail>
      <CTable
        headCells={headCells}
        rows={rows}
        totalRows={totalRows}
        numSelected={selected.length}
        onSelectAllClick={handleSelectAllClick}
        page={page}
        handleChangePage={handleChangePage}
        value={value}
        rowsPerPage={rowsPerPage}
        handleChangePageSize={handleChangePageSize}
        handleGoToPage={handleChangePage}
      >
        {rows &&
          rows.slice().map((row, index) => {
            const isItemSelected = isSelected(row.name);
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.year}</TableCell>
                <TableCell align="left">{row.totalAssets}</TableCell>
                <TableCell align="left">{row.totalLiabilities}</TableCell>
                <TableCell align="left">{row.shortAssets}</TableCell>
                <TableCell align="left">{row.shortDebt}</TableCell>
                <TableCell align="left">{row.turnOver}</TableCell>
                <TableCell align="left">{row.profitBeforeTax}</TableCell>
                <TableCell align="left">{row.profitAfterTax}</TableCell>
                <TableCell align="left">{row.declaration}</TableCell>
              </TableRow>
            );
          })}
      </CTable>
    </Box>
  );
}

export default Finance;
