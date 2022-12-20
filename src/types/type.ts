import type { TextStyle, ViewStyle } from 'react-native';

export interface RefObject {
  updateActive: (index: number) => void;
}

export interface Props<T> {
  segments: T[];
  iconField?: string;
  labelField?: string;
  duration?: number;
  activeTab: number;
  onPress?: (value: any, index: number) => void;
  style?: ViewStyle | TextStyle | any;
  activeStyle?: ViewStyle | any;
  textStyle?: TextStyle | any;
  textActiveStyle?: TextStyle | any;
}
