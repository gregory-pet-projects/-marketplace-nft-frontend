import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Style from "./NFTCard.module.css";
import images from "../../img";
import { useToggle } from "@/hooks/useToggle";

const NFTCard = ({}) => {
  const CardArray = [
    {
      image: images.nft_image_1,
      name: "name 1",
      tokenId: "tokenid",
      price: 10,
    },
    {
      image: images.nft_image_2,
      name: "name 1",
      tokenId: "tokenid",
      price: 10,
    },
    {
      image: images.nft_image_3,
      name: "name 1",
      tokenId: "tokenid",
      price: 10,
    },
    {
      image: images.nft_image_1,
      name: "name 1",
      tokenId: "tokenid",
      price: 10,
    },
  ];

  const [like, toggleLike] = useToggle(true);

  const clickLikeHandler = (e) => {
    e.preventDefault();
    toggleLike();
  };

  return (
    <div className={Style.NFTCard}>
      {CardArray.map(({ image, name, tokenId, price }, idx) => (
        <Link
          key={`${name}-${idx}`}
          href={{
            pathname: "/NFT-details",
            query: { image, name, tokenId, price },
          }}
        >
          <div className={Style.NFTCard_box} key={idx}>
            <div className={Style.NFTCard_box_img}>
              <Image
                src={image}
                alt="NFT images"
                width={600}
                height={600}
                className={Style.NFTCard_box_img_img}
              />
            </div>

            <div className={Style.NFTCard_box_update}>
              <div className={Style.NFTCard_box_update_left}>
                <div
                  className={Style.NFTCard_box_update_left_like}
                  onClick={clickLikeHandler}
                >
                  {like ? (
                    <AiOutlineHeart />
                  ) : (
                    <AiFillHeart
                      className={Style.NFTCard_box_update_left_like_icon}
                    />
                  )}
                  22
                </div>
              </div>

              <div className={Style.NFTCard_box_update_right}>
                <div className={Style.NFTCard_box_update_right_info}>
                  <small>Remaining time</small>
                  <p>3h : 15m : 20s</p>
                </div>
              </div>
            </div>

            <div className={Style.NFTCard_box_update_details}>
              <div className={Style.NFTCard_box_update_details_price}>
                <div className={Style.NFTCard_box_update_details_price_box}>
                  <h4>
                    {name} #{tokenId}
                  </h4>

                  <div
                    className={Style.NFTCard_box_update_details_price_box_box}
                  >
                    <div
                      className={Style.NFTCard_box_update_details_price_box_bid}
                    >
                      <small>Current Bid</small>
                      <p>{price}ETH</p>
                    </div>
                    <div
                      className={
                        Style.NFTCard_box_update_details_price_box_stock
                      }
                    >
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Style.NFTCard_box_update_details_category}>
                <BsImages />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NFTCard;
