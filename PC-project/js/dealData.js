class DealData {
	constructor(data){
		this.data = data;
	}
	getTitle() {
		var title = [];
		for (var i = 0; i < this.data.length; i++) {
			title.push(this.data[i].title)
		}
		return title;
	}
	setTitle() {
		var titles = this.getTitle();
		var str = '';
		var clName = '';
		for (var i = 0; i < titles.length; i++) {
			if (i == 0) {clName = 'active'} else {clName = ''}
			str += '<a href="javascript:;" class="'+ clName +'">\
						<span>'+ titles[i] +'</span>\
					</a>'
		}
		return str;
	}
	findData(index) {
		for (var i = 0; i < this.data.length; i++) {
			if (this.data[i].index == index) {
				return this.data[i]
			}
		}
		return false;
	}
	setLayOut(index) {
		var target = this.findData(index);
		var str = '';
		for (var i = 0; i < 3; i++) {
			str += '<div>'
			if (target.con[i].h) {
				str += '<h2>'+ target.con[i].h +'</h2>'
			}
			for (var j = 0; j < target.con[i].p.length; j++) {
				// str += '<span>'+ target.con[i].p[j] +'</span>'
				str +='<span><img src="'+target.con[i].p[j]+'"></span>'
			}
			str += '</div>'
		}
		return str;
	}
}
