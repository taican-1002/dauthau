import { Button } from "@mui/material";

import classNames from "classnames";

const CButton = ({
  children,
  type,
  onClick,
  color,
  variant,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={classNames("c-button", className)}
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

CButton.defaultProps = {
  color: "primary",
  variant: "contained",
};

export default CButton;
