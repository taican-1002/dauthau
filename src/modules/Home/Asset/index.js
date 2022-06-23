import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";

import ModalDetail from "./ModalDetail";
import CTable from "../../../common/components/layout/CTable";
import CSelect from "../../../common/components/controls/CInput/CSelect/CSelect";
import CButton from "../../../common/components/controls/CButton/CButton";
import CInput from "../../../common/components/controls/CInput/CInput";

import axios from "axios";

import baseReq from "../../../apis/baseReq";
const headCells = [
  {
    name: "stt",
  },
  {
    name: "Tên hạng mục",
  },
  {
    name: "Loại thiết bị",
  },
  {
    name: "Số lượng",
  },
  {
    name: "Mô tả",
  },
  {
    name: "Số HD",
  },
  {
    name: "Ngày ký",
  },
  {
    name: "Số hóa đơn",
  },
  {
    name: "Giấy kiểm định",
  },
];

const typeOfDeviceArr = [
  {
    id: 1,
    name: "Device 1",
  },
  {
    id: 2,
    name: "Device 2",
  },
];

function Asset() {
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

  /**Start Loại thiết bị */
  const [typeOfDevice, setTypeOfDevice] = useState(-1);
  const onChangeTypeOfDevice = (e) => {
    setTypeOfDevice(e);
  };
  /**End Loại thiết bị */

  /**Start Hạng mục */
  const [category, setCategory] = useState("");
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  /**End Hạng mục */

  /**Start Tìm kiếm */
  const handleSearch = () => {
    console.log("searched");
  };
  /**End Tìm kiếm */

  useEffect(() => {
    /**Start get all assets */
    // baseReq
    //   .get("assets?_page=" + page + "&_limit=" + rowsPerPage)
    //   .then((response) => {
    //     setRows(response.data);
    //     setTotalRows(2);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios
      .get("/asset")
      .then(function (response) {
        setRows(response.data.assets.assets);
        setTotalRows(11);
      })
      .catch(function (error) {
        console.log(error);
      });

    /**End get all assets */

    /**Start set go to page */
    const goToPage = document.querySelector("#go_to_page");
    goToPage.value = page;
    /**End set go to page */
  }, [page, rowsPerPage]);
  return (
    <Box>
      <h3 className="title">Danh sách máy móc thiết bị</h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "20px",
          padding: "20px 0",
          flexWrap: "wrap",
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <CSelect
          value={typeOfDevice}
          onChange={onChangeTypeOfDevice}
          options={typeOfDeviceArr}
          defaultValue="Loại thiết bị"
          sx={{ width: "260px" }}
        />
        <CInput
          sx={{ width: "260px" }}
          placeholder="Tên hạng mục"
          value={category}
          onChange={onChangeCategory}
        />

        <CButton color="primary" variant="contained" onClick={handleSearch}>
          Tìm kiếm
        </CButton>
      </Box>
      <ModalDetail />

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
                <TableCell align="left">{row.typeDevice}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">{row.contractNumber}</TableCell>
                <TableCell align="left">{row.signDate}</TableCell>
                <TableCell align="left">{row.invoiceCode}</TableCell>
                <TableCell align="left">{row.certificate}</TableCell>
              </TableRow>
            );
          })}
      </CTable>
    </Box>
  );
}

export default Asset;
