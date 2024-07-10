import { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import NetworkSwitcher from "./NetworkSwitcher";
import NavElement from "./nav-element";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <div className="navbar flex h-20 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66">
        <div className="navbar-start align-items-center">
          <WalletMultiButtonDynamic className="btn-ghost btn-sm relative flex md:hidden text-lg " />
        </div>
        <div className="navbar-end">
          <div className="hidden md:inline-flex align-items-center justify-items gap-6">
            <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
          </div>
        </div>
      </div>
    </div>
  );
};
