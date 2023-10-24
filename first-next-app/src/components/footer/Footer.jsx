import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
//import { UilInstagram } from "@iconscout/react-unicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={styles.container}>
      Parth. All rights reserved
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
        ></Image>
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
        ></Image>
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
        ></Image>
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
