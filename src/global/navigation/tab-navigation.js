import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styled, { useTheme } from "styled-components/native";
import { HomeScreen } from "../../feature/home";
import { AboutScreen } from "../../feature/about";
import { LoginScreen } from "../../feature/account/login";
import { RegisterScreen } from "../../feature/account/registerScreen";
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TAB_ICON = {
  Home: "md-home",
  About: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const UserIcon = styled(FontAwesome5)`
  color: ${(props) => props.theme.colors.bg.primary};
  margin-right: ${(props) => props.theme.space[3]};
`;
const MenuIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.bg.primary};
  margin-left: ${(props) => props.theme.space[3]};
`;

export function TabNavigation() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: theme.colors.brand.primary,
        inactiveTintColor: theme.colors.brand.muted,
      }}
    >
      {/* <Tab.Screen name="signup" component={RegisterScreen} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

const HomeStackScreen = ({ navigation }) => {
  const theme = useTheme();
  const stackOptions = {
    title: "Sree Vishwa Computers",
    headerStyle: {
      backgroundColor: theme.colors.brand.primary,
    },
    headerTintColor: theme.colors.text.inverse,
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerRight: () => <UserIcon name="user-circle" size={26} color="black" />,
    headerLeft: () => (
      <MenuIcon
        name="md-menu"
        onPress={() => navigation.openDrawer()}
        size={26}
        color="black"
      />
    ),
  };

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={stackOptions}
      />
    </HomeStack.Navigator>
  );
};
