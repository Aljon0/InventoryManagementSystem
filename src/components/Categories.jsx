import React from "react";
import { PlusIcon, PencilIcon, TrashIcon } from "lucide-react";

const Categories = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#141301]">Categories</h1>
        <button className="flex items-center bg-[#6B2B06] text-white px-4 py-2 rounded-md hover:bg-[#6B2B06]/90">
          <PlusIcon size={16} className="mr-2" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-[#6B2B06]"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Category {item}</h3>
              <div className="flex items-center space-x-2">
                <button className="text-[#6B2B06] hover:text-[#6B2B06]/80">
                  <PencilIcon size={16} />
                </button>
                <button className="text-[#B80C09] hover:text-[#B80C09]/80">
                  <TrashIcon size={16} />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">12 products</p>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Value</p>
                <p className="font-medium">
                  ${(Math.random() * 10000).toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Low Stock</p>
                <p className="font-medium">{Math.floor(Math.random() * 5)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Out of Stock</p>
                <p className="font-medium">{Math.floor(Math.random() * 3)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
