import { FaWallet, FaMusic, FaVideo, FaImages } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Style from "./Filter.module.css";
import { useToggle } from "@/hooks/useToggle";
import FilterHeader from "./childComponents/FilterHeader/FilterHeader";
import FilterBoxItem from "./childComponents/FilterBoxItem/FilterBoxItem";

const Filter = () => {
  const [filter, toggleFilter] = useToggle(true);
  const [image, toggleImage] = useToggle(true);
  const [video, toggleVideo] = useToggle(true);
  const [music, toggleMusic] = useToggle(true);
  const [wallet, toggleWallet] = useToggle(true);
  const [verified, toggleVerified] = useToggle(true);

  const listButtons = [
    { title: "NFTs", onClick: () => undefined },
    { title: "Arts", onClick: () => undefined },
    { title: "Musics", onClick: () => undefined },
    { title: "Sports", onClick: () => undefined },
    { title: "Photography", onClick: () => undefined },
  ];

  const listFilterItems = [
    {
      selected: wallet,
      label: "10 ETH",
      icon: <FaWallet />,
      onClick: toggleWallet,
    },
    {
      selected: image,
      label: "Images",
      icon: <FaImages />,
      onClick: toggleImage,
    },
    {
      selected: video,
      label: "Videos",
      icon: <FaVideo />,
      onClick: toggleVideo,
    },
    {
      selected: music,
      label: "Musics",
      icon: <FaMusic />,
      onClick: toggleMusic,
    },
    {
      selected: verified,
      label: "Verified",
      icon: <MdVerified />,
      onClick: toggleVerified,
    },
  ];

  return (
    <div className={Style.filter}>
      <FilterHeader
        listButtons={listButtons}
        toggleFilter={toggleFilter}
        filter={filter}
      />

      {filter && (
        <div className={Style.filter_box_items}>
          {listFilterItems.map((item, idx) => (
            <FilterBoxItem {...item} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
