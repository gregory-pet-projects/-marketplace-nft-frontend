import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import { useCallback, useState } from "react";
import Bidding from "./components/Bidding/Bidding";
import SliderButtons from "./components/SliderButtons/SliderButtons";
import MainInfo from "./components/MainInfo/MainInfo";
import PreviewSection from "./components/PreviewSection/PreviewSection";
const sliderData = [
  {
    title: "Hello NFT",
    id: 1,
    name: "Ann Marie",
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
    name: "Alex Smith",
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
    name: "Gregory Petrov",
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
    name: "Mikle John",
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

  const increment = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const decrement = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  const currentSlide = sliderData[idNumber];

  const timerItems = [
    { time: currentSlide.time.days, title: "Days" },
    { time: currentSlide.time.hours, title: "Hours" },
    { time: currentSlide.time.minutes, title: "Minutes" },
    { time: currentSlide.time.seconds, title: "Seconds" },
  ];
  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <MainInfo
          img={currentSlide.image}
          creatorName={currentSlide.name}
          collection={currentSlide.collection}
          title={currentSlide.title}
        />

        <Bidding
          timerItems={timerItems}
          sliderPriceETH={currentSlide.price}
          sliderPriceUSD={"221,23"}
          handleClickPlace={() => undefined}
          handleClickView={() => undefined}
        />

        <SliderButtons decrement={decrement} increment={increment} />
      </div>
      <PreviewSection img={currentSlide.nftImage} like={currentSlide.like} />
    </div>
  );
};
export default BigNFTSlider;
