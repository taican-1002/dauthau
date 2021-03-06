import React, { memo, useCallback } from "react";
import { OutlinedInput, styled } from "@mui/material";
import CFormControl from "../CFormControl/CFormControl";

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  "& input": {
    padding: "10px",
    height: "unset",
    backgroundColor: "#fff",
    outline: "none",
    borderRadius: "5px",
    // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #BCBFC5",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
  },
}));

const CInput = ({
  id,
  name,
  value,
  placeholder,
  onChange,
  type,
  readOnly,
  error,
  errorText,
  ...props
}) => {
  const { inputProps } = props;

  const handleChange = useCallback((value) => onChange(value), [onChange]);
  const handlePress = (e) => {
    if (inputProps?.min === 0 || inputProps?.min === 1) {
      const notValid = [69, 109, 110, 189, 190]; //Block nút "E", 2 nút "." và 2 nút "-"
      if (notValid.includes(e.keyCode)) {
        e.preventDefault();
      }
    }
  };

  return (
    <CFormControl
      error={error}
      errorText={errorText}
      onFormValueChange={(e, v) => e.target.value}
    >
      <StyledInput
        id={id}
        name={name}
        readOnly={readOnly}
        disabled={readOnly}
        type={type}
        value={value}
        onKeyDown={handlePress}
        onChange={handleChange}
        placeholder={placeholder}
        error={error}
        {...props}
      />
    </CFormControl>
  );
};

CInput.defaultProps = {
  readOnly: false,
  error: false,
};

export default memo(CInput);
