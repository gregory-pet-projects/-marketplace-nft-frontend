import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import Style from "./SliderButtons.module.css";

const SliderButtons = ({ decrement, increment }) => (
  <div className={Style.bigNFTSlider_box_left_sliderBtn}>
    <TbArrowBigLeftLines
      className={Style.bigNFTSlider_box_left_sliderBtn_icon}
      onClick={decrement}
    />
    <TbArrowBigRightLine
      className={Style.bigNFTSlider_box_left_sliderBtn_icon}
      onClick={increment}
    />
  </div>
);

export default SliderButtons;
