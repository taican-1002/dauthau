import React, { useState } from "react";

<<<<<<< HEAD
import { AddCircleOutlineOutlined as AddIcon } from "@mui/icons-material";

import { Box, Grid, Paper } from "@mui/material";
=======
import {
    AddCircleOutlineOutlined as AddIcon,
    DeleteOutlined as DeleteIcon,
    SettingsOutlined as UpdateIcon,
    EmailOutlined as EmailIcon,
    InsertDriveFileOutlined as FileIcon
} from '@mui/icons-material';
>>>>>>> 70c7c1214526133af1185dd21fac7b11298fb1b3

import CForm from "../../../../common/components/controls/CForm/CForm";
import CIconButton from "../../../../common/components/controls/CIconButton/CIconButton";
import InfoItem from "./InfoModalItem";

function ModalDetail() {
  const [forms, setNewForm] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log("hdsahdhsa");
  };
  const handleClose = () => setOpen(false);

  const handleAddForm = () => {
    setNewForm([...forms, "1"]);
  };

<<<<<<< HEAD
  return (
    <div className="modal-detail">
      <CIconButton
        onOpenModal={handleOpen}
        bgColor="#147DB8"
        className="button-addnew"
      >
        <AddIcon />
      </CIconButton>

      <CForm
        label="Chi tiết bằng cấp nhân sự"
        isOpen={open}
        handleCloseModal={handleClose}
        addForm={handleAddForm}
      >
        <InfoItem isInfoName={true} />
        {forms.map((item) => (
          <InfoItem />
        ))}
      </CForm>
    </div>
  );
=======
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => {setOpenDelete(true); console.log('hdsahdhsa')};
    const handleCloseDelete = () => setOpenDelete(false);

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
            
            <CForm
                label='Chi tiết bằng cấp nhân sự'
                isOpen = {open}
                handleCloseModal = {handleClose}
                addForm={handleAddForm}
            >
                <InfoItem isInfoName={true}/>
                {
                    forms.map((item) => (
                        <InfoItem/>
                    ))
                }
            </CForm>

            {/* Form Delete */}
            <CForm
                label='Xóa bằng cấp nhân viên'
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
>>>>>>> 70c7c1214526133af1185dd21fac7b11298fb1b3
}

export default ModalDetail;
