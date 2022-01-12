import React from "react";

import { Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Pinellas Ale House",
    icon,
    photos = [
      "https://cdn.onebauer.media/one/lifestyle-images/celebrity/58aae0a65182f50c2a1ef301/kate-middleton-hero.jpg?format=jpg&quality=80&width=1400&ratio=16-9&resize=aspectfill",
    ],
    address = "100 some random st",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card>
      <Card.Cover source={{ url: `${photos[0]}` }} style={{ padding: 20 }} />
      <Card.Title title={name} />
    </Card>
  );
};
