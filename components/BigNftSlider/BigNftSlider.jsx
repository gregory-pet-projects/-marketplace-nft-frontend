import Style from "./BigNFTSlider.module.css";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines } from "react-icons/tb";
import images from "../../img";
import { useState } from "react";
const sliderData = [
  {
    title: "Hello NFT",
    id: 1,
    name: "Daulat Hussain",
    collection: "GYm",
    price: "00664 ETH",
    like: 243,
    image: images.user1,
    nftImage: images.nft_image_1,
    time: {
      days: 21,
      hours: 40,
      minutes: 81,
      seconds: 15,
    },
  },
  {
    title: "Buddy NFT",
    id: 2,
    name: "Shoaib Hussain",
    collection: "Home",
    price: "0000004 ETH",
    like: 243,
    image: images.user2,
    nftImage: images.nft_image_2,
    time: {
      days: 77,
      hours: 11,
      minutes: 21,
      seconds: 45,
    },
  },
  {
    title: "Gym NFT",
    id: 3,
    name: "Raayan Hussain",
    collection: "GYm",
    price: "0000064 ETH",
    like: 243,
    image: images.user3,
    nftImage: images.nft_image_3,
    time: {
      days: 37,
      hours: 20,
      minutes: 11,
      seconds: 55,
    },
  },
  {
    title: "Home NFT",
    id: 4,
    name: "Raayan Hussain",
    collection: "GYm",
    price: "4664 ETH",
    like: 243,
    image: images.user4,
    nftImage: images.nft_image_1,
    time: {
      days: 87,
      hours: 29,
      minutes: 10,
      seconds: 15,
    },
  },
];
const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(1);
  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}></div>
        <div className={Style.bigNFTSlider_box_right}></div>
      </div>
    </div>
  );
};
export default BigNFTSlider;
