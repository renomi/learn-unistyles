import { View } from 'react-native';

import { StyleSheetBox } from './StyleSheetBox';
import { Timer } from './Timer';

type StyleSheetBenchmarkScreenProps = {
  boxes: number;
  onMeasureEnd(renderTime: number): void;
};

export const StyleSheetBenchmark: React.FunctionComponent<StyleSheetBenchmarkScreenProps> = ({
  onMeasureEnd,
  boxes,
}) => (
  <Timer onMeasureEnd={onMeasureEnd}>
    <View style={{ flexDirection: 'row', columnGap: 5 }}>
      {Array.from({ length: boxes }).map((_, index) => (
        <StyleSheetBox key={index} />
      ))}
    </View>
  </Timer>
);
