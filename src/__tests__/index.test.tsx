import React from 'react';
import Segment from '../components/index';
import { fireEvent, render, cleanup } from '@testing-library/react-native';
import { TouchableWithoutFeedback } from 'react-native';

const SegmentComponent = ({
  segments,
  onPress,
  testID,
}: {
  segments: any[];
  onPress?: any;
  testID?: any;
}) => {
  const componentRef = React.useRef();

  return (
    <Segment
      testID={testID}
      segments={segments}
      activeTab={0}
      ref={componentRef}
      onPress={onPress}
    />
  );
};

describe('Segment', () => {
  beforeEach(() => {
    cleanup();
  });
  it('Segment render success', () => {
    const segments = [
      { title: 'Tab1' },
      {
        title: 'Tab2',
      },
    ];
    const { getByText } = render(<SegmentComponent segments={segments} />);

    segments.forEach((segment) => {
      // kiểm tra title có được render đúng ko
      expect(getByText(segment.title)).toBeTruthy();
    });
  });

  it('Segment button click', () => {
    const segments: any = [
      { title: 'Tab1' },
      {
        title: 'Tab2',
      },
    ];
    // gọi đến 1 function của jest
    const onPress = jest.fn();
    // render component
    const { getByText } = render(
      <SegmentComponent segments={segments} onPress={onPress} />
    );
    // dùng để click
    fireEvent.press(getByText(segments[0].title));
    // kết quả mong muốn ,output của onPress
    expect(onPress).toHaveBeenCalledWith(
      {
        title: 'Tab1',
      },
      0
    );
    fireEvent.press(getByText(segments[1].title));
    // kết quả mong muốn ,output của onPress
    expect(onPress).toHaveBeenCalledWith(
      {
        title: 'Tab2',
      },
      1
    );
  });

  it('Segment render 2 Tab', () => {
    const segments: any = [
      { title: 'Tab1' },
      {
        title: 'Tab2',
      },
    ];
    // lấy ra hàm get tất cả Type
    const { UNSAFE_queryAllByType, unmount } = render(
      <SegmentComponent segments={segments} />
    );
    // kết quả mong muốn có 2 TouchableWithoutFeedback khi render
    expect(UNSAFE_queryAllByType(TouchableWithoutFeedback)).toHaveLength(2);
    unmount();
  });

  // it('Segment use Ref method updateActive', async () => {
  //   const segments: any = [
  //     { title: 'Tab1' },
  //     {
  //       title: 'Tab2',
  //     },
  //   ];
  //   let componentRef: any;

  //   await act(async () => {
  //     const { getByTestId } = render(
  //       <SegmentComponent segments={segments} testID="segment" />
  //     );
  //     componentRef = await getByTestId('segment').props.ref.current;
  //   });

  //   componentRef.updateActive = jest.fn();
  //   componentRef.updateActive(1);

  //   expect(componentRef.updateActive(1)).toBeCalled();
  // });
});
