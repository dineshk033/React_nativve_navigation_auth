import React, { useContext } from "react";
import styled, { useTheme } from "styled-components/native";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { CustomText } from "../../shared/text.component";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { Spacer } from "../../shared/spacer.component";
import FormInput from "../../shared/FormInput";
import useForm from "./useForm";
import validate from "./loginValidate";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthenticationContext } from "../../global/context/Authentication";
import { ErrorContainer } from "./registerStyle";
import { colors } from "../../global/theme/colors";

const ScrollViewContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    justifyContent: "center",
    padding: 20,
    paddingTop: 50,
  },
})``;

const ImageBanner = styled(Image)`
  width: 100%;
  height: 300px;
`;
const HeaderSection = styled(View)`
  justify-content: flex-start;
`;
const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const LoginFormView = styled(View)`
  width: 100%;
`;

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, isLoading, googleLogin } = useContext(
    AuthenticationContext
  );
  const theme = useTheme();
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  function login() {
    const { email, password } = values;
    onLogin(email, password);
  }

  return (
    <SafeAreaView>
      <ScrollViewContainer>
        <ImageBanner
          style={{ resizeMode: "cover" }}
          source={require("../../../assets/support-team.png")}
        />
        <HeaderSection>
          {/* <CustomText variant="label">Welcome Back</CustomText> */}
          <Title variant="label">Welcome Back Login!</Title>
          <Spacer size="large" />
        </HeaderSection>
        <LoginFormView>
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
          {error && (
            <ErrorContainer size="large">
              <CustomText variant="error">{error}</CustomText>
            </ErrorContainer>
          )}
          <Spacer size="large">
            {!isLoading ? (
              <Button
                style={{ marginBottom: 10 }}
                mode="contained"
                onPress={handleSubmit}
                color={theme.colors.brand.primary}
              >
                Login
              </Button>
            ) : (
              <ActivityIndicator animating={true} color={colors.blue300} />
            )}
          </Spacer>
        </LoginFormView>
        <View style={{ alignSelf: "center", marginBottom: 10 }}>
          <CustomText variant="hint">or login using</CustomText>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <FontAwesome.Button
            style={{ padding: 15 }}
            name="facebook"
            backgroundColor="#3b5998"
          >
            Facebook
          </FontAwesome.Button>
          <TouchableOpacity onPress={() => googleLogin()}>
            <FontAwesome.Button
              style={{ padding: 15, borderColor: "black" }}
              name="google"
            >
              Google
            </FontAwesome.Button>
          </TouchableOpacity>
        </View>
        <Spacer size="large">
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={{ flex: 1, alignItems: "center", marginTop: 10 }}
          >
            <CustomText variant="caption">New Member? Register </CustomText>
          </TouchableOpacity>
        </Spacer>
      </ScrollViewContainer>
    </SafeAreaView>
  );
};
