# react-navtive-segment-control

Segment Control RN

## Installation

```sh
npm install react-navtive-segment-control
```

```sh
yarn add react-navtive-segment-control
```

## Usage

- Import Component

```sh
import { SegmentControl } from'react-navtive-segment-control';
```

```sh
 <SegmentControl
    segments={data}
    activeTab={activeTab}
    onPress={(value) => {
      console.log(value);
    }}
  />
```

- Example:

```
import react, {useState}from 'react'
import { RefObject, SegmentControl } from 'react-navtive-segment-control';

const data = [
  {label : "Left", icon : "left"},
  {label : "Right", icon : "right"}
  ]

const App = ()=>{
  const [activeTab,setActiveTab] = useState(0)
  return (
    <SegmentControl
      segments={data}
      activeTab={activeTab}
      onPress={(value) => {
        // value is object active in data
        console.log(value);
      }}
    />
  )
}
export default App
```

# **Reference**

## **Props**

---

### `segments`

an array of objects segments

| Type  | Required |
| ----- | -------- |
| array | Yes      |

### `activeTab`

index of array in segment

| Type   | Required |
| ------ | -------- |
| number | Yes      |

### `labelField`

key label you want to display (in the object of the segment array)

| Type   | Required | default |
| ------ | -------- | ------- |
| string | No       | title   |

### `iconField`

key icon you want to display (in the object of the segment array)

| Type   | Required | default |
| ------ | -------- | ------- |
| string | No       | icon    |

### `duration`

duration animated

| Type   | Required | default |
| ------ | -------- | ------- |
| number | No       | 300ms   |

### `style`

style container

| Type   | Required | default |
| ------ | -------- | ------- |
| object | No       |         |

### `activeStyle`

style box active

| Type   | Required | default |
| ------ | -------- | ------- |
| object | No       |         |

### `textStyle`

textStyle box

| Type   | Required | default |
| ------ | -------- | ------- |
| object | No       |         |

### `textActiveStyle`

textActiveStyle box active

| Type   | Required | default |
| ------ | -------- | ------- |
| object | No       |         |

### `onPress`

Press Segment

```
onPress((value,i)=>{})
```

| Type     | Required | default |
| -------- | -------- | ------- |
| function | No       |         |

### `updateActive`

updateActive of Ref segment

```
updateActive(index)
```

| Type     | Required | default |
| -------- | -------- | ------- |
| function | No       |         |

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
