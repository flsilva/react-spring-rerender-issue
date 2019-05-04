This repository was created to reproduce an issue with `react-spring/native` (React Native) when we try to rerender a component using `useSpring` right away with different props.

Link to issue: https://github.com/react-spring/react-spring/issues/662

## Tech Stack

It uses the following stack:

- `react 16.8.6`
- `react-native 0.59.5`
- `react-spring 9.0.0-beta.5`

I've also tested using `react-spring 8.0.20` and although there's no runtime error, there's no animation either, i.e., nothing happens visually.

## Running the project

After cloning the project install all dependencies.

#### Running the iOS app

`yarn/npm start`

`react-native run-ios`

#### Running the Android app

`yarn/npm start`

`react-native run-android`

## The error

The following error can be seen on iOS and Android:

![Error image](https://raw.githubusercontent.com/flsilva/react-spring-rerender-issue/master/error-shot.jpg)

I can also see an error on web using `react-native-web` with a slightly different message, but seems to be the same error.
