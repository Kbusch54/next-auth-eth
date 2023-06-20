'use client';
import '@rainbow-me/rainbowkit/styles.css';
import { SessionProvider } from "next-auth/react";
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
// import { createClient } from '@wagmi/core';
 
const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: 'W5CgApVgV6mfn1ZeTqu9-zx_9jx1oYhF' }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


 
// Set up client

export default function Providers({ children }) {

  // const next  = loadEnvConfig(process.env.NEXTAUTH_URL);
  // console.log('sessiopn',next);
  // console.log('alchemy key is', process.env.ALCHEMY_ID);
    return   ( 
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}> 
            <SessionProvider>
      {children}
      </SessionProvider> 
      </RainbowKitProvider>
        </WagmiConfig>
        )
  }