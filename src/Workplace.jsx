import { Text, View } from "@react-pdf/renderer";
import Location from "./svg/Location";
import Calendar from "./svg/Calendar";
import { ACCENT_COLOR } from "./styles";

const Workplace = ({ title, location, dates }) => (
  <>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      <Text
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: ACCENT_COLOR,
          maxWidth: 260,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
          top: -2,
        }}
      >
        <Location />
        <Text>{location}</Text>
      </View>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: 4,
      }}
    >
      <Calendar />
      <Text
        style={{
          color: "#505050",
          fontSize: 9,
          textTransform: "uppercase",
          marginTop: 3,
        }}
      >
        {dates}
      </Text>
    </View>
  </>
);

export default Workplace;
