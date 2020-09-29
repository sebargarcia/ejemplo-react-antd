import React from "react";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";

const Test = () => {
  return (
    <div>
      <DatePicker />
      <Button type="dashed" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
};

export default Test;
