# enkore 환경설정

### 1. Node.js, Git 설치
```
nodejs(v.18.13.0 LTS): https://nodejs.org/ko/
git: https://git-scm.com/downloads
```
### 2. Node.js 버전 확인 (v.18.13.0)
```
nvm ls
```

### 2-1. Node.js v.18.13.0 이 아닐 경우 설치
```
nvm install 18
```

### 2-2. Node.js(v.18.13.0) 버전 적용
```
nvm use 18.13.0
```

### 3 npm(v.8.19.3) 버전 확인 - Node.js(v.18.13.0) 버전을 사용하면 자동으로 npm(v.8.19.3)으로 맞춰짐
```
npm -v
```

### 4. 프로젝트 setup
```
npm install
```

### 5. 프로젝트 실행
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
