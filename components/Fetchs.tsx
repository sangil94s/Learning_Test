'use client'

import axios from "axios"
import { useState, useEffect } from "react"

interface ITypes {
	id: number;
	userId: number;
	title: string;
	body: string
}
export default function Fetchs () {
	const [isData, setIsData] = useState<ITypes[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get<ITypes[]>('https://jsonplaceholder.typicode.com/posts');
				setIsData(res.data);
			} catch (error) {
				console.error("데이터 가져오기 오류:", error);
			}
		}
		fetchData();
	}, [])

	return (
		<>
		{isData && isData.map((item) => (
			<div key={item.id} className="flex flex-row justify-center">
				<h1 className="text-center py-2">{item.title}</h1>
				<p className="text-center text-red-600 py-2">{item.id}</p>
			</div>
		))}
		</>
	)
}