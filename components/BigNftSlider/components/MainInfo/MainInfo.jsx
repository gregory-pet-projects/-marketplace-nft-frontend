import Image from "next/image";
import { AiFillFire } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import Style from "./MainInfo.module.css";

const MainInfo = ({ img, creatorName, collection, title }) => (
  <div className={Style.bigNFTSlider_box_left}>
    <h2>{title}</h2>
    <div className={Style.bigNFTSlider_box_left_creator}>
      <div className={Style.bigNFTSlider_box_left_creator_profile}>
        <Image src={img} alt={"Profile image"} />
        <div className={Style.bigNFTSlider_box_left_creator_profile_image}>
          <p>Creator</p>
          <h4>
            {creatorName}
            <span>
              <MdVerified />
            </span>
          </h4>
        </div>
      </div>

      <div className={Style.bigNFTSlider_box_left_creator_collection}>
        <AiFillFire
          className={Style.bigNFTSlider_box_left_creator_collection_icon}
        />

        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
          Collection
        </div>
        <h4>{collection}</h4>
      </div>
    </div>
  </div>
);

export default MainInfo;
