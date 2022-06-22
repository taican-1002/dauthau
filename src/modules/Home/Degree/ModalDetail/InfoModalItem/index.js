import React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Grid, Paper, Typography } from '@mui/material';
import CInput from '../../../../../common/components/controls/CInput/CInput';
import CSelect from '../../../../../common/components/controls/CInput/CSelect/CSelect';

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
                        Tên trường<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Năm cấp bằng<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Văn bằng<span className='required-input'> *</span>
                    </p>
                    <CSelect/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input disable-input'>
                    <p>
                        Năm kinh nghiệm
                    </p>
                    <CInput readOnly={true}/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Chuyên ngành<span className='required-input'> *</span>
                    </p>
                    <CInput/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className='info-item__input'>
                    <p>
                        Địa chỉ
                    </p>
                    <CInput/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default InfoItem