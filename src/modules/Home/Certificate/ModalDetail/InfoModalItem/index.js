import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Grid, Paper, Typography, TextareaAutosize, OutlinedInput } from '@mui/material';
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


function InfoItem({
    isInfoName
}) {

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
            {
                isInfoName ? (<>
                    <Grid item xs={6}>
                        <Box className='info-item__input'>
                            <p>
                                Nhân sự<span className='required-input'> *</span>
                            </p>
                            <CInput/>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className='info-item__input'>
                            <p>
                                Email<span className='required-input'> *</span>
                            </p>
                            <CInput/>
                        </Box>
                    </Grid>
                </>) : ''
            }
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Tên chứng chỉ<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Năm cấp CCHN<span className='required-input'> *</span>
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
                        Số CCHN<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Ngày hết hạn
                    </p>
                    <CDate
                        value={toDate}
                        onChange={onChangeToDate}
                        className="input-date"
                    />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Hạng<span className='required-input'> *</span>
                    </p>
                    <CSelect/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Thời gian hiệu lực<span className='required-input'> *</span>                
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Ghi chú
                    </p>
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Ghi chú"
                        className="MuiTextarea-textarea"
                        style={{ height: 48 }}
                    />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        File đính kèm
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