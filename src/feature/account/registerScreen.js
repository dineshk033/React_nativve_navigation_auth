import React, { useContext } from "react";
import {
  Button,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
// import { Button } from "react-native-paper";

import styled, { useTheme } from "styled-components/native";
import { AuthenticationContext } from "../../global/context/Authentication";
import { colors } from "../../global/theme/colors";
import FormInput from "../../shared/FormInput";
import { Spacer } from "../../shared/spacer.component";
import { CustomText } from "../../shared/text.component";

import {
  ImageBanner,
  ScrollViewContainer,
  HeaderSection,
  ErrorContainer,
} from "./registerStyle";
import registerValidate from "./registerValidate";
import useForm from "./useForm";

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const RegisterScreen = ({ navigation }) => {
  const theme = useTheme();
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    registerValidate
  );
  function login() {
    console.log("No errors, submit callback called!", error);
    onRegister(values.email, values.password, values.cpassword);
  }

  //   const onChangeText = (name, value) => {
  //     const status = useValidationForm(name, value);
  //     console.log(status);
  //   };
  return (
    <SafeAreaView>
      <ScrollViewContainer>
        <ImageBanner
          style={{ resizeMode: "stretch" }}
          source={require("../../../assets/register.png")}
        />
        <HeaderSection>
          {/* <CustomText variant="label">Welcome Back</CustomText> */}
          <Title variant="label">Create an Account</Title>
          <Spacer size="medium" />
        </HeaderSection>
        <FormInput
          labelValue="Name"
          iconType="user"
          required
          value={values.name || ""}
          error={errors.name}
          onChangeText={(text) =>
            handleChange({ target: { name: "name", value: text } })
          }
          iconColor={theme.colors.brand.primary}
        />
        <FormInput
          labelValue="Email"
          iconType="envelope"
          value={values.email || ""}
          error={errors.email}
          onChangeText={(text) =>
            handleChange({ target: { name: "email", value: text } })
          }
          inlineImageLeft="username"
          iconColor={theme.colors.brand.primary}
        />
        <FormInput
          labelValue="Password"
          iconType="lock"
          type="password"
          value={values.password || ""}
          error={errors.password}
          secureTextEntry
          onChangeText={(text) =>
            handleChange({ target: { name: "password", value: text } })
          }
          iconColor={theme.colors.brand.primary}
        />
        <FormInput
          labelValue="Confirm Password"
          iconType="lock"
          secureTextEntry
          iconRight="eye"
          value={values.cpassword || ""}
          error={errors.cpassword}
          onChangeText={(text) =>
            handleChange({ target: { name: "cpassword", value: text } })
          }
          iconColor={theme.colors.brand.primary}
        />
        <FormInput
          labelValue="Phone"
          iconType="mobile-phone"
          keyboardType="number-pad"
          value={values.contact || ""}
          error={errors.contact}
          onChangeText={(text) =>
            handleChange({ target: { name: "contact", value: text } })
          }
          iconColor={theme.colors.brand.primary}
        />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <Button
              style={{ height: 80 }}
              icon="camera"
              color={theme.colors.brand.primary}
              title="Register"
              onPress={handleSubmit}
            />
          ) : (
            <ActivityIndicator animating={true} color={colors.blue300} />
          )}
        </Spacer>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ flex: 1, alignItems: "center", marginTop: 10 }}
        >
          <CustomText variant="caption">Existing Member? Login </CustomText>
        </TouchableOpacity>
      </ScrollViewContainer>
    </SafeAreaView>
  );
};
