import { FaAngleDown, FaAngleUp, FaFilter } from "react-icons/fa";
import Style from "./FilterHeader.module.css";

const FilterHeader = ({ listButtons, toggleFilter, filter }) => (
  <div className={Style.filter_box}>
    <div className={Style.filter_box_left}>
      {listButtons.map(({ title, onClick }, idx) => (
        <button onClick={onClick}>{title}</button>
      ))}
    </div>

    <div className={Style.filter_box_right}>
      <div className={Style.filter_box_right_box} onClick={toggleFilter}>
        <FaFilter />
        <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
      </div>
    </div>
  </div>
);

export default FilterHeader;
