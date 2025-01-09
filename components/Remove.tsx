// 삭제 테스트
'use client'

import axios from "axios";

const DeletePostComponent = () => {

	const handleDelete = async () => {
	  try {
		const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
	  } catch (error) {
		console.error('삭제 실패:', error);
	  }
	};
  
	return (
	  <div className="flex flex-col justify-center items-center">
		<button onClick={handleDelete}>삭제하기</button>
	  </div>
	);
  };
  
  export default DeletePostComponent;