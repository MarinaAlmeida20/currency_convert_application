import React from "react";

function converterNames() {
  return (
    <section className="pt-14 bg-white pb-14 px-6 shadow">
      <h1 className="text-black text-2xl mb-10 font-semibold">
        Currency Exchange Rate
      </h1>

      <form>
        <div className="flex flex-row mb-6 gap-9 items-center">
          <div className="flex-1">
            <label className="font-bold text-sm mb-3 block" htmlFor="text">
              Amount
            </label>
            <input
              className=" focus:outline-none focus:right-1 focus:ring-green-500 focus:border-green-500 
       border-2 rounded-sm w-full py-2 pl-3 pr-10"
              type="text"
              value=""
              size="lg"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex-1">
            <label className="font-bold text-sm mb-3 block" htmlFor="text">
              Amount
            </label>
            <input
              className=" focus:outline-none focus:right-1 focus:ring-green-500 focus:border-green-500 
       border-2 rounded-sm w-full py-2 pl-3 pr-10"
              type="text"
              value=""
              size="lg"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex-1">
            <label className="font-bold text-sm mb-3 block" htmlFor="text">
              Amount
            </label>
            <input
              className=" focus:outline-none focus:right-1 focus:ring-green-500 focus:border-green-500 
       border-2 rounded-sm w-full py-2 pl-3 pr-10"
              type="text"
              value=""
              size="lg"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex-1">
            <label className="font-bold text-sm mb-3 block" htmlFor="text">
              Amount
            </label>
            <input
              className=" focus:outline-none focus:right-1 focus:ring-green-500 focus:border-green-500 
       border-2 rounded-sm w-full py-2 pl-3 pr-10"
              type="text"
              value=""
              size="lg"
              placeholder="Enter amount"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
export default converterNames;
