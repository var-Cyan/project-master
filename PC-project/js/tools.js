var tools=(function () {
	var tool = {
		winSize: function () {
			// 获取浏览器的宽高
			var size = {};
			size.w = document.documentElement.clientWidth;
			size.h = document.documentElement.clientHeight;
			return size;
		},
		allAdd: function (num, inter, size) {
			var sum = num;
			for (var i = 0; i < size; i++) {
				sum += inter;
			}
			return sum;
		}
	}
	return tool;
})()