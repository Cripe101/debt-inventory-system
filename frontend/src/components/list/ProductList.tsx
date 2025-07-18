import { useState, useMemo, useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PRODUCTS_PER_PAGE = 4;

interface IProduct {
  label: string;
  img: string;
  price: number;
}

const ProductList = () => {
  const metaData: IProduct[] = [
    {
      label: "Chilimansi",
      img: "https://res.cloudinary.com/djumpkifp/image/upload/v1752636705/chilimansi_Pancit_Canton_hxldk0.png",
      price: 20,
    },
    {
      label: "Extra Hot Chili",
      img: "https://res.cloudinary.com/djumpkifp/image/upload/v1752632197/extrahotchili_Pancit_Canton_mwnvq2.png",
      price: 20,
    },
    {
      label: "Extra Hot Chili",
      img: "https://res.cloudinary.com/djumpkifp/image/upload/v1752632197/extrahotchili_Pancit_Canton_mwnvq2.png",
      price: 20,
    },
    {
      label: "Extra Hot Chili",
      img: "https://res.cloudinary.com/djumpkifp/image/upload/v1752632197/extrahotchili_Pancit_Canton_mwnvq2.png",
      price: 20,
    },
    {
      label: "Extra Hot Chili",
      img: "https://res.cloudinary.com/djumpkifp/image/upload/v1752632197/extrahotchili_Pancit_Canton_mwnvq2.png",
      price: 20,
    },
    {
      label: "Extra Hot Chili",
      img: "https://res.cloudinary.com/djumpkifp/image/upload/v1752632197/extrahotchili_Pancit_Canton_mwnvq2.png",
      price: 20,
    },

    // Add more as needed...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter products by searchTerm
  const filteredProducts = useMemo(() => {
    return metaData.filter((prod) =>
      prod.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, metaData]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Reset to page 1 when searchTerm changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className="grid gap-5 w-full mt-2 px-2">
      <button
        onClick={() => {
          navigate("/home");
        }}
        className="border border-black/50 w-20 flex items-center gap-1 bg-white/35 p-2 rounded-2xl"
      >
        <FiHome />
        <p className="text-sm">Home</p>
      </button>
      <div className="flex flex-col justify-between bg-white/35 h-[550px] rounded-2xl p-5 overflow-auto no-scrollbar">
        <span>
          <section className="mb-5 flex items-center justify-between w-full">
            <h1 className="font-sans font-bold text-sm">Product List</h1>
            <input
              type="search"
              placeholder="Q Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-white/65 outline-none bg-white/35 py-1 px-2 w-32 rounded-xl font-sans"
            />
          </section>
          <section className="grid grid-cols-2 gap-3">
            {paginatedProducts.length === 0 ? (
              <p className="text-center col-span-2 text-sm text-slate-600 font-sans">
                No products found.
              </p>
            ) : (
              paginatedProducts.map((prod: IProduct, index: number) => (
                <h1
                  key={index}
                  className="grid justify-center font-sans bg-white/35 backdrop-blur-md p-2 rounded-2xl"
                >
                  <p className="text-xs text-center font-semibold">
                    {prod.label}
                  </p>
                  <img className="" src={prod.img} alt="Loading..." />
                  <p className="text-center text-sm font-bold font-serif">
                    ₱ {prod.price}.00
                  </p>
                </h1>
              ))
            )}
          </section>
        </span>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="border border-white text-xs px-3 py-2 rounded-lg bg-blue-600/90 text-white disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-xs font-semibold font-sans">
              {currentPage} - {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="border border-white text-xs px-3 py-2 rounded-lg bg-blue-600/90 text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
