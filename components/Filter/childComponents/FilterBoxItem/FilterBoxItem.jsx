import clsx from "clsx";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Style from "./FilterBoxItem.module.css";

const FilterBoxItem = ({ selected, label, icon, onClick }) => (
  <div className={Style.filter_box_items_box}>
    <div
      className={clsx(
        selected
          ? Style.filter_box_items_box_item
          : Style.filter_box_items_box_item_trans
      )}
      onClick={onClick}
    >
      {icon} <small>{label}</small>
      {selected ? <AiFillCloseCircle /> : <TiTick />}
    </div>
  </div>
);

export default FilterBoxItem;
