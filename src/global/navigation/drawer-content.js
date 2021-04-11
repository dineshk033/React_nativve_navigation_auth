import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import { Avatar, Drawer } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import styled, { useTheme } from "styled-components/native";

import { Spacer } from "../../shared/spacer.component";
import { CustomText } from "../../shared/text.component";
import { AuthenticationContext } from "../context/Authentication";
const AvatarProfile = require("../../../assets/rahul-dravid.jpg");

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const ProfileHeading = styled(View)`
  flex: 1;
  margin-left: ${(props) => props.theme.space[3]};
  justify-content: center;
`;

export const DrawerContent = (props) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Spacer position="left" size="large">
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Avatar.Image size={70} source={AvatarProfile} />
            <ProfileHeading>
              <Title>Dinesh S</Title>
              <Spacer position="top" size="small"></Spacer>
              <CustomText variant="caption">{user.email}</CustomText>
            </ProfileHeading>
          </View>
        </Spacer>
        <Drawer.Section>
          <Spacer position="top" size="large"></Spacer>
          <DrawerItem
            onPress={() => props.navigation.navigate("Home")}
            icon={({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            )}
            label="Home"
          />
          <DrawerItem
            onPress={() => props.navigation.navigate("About")}
            icon={({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            )}
            label="About"
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section
        style={{
          marginBottom: 15,
          borderTopColor: "#f4f4f4",
          borderTopWidth: 1,
        }}
      >
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="exit" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={onLogout}
        />
      </Drawer.Section>
    </View>
  );
};
