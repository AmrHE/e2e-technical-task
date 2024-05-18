import { useState } from 'react';
import Head from 'next/head';
import ItemsList from '../src/components/home/ItemsList';
import SearchBar from '../src/components/search/SearchBar';

export default function Home() {
	const [searchQuery, setSearchQuery] = useState(null);

	return (
		<div className="py-10 bg-gray-100">
			<Head>
				<title>E2E Technical Task</title>
				<meta
					name="description"
					content="Full stack developer E2E technical task"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="container mx-auto">
				<SearchBar setSearchQuery={setSearchQuery} />

				<ItemsList searchQuery={searchQuery} />
			</div>
		</div>
	);
}
