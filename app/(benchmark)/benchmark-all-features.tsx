import {
  Benchmark,
  StyleSheetWithAllFeaturesBenchmark,
  UnistylesWithAllFeaturesBenchmark,
} from '~/components';

const BOXES = 100;

export default function BenchmarkUnistylesAllFeaturesScreen() {
  return (
    <Benchmark
      times={20}
      boxes={BOXES}
      testDelay={100}
      title={`Init unistyles + enable/use all features and render ${BOXES} boxes`}
      description={`Single StyleSheet vs ${BOXES}x Unistyles useStyles with all features`}
      stylesheet={(onMeasureEnd) => (
        <StyleSheetWithAllFeaturesBenchmark boxes={BOXES} onMeasureEnd={onMeasureEnd} />
      )}
      unistyles={(onMeasureEnd) => (
        <UnistylesWithAllFeaturesBenchmark boxes={BOXES} onMeasureEnd={onMeasureEnd} />
      )}
    />
  );
}
