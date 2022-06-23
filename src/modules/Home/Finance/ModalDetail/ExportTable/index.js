import React, { useEffect, useState } from 'react'

import axios from 'axios';
import CTable from '../../../../../common/components/layout/CTable'

function ExportTable() {

  const [rows, setRows] = useState([]);

  useEffect(()=>{
    axios.get("/finance")
      .then(function (response) {
        setRows(response.data.finances.finances);
        setTotalRows(11);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[])

  return (
    <p>QQ nè Đỗ Nguyễn Tài Cẩn</p>
  )
}

export default ExportTable