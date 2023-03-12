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
      {helpCenter.map((el, i) => (
        <div className={Style.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
