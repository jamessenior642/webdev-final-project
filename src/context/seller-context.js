import React, { useState } from "react";
import { useProfile } from "./profile-context";
import { useEffect } from "react";


const SellerContext = ({sellercontent, nonsellercontent}) => {
  const { checkSeller } = useProfile();
  const [isSeller, setIsSeller] = useState(false);
  const check = async () => {
    try {
      const isSeller = await checkSeller();
      setIsSeller(isSeller);
    } catch (e) {
      console.log(e)
      setIsSeller(false);
    }
  };
  useEffect(() => {
    check();
  }, []);
  if (isSeller) {
    return sellercontent;
  } else {
    return nonsellercontent;
  }
}
export default SellerContext;
