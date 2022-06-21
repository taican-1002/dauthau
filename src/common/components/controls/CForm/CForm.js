import React from 'react'

import {Modal, Box } from '@mui/material';

import {
    AddCircleOutlineOutlined as AddIcon,

} from '@mui/icons-material';

import CLabel from '../../others/CLabel'
import CButton from '../CButton/CButton';

import CIconButton from '../../../../common/components/controls/CIconButton/CIconButton';

function CForm({
    label,
    isOpen,
    handleCloseModal,
    children
}) {
  return (
    <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='form'
    >
        <Box className='form__wrap'>
            <CLabel>
                <span>{label}</span>
            </CLabel>

            <Box className='form__wrap__body'>
                {children}
            </Box>

            <Box className='form__wrap__actions'>
                <Box>
                    <CIconButton 
                        className='button-addnew'
                    >
                        <AddIcon/>
                    </CIconButton>
                </Box>
                <Box>
                    <CButton className='form__wrap__actions__cancel' onClick={handleCloseModal}>Hủy</CButton>
                    <CButton className='form__wrap__actions__save'>Lưu</CButton>
                </Box>
            </Box>
        </Box>
    </Modal>
  )
}

export default CForm