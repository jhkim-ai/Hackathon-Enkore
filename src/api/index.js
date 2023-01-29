import axios from 'axios';

// 1. API 도메인 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0',
};

// 2. API 함수들 정의
function fetchTestList() {
	return axios.get(`${config.baseUrl}/news/1.json`);
}

export {
	fetchTestList,
}
