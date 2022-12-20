import { forwardRef, Props, Ref, useImperativeHandle, useState } from 'react';
import { Dimensions } from 'react-native';
import type { RefObject } from 'src/types/type';

function SegmentControl<T extends unknown>(
  {}: Props<T>,
  ref: Ref<RefObject & any>
) {
  const [segmentItemWidth, setSegmentItemWidth] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    updateActive: (index: number = 0) => {
      return index;
    },
  }));

  const widthSegment = (
    segmentArr: any[],
    width: string | number = Dimensions.get('window').width
  ): { width: number } => {
    if (typeof width === 'number') {
      return {
        width: width / segmentArr.length,
      };
    } else if (typeof width === 'string') {
      return {
        width: width / segmentArr.length,
      };
    } else {
      return { width: 0 };
    }
  };
  return null;
}

export default forwardRef(SegmentControl);
