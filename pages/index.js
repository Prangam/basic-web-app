import React from "react";
import InputSearch from "./components/InputSearch";
import Filter from "./components/Filter";
import ConfigurationButton from "./components/ConfigurationButton";
import GroupButton from "./components/GroupButton";
import ProductTable from "./components/ProductTable";

const Home = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="border-b dark:border-gray-700 mx-4">
                        <div className="flex items-center justify-between space-x-4 pt-3">
                            <div className="flex-1 flex items-center space-x-3">
                                <h5 className="dark:text-white font-semibold">
                                    All products
                                </h5>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
                            <div className="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
                                <InputSearch />
                                <div className="flex items-center space-x-4">
                                    <Filter />
                                    <ConfigurationButton />
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <GroupButton />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <ProductTable />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
