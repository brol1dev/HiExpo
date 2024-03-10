import { BarChart } from "react-native-gifted-charts";

const data = [{ value: 50 }, { value: 20 }, { value: 90 }, { value: 70 }];

export const MyBarChart = () => {
  return <BarChart data={data} noOfSections={3} isAnimated />;
};
