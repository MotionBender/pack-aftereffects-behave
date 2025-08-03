type ProjectFeaturesPromoPackProps = {
  id?: string;
};

export default function ProjectFeaturesPromoPack({
  id = "projectFeaturesPromoPack",
}: ProjectFeaturesPromoPackProps) {
  return (
    <div className="w-full md:w-[550px] px-3 mb-5" id={`${id}`}>
      <div className="flex flex-col bg-degrade-venda p-4 rounded-xl">
        <h1 className="font-extrabold text-2xl text-white font-montserrat  md:text-6xl">
          Project Features
        </h1>
        <p className="text-white text-sm mt-5 md:text-base">
          - <span className="font-bold text-white">6</span> individual ".aep"
          files
        </p>
        <p className="text-white text-sm my-1 md:text-base">
          - Completely editable
        </p>
        <p className="text-white text-sm my-1 md:text-base">
          - No plug-ins needed
        </p>
        <p className="text-white text-sm my-1 md:text-base">
          - Assets Included
        </p>
        <p className="text-white text-sm my-1 md:text-base">
          - Use it in your work
        </p>
        <p className="text-white text-sm my-1 md:text-base">
          - Compatible with Windows and MacOS
        </p>
        <p className="text-white text-sm my-1 md:text-base">
          - Amazing Time Saver
        </p>
        <div className="flex items-center justify-center mt-5">
          <span className="text-[10px] text-white md:text-[40px]">$</span>
          <h1 className="text-3xl text-white font-bold md:text-7xl ">5</h1>
        </div>
      </div>
    </div>
  );
}
