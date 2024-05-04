import React from "react";

const ProductTable = () => {
    return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label for="checkbox-all" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[14rem]">
                            Product
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[10rem]">
                            Category
                            <svg
                                className="h-4 w-4 ml-1 inline-block"
                                fill="currentColor"
                                viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                />
                            </svg>
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[7rem]">
                            Brand
                            <svg
                                className="h-4 w-4 ml-1 inline-block"
                                fill="currentColor"
                                viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                />
                            </svg>
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[6rem]">
                            Price
                            <svg
                                className="h-4 w-4 ml-1 inline-block"
                                fill="currentColor"
                                viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                />
                            </svg>
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[7rem]">
                            Stock
                            <svg
                                className="h-4 w-4 ml-1 inline-block"
                                fill="currentColor"
                                viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                />
                            </svg>
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[12rem]">
                            Total Sales
                            <svg
                                className="h-4 w-4 ml-1 inline-block"
                                fill="currentColor"
                                viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                />
                            </svg>
                        </th>
                        <th scope="col" className="px-4 py-3 min-w-[7rem]">
                            Status
                            <svg
                                className="h-4 w-4 ml-1 inline-block"
                                fill="currentColor"
                                viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                                />
                            </svg>
                        </th>
                        <th scope="col" className="px-4 py-3">
                            <span className="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    onclick="event.stopPropagation()"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="checkbox-table-search-1"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                        >
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                alt="iMac Front Image"
                                className="h-8 w-auto mr-3"
                            />
                            Apple iMac 27&#34;
                        </th>
                        <td className="px-4 py-3">PC</td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            $2999
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            200
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            245
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                Active
                            </span>
                        </td>
                        <td className="px-4 py-3">
                            <button
                                id="apple-imac-27-dropdown-button"
                                type="button"
                                data-dropdown-toggle="apple-imac-27-dropdown"
                                className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                            <div
                                id="apple-imac-27-dropdown"
                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="apple-imac-27-dropdown-button"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Show
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Edit
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    onclick="event.stopPropagation()"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="checkbox-table-search-1"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                        >
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                alt="iMac Front Image"
                                className="h-8 w-auto mr-3"
                            />
                            Apple iMac 20&#34;
                        </th>
                        <td className="px-4 py-3">PC</td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            $1499
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1237
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2000
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                            <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                Active
                            </span>
                        </td>
                        <td className="px-4 py-3">
                            <button
                                id="apple-imac-20-dropdown-button"
                                type="button"
                                data-dropdown-toggle="apple-imac-20-dropdown"
                                className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                            <div
                                id="apple-imac-20-dropdown"
                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="apple-imac-20-dropdown-button"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Show
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Edit
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    onclick="event.stopPropagation()"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="checkbox-table-search-1"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                        >
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png"
                                alt="iMac Front Image"
                                className="h-8 w-auto mr-3"
                            />
                            Apple iPhone 14
                        </th>
                        <td className="px-4 py-3">Phone</td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            $999
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            300
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            466
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Inactive
                            </span>
                        </td>
                        <td className="px-4 py-3">
                            <button
                                id="apple-iphone-14-dropdown-button"
                                type="button"
                                data-dropdown-toggle="apple-iphone-14-dropdown"
                                className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                            <div
                                id="apple-iphone-14-dropdown"
                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="apple-iphone-14-dropdown-button"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Show
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Edit
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    onclick="event.stopPropagation()"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="checkbox-table-search-1"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                        >
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-ipad-air.png"
                                alt="iMac Front Image"
                                className="h-8 w-auto mr-3"
                            />
                            Apple iPad Air
                        </th>
                        <td className="px-4 py-3">Tablet</td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            $1199
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            4576
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            90
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                Inactive
                            </span>
                        </td>
                        <td className="px-4 py-3">
                            <button
                                id="apple-ipad-air-dropdown-button"
                                type="button"
                                data-dropdown-toggle="apple-ipad-air-dropdown"
                                className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                            <div
                                id="apple-ipad-air-dropdown"
                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="apple-ipad-air-dropdown-button"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Show
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Edit
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td className="px-4 py-3 w-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-table-search-1"
                                    type="checkbox"
                                    onclick="event.stopPropagation()"
                                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="checkbox-table-search-1"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </td>
                        <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center"
                        >
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                                alt="iMac Front Image"
                                className="h-8 w-auto mr-3"
                            />
                            Xbox Series S
                        </th>
                        <td className="px-4 py-3">Gaming/Console</td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            $299
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            56
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            3087
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                                Pending
                            </span>
                        </td>
                        <td className="px-4 py-3">
                            <button
                                id="xbox-series-s-dropdown-button"
                                type="button"
                                data-dropdown-toggle="xbox-series-s-dropdown"
                                className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>
                            <div
                                id="xbox-series-s-dropdown"
                                className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                            >
                                <ul
                                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="xbox-series-s-dropdown-button"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Show
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Edit
                                        </a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a
                                        href="#"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="flex justify-center m-4 -space-x-px text-base h-10">
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default ProductTable;
