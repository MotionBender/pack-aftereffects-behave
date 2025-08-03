export function Direitos() {
  const ano = new Date().getFullYear();
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center text-center max-w-500 mx-auto p-5">
        <p className="text-gray-500">
          MOTION BLENDER© {ano} All Rights Reserved
        </p>
      </div>
    </div>
  );
}
