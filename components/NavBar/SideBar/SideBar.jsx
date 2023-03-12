import Style from "./SideBar.module.css";
import Button from "../../Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
} from "react-icons/ti";
import { DiJqueryLogo } from "react-icons/di";
import { useState } from "react";

const discover = [
  {
    name: "Collection",
    link: "collection",
  },
  {
    name: "Search",
    link: "searchPage",
  },
  {
    name: "Author Profile",
    link: "author",
  },
  {
    name: "NFT Details",
    link: "NFT-details",
  },
  {
    name: "Account Setting",
    link: "account",
  },
  {
    name: "Upload NFT",
    link: "uploadNFT",
  },
  {
    name: "Connect Wallet",
    link: "connectWallet",
  },
  {
    name: "Blog",
    link: "blog",
  },
];
const helpCenter = [
  {
    name: "About",
    link: "aboutus",
  },
  {
    name: "Contact Us",
    link: "contactus",
  },
  {
    name: "Sign Up",
    link: "signUp",
  },
  {
    name: "LogIn",
    link: "login",
  },
  {
    name: "Subscription",
    link: "subscription",
  },
];

const links = [
  { icon: <TiSocialFacebook />, href: "#" },
  { icon: <TiSocialLinkedin />, href: "#" },
  { icon: <TiSocialTwitter />, href: "#" },
  { icon: <TiSocialYoutube />, href: "#" },
  { icon: <TiSocialInstagram />, href: "#" },
];

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const router = useRouter();

  const openDiscoverMenu = () => setOpenDiscover(!openDiscover);

  const openHelpMenu = () => setOpenHelp(!openHelp);

  const closeSideBar = () => setOpenSideMenu(false);

  return (
    <div className={Style.sideBar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={closeSideBar} />

      <div className={Style.sideBar_box}>
        <p>
          <a href="/">
            <DiJqueryLogo className={Style.sideBar_box_logo} />
          </a>
        </p>
        <p>
          Discover the most outstanding articles on all topices of NFT & write
          your own stories and share them
        </p>
        <div className={Style.sideBar_social}>
          {links.map(({ href, icon }, idx) => (
            <a key={idx} href={href}>
              {icon}
            </a>
          ))}
        </div>
      </div>

      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={openDiscoverMenu}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {openDiscover && (
            <div className={Style.sideBar_discover}>
              {discover.map(({ link, name }, idx) => (
                <p key={idx + 1}>
                  <Link href={{ pathname: `${link}` }}>{name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className={Style.sideBar_menu_box} onClick={openHelpMenu}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {openHelp && (
            <div className={Style.sideBar_discover}>
              {helpCenter.map(({ link, name }, idx) => (
                <p key={idx + 1}>
                  <Link href={{ pathname: `${link}` }}>{name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={Style.sideBar_button}>
        {currentAccount == "" ? (
          <Button btnName="connect" handleClick={connectWallet} />
        ) : (
          <Button
            btnName="Create"
            handleClick={() => router.push("/uploadNFT")}
          />
        )}

        <Button btnName="Connect Wallet" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SideBar;
