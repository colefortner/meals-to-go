import React from "react";

import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{ uri: photos[0] }}
        style={{ padding: 20 }}
      />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});
