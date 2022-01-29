import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

const MyText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const MapCardCover = styled(Card.Cover)``;

export const MapCallout = ({ restaurant }) => {
  return (
    <Card>
      <MapCardCover
        key={restaurant.name}
        source={{ uri: restaurant.photos[0] }}
      />

      <Spacer>
        <MyText>{restaurant.name}</MyText>
      </Spacer>
    </Card>
  );
};
