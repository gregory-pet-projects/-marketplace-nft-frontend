import Style from "./Discover.module.css";
import Link from "next/link";

const discover = [
  {
    name: "Collection",
    link: "collection",
  },
  {
    name: "Search",
    link: "searchPage",
  },
  {
    name: "Author Profile",
    link: "author",
  },
  {
    name: "NFT Details",
    link: "NFT-details",
  },
  {
    name: "Account Setting",
    link: "account",
  },
  {
    name: "Upload NFT",
    link: "uploadNFT",
  },
  {
    name: "Connect Wallet",
    link: "connectWallet",
  },
  {
    name: "Blog",
    link: "blog",
  },
];
const Discover = () => {
  return (
    <div>
      {discover.map(({ link, name }, idx) => (
        <div key={idx + 1} className={Style.discover}>
          <Link href={{ pathname: `${link}` }}>{name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
