import type { TextStyle, ViewStyle } from 'react-native';

export interface RefObject {
  updateActive: (index: number) => void;
}

export interface Props<T> {
  segments: T[];
  iconField?: keyof T;
  labelField?: keyof T;
  duration?: number;
  activeTab: number;
  onPress?: (value: any, index: number) => void;
  style?: ViewStyle | TextStyle;
  activeStyle?: ViewStyle;
  textStyle?: TextStyle;
  textActiveStyle?: TextStyle;
}

export interface ObjExtends {
  title: string;
  icon: any | undefined;
}
