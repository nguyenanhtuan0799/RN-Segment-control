import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RefObject, SegmentControl } from 'react-navtive-segment-control';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const segmentRef = React.useRef<RefObject>();
  const data = [
    {
      title: 'EN',
      id: 1,
    },
    {
      title: 'VN',
      id: 2,
    },
  ];
  return (
    <View style={styles.container}>
      <SegmentControl
        ref={segmentRef}
        segments={data}
        activeTab={activeTab}
        style={styles.segment}
        onPress={(value) => {
          console.log(value);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          segmentRef.current?.updateActive(1);
        }}
      >
        <Text>btn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActiveTab(1);
        }}
      >
        <Text>next</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setActiveTab(0);
        }}
      >
        <Text>prev</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segment: {
    width: 100,
    height: 50,
    borderRadius: 10,
  },
});
