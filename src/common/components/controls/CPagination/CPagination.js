import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../../../../common/assets/style/components/pagination.scss";

const CPagination = ({ count, className, color, size }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        shape="rounded"
        color={color}
        size={size}
        className={classNames("c-pagination", className)}
      />
    </Stack>
  );
};
CPagination.propTypes = {
  count: PropTypes.number,
  color: PropTypes.string,
  colsizeor: PropTypes.string,
};
export default CPagination;
