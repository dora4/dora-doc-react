import React, { useMemo } from 'react';
import {Alert, View} from "react-native";
import { WalletDisconnectedError, WalletError, WalletNotFoundError } from '@tronweb3/tronwallet-abstract-adapter';
import {TronLinkAdapter} from "@tronweb3/tronwallet-adapter-tronlink";
import {LedgerAdapter, TokenPocketAdapter} from '@tronweb3/tronwallet-adapters';

export function WalletPicker() {
    function onError(e: WalletError) {
        if (e instanceof WalletNotFoundError) {
            Alert.alert("钱包未安装")
        } else if (e instanceof WalletDisconnectedError) {
            Alert.alert("钱包已断开连接")
        } else {
            console.error(e.message);
        }
    }
    const adapters = useMemo(function () {
        const tronLink = new TronLinkAdapter();
        const tokenPocket = new TokenPocketAdapter();
        const ledger = new LedgerAdapter({
            accountNumber: 2,
        });
        return [tronLink, tokenPocket, ledger];
    }, []);
    return (<View/>
        // <WalletProvider onError={onError} adapters={adapters}>
        //     <WalletModalProvider>{/* Place your app's components here */}</WalletModalProvider>
        // </WalletProvider>
    );
}
