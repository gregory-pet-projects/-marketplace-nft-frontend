import { Button } from "@/components/componentsIndex";
import { MdTimer } from "react-icons/md";
import BoxTimerItem from "../BoxTimerItem/BoxTimerItem";
import Style from "./Bidding.module.css";

const Bidding = ({
  timerItems,
  sliderPriceETH,
  sliderPriceUSD,
  handleClickPlace,
  handleClickView,
}) => (
  <div className={Style.bigNFTSlider_box_left_bidding}>
    <div className={Style.bigNFTSlider_box_left_bidding_box}>
      <smal>Current Bid</smal>
      <p>
        {sliderPriceETH}
        <span>${sliderPriceUSD}</span>
      </p>
    </div>
    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
      <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
      <span>Auction ending in</span>
    </p>

    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
      {timerItems.map((item, idx) => (
        <BoxTimerItem {...item} key={idx} />
      ))}
    </div>

    <div className={Style.bigNFTSlider_box_left_button}>
      <Button btnName="Place" handleClick={handleClickPlace} />
      <Button btnName="View" handleClick={handleClickView} />
    </div>
  </div>
);

export default Bidding;
