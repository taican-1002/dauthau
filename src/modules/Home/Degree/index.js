import { Box } from "@mui/material";
import React, { useState } from "react";
import CTable from "../../../common/components/layout/CTable";
import ModalDetail from "./ModalDetail";
import CInput from "../../../common/components/controls/CInput/CInput";
import CSelect from "../../../common/components/controls/CInput/CSelect/CSelect";
import CButton from "../../../common/components/controls/CButton/CButton";
import CTabs from "../../../common/components/controls/CTabs/CTabs";

const degreeArr = [
  {
    id: "1",
    name: "Nhân sự công ty",
  },
  {
    id: "2",
    name: "Nhân sự ngoài",
  },
];

const tableArr = [
  {
    id: "1",
    name: <CTable />,
  },
  {
    id: "2",
    name: <CTable />,
  },
];

const diplomaArr = [
  {
    id: 1,
    name: "Văn bằng 1",
  },
  {
    id: 2,
    name: "Văn bằng 2",
  },
];

const experienceArr = [
  {
    id: 1,
    name: "Kinh nghiệm 1",
  },
  {
    id: 2,
    name: "Kinh nghiệm 2",
  },
];

function Degree() {
  const [employee, setEmployee] = useState("");
  const onChangeEmployee = (e) => {
    setEmployee(e.target.value);
  };

  const [specialized, setSpecialized] = useState("");
  const onChangeSpecialized = (e) => {
    setSpecialized(e.target.value);
  };

  const [diploma, setDiploma] = useState(-1);
  const onChangeDiploma = (e) => {
    setDiploma(e);
  };

  const [exp, setExp] = useState(-1);
  const onChangeExp = (e) => {
    setExp(e);
  };

  const handleSearch = () => {
    console.log("searched");
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          padding: "20px 0",
          flexWrap: "wrap",
          borderBottom: "1px solid #D9D9D9",
        }}
      >
        <CInput
          placeholder="Nhân viên"
          value={employee}
          onChange={onChangeEmployee}
          sx={{ width: "260px" }}
        />
        <CSelect
          value={diploma}
          onChange={onChangeDiploma}
          options={diplomaArr}
          defaultValue="Văn bằng"
          sx={{ width: "260px" }}
        />
        <CSelect
          value={exp}
          onChange={onChangeExp}
          options={experienceArr}
          defaultValue="Kinh nghiệm"
          sx={{ width: "260px" }}
        />
        <CInput
          placeholder="Chuyên ngành"
          value={specialized}
          onChange={onChangeSpecialized}
          sx={{ width: "260px" }}
        />
        <CButton color="primary" variant="contained" onClick={handleSearch}>
          Tìm kiếm
        </CButton>
      </Box>
      <ModalDetail/>
      <CTabs
        value={value}
        onChange={handleChange}
        tabPanels={tableArr}
        tabs={degreeArr}
      />
    </Box>
  );
}

export default Degree;
