import React from "react";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-black w-[400px] h-[650px] rounded-3xl">
        <div className="flex justify-end  text-white pl-5 pr-5 pt-7 text-7xl">
          0
        </div>
        <div className="grid grid-cols-4 gap-5 pl-5 pr-5 pt-7">
          <button class="text-black bg-[#A5A5A5] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            AC
          </button>
          <button class="text-black bg-[#A5A5A5] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            +/-
          </button>
          <button class="text-black bg-[#A5A5A5] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            %
          </button>
          <button class="text-white bg-[#F1A33B] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            ÷
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            7
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            8
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            9
          </button>
          <button class="text-white bg-[#F1A33B] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            x
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            4
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            5
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            6
          </button>
          <button class="text-white bg-[#F1A33B] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            -
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            1
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            2
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            3
          </button>
          <button class="text-white bg-[#F1A33B] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            +
          </button>
          <button
            class="flex items-center pl-9 col-span-2 text-white bg-[#333333] w-full h-[80px] rounded-full text-2xl font-semibold"
            id="long"
          >
            0
          </button>
          <button class="text-white bg-[#333333] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            .
          </button>
          <button class="text-white bg-[#F1A33B] w-[80px] h-[80px] rounded-full text-2xl font-semibold">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
