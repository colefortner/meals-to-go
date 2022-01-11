import React from "react";

import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Pinellas Ale House",
    icon,
    photos = [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgraziadaily.co.uk%2Fcelebrity%2Fnews%2Fkate-middleton%2F&psig=AOvVaw1alxTsBlnKE_vx5CnOSDDi&ust=1642021288439000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDJ747MqvUCFQAAAAAdAAAAABAn",
    ],
    address = "100 some random st",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
