import { GoDotFill } from "react-icons/go";

type ProjectFeaturesProps = {
  id?: string;
};

export default function ProjectFeatures({
  id = "ProjectFeatures",
}: ProjectFeaturesProps) {
  return (
    <div className="my-5" id={`${id}`}>
      <div className="flex flex-col bg-degrade-venda p-5 rounded-xl">
        <h2 className="font-extrabold text-white font-montserrat text-5xl md:text-6xl akira">
          INCLUDED
        </h2>
        <p className="text-white mt-5">
          - <span className="font-bold text-white">6</span> individual ".aep"
          files
        </p>
        <p className="text-white my-1 font-bold text-[20px]">- 100% editable</p>
        <p className="text-white my-1">- No plug-ins needed</p>
        <p className="text-white my-1">- Main assets Included</p>
        <p className="text-white my-1">- Use it in your work</p>
        <p className="text-white my-1">- Amazing Time Saver</p>
        <p className="text-white my-1">- Windows|MacOS</p>
        <div className="flex items-center justify-center gap-20 mt-[-30px] md:mt-5 md:gap-40 ">
          <div className="flex">
            <GoDotFill className="text-2xl md:text-4xl text-white " />
            <GoDotFill className="text-2xl md:text-4xl text-white " />
            <GoDotFill className="text-2xl md:text-4xl text-white " />
          </div>
          <div className="flex">
            <span className=" text-white font-bold text-[30px] mt-2 akira">
              $
            </span>
            <p className=" text-white font-bold text-9xl akira">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
