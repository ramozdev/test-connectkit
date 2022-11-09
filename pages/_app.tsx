import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { siwe } from "../siwe";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <siwe.Provider>
        <ConnectKitProvider>
          <ConnectKitButton />
          <Component {...pageProps} />
        </ConnectKitProvider>
      </siwe.Provider>
    </WagmiConfig>
  );
}
