import { View } from 'react-native';

import { StyleSheetFullBox } from './StyleSheetFullBox';
import { Timer } from './Timer';

type StyleSheetBenchmarkScreenProps = {
  boxes: number;
  onMeasureEnd(renderTime: number): void;
};

export const StyleSheetWithAllFeaturesBenchmark: React.FunctionComponent<
  StyleSheetBenchmarkScreenProps
> = ({ onMeasureEnd, boxes }) => (
  <Timer onMeasureEnd={onMeasureEnd}>
    <View style={{ flexDirection: 'row', columnGap: 5 }}>
      {Array.from({ length: boxes }).map((_, index) => (
        <StyleSheetFullBox key={index} index={index} />
      ))}
    </View>
  </Timer>
);
