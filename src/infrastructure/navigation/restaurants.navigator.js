import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Text } from "react-native";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { Spacer } from "../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../features/restaurants/components/restaurant-info-card.component";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restauarants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={({ route, navigation }) => {
          const { restaurant } = route.params;

          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={restaurant} />
            </Spacer>
          );
        }}
      />
    </RestaurantStack.Navigator>
  );
};
