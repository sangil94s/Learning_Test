// 수정 시
'use client'
import React, { useState } from 'react';
import axios from 'axios';

const PatchComponent = () => {
  const [responseData, setResponseData] = useState(null);

  const handlePatch = async () => {
    try {
      const data = {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      };
      const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1', data);
      console.log('응답:', response.data);
      setResponseData(response.data); // 응답 데이터를 상태에 저장
      alert('포스트가 성공적으로 업데이트되었습니다.');
    } catch (error) {
      console.error('오류 발생:', error);
      alert('포스트 업데이트에 실패했습니다.');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center my-6'>
      <h1>포스트 업데이트</h1>
      <button onClick={handlePatch}>포스트 업데이트하기</button>
      {responseData && (
        <div>
          <h2>응답 데이터:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PatchComponent;
