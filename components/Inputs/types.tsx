import { ReactNode, ComponentProps } from "react";
import { TextInputProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface ExtraInputProps {
  label: ReactNode;
  icon: ComponentProps<typeof MaterialIcons>["name"];
  isPassword?: Boolean;
}

export type InputProps = TextInputProps & ExtraInputProps