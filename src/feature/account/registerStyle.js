import { ScrollView, Image, Text } from "react-native";
import { View } from "react-native-animatable";
import styled from "styled-components";
import { theme } from "../../global/theme";
export const ViewContainer = styled(View)`
  flex: 1;
`;
export const ScrollViewContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    justifyContent: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: theme.colors.ui.quaternary,
  },
})``;

export const ImageBanner = styled(Image)`
  width: 100%;
  height: 240px;
`;

export const HeaderSection = styled(View)``;

export const ErrorContainer = styled(View)`
  max-width: 300px;
  align-items: center;
  align-self: center;
`;
