'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import ItemsList from '../src/components/home/ItemsList';
import SearchBar from '../src/components/search/SearchBar';
import { useCartContext } from '../src/context/cart';
import ShoppingCart from '../src/components/home/ShoppingCart';
import Sorting from '../src/components/home/Sorting';
import items from '../src/data/items';

export default function Home() {
	const [searchQuery, setSearchQuery] = useState(null);
	const [filteredItems, setFilteredItems] = useState(items.items);
	const [searchResults, setSearchResults] = useState(items.items);

	const { cartItems } = useCartContext();
	console.log({ searchResults });
	console.log({ filteredItems });

	return (
		<div className="py-10 bg-gray-100">
			<Head>
				<title>Chatbot trail session</title>
				<meta
					name="description"
					content="Full stack developer E2E technical task"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="mx-0">
				<SearchBar setSearchQuery={setSearchQuery} />

				<ShoppingCart cartItems={cartItems} />

				<main className="mx-auto mt-5 max-w-screen-2xl">
					<div className="flex flex-col md:flex-row">
						<div className="w-full px-5 mb-5 md:w-3/12">
							<Sorting
								searchResults={searchResults}
								setFilteredItems={setFilteredItems}
							/>
						</div>
						<div className="w-full px-5 mb-5 md:w-9/12">
							<ItemsList
								searchQuery={searchQuery}
								filteredItems={filteredItems}
								searchResults={searchResults}
								setSearchResults={setSearchResults}
								setFilteredItems={setFilteredItems}
							/>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
