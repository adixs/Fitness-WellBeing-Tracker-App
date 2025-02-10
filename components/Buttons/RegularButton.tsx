import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from './../colors';
import { ButtonProps } from './types';
import RegularText from "../Texts/RegularText";

const { primary, accent } = colors;
const ButtonView = styled.TouchableOpacity`
  background-color: ${accent};
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.style}>
      <RegularText style={[{ color: primary }, props.textStyle]}>
        {props.children}
      </RegularText>
    </ButtonView>
  )
}

export default RegularButton;