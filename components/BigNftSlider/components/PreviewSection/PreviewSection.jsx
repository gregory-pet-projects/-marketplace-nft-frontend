import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import Style from "./PreviewSection.module.css";

const PreviewSection = ({ img, like }) => (
  <div className={Style.bigNFTSlider_box_right}>
    <div className={Style.bigNFTSlider_box_right_box}>
      <Image
        src={img}
        alt="NFT IMAGE"
        className={Style.bigNFTSlider_box_right_box_img}
      />

      <div className={Style.bigNFTSlider_box_right_box_like}>
        <AiFillHeart />
        <span>{like}</span>
      </div>
    </div>
  </div>
);

export default PreviewSection;
