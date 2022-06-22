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

const CPagination = ({
  handleChangePage,
  page,
  defaultPage,
  total,
  count,
  className,
  color,
  size,
  value,
  handleChangePageSize,
  valueGoToPage,
  handleGoToPage,
}) => {
  const valueArr = [
    {
      value: 10,
      name: "10",
    },
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
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="span" component="span" sx={{ marginRight: "40px" }}>
        Tất cả {total} dòng
      </Typography>

      <Stack spacing={2}>
        <Pagination
          onChange={handleChangePage}
          defaultPage={defaultPage}
          count={count}
          page={page}
          shape="rounded"
          color={color}
          size={size}
          className={classNames("c-pagination", className)}
        />
      </Stack>

      <Select
        value={value}
        onChange={handleChangePageSize}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{ margin: "0 40px" }}
      >
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
        <Typography variant="span" component="span">
          Go to &nbsp;
        </Typography>
        <TextField
          hiddenLabel
          id="go_to_page"
          size="small"
          onChange={handleGoToPage}
        />
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
