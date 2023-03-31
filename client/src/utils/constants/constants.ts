import { SortItem } from "../../components/sort/Sort.types";
import { SortPropertyEnum } from "../../redux/filter/types";
import { IArrItem } from "../../pages/homePage/components/createNft/CreateNft";

import logo from "../../assets/icons/create_nft/blockLogo.svg";

export const sortList: SortItem[] = [
  { name: "price (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "price (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "alphabetically (DESC)", sortProperty: SortPropertyEnum.NAME_DESC },
  { name: "alphabetically (ASC)", sortProperty: SortPropertyEnum.NAME_ASC },
];

export const arrItem: IArrItem[] = [
  {
    logo: logo,
    title: "Set up your wallet",
    text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
  },
  {
    logo: logo,
    title: "Add your NFTs",
    text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
  },
  {
    logo: logo,
    title: "List them for sale",
    text: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
  },
];

export const categories: string[] = [
  "All",
  "Premium",
  "Art",
  "Sports",
  "Entertainment",
  "Gaming",
  "Collectibles",
  "NFT for Good",
];
