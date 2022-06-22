import { Box } from "@mui/material";
import React, { useState } from "react";
import CTable from "../../../common/components/layout/CTable";
import CSelect from "../../../common/components/controls/CInput/CSelect/CSelect";
import CButton from "../../../common/components/controls/CButton/CButton";

import ModalDetail from "./ModalDetail";

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
  const [financialYear, setFinancialYear] = useState(-1);
  const onChangeFinancialYear = (e) => {
    setFinancialYear(e);
  };

  const [company, setCompany] = useState(-1);
  const onChangeCompany = (e) => {
    setCompany(e);
  };

  const handleSearch = () => {
    console.log("searched");
  };
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
      <CTable></CTable>
    </Box>
  );
}

export default Finance;
