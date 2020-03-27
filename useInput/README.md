# @chae_hook/use-input  

React Hook to update input and add validation.

## Installation

### yarn
```
yarn add @chae_hoook/use-input
```

### npm
```
npm i @chae_hoook/use-input
```

## Usage
```javascript
import React from "react";
import useInput from "@chae_hook/use-Input";

function App = () => {
  const maxLen = value => value.length <= 20;
  const name = useInput("Ms: ", maxLen);
  console.log(name)
  return (
    <div className="App">
      <h1> What is your name?</h1>
      <input placeholder="Name" {...name}/>
    </div>
  );
};
```

## Arguments
| Argument     | Type     | Description                              | Required |
| :----------- | :------- | :--------------------------------------- | :------- |
| initialValue | string   | String to show in placeholder by default | yes      |
| validator    | function | Function to be add validation            | yes      |

## Return
| Return value | Type   | Description                                                                                                                          | Default value |
| :----------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------- | :------------ |
| name         | Object | A object containing string value whici can be inputted in placeholder and function onChange which can be used for adding validation. | null          |