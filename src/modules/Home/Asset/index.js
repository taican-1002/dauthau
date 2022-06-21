import React, { useState } from "react";
import ModalDetail from "./ModalDetail";
import { Box } from "@mui/material";
import CTable from "../../../common/components/layout/CTable";
import CSelect from "../../../common/components/controls/CInput/CSelect/CSelect";
import CButton from "../../../common/components/controls/CButton/CButton";
import CInput from "../../../common/components/controls/CInput/CInput";

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
  const [typeOfDevice, setTypeOfDevice] = useState(-1);
  const onChangeTypeOfDevice = (e) => {
    setTypeOfDevice(e);
  };

  const [category, setCategory] = useState("");
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
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
      <ModalDetail/>
      <CTable></CTable>
    </Box>
  );
}

export default Asset;
