import * as React from "react";
import { useTransition, animated } from "react-spring";

import "./App.css";
import { useState, useCallback } from "react";

interface AppProps {}

const pages = [
  ({ style }: { style: any }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>A</animated.div>
  ),
  ({ style }: { style: any }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>B</animated.div>
  ),
  ({ style }: { style: any }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      C
    </animated.div>
  )
];

const App: React.FunctionComponent<AppProps> = ({}) => {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return (
    <div className="wrapper" onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
};

export default App;
