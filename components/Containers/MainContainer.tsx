import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from './../colors';
import { ContainerProps } from './types';

const { primary } = colors;
const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  background-color: ${primary};
  align-items: center;
  justify-content: center;
`

const MainContainer: FunctionComponent<ContainerProps> = (props) => {
  return (
    <StyledView style={props.style}>
      {props.children}
    </StyledView>
  )
}

export default MainContainer;