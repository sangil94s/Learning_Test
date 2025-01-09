// 삭제 테스트
'use client'

import axios from "axios";

const DeletePostComponent = () => {
	const handleDelete = async () => {
	  try {
		const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
		console.log('삭제 성공:', response.data);
		alert('포스트가 성공적으로 삭제되었습니다.');
	  } catch (error) {
		console.error('삭제 실패:', error);
		alert('포스트 삭제에 실패했습니다.');
	  }
	};
  
	return (
	  <div className="flex flex-col justify-center items-center">
		<h1>포스트 삭제</h1>
		<button onClick={handleDelete}>삭제하기</button>
	  </div>
	);
  };
  
  export default DeletePostComponent;