import { Svg, Circle } from "@react-pdf/renderer";

const height = 14;
const Bullet = ({ size = 2.3 }) => (
  <Svg width={height} height={height} xmlns="http://www.w3.org/2000/svg">
    <Circle cx={height / 2} cy={height / 2} r={size} fill="black" />
  </Svg>
);

export default Bullet;
