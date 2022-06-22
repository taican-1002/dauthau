import React, { useState, useEffect, Fragment } from "react";
import CTable from "../../../../common/components/layout/CTable";

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
    name: "Email",
  },
  {
    name: "Văn bằng",
  },
  {
    name: "Chuyên ngành",
  },
  {
    name: "Tên trường",
  },
  {
    name: "Ngày cấp bằng",
  },
  {
    name: "Địa chỉ",
  },
  {
    name: "Kinh nghiệm",
  },
];

const ExternalPersonnel = () => {
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

  useEffect(() => {
    /**Start get externalPerconnel degrees */
    baseReq
      .get("degrees?_page=" + page)
      .then((response) => {
        setRows(response.data);
        setTotalRows(2);
      })
      .catch(function (error) {
        console.log(error);
      });
    /**End get externalPerconnel degrees */
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
                onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                selected={isItemSelected}
              >
                <TableCell rowSpan={row.degrees.length + 1} padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </TableCell>
                <TableCell rowSpan={row.degrees.length + 1} align="left">
                  {row.id}
                </TableCell>
                <TableCell rowSpan={row.degrees.length + 1} align="left">
                  {row.name}
                </TableCell>
                <TableCell rowSpan={row.degrees.length + 1} align="left">
                  {row.email}
                </TableCell>
              </TableRow>
              {row.degrees.map((item, index) => (
                <TableRow
                  key={index}
                  hover
                  onClick={(event) => handleClick(event, row.name)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                >
                  <TableCell>{item.academic_rank}</TableCell>
                  <TableCell>{item.major}</TableCell>
                  <TableCell>{item.school_name}</TableCell>
                  <TableCell>{item.effective_date}</TableCell>
                  <TableCell>{item.address}</TableCell>
                  <TableCell>{item.experience}</TableCell>
                </TableRow>
              ))}
            </Fragment>
          );
        })}
    </CTable>
  );
};

export default ExternalPersonnel;
