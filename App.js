import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { animated, useSpring } from "react-spring/native";

const AnimatedView = animated(View);

const useMyAnimation = interactionState => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateToProps, setAnimateToProps] = useState({
    config: { friction: 20, tension: 170 },
    from: { scale: 1 },
    to: { scale: 1 }
  });
  const motionProps = useSpring(animateToProps);

  if (interactionState === "pressed" && !isAnimating) {
    setIsAnimating(true);
    setAnimateToProps({
      config: { friction: 20, tension: 170 },
      to: { scale: 2 }
    });
  }

  return motionProps;
};

const MyButton = props => {
  const onPress = () => {
    setInteractionState("pressed");
  };

  const [interactionState, setInteractionState] = useState(
    props.interactionState || "enabled"
  );
  const motionProps = useMyAnimation(interactionState);

  const motionStyle = {
    ...styles.redBox,
    transform: [{ scale: motionProps.scale }]
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.blueBox}>
        <AnimatedView style={motionStyle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default () => {
  // comment the next line  and uncomment the following one
  // to see everything working, i.e., when we tap the blue box
  // we can see the red box growing
  return <MyButton interactionState="pressed" />;
  // return <MyButton />;
};

const styles = StyleSheet.create({
  blueBox: {
    backgroundColor: "blue",
    height: 100,
    margin: 50,
    width: 100
  },
  redBox: {
    backgroundColor: "red",
    height: 20,
    width: 20
  }
});
