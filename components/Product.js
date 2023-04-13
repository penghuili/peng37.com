import { format } from "date-fns";
import { Box, Text } from "grommet";
import React from "react";

import NextLink from "./NextLink";
import ProductHunt from "./ProductHunt";
import ProductName from "./ProductName";

function Product({
  date,
  logo,
  link,
  linkTarget = "_blank",
  name,
  pitch,
  huntName,
  huntId,
}) {
  return (
    <Box>
      <Text>{format(new Date(date), "MMMM yyyy")}</Text>
      <ProductName
        logo={logo}
        link={
          <NextLink
            href={link}
            target={linkTarget}
            style={{ fontSize: "2rem", fontWeight: "bold" }}
          >
            {name}
          </NextLink>
        }
        name={name}
      />
      <Text margin="0 0 1rem">{pitch}</Text>
      {!!huntName && !!huntId && (
        <ProductHunt name={huntName} id={huntId} title={pitch} />
      )}
    </Box>
  );
}

export default Product;
