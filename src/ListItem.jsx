import Circle from "./svg/Circle";
import { Text, View } from "@react-pdf/renderer";

const ListItem = ({ children }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        marginTop: 3,
        marginLeft: 4,
        paddingRight: 18,
      }}
    >
      <Circle />
      <Text>{children}</Text>
    </View>
  );
};

export default ListItem;
