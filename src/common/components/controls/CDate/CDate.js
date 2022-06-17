import { useCallback, useState, memo } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { DatePicker } from "@mui/x-date-pickers";
import { Box, TextField } from "@mui/material";
import dayjs from "dayjs";
import CFormControl from "../CFormControl";

const CDate = ({ value, onChange, error, className, ...props }) => {
  const [TMP, setTMP] = useState(value);

  const onTMPChange = useCallback((v) => setTMP(v), [TMP]);
  const onAccept = useCallback((v) => onChange(v.$d), [TMP, onChange]);

  return (
    <CFormControl error={error} onFormValueChange={(v) => v}>
      <Box
        className={classNames("c-datepicker", className, error && "Mui-error")}
      >
        <DatePicker
          allowSameDateSelection
          value={value}
          onAccept={onAccept}
          onChange={onTMPChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
          {...props}
        />
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
  inputFormat: "DD/MM/YYYY",
  minDate: dayjs("2008-01-01"),
  maxDate: dayjs(),
};

export default memo(CDate);
