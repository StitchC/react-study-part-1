#### HOC vs HOOK
高阶组件 vs Hook 他们两个之间究竟有哪些区别呢？

- 相同点
1. 都是提取公共的逻辑到组件内部使用

- 不同点
1. HOC 是隐式注入的，它依赖包装函数注入公有逻辑，组件使用的时候并不知道外部是否会传入这个公有逻辑
2. Hook 是显示的，它在组件内部显式的声明了使用了哪一些公有逻辑，组件的使用者或者维护人员更容易理解代码的目的

比起HOC 我会更偏向于Hook，因为Hook 是显式的，无论式开发还是维护，日后编写代码的时候一眼便看出，公有的逻辑部分使用了哪些