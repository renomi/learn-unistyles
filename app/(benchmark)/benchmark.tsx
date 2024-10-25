import { Benchmark, UnistylesWithThemeBenchmark, StyleSheetBenchmark } from '~/components';

const BOXES = 100;

export default function BenchmarkScreen() {
  return (
    <Benchmark
      times={20}
      boxes={BOXES}
      testDelay={100}
      title={`Init unistyles + rendering ${BOXES} boxes`}
      description={`Single StyleSheet vs ${BOXES}x Unistyles useStyles with single theme`}
      stylesheet={(onMeasureEnd) => (
        <StyleSheetBenchmark boxes={BOXES} onMeasureEnd={onMeasureEnd} />
      )}
      unistyles={(onMeasureEnd) => (
        <UnistylesWithThemeBenchmark boxes={BOXES} onMeasureEnd={onMeasureEnd} />
      )}
    />
  );
}
