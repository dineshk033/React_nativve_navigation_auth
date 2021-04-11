import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "styled-components/native";
import { CustomText } from "./text.component";

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  iconColor,
  iconRight,
  error,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <View>
      <CustomText variant="label">{labelValue}</CustomText>
      <View
        style={[
          styles.action,
          {
            borderColor: theme.colors.ui.secondary,
          },
        ]}
      >
        <FontAwesome name={iconType} color={iconColor} size={24} />
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 10,
          }}
        >
          |
        </Text>
        <TextInput
          {...rest}
          placeholder={placeholderText}
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: iconColor,
            },
          ]}
          autoCapitalize="none"
        />
        {iconRight ? (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                paddingRight: 10,
              }}
            >
              |
            </Text>
            <FontAwesome name={iconRight} color={iconColor} size={24} />
          </View>
        ) : null}
      </View>
      {error ? (
        <CustomText style={{ marginBottom: 10 }} variant="error">
          {error}
        </CustomText>
      ) : null}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    borderWidth: 1,
    flexDirection: "row",
    marginVertical: 7,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
});

FormInput.defaultProps = {
  labelValue: "Default",
  iconType: "user",
  iconColor: "tomato",
  placeholderText: "",
  iconRight: "",
  error: "",
};
