import WalletConnect from '@walletconnect/client';
import { FunctionComponent } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { ellipseAddress, SButton } from '../utils';

interface NavbarProps {
  address: string;
  connector: WalletConnect;
  killSession: () => void;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  address,
  connector,
  killSession,
}: NavbarProps) => {
  const connectWallet = async () => connector.createSession();

  return (
    <div className="flex items-center justify-between mb4">
      <Link to="/" className="f1 cabinsketch pointer-fade link near-black">
        Gallery
      </Link>
      <div className="flex items-center">
        <ul className="flex list">
          <NavItem to="/browse" label="Browse" />
          <NavItem to="/create" label="Create" />
        </ul>
        {address ? (
          <div className="flex flex-column tr">
            <span className="blue">{ellipseAddress(address)}</span>
            <span className="pointer-fade f6" onClick={killSession}>
              Disconnect
            </span>
          </div>
        ) : (
          <div>
            <SButton onClick={connectWallet}>Connect Wallet</SButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

interface NavItemProps {
  to: string;
  label: string;
}

function NavItem({ to, label }: NavItemProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className="mr4 pointer-fade">
      <Link className={`link ${isActive ? 'orange' : 'near-black'}`} to={to}>
        {label}
      </Link>
    </li>
  );
}
