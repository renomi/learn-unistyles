import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};
