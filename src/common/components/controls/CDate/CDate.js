import React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { Box, TextField } from "@mui/material";
// import dayjs from "dayjs";
import CFormControl from "../CFormControl/CFormControl";

const CDate = ({ value, onChange, onAccept, error, className, ...props }) => {
  return (
    <CFormControl error={error} onFormValueChange={(v) => v}>
      <Box className={classNames("c-datepicker", className)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            allowSameDateSelection
            value={value}
            onAccept={onAccept}
            onChange={onChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
            {...props}
          />
        </LocalizationProvider>
      </Box>
    </CFormControl>
  );
};

CDate.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputFormat: PropTypes.string,
};

CDate.defaultProps = {
  error: false,
  inputFormat: "dd/MM/yyyy",
  // minDate: dayjs("2022-06-21"),
  // maxDate: dayjs(),
};

export default CDate;
