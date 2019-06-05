# my-project
学习地址 https://mp.weixin.qq.com/s/XZ3BmZLY4OwwGm2Hbbepbg

父子通信： 父向子传递数据是通过 props，子向父是通过 events（ $emit）；通过父链 / 子链也可以通信（ $parent / $children）；ref 也可以访问组件实例；provide / inject API； $attrs/$listeners

兄弟通信： Bus；Vuex

跨级通信： Bus；Vuex；provide / inject API、 $attrs/$listeners

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
