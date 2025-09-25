import { FaCheck } from "react-icons/fa";
import { ButtonComprar } from "../_components/button-comprar";

export function EverythingYouGet() {
  return (
    <div className="w-full bg-white items-center py-10 px-10 mt-10">
      <h2 className="text-[cor-azul-site] text-3xl font-bold mb-5 text-center">
        Everything you get in our pack
      </h2>
      <div className="max-w-[1240px] mx-auto gap-8 mb-8 grid md:grid-cols-2">
        <div>
          <p className="flex text-gray-600 gap-2">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <FaCheck className="text-3xl text-green-500" />
            </span>
            Fully editable After Effects (.aep) projects (great for social
            media, presentations, and more)
          </p>
        </div>
        <div>
          <p className="flex text-gray-600 gap-2 items-center">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <FaCheck className="text-3xl text-green-500" />
            </span>
            Files are organized and easy to edit, even for beginners.
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto gap-8 grid md:grid-cols-2 mb-10">
        <div>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <FaCheck className="text-3xl text-green-500" />
            </span>
            Compatible with all recent versions of After Effects.
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2 text-gray-600">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              <FaCheck className="text-3xl text-green-500" />
            </span>
            Use it for your work and personal projects
          </p>
        </div>
      </div>
      <div className="text-center">
        <ButtonComprar href="/">Buy Now</ButtonComprar>
      </div>
    </div>
  );
}
