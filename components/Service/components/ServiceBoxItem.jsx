import Style from "./ServiceBoxItem.module.css";
import images from "../../../img";
import Image from "next/image";

const ServiceBoxItem = ({ step, label, text, imgName, alt }) => (
  <div className={Style.service_box_item}>
    <Image src={images[imgName]} alt={alt} />
    <p className={Style.service_box_item_step}>
      <span>{step}</span>
    </p>
    <h3>{label}</h3>
    <p>{text}</p>
  </div>
);

export default ServiceBoxItem;
