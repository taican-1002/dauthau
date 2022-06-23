import React from 'react'

import {
    AddCircleOutlineOutlined as AddIcon,
    DeleteOutlined as DeleteIcon,
    SettingsOutlined as UpdateIcon,
    EmailOutlined as EmailIcon,
    InsertDriveFileOutlined as FileIcon
} from '@mui/icons-material';

import {Box, Grid, Paper} from '@mui/material';

import CForm from '../../../../common/components/controls/CForm/CForm'
import CIconButton from '../../../../common/components/controls/CIconButton/CIconButton';
import InfoItem from './InfoModalItem';

function ModalDetail() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true); console.log('hdsahdhsa')};
    const handleClose = () => setOpen(false);

    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => {setOpenDelete(true); console.log('hdsahdhsa')};
    const handleCloseDelete = () => setOpenDelete(false);

    return (
        <div id='asset' className='degree__modal-detail'>
            <Box className='button-open-modal'>
                {/* <CIconButton 
                    onOpenModal={handleOpen}
                    className='button-export-newfile'
                >
                    <FileIcon/>
                </CIconButton> */}
                <CIconButton 
                    onOpenModal={handleOpen}
                    className='button-addnew'
                >
                    <AddIcon/>
                </CIconButton>
                <CIconButton 
                    onOpenModal={handleOpen}
                    className='button-sendemail'
                >
                    <EmailIcon/>
                </CIconButton>
                <CIconButton 
                    onOpenModal={handleOpen}
                    className='button-update'
                >
                    <UpdateIcon/>
                </CIconButton>
                <CIconButton 
                    onOpenModal={handleOpenDelete}
                    className='button-delete'
                >
                    <DeleteIcon/>
                </CIconButton>
            </Box>
            
            {/* Form Add, Update */}
            <CForm
                label='Thêm máy móc thiết bị'
                isOpen = {open}
                className='manual'
                handleCloseModal = {handleClose}
                isHiddenAddMuti = {true}
            >
                <InfoItem/>
            </CForm>

            {/* Form Delete */}
            <CForm
                label='Xóa tài sản'
                isOpen = {openDelete}
                handleCloseModal = {handleCloseDelete}
                addForm = {handleOpenDelete}
                minWidthForm='617px'
                isHiddenAddMuti = {true}
                nameAction = 'Xóa'
                className = 'manual modal-device'
            >
                <h3 style={{ fontSize: 24 }}>Bạn có chắc chắn muốn xóa không?</h3>
            </CForm>
        </div>
    )
}

export default ModalDetail