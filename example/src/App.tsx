import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const segmentRef = React.useRef<RefObject>();
  const data = [
    {
      id: 1,
      icon: <Text>EN</Text>,
      iconActive: <Text>ENActive</Text>,
    },
    {
      id: 2,
      icon: <Text>VN</Text>,
      iconActive: <Text>VNActive</Text>,
    },
  ];
  return (
    <View style={styles.container}>
      <SegmentControl
        ref={segmentRef}
        segments={data}
        iconField="icon"
        iconActiveField="iconActive"
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
