import React, { useState, useEffect, Fragment } from "react";
import CTable from "../../../../common/components/layout/CTable";

import axios from "axios";

import baseReq from "../../../../apis/baseReq";
import { Checkbox, TableCell, TableRow } from "@mui/material";

const headCells = [
  {
    name: "stt",
  },
  {
    name: "Họ & tên",
  },
  {
    name: "tên chứng chỉ",
  },
  {
    name: "ngày cấp",
  },
  {
    name: "hạng",
  },
  {
    name: "số chứng chỉ",
  },
  {
    name: "hết hạn",
  },
  {
    name: "thời hạn",
  },
  {
    name: "ghi chú",
  },
];

const InternalPersonnel = () => {
  /**Start Table */
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState("");
  const [selected, setSelected] = useState([]);
  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row.name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.name);
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

  useEffect(() => {
    /**Start get externalPerconnel certificates */
    // baseReq
    //   .get("certificates?_page=" + page + "&_limit=" + rowsPerPage)
    //   .then((response) => {
    //     setRows(response.data);
    //     setTotalRows(2);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // Mock api
    axios
      .get("/certificate")
      .then(function (response) {
        setRows(response.data.certificates.certificates);
        setTotalRows(11);
      })
      .catch(function (error) {
        console.log(error);
      });

    /**Start set go to page */
    const goToPage = document.querySelector("#go_to_page");
    goToPage.value = page;
    /**End set go to page */
  }, [page, rowsPerPage]);
  return (
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
            <Fragment key={index}>
              <TableRow
                hover
                onClick={(event) => handleClick(event, row)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                selected={isItemSelected}
              >
                <TableCell
                  rowSpan={row.certificates.length + 1}
                  padding="checkbox"
                >
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </TableCell>
                <TableCell rowSpan={row.certificates.length + 1} align="left">
                  {row.id}
                </TableCell>
                <TableCell rowSpan={row.certificates.length + 1} align="left">
                  {row.name}
                </TableCell>
              </TableRow>
              {row.certificates.map((item, index) => (
                <TableRow
                  key={index}
                  hover
                  onClick={(event) => handleClick(event, row.name)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                >
                  <TableCell>{item.certificate_name}</TableCell>
                  <TableCell>{item.effective_date}</TableCell>
                  <TableCell>{item.level}</TableCell>
                  <TableCell>{item.certificate_number}</TableCell>
                  <TableCell>{item.expiration_date}</TableCell>
                  <TableCell>{item.effective_time}</TableCell>
                  <TableCell>{item.note}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          );
        })}
    </CTable>
  );
};

export default InternalPersonnel;
