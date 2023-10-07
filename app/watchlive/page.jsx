import React from "react";

const WatchLive = () => {
  const iframeStyles = {
    width: "100%", // Set the width to 100% of the parent container
    height: "56.25%", // Set the height to maintain a 16:9 aspect ratio
  };
  return (
    <div className="w-full text-black">
      <div className="flex justify-center min-[550px]:mt-[1rem]">
        <div className="bg-white text-center capitalize min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]">
          Double Click on Video if you are watching on phone
        </div>
      </div>
      <div className=" flex  justify-center ">
        <iframe
          src="https://crichdstreaming.xyz/embed2.php?id=starsp3"
          width="90%"
          height="540"
          frameborder="0"
          allowFullScreen={true}
          className="aspect-video object-fill w-[100%] h-[56.25%] min-[550px]:w-[90%] sm:w-[80%] min-[1200px]:w-[70%] xl:w-[60%]"
        ></iframe>
      </div>
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
