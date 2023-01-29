import axios from 'axios';

// 1. API 도메인 설정
const config = {
	testUrl: 'https://api.hnpwa.com/v0',
	baseUrl: 'http://127.0.0.1:8282',
};

// 2. API 함수들 정의
function fetchTestList() {
	return axios.get(`${config.testUrl}/news/1.json`);	
}

function fetchTest2List() {
	return axios.get(`${config.baseUrl}/test`);
}

export {
	fetchTestList, fetchTest2List
}
