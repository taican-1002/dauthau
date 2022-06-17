import React, { memo, useCallback } from "react";
import {MenuItem,Select} from "@mui/material";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const StyledSelect = styled(Select)(({ theme }) => ({
  "& > div": {
    height: "unset",
    padding: "11px 0 10px 20px",
    lineHeight: "19px",
    minHeight: "unset!important",
  },
}));

const CSelect = memo(
  ({
    id,
    name,
    value,
    options,
    onChange,
    sx,
    multiple,
    variant,
    placeholder,
    displayValue,
  }) => {
    const handleChange = useCallback((event) => {
      onChange(event.target.value);
    }, []);
    return (
      <StyledSelect
        className={variant === "SelectModal" ? variant : ""}
        value={value}
        onChange={handleChange}
        id={id}
        name={name}
        sx={sx}
        multiple={multiple}
        placeholder={placeholder}
      >
        <MenuItem value={-1}>Tất cả</MenuItem>
        {options?.length > 0 &&
          options.map((option) => (
            <MenuItem value={option.id} key={option.id}>
              {option[displayValue]}
            </MenuItem>
          ))}
      </StyledSelect>
    );
  }
);

CSelect.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  sx: PropTypes.object,
  multiple: PropTypes.bool,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  displayValue: PropTypes.string,
};
CSelect.defaultProps = {
  displayValue: "name",
};

export default CSelect;
