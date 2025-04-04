import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="williamsanchez.8055@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+1 718-689-0438" Image={FiPhone} />
      <SingleInfo text="Rigdefield Park, New Jersey" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
