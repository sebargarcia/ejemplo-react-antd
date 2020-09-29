import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  color: blueviolet;
  border: 2px solid blueviolet;
  border-radius: 5px;
  padding: 5px;
`;

const InputLabel = ({
  labelName,
  type,
  onChange,
  value,
}: {
  labelName: string;
  type?: string;
  onChange: (value: string) => void;
  value: string;
}) => {
  return (
    <div style={{ margin: "10px" }}>
      <span>
        <label style={{ color: "blueviolet", marginRight: "5px" }}>
          {labelName}
        </label>
        <InputStyled
          type={type ? type : ""}
          onChange={(ev) => onChange(ev.target.value)}
          value={value}
        ></InputStyled>
      </span>
    </div>
  );
};

export default InputLabel;
