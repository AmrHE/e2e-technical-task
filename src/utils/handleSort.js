export default function handleSort(value, setSortedItems, sortedItems) {
	if (value === '0-1') {
		console.log('1 executed');
		setSortedItems(sortedItems.sort((a, b) => a.price - b.price));
	}
	if (value === '1-0') {
		console.log('2 executed');
		setSortedItems(sortedItems.sort((a, b) => b.price - a.price));
	}
	if (value === 'a-z') {
		console.log('1 executed');
		setSortedItems(sortedItems.sort((a, b) => a.name.localeCompare(b.name)));
	}
	if (value === 'z-a') {
		console.log('2 executed');
		setSortedItems(sortedItems.sort((a, b) => b.name.localeCompare(a.name)));
	}
}
