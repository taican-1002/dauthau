import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Grid, Paper, Typography } from '@mui/material';
import CInput from '../../../../../common/components/controls/CInput/CInput';
import CSelect from '../../../../../common/components/controls/CInput/CSelect/CSelect';
import CDate from '../../../../../common/components/controls/CDate/CDate';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function InfoItem() {

    const [fromDate, setFromDate] = React.useState("");
      const onChangeFromDate = (value) => {
        setFromDate(value);
        // console.log(dayjs(value).format("DD/MM/YYYY"));
    };

    const [toDate, setToDate] = React.useState("");
    const onChangeToDate = (value) => {
        setToDate(value);
    };

  return (
    <Box id='info-item' className='info-item'>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Tên hạng mục<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Loại Thiết bị<span className='required-input'> *</span>
                    </p>
                    <CSelect/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Số lượng<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Số hợp đồng
                    </p>
                    <CDate
                        value={fromDate}
                        onChange={onChangeFromDate}
                        className="input-date"
                    />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Ngày ký
                    </p>
                    <CDate
                        value={fromDate}
                        onChange={onChangeFromDate}
                        className="input-date"
                    />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Hình ảnh thiết bị
                    </p>
                    <CDate
                        value={fromDate}
                        onChange={onChangeFromDate}
                        className="input-date"
                    />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Giấy kiểm định
                    </p>
                    <CSelect/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Số hóa đơn                
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        File hợp đồng
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Mô tả
                    </p>
                    <CInput/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default InfoItem