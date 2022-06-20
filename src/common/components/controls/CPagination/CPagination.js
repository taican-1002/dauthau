import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../../../../common/assets/style/components/pagination.scss";
import {
  Typography,
  Pagination,
  Stack,
  Box,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const CPagination = ({ total, count, className, color, size }) => {
  const valueArr = [
    {
      value: 20,
      name: "20",
    },
    {
      value: 30,
      name: "30",
    },
    {
      value: 40,
      name: "40",
    },
  ];

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5" component="h6" sx={{ marginRight: "40px" }}>
        Tất cả {total} dòng
      </Typography>

      <Stack spacing={2}>
        <Pagination
          count={count}
          shape="rounded"
          color={color}
          size={size}
          className={classNames("c-pagination", className)}
        />
      </Stack>

      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{ margin: "0 40px" }}
      >
        <MenuItem value="">10 / page</MenuItem>
        {valueArr.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.name} / page
          </MenuItem>
        ))}
      </Select>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="h6">
          Go to &nbsp;
        </Typography>
        <TextField hiddenLabel id="filled-hidden-label-small" size="small" />
      </Box>
    </Box>
  );
};
CPagination.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  colsizeor: PropTypes.string,
};
export default CPagination;
{
  /* <CPagination total={50} count={10} color="primary" size="small" /> */
}
