import React, { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

import Style from "./Collection.module.css";
import DaysComponent from "./childComponent/DaysComponents/DaysComponents";
import images from "../../img";
import clsx from "clsx";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  const newsArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];

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
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button
              className={clsx({ selected: popular })}
              onClick={openPopular}
            >
              <BsFillAlarmFill /> 24 hours
            </button>
            <button
              className={clsx({ selected: following })}
              onClick={openFollower}
            >
              <BsCalendar3 /> 7 days
            </button>
            <button className={clsx({ selected: news })} onClick={openNews}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {CardArray.map((item, idx) => (
            <DaysComponent key={idx} idx={idx} item={item} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((item, idx) => (
            <DaysComponent key={idx} idx={idx} item={item} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {newsArray.map((item, idx) => (
            <DaysComponent key={idx} idx={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
