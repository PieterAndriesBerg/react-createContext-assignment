import React, {useContext} from "react";
import {fruitCounterContext} from "../App";

export default function Home() {
  const { totalFruit } = useContext(fruitCounterContext);
  return <div>{totalFruit} stuks fruit besteld </div>;
}
