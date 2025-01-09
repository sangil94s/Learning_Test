// POST 요청 보내는 부분 테스트 목적
'use client'
import React, { useState } from 'react';
import axios from 'axios';

const PostComponent = () => {
  const [responseData, setResponseData] = useState(null);

  const handlePost = async () => {
    try {
      const data = { id: 101 }; // 보낼 데이터
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      console.log('응답:', response.data);
      setResponseData(response.data); // 응답 데이터를 상태에 저장
      alert('포스트가 성공적으로 생성되었습니다.');
    } catch (error) {
      console.error('오류 발생:', error);
      alert('포스트 생성에 실패했습니다.');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center my-6'>
      <h1>포스트 생성</h1>
      <button onClick={handlePost}>포스트 생성하기</button>
      {responseData && (
        <div>
          <h2>응답 데이터:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostComponent;
