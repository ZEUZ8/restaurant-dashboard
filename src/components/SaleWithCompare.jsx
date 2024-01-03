import axios from "axios";
import { useMemo } from "react";

const SaleWithCompare = ({ data, maxPrice, i }) => {
  const colors = useMemo(
    () => ["#0084F7", "#F7A500", "#F77300", "#F70031", "#9410A5", "#EF7075"],
    []
  );
  return (
    <>
      <div className="grid grid-cols-8 items-center  mt-2">
        <div className="text-base col-span-2">{data.by}</div>
        <div className="col-span-6  flex items-center max-w-full">
          <div
            className={`h-4 mx-5 rounded-sm text-center text-sm `}
            style={{
              width: `${(data?.profit / maxPrice) * 70}%`,
              backgroundColor: colors[i],
            }}
          >{data.profit}{" "}<span>AED</span></div>
          <p className="font-extralight">{data.perc}%</p>
        </div>
      </div>
    </>
  );
};

export default SaleWithCompare;
