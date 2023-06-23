const obj = {
	fun1(ary) {
		console.log(ary['a'])
	}
}
obj.fun1({'a':1,'b':2})