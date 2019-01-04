import Router from "next/router";
import { done as NProgressDone, start as NProgressStart } from "nprogress";
import React, { PureComponent } from "react";

const startNProgress = () => NProgressStart();
const stopNProgress = () => NProgressDone();

export default class NProgress extends PureComponent {
  public componentDidMount() {
    Router.events.on("routeChangeStart", startNProgress);
    Router.events.on("routeChangeComplete", stopNProgress);
    Router.events.on("routeChangeError", stopNProgress);
  }

  public componentWillUnmount() {
    Router.events.off("routeChangeStart", startNProgress);
    Router.events.off("routeChangeComplete", stopNProgress);
    Router.events.off("routeChangeError", stopNProgress);
  }

  public render() {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Make clicks pass-through */
            #nprogress {
              pointer-events: none;
            }

            #nprogress .bar {
              background: #29d;

              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;

              width: 100%;
              height: 2px;
            }

            /* Fancy blur effect */
            #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: 0 0 10px #29d, 0 0 5px #29d;
              opacity: 1;
              transform: rotate(3deg) translate(0px, -4px);
            }
          `
        }}
      />
    );
  }
}
