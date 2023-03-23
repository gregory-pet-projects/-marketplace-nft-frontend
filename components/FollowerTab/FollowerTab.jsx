import React, { useState } from "react";
import { RiUserFollowFill, RiAwardLine } from "react-icons/ri";

import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import images from "../../img";

const FollowerTab = ({}) => {
  const FollowingArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];
  const NewsArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      seller: "7200d8d8390d9993ujdc93900399djj277x",
    },
  ];

  const [popular, setPopular] = useState(false);
  const [following, setFollowing] = useState(true);
  const [news, setNews] = useState(false);

  const closeAll = () => {
    setPopular(false);
    setFollowing(false);
    setNews(false);
  };

  const openPopular = () => {
    closeAll();
    setPopular(() => true);
  };
  const openFollower = () => {
    closeAll();
    setFollowing(() => true);
  };
  const openNews = () => {
    closeAll();
    setNews(() => true);
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> Top Creators List..</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <button onClick={openPopular}>
              <RiUserFollowFill />
              Popular
            </button>
            <button onClick={openFollower}>
              <RiUserFollowFill />
              Following
            </button>
            <button onClick={openNews}>
              <RiAwardLine />
              NoteWorthy
            </button>
          </div>
        </div>
      </div>

      {/* {popular && (
        <div className={Style.followerTab_box}>
          {TopCreator.map((item, idx) => (
            <FollowerTabCard key={idx} idx={idx} {...item} />
          ))}
        </div>
      )} */}

      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((item, idx) => (
            <FollowerTabCard key={idx} idx={idx} {...item} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((item, idx) => (
            <FollowerTabCard key={idx} idx={idx} {...item} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become, author</a>
        </div>
      </div>
    </div>
  );
};

export default FollowerTab;
