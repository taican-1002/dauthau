import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import classNames from "classnames";
import PropTypes from "prop-types";

const CPagination = ({ count, className, color }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        shape="rounded"
        color={color}
        className={classNames("c-pagination", className)}
      />
    </Stack>
  );
};
CPagination.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
};
export default CPagination;
