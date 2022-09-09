import WalletConnect from '@walletconnect/client';
import { FunctionComponent } from 'react';
import { ellipseAddress, SButton } from '../utils';

interface HeaderProps {
  address: string;
  connector: WalletConnect;
  killSession: () => void;
}

const Header: FunctionComponent<HeaderProps> = ({
  address,
  connector,
  killSession,
}: HeaderProps) => {
  const connectWallet = async () => connector.createSession();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center w-50'>
        {/* <img src={logo} className='app-logo mr2' alt='logo' /> */}
        <h1 className='cabinsketch'>NeFelibaTa</h1>
      </div>
      {address ? (
        <div className='flex flex-column tr'>
          <span className='blue'>{ellipseAddress(address)}</span>
          <span className='pointer-fade f6' onClick={killSession}>
            Disconnect
          </span>
        </div>
      ) : (
        <SButton onClick={connectWallet}>Connect Wallet</SButton>
      )}
    </div>
  );
};

export default Header;
