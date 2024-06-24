import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/zekooo0/">
              <Image
                src={"/linkedin.svg"}
                alt="linkedin icon"
                width={15}
                height={15}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/zekooo0">
              <Image
                src={"/github.svg"}
                alt="linkedin icon"
                width={15}
                height={15}
              />
            </a>
          </li>
          <li>
            <a href="https://x.com/dev_za">
              <Image
                src={"/x.svg"}
                alt="linkedin icon"
                width={15}
                height={15}
              />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/ahmedZ0k/">
              <Image
                src={"/leetcode.svg"}
                alt="linkedin icon"
                width={15}
                height={15}
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a href="/">
          <button className="px-4 py-2"> Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
