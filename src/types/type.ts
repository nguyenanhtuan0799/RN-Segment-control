import type { TextStyle, ViewStyle } from 'react-native';

export interface RefObject {
  updateActive: (index: number) => void;
}

export interface Props<T> {
  segments: T[];
  iconField?: keyof T;
  labelField?: keyof T;
  iconActiveField?: keyof T;
  duration?: number;
  activeTab?: number;
  onPress?: (value: T, index: number) => void;
  style?: ViewStyle;
  activeStyle?: ViewStyle;
  textStyle?: TextStyle;
  textActiveStyle?: TextStyle;
  testID?: string;
}

export interface ObjExtend {
  title?: '';
  icon?: '';
}
