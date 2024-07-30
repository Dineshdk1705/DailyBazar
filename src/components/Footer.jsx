import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoInstagramAlt,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div id="Footer" className="border-t px-4 bg-gray-50">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between w-full mx-auto max-w-7xl py-10">
        <ul className="text-[#767676] mb-6 md:mb-0 md:w-1/5">
          <li className="font-bold text-lg">Buy</li>
          <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
            Registration
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Bidding & buying help
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Stores
          </li>
        </ul>

        <ul className="text-[#767676] mb-6 md:mb-0 md:w-1/5">
          <li className="font-bold text-lg">Sell</li>
          <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
            Start selling
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Quickstart guide
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Seller centre
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Business sellers
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Affiliates
          </li>
        </ul>

        <ul className="text-[#767676] mb-6 md:mb-0 md:w-1/5">
          <li className="font-bold text-lg">Stay Connected</li>
          <li className="flex items-center mt-2 py-1 text-xs hover:underline cursor-pointer">
            <BiLogoFacebookSquare size={18} />
            <div className="ml-1">Facebook</div>
          </li>
          <li className="flex items-center py-1 text-xs hover:underline cursor-pointer">
            <BiLogoInstagramAlt size={18} />
            <div className="ml-1">Instagram</div>
          </li>
          <li className="flex items-center py-1 text-xs hover:underline cursor-pointer">
            <BiLogoTwitter size={18} />
            <div className="ml-1">Twitter</div>
          </li>
        </ul>

        <ul className="text-[#767676] mb-6 md:mb-0 md:w-1/5">
          <li className="font-bold text-lg">About</li>
          <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
            Company info
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">News</li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Investors
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Careers
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Government relations
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Policies
          </li>
        </ul>

        <ul className="text-[#767676] mb-6 md:mb-0 md:w-1/5">
          <li className="font-bold text-lg">Help & contact</li>
          <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">
            Security Centre
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Contact us
          </li>
          <li className="py-1 text-xs hover:underline cursor-pointer">
            Money Back Guarantee
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
