import Style from "./HelpCenter.module.css";
import Link from "next/link";

const helpCenter = [
  {
    name: "About",
    link: "aboutus",
  },
  {
    name: "Contact Us",
    link: "contactus",
  },
  {
    name: "Sign Up",
    link: "signUp",
  },
  {
    name: "LogIn",
    link: "login",
  },
  {
    name: "Subscription",
    link: "subscription",
  },
];
const HelpCenter = () => {
  return (
    <div className={Style.box}>
      {helpCenter.map(({ link, name }, idx) => (
        <div className={Style.helpCenter} key={idx + 1}>
          <Link href={{ pathname: `${link}` }}>{name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
