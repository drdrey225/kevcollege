import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import DashSidebar from "./DashSidebar";

const Sidebarbtn = () => {
  const [showModalTopLeft, setShowModalTopLeft] = useState(false);

  return (
    <div>
      <div>
        {/* <!--Button trigger top left modal--> */}
        <TERipple rippleColor="white">
          <button
            type="button"
            className="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out "
            onClick={() => setShowModalTopLeft(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </TERipple>
        <TEModal show={showModalTopLeft} setShow={setShowModalTopLeft}>
          <TEModalDialog
            position="top-left"
            theme={{
              show: "translate-x-0 opacity-100",
              hidden: "translate-x-[-100%] opacity-0",
            }}
          >
            <TEModalContent>
              {/* <!--Modal body--> */}
              <TEModalBody>
                <DashSidebar />
              </TEModalBody>
            </TEModalContent>
          </TEModalDialog>
        </TEModal>
      </div>
    </div>
  );
};

export default Sidebarbtn;
