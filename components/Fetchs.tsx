interface ITypes {
	id: number;
	userId: number;
	title: string;
	body: string
}

const fetchPosts = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store"
})
return res.json()
}

const Fetchs = async () => {
	const data = await fetchPosts()
	return (
		<>
		{data.map((item:ITypes) => (
			<div key={item.id} className="flex flex-row justify-center">
			<h1 className="text-center py-2">{item.title}</h1>
			<p className="text-center text-red-600 py-2">{item.id}</p>
		</div>
		))}
		</>
	)
}
export default Fetchs