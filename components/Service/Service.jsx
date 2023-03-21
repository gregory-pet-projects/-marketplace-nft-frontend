import ServiceBoxItem from "./components/ServiceBoxItem";
import Style from "./Service.module.css";

const serviceBoxesList = [
  {
    step: "Step 1",
    label: "Filter and Discover",
    text: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
    imgName: "service1",
    alt: 'Filter & Discover"',
  },
  {
    step: "Step 2",
    label: "Connect Wallet",
    text: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
    imgName: "service2",
    alt: "Connect Wallet",
  },
  {
    step: "Step 3",
    label: "Start trading",
    text: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
    imgName: "service3",
    alt: "Start trading",
  },
  {
    step: "Step 4",
    label: "Start trading",
    text: "Connect with wallet, discover, buy NTFs, sell your NFTs and earn money",
    imgName: "service4",
    alt: "Start trading",
  },
];

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        {serviceBoxesList.map((item, idx) => (
          <ServiceBoxItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Service;
