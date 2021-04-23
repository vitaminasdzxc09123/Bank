import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const CardTitle = ({ children }) => {
  return <Text style={styles.Title}>{children}</Text>;
};

export default CardTitle;
