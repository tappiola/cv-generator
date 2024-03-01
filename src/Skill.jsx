import { Rect, Svg, Text } from "@react-pdf/renderer";

const Skill = ({ text, score }) => {
  const width = 129;
  const height = 3;

  return (
    <>
      <Text style={{ marginTop: 12, marginBottom: 4, fontSize: 10 }}>
        {text}
      </Text>
      <Svg width={width} height={height}>
        <Rect width={width} height={height} fill="#495C6B" />
        <Rect width={(width * score) / 5} height={height} fill="white" />
      </Svg>
    </>
  );
};

export default Skill;
