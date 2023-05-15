import React, { useCallback } from 'react';
import { forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import type { ObjExtend, Props, RefObject } from 'src/types/type';

const SegmentControl = forwardRef(
  <T extends ObjExtend>(
    {
      segments = [],
      activeTab = 0,
      style,
      activeStyle,
      textStyle,
      onPress,
      textActiveStyle,
      duration = 300,
      iconField = 'icon',
      labelField = 'title',
      testID,
    }: Props<T>,
    ref: Ref<RefObject & any>
  ) => {``
    const [segmentItemWidth, setSegmentItemWidth] = useState<number>(0);
    const [active, setActive] = useState<number>(activeTab);

    const widthSegment = useCallback(
      (
        segmentArr: T[],
        width: string | number | undefined = Dimensions.get('window').width
      ): { width: number } => {
        if (typeof width === 'number') {
          return {
            width: width / segmentArr.length,
          };
        } else if (typeof width === 'string') {
          console.warn(
            '=>>>SegmentControl<<<= : Segment not supported for size string'
          );
          return {
            width: 0,
          };
        } else {
          return { width: 0 };
        }
      },
      []
    );
    const heightSegment = (height: string | number | undefined) => {
      if (typeof height === 'number') {
        return {
          height: height - 4,
        };
      } else if (typeof height === 'string') {
        console.warn(
          '=>>>SegmentControl<<<= : Segment not supported for size string'
        );
        return { height: 0 };
      } else {
        return { height: 0 };
      }
    };

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useImperativeHandle(ref, () => ({
      updateActive: (index: number = 0) => {
        if (index <= segments.length - 1) {
          setActive(index);
          translateXAnim(index);
        } else {
          console.warn(
            '=>>>SegmentControl<<<= : Active cannot exceed the length of the array'
          );
        }
      },
    }));

    const translateXAnim = useCallback(
      (index: number) => {
        Animated.timing(fadeAnim, {
          toValue: segmentItemWidth * index,
          easing: Easing.out(Easing.quad),
          duration: duration,
          useNativeDriver: false,
        }).start();
      },
      [duration, fadeAnim, segmentItemWidth]
    );

    React.useEffect(() => {
      const { width } = widthSegment(segments, style?.width);
      setSegmentItemWidth(width);
    }, [segments, style?.width, widthSegment]);

    React.useEffect(() => {
      if (activeTab <= segments.length - 1) {
        translateXAnim(activeTab);
        setActive(activeTab);
      } else {
        console.warn(
          '=>>>SegmentControl<<<= : Active cannot exceed the length of the array'
        );
      }
    }, [activeTab, translateXAnim, segments]);

    return (
      <View style={[styles.container, { ...style }]} testID={testID}>
        <View style={styles.viewWrap}>
          <View style={styles.boxView}>
            {segments?.map((s, i) => {
              return (
                <TouchableWithoutFeedback
                  ref={ref}
                  key={i}
                  onPress={() => {
                    const value = s;
                    translateXAnim(i);
                    setActive(i);
                    typeof onPress === 'function' && onPress(value, i);
                  }}
                >
                  <View
                    style={[
                      styles.button,
                      widthSegment(segments, style?.width),
                      heightSegment(style?.height),
                    ]}
                  >
                    <View key={i} style={styles.box}>
                      {s[iconField as keyof typeof s]}
                      <Text style={active === i ? textActiveStyle : textStyle}>
                        {s[labelField as keyof typeof s]}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
          <Animated.View
            style={[
              styles.animation,
              styles.boxAnimated,
              {
                transform: [{ translateX: fadeAnim }],
                width: segmentItemWidth - 8,
              },
              activeStyle,
            ]}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: { backgroundColor: '#dddddd' },
  viewWrap: { margin: 2 },
  boxView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    elevation: 10,
    zIndex: 999,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  boxAnimated: { backgroundColor: '#F1F2F6' },
  button: {
    flexDirection: 'row',
  },
  animation: {
    position: 'absolute',
    borderRadius: 7,
    top: 2,
    bottom: 2,
    right: 2,
    left: 2,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.04)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
    zIndex: 1,
  },
});

export default SegmentControl as <T extends unknown>(
  props: Props<T> & { ref?: Ref<RefObject & any> }
) => JSX.Element;
