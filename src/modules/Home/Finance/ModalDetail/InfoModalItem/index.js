import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Grid, Paper, Typography, OutlinedInput } from '@mui/material';
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
                        Công ty<span className='required-input'> *</span>
                    </p>
                    <CSelect/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Năm tài chính<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Tài sản ngắn hạn<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Tổng nợ phải trả
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Doanh thu
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Nợ ngắn hạn
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Lợi nhuận sau thuế 
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Lợi nhuận trước thuế               
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Tờ khai quyết toán điện tử
                    </p>
                    <OutlinedInput
                        type='file'
                    >

                    </OutlinedInput>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Tờ khai quyết toán 
                        thuế có xác nhận của 
                        cơ quan quản lý thuế
                    </p>
                    <OutlinedInput
                        type='file'
                    >

                    </OutlinedInput>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Văn bản xác nhận của
                        cơ quan quản lý thuế
                    </p>
                    <OutlinedInput
                        type='file'
                    >

                    </OutlinedInput>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Báo cáo tài chính
                    </p>
                    <OutlinedInput
                        type='file'
                    >

                    </OutlinedInput>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default InfoItem