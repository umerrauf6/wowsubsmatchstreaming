"use client";

import React, { useState } from "react";

const WatchLive = () => {
  const iframeStyles = {
    width: "100%", // Set the width to 100% of the parent container
    height: "56.25%", // Set the height to maintain a 16:9 aspect ratio
  };
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full text-black">
      <div className="tabs tabs-boxed xx-4 sm:mx-[2rem] xl:mx-[8rem] mt-2">
        <a
          className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          Star Sports Hindi
        </a>
        <a
          className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Star Sports English
        </a>
        <a
          className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          A Sports HD
        </a>
        <a
          className={`tab ${activeTab === 4 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(4)}
        >
          Sky Sports Cricket
        </a>
        <a
          className={`tab ${activeTab === 5 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(5)}
        >
          Ten Sports
        </a>
        <a
          className={`tab ${activeTab === 6 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(6)}
        >
          Willow Cricket
        </a>
        <a
          className={`tab ${activeTab === 7 ? "tab-active" : ""}`}
          onClick={() => handleTabClick(7)}
        >
          PTV Sports
        </a>
      </div>
      <div className="flex justify-center min-[550px]:mt-[1rem]">
        <div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          Double Click on Video if you are watching on phone
        </div>
      </div>
      {activeTab === 1 && (
        <div className="flex justify-center">
          <iframe
            src="https://crichdstreaming.xyz/embed2.php?id=starsp3"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 2 && (
        <div className="flex justify-center">
          <iframe
            src="https://crichdstreaming.xyz/embed2.php?id=starsp"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 3 && (
        <div className="flex justify-center">
          <iframe
            src="https://crichdstreaming.xyz/embed2.php?id=asports"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 4 && (
        <div className="flex justify-center">
          <iframe
            src="https://crichdstreaming.xyz/embed2.php?id=skysp2"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 5 && (
        <div className="flex justify-center">
          <iframe
            src="https://crichdstreaming.xyz/embed2.php?id=tensp"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 6 && (
        <div className="flex justify-center">
          <iframe
            src="https://crichdstreaming.xyz/embed2.php?id=willow"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}
      {activeTab === 7 && (
        <div className="flex justify-center">
          <iframe
            src="https://crichdstreaming.xyz/embed2.php?id=ptvsp"
            width="90%"
            height="540"
            frameBorder="0"
            allowFullScreen={true}
            className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
          ></iframe>
        </div>
      )}

      <div className="flex justify-center">
        <div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          You can support us if you want us here 👇 to create more websites like
          this
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-white text-center w-full capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          <div className="text-xl ">
            0062257217505 - United Bank Limited - Umer Rauf
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLive;
