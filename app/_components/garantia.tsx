export function Garantia() {
  return (
    <div className="w-full py-15 bg-white">
      <div className="flex flex-col items-center text-center max-w-500 mx-auto p-5">
        <img
          src="/images/selo-garantia.webp"
          alt="Cartões aceitos"
          className="w-40 h-auto mx-auto"
        />
        <div className="my-5">
          <h3 className="text-4xl font-bold cor-azul-site">
            100% of your money back
          </h3>
          <p className="text-gray-500">
            If the product does not work or is not to your liking, we will give
            you a full refund and cancel the purchase.
          </p>
        </div>
      </div>
    </div>
  );
}
