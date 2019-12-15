# React Native Radio Button

Simple Radio and RadioGroup button for React Native App

## Installation

using npm

```
npm i @pratap2210/react-native-radio-button
```

using yarn

```
yarn add @pratap2210/react-native-radio-button
```

### Configuration

##### Radio Group:

| Property       | Type                   | Default   | Description                                                                                       |
| -------------- | ---------------------- | --------- | ------------------------------------------------------------------------------------------------- |
| size           | number                 | 20        | Size of the radio button                                                                          |
| thickness      | number                 | 1         | width of radio button border                                                                      |
| color          | string                 | '#007AFF' | color of radio button                                                                             |
| activeColor    | string                 | null      | color of radio button when selected                                                               |
| highlightColor | string                 | null      | background of radio button after selected                                                         |
| selectedIndex  | number                 | null      | default selected index of radio group, can be changed to new value or to null for clear selection |
| style          | object                 | null      | Custom styles to be applied if supplied                                                           |
| onSelect       | function(index, value) | null      | function to be invoked when radio button is selected                                              |

##### Radio Button:

| Property | Type   | Default                        | Description                                                    |
| -------- | ------ | ------------------------------ | -------------------------------------------------------------- |
| value    | any    | null                           | value will be passed on callback `onSelect` as second argument |
| style    | object | null                           | Styles to be applied on 'RadioButton' component                |
| color    | string | same as 'RadioGroup' component | color of radio dot                                             |
| disabled | bool   | false                          | If true, disable all interactions for this component.          |
