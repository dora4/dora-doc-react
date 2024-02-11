import React from 'react';
import TronWeb from 'tronweb';

const tronWeb: any = new TronWeb({
    fullHost: 'https://api.nileex.io', // here we use Nile test net
});

function SignMessage() {
    // You can call `useWallet` to get wallets state and methods
    const { wallet, address, connected, signMessage, signTransaction } = useWallet();
    const receiver = 'target address to tranfer';

    async function onSignMessage() {
        const res = await signMessage('Hello World');
    }

    async function onSignTransaction() {
        const transaction = await tronWeb.transactionBuilder.sendTrx(receiver, tronWeb.toSun(0.1), address);
        const signedTransaction = await signTransaction(transaction);
        const res = await tronWeb.trx.sendRawTransaction(signedTransaction);
        console.log(res);
    }
    return (
        <div>
            <div>
                <h2>Wallet Connection Info</h2>
                <p>
                    {' '}
                    <span>Connection Status:</span> {connected ? 'Connected' : 'Disconnected'}{' '}
                </p>
                <p>
                    {' '}
                    <span>Your selected Wallet:</span> {wallet?.adapter.name}{' '}
                </p>
                <p>
                    {' '}
                    <span>Your Address:</span> {address}{' '}
                </p>
            </div>
            <div>
                <h2>Sign a message</h2>
                <button onClick={onSignMessage}> SignMessage </button>
                <h2>Sign a Transaction</h2>
                <button onClick={onSignTransaction}> Transfer </button>
            </div>
        </div>
    );
}
