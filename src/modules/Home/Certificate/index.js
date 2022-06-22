import { Box } from "@mui/material";
import React, { useState } from "react";
import CInput from "../../../common/components/controls/CInput/CInput";
import CSelect from "../../../common/components/controls/CInput/CSelect/CSelect";
import CButton from "../../../common/components/controls/CButton/CButton";
import CDate from "../../../common/components/controls/CDate/CDate";
import CTabs from "../../../common/components/controls/CTabs/CTabs";
// import dayjs from "dayjs";

import ExternalPersonnel from "./externalPersonnel/externalPersonnel";
import InternalPersonnel from "./internalPersonnel/internalPersonnel";
import { TabPanel } from "@mui/lab";

const certificateArr = [
  {
    id: "1",
    name: "Nhân sự công ty",
  },
  {
    id: "2",
    name: "Nhân sự ngoài",
  },
];

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
  /**Start employee */
  const [employee, setEmployee] = useState("");
  const onChangeEmployee = (e) => {
    setEmployee(e.target.value);
  };
  /**End employee */

  /**Start certificate */
  const [certificate, setCertificate] = useState("");
  const onChangeCertificate = (e) => {
    setCertificate(e.target.value);
  };
  /**End certificate */

  /**Start level */
  const [level, setLevel] = useState(-1);
  const onChangeLevel = (e) => {
    setLevel(e);
  };
  /**End level */

  /**Start fromDate */
  const [fromDate, setFromDate] = useState("");
  const onChangeFromDate = (value) => {
    setFromDate(value);
    // console.log(dayjs(value).format("DD/MM/YYYY"));
  };
  /**End fromDate */

  /**Start toDate */
  const [toDate, setToDate] = useState("");
  const onChangeToDate = (value) => {
    setToDate(value);
  };
  /**End toDate */

  /**Start tìm kiếm */
  const handleSearch = () => {
    console.log("searched");
  };
  /**End tìm kiếm */

  /**Start value tabs */
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /**End value tabs */

  return (
    <Box>
      <h3 className="title">Danh sách học vấn</h3>
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
      <CTabs value={value} onChange={handleChange} tabs={certificateArr}>
        <TabPanel value="1">
          <ExternalPersonnel />
        </TabPanel>
        <TabPanel value="2">
          <InternalPersonnel />
        </TabPanel>
      </CTabs>
    </Box>
  );
}

export default Certificate;
