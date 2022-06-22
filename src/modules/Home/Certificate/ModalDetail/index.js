import React, {useState} from 'react'

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

    const [forms, setNewForm] = useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true); console.log('hdsahdhsa')};
    const handleClose = () => setOpen(false);

    const handleAddForm = () => {
        setNewForm([...forms, '1'])
    }

    return (
        <div className='degree__modal-detail'>
            <Box className='button-open-modal'>
                <CIconButton 
                    onOpenModal={handleOpen}
                    className='button-export-newfile'
                >
                    <FileIcon/>
                </CIconButton>
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
                    className='button-update disabled'
                >
                    <UpdateIcon/>
                </CIconButton>
                <CIconButton 
                    onOpenModal={handleOpen}
                    className='button-delete disabled'
                >
                    <DeleteIcon/>
                </CIconButton>
            </Box>
            
            <CForm
                label='Chi tiết chứng chỉ nhân sự'
                isOpen = {open}
                handleCloseModal = {handleClose}
                addForm = {handleAddForm}
            >
                <InfoItem isInfoName={true}/>
                {
                    forms.map((item) => (
                        <InfoItem/>
                    ))
                }
            </CForm>
        </div>
    )
}

export default ModalDetail