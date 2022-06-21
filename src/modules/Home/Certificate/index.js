import { Box } from "@mui/material";
import React, { useState } from "react";
import CTable from "../../../common/components/layout/CTable";
import CInput from "../../../common/components/controls/CInput/CInput";
import CSelect from "../../../common/components/controls/CInput/CSelect/CSelect";
import CButton from "../../../common/components/controls/CButton/CButton";
import CDate from "../../../common/components/controls/CDate/CDate";

// import dayjs from "dayjs";

const levelArr = [
  {
    id: 1,
    name: "Hạng I",
  },
  {
    id: 2,
    name: "Hạng II",
  },
  {
    id: 3,
    name: "Hạng III",
  },
];

function Certificate() {
  const [employee, setEmployee] = useState("");
  const onChangeEmployee = (e) => {
    setEmployee(e.target.value);
  };

  const [certificate, setCertificate] = useState("");
  const onChangeCertificate = (e) => {
    setCertificate(e.target.value);
  };

  const [level, setLevel] = useState(-1);
  const onChangeLevel = (e) => {
    setLevel(e);
  };

  const [fromDate, setFromDate] = useState("");
  const onChangeFromDate = (value) => {
    setFromDate(value);
    // console.log(dayjs(value).format("DD/MM/YYYY"));
  };

  const [toDate, setToDate] = useState("");
  const onChangeToDate = (value) => {
    setToDate(value);
  };

  const handleSearch = () => {
    console.log("searched");
  };
  return (
    <Box>
      <h3 className="title">Danh sách học vấn</h3>
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
        <CInput
          sx={{ width: "260px" }}
          placeholder="Nhân viên"
          value={employee}
          onChange={onChangeEmployee}
        />
        <CInput
          sx={{ width: "260px" }}
          placeholder="Tên chứng chỉ"
          value={certificate}
          onChange={onChangeCertificate}
        />
        <CSelect
          className="input-date"
          sx={{ width: "260px" }}
          value={level}
          onChange={onChangeLevel}
          options={levelArr}
          defaultValue="Hạng"
        />
        <CDate
          value={fromDate}
          onChange={onChangeFromDate}
          className="input-date"
        />
        <CDate
          value={toDate}
          onChange={onChangeToDate}
          className="input-date"
        />

        <CButton color="primary" variant="contained" onClick={handleSearch}>
          Tìm kiếm
        </CButton>
      </Box>
      <CTable></CTable>
    </Box>
  );
}

export default Certificate;
