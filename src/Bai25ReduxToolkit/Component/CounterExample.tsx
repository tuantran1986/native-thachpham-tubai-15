import { Store } from "@reduxjs/toolkit";
import React from "react";
import { Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/CounterSlice";

export default function CounterExample() {
  const count = useSelector((state: Store) => state.counter.value);
  const dispatch = useDispatch();

  //
  return (
    <>
      <Text>bien dem - COUNT: {count}</Text>
      <Button title="TANG 1" onPress={() => dispatch(increment())} />
      <Button title="GIAM 1" onPress={() => dispatch(decrement())} />
      <Button
        title="Increment by 5"
        onPress={() => dispatch(incrementByAmount(5))}
      />
    </>
  );
}
