import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import Style from "./FollowerTabCard.module.css";
import images from "../../../img";
import { useToggle } from "@/hooks/useToggle";
const FollowerTabCard = ({ idx, background, user, total, seller }) => {
  const [following, toggle] = useToggle(false);

  return (
    <div className={Style.FollowerTabCard}>
      <div className={Style.FollowerTabCard_rank}>
        <p>
          #{idx + 1} <span>🥇</span>
        </p>
      </div>

      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <Image
            className={Style.FollowerTabCard_box_img_img}
            src={background || images[`creatorbackground${idx + 1}`]}
            alt="profile braground"
            width={500}
            height={300}
          />
        </div>

        <div className={Style.FollowerTabCard_box_profile}>
          <Image
            className={Style.FollowerTabCard_box_profile_img}
            alt="profile picture"
            width={50}
            height={50}
            src={user || images[`user${idx + 1}`]}
          />
        </div>

        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_info_name}>
            <h4>
              {seller.slice(0, 9)}
              <span>
                <MdVerified />
              </span>
            </h4>
            <p>{total || 0} ETH</p>
          </div>

          <div className={Style.FollowerTabCard_box_info_following}>
            {following ? (
              <a onClick={toggle}>
                Follow
                <span>
                  <TiTick />
                </span>
              </a>
            ) : (
              <a onClick={toggle}>Following</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerTabCard;
