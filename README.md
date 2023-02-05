# Enkore 프로젝트 환경설정

### 1. Node.js, Git 설치

`Node.js(v.18.13.0 LTS)`: https://nodejs.org/ko/ <br>
`git`: https://git-scm.com/downloads

### 2. Node.js 버전 확인 (v.18.13.0)
```
$ nvm ls
```

###### 2-1. Node.js(v.18.13.0) 버전이 아닐 경우 설치 및 적용
```
$ nvm install 18
$ nvm use 18.13.0
```

### 3. npm(v.8.19.3) 버전 확인 
###### * Node.js(v.18.13.0) 버전을 사용하면 자동으로 npm(v.8.19.3)으로 맞춰짐
```
$ npm -v
```

### 4. 프로젝트 setup
```
$ npm install
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


### Reference : Front-end
- [x] Vuetify(Component) : [https://vuetifyjs.com/](https://vuetifyjs.com/)
- [x] Pictogrammer(Icon) : [https://pictogrammers.com/library/mdi/](https://pictogrammers.com/library/mdi/)
