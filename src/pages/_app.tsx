import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { ContentContainer } from "../components/ContentContainer";
import { Footer } from "../components/Footer";

import Notifications from "../components/Notification";
import "../ComponentsUi/Layout/MintUi/MintUi.css";
import "../ComponentsUi/Layout/Faq/Faq.css";
import "../ComponentsUi/Layout/Footer/Footer.css";
import "../ComponentsUi/Layout/Navigation/Navigation.css";
import "../ComponentsUi/Idle/Idle.css";
import "../ComponentsUi/Functionalities/Clipboard.css";
import "../CSSUi/Globals/Animations.css";
import "../CSSUi/Globals/Buttons.css";
import "../CSSUi/Globals/Icons.css";
import "../CSSUi/Globals/Marquee.css";
import "../CSSUi/Globals/Reset.css";
import "../CSSUi/Globals/Typography.css";
import "../CSSUi/Globals/Variables.css";
import "../CSSUi/Layout/Layout.css";
import "../CSSUi/Layout/V-Spaces.css";
import "../CSSUi/App.css";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Solana Scaffold Lite</title>
      </Head>

      <ContextProvider>
        <div className="">
          <Notifications />
          <AppBar />
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
