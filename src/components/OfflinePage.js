const OfflinePage = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex flex-col justify-center items-center">
        <h1 className="text-[#ff4500] drop-shadow-textSmall font-mono text-[2.5rem] m-8 text-center">
          🔴 Ooops!! You seems to be offline.
        </h1>
        <h2 className="text-[#ff4500] drop-shadow-textSmall font-mono text-[1.8rem] m-8 text-center">
          Please check your internet connection.
        </h2>
        <h2 className="text-[#ff4500] drop-shadow-textSmall font-mono text-[1.8rem] m-8 text-center">
          This page will be restored automatically once your internet will be
          back.
        </h2>
      </div>
    </>
  );
};

export default OfflinePage;
