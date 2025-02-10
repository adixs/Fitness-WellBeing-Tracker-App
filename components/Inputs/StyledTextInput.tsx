import React, { useState, FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from './../colors';
import { InputProps } from './types';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import SmallText from "../Texts/SmallText";

const { primary, secondary, accent, black, gray } = colors;

const InputWrapper = styled.View`
  width: 100%;
`

const LeftIcon = styled.View`
  position: absolute;
  top: 40px;
  left: 15px;
  z-index: 1;
  padding-right: 5px;
`

const InputField = styled.TextInput`
  background-color: ${primary};
  height: 60px;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${secondary};
  margin: 0px 3px 10px;
  padding: 22px;
  padding-left: 55px;
  padding-right: 55px;
  font-size: 16px;
  color: ${black};
`

const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  right: 15px;
  z-index: 1;
`

const StyledTextInput: FunctionComponent<InputProps> = ({ icon, label, isPassword, ...props }) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState(primary);
  const [hidePassword, setHidePassword] = useState(true);

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(secondary);
  }

  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(primary);
  }

  return (
    <InputWrapper>
      <LeftIcon>
        <MaterialIcons name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField {...props} placeholderTextColor={gray} style={[{ backgroundColor: inputBackgroundColor }, props.style]}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
        secureTextEntry={isPassword && hidePassword}
      />
      {
        isPassword && (
          <RightIcon onPress={() => {
            setHidePassword(!hidePassword)
          }}>
            <MaterialCommunityIcons name={hidePassword ? "eye-off" : "eye"} size={30} color={black} />
          </RightIcon>
        )
      }
    </InputWrapper>
  )
}

export default StyledTextInput;