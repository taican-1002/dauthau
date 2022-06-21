import React from 'react'

import {
    AddCircleOutlineOutlined as AddIcon,

} from '@mui/icons-material';

import {Box, Grid, Paper} from '@mui/material';

import CForm from '../../../../common/components/controls/CForm/CForm'
import CIconButton from '../../../../common/components/controls/CIconButton/CIconButton';
import InfoItem from './InfoModalItem';

function ModalDetail() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true); console.log('hdsahdhsa')};
    const handleClose = () => setOpen(false);

    return (
        <div className='degree__modal-detail'>
            <CIconButton 
                onOpenModal={handleOpen}
                bgColor='#147DB8'
                className='button-addnew'
            >
                <AddIcon/>
            </CIconButton>
            
            <CForm
                label='Chi tiết bằng cấp nhân sự'
                isOpen = {open}
                handleCloseModal = {handleClose}
            >
                <InfoItem isInfoName={true}/>
                <InfoItem/>
            </CForm>
        </div>
    )
}

export default ModalDetail