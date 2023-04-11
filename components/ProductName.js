import { Avatar, Box } from "grommet";
import Image from "next/image";
import React from "react";

function ProductName({ name, logo, link }) {
  return (
    <Box direction="row" align="center" pad="4px 0">
      {!!logo && <Avatar src={logo} alt={name} border={{ color: "white" }} />}

      <Box pad={logo ? "0 0 0 12px" : "0"}>{link}</Box>
    </Box>
  );
}

export default ProductName;
