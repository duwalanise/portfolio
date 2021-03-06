import * as React from "react";
import { useTransition } from "react-spring";
import { useState, useCallback } from "react";

import Nav from "./components/nav/nav";
import Page from "./components/page/page";
import SocialLink from "./components/socialLink/socialLink";

interface AppProps {}

export interface pageProps {
  title: string;
  component: any;
}

const pages: pageProps[] = [
  { title: "About Me", component: "Anish Duwal" },
  { title: "Portfolio", component: "My Portfolio" },
  { title: "Contact", component: "See U Soon" }
];

const App: React.FunctionComponent<AppProps> = ({}) => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(idx => setIndex(idx), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });
  return (
    <div>
      <Nav pages={pages} onClick={onClick} />
      {transitions.map(({ item, props, key }) => {
        return (
          <Page key={key} style={props}>
            {pages[item].component}
          </Page>
        );
      })}
      <SocialLink />
    </div>
  );
};

export default App;
