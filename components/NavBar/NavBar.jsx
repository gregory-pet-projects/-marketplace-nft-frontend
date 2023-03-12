import Style from "./NavBar.module.css";
import { useState } from "react";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../componentsIndex";
import Image from "next/image";

import images from "../../img";

const DISCOVER = "Discover";
const HELP_CENTER = "Help Center";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const updateMenuState = (discover, help, profile, notification) => {
    setDiscover(discover);
    setHelp(help);
    setProfile(profile);
    setNotification(notification);
  };

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    const menuOptions = {
      [DISCOVER]: () => {
        updateMenuState(true, false, false, false); //discover, help, profile, notification
      },
      [HELP_CENTER]: () => {
        updateMenuState(false, true, false, false); //discover, help, profile, notification
      },
    };

    const selectedOption = menuOptions[btnText];
    if (selectedOption) {
      selectedOption();
    }

    if (discover) {
      setDiscover(false);
    }
    if (help) {
      setHelp(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      updateMenuState(false, false, false, true); //discover, help, profile, notification
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      updateMenuState(false, false, true, false); //discover, help, profile, notification
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => setOpenSideMenu(!openSideMenu);

  useState(() => {}, []);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* LEFT SECTION */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT Market place"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={Style.navbar_container_right}>
          {/* DISCOVER MENU */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={openMenu}>{DISCOVER}</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={openMenu}>{HELP_CENTER}</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications onClick={openNotification} />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            <Button text="Create" />
          </div>

          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                className={Style.navbar_container_right_profile}
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={openProfile}
              />
              {profile && <Profile />}
            </div>
          </div>
          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={openSideBar} />
          </div>
        </div>
      </div>

      {/* SIDBAR COMPONENT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
