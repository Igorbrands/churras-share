export default function Guest() {
	return (
		<div className="inline-flex justify-between items-center border-b border-yellow-200 pb-2 mb-2">
			<div className="inline-flex items-center">
				<input
					type="checkbox"
					className="appearance-none ring-0 border-2 border-yellow-300 checked:bg-yellow-100 hover:bg-yellow-100 focus:ring-0 text-yellow-200 mr-5 rounded-full transition ease-in cursor-pointer"
				/>
				<span>João</span>
			</div>
			<span>R$ 20,00</span>
		</div>
	);
}
