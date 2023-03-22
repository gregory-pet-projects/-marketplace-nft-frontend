import Style from "./BoxTimerItem.module.css";

const BoxTimerItem = ({ time, title }) => (
  <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
    <p>{time}</p>
    <span>{title}</span>
  </div>
);

export default BoxTimerItem;
