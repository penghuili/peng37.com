import dynamic from "next/dynamic";
import React from "react";

const Spin = dynamic(() => import("@douyinfe/semi-ui/lib/es/spin"), {
  ssr: false,
});

export const LazySpin = ({ style }) => {
  return <Spin style={style} />;
};
