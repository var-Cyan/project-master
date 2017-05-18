	
	//是不是移动端 
	var isMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	　　isMobile = true;
	}

	var myScroll = new IScroll('#execBox', {//？
	    mouseWheel: true,//是否监听鼠标滚轮事件 false为不监听 true为监听
	    scrollbars: true,//是否显示默认滚动条  false为显示  true为不显示
	    hScroll: false,//左右滑动 默认为true 可以滑动   false 不可以滑动
	     probeType: 3//需要使用iscroll-probe.js才能生效	probeType：1  滚动不繁忙的时候触发
													  //probeType：2  滚动时每隔一定时间触发
													  //probeType：3  每滚动一像素触发一次
	});
	
	var centerBoxScroll = new IScroll('#centerBoxScroll', {
	    mouseWheel: true,//是否监听鼠标滚轮事件
	    hScroll: false//左右滑动 默认为true 可以滑动   false 不可以滑动
	});


	//在文字部分时   滚动条的显示与隐藏
	//事件 滚动条开始滚动
	myScroll.on('scrollStart', function () {
		//滚动条this.indicators[0].indicator
		//options.indicators	指示IScroll该如何滚动，Scrollbars的底层实现方式。	 
		//options.indicators.el	制定滚动条的容器。容器中的第一个元素即为指示器。
		$(this.indicators[0].indicator).animate({
			opacity: 1
		}, 500)
		 if (this.y < -10) {
			$('#header').fadeOut()
		 }
	})
	//制定滚动条的容器。容器中的第一个元素即为指示器
	//事件 滚动条结束滚动
	myScroll.on('scrollEnd', function () {
		$(this.indicators[0].indicator).animate({
			opacity: 0
		}, 500)
	})
	//主页
	class SetMainImage{
		constructor(id){
			// console.log($('body')[0])
			this.obj = $(id);
			this.bg = $('.bg');
			this.face = $('.face');
			this.nowIndex = 0;
			this.setting={
				//首页展示的图片地址
				data: [
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg'
				],
				len: 20,
				bgSize: [tools.winSize().w, tools.winSize().h],//?
				bgRota: tools.winSize().w / tools.winSize().h,//?
				//显示 不同的模块 内容不同
				hideFn: function () {//?
					return false;
				},
				//隐藏 不同的模块 内容不同
				showFn: function () {//?
					return false;
				},
				//是否运动完成
				isReady: false,	
				//首页标题框内容
				title: [
					'<img src="./img/title1.png">',
					'<img src="./img/title2.png">',
					'<img src="./img/title3.png">',
					'title4'
				],
				//每个图片的信息
				infor: [
					"店名の『しゃにむに』はただひたすら・・懸命に・・・という意味。<br>四季を織り成す素材との一期一会。季節の息吹を懸命に引き出す料理の数々。<br>お客様が大切な方と語らい愉しむ時間を懸命に演出する空間。<br>大切な方との少し贅沢なお時間 都会の喧騒を忘れて・・ごゆるりと。",
					'貝という魅惑の素材の可能性を引き出す唯一無比の味わいと空間。<br>和洋を織り成すお料理の数々は視覚、香り、食感、余韻、など全身でライブ感を楽しめる。<br>色艶漂うリュクスな空間で・・ ',
					'上質の鰻を白焼きにして蒸し上げ、門外不出の秘伝のたれで頂く江戸前仕込み<br>日本の伝統をここから世界に',
					'信息四'
				],
				hash: [//?
					'#page=executive',
					'#page=ad',
					'#page=suc',
					'#page=contact'
				]
			},
			//合并传进啦的每一项
			this.init();
		}


		init(json){
			// 把传进来的与原有的作对比 一样的参数合并(传进来的股改原有的)
			for (var attr in json) {
				this.setting[attr] = json[attr];
			}
			//图片的地址  数组
			this.currentBg = this.setting.data;
		}
		//用于生成bg和face内div群
		//初始化时 fn生成最先展示的内容
		setPos(fn){
			// 在 $('.bg') 中生成div群
			this.setLayOut(this.bg);
			// 在 $('.face') 中生成div群
			this.setLayOut(this.face);
			//初始化时 fn生成最先展示的内容
			if(typeof fn ==='function'){
				fn(this.setting.title[0],this.setting.infor[0])
			}

		}
		//生成bg和face的child   divs
		setLayOut(imgArea){
			var str = '';
			for (var i = 0; i < this.setting.len; i++) {
				str += '<div></div>'
			}
			imgArea.html(str);
			//给div群的父级   和自己设置样式
			this.setStyle(imgArea);
			//当创建出来的时候 face的div 到对应的高度 css样式设置了opacity
			this.hideImage();
		}

		rePos(){
			this.setStyle(this.bg);
			this.setStyle(this.face);
		}
		setStyle(imgArea) {
			// 每个div的宽度
			var _width = imgArea.find('div').width();
			// div父级的宽度
			var _parWidth = imgArea.width();
			var _parHeight = imgArea.height();

			//当_parHeight*this.setting.bgRota > _parWidth时  width改变 需要重新获取宽度
			if (_parHeight*this.setting.bgRota > _parWidth) {
				document.title='111'
				imgArea.css({
					
					'min-width':_parHeight*this.setting.bgRota
				});
			};
			// 重新获取宽度
			_width = imgArea.find('div').width();
			_parWidth = imgArea.width();
			// 给每个div设置同一个背景图，给每个div添加对应的left,bg-position,bg-size 
			imgArea.find('div').css({
				'background-image': 'url('+ this.currentBg[this.nowIndex] +')',
			}).each(function (i, e) {
				$(e).css ({
					'left': i * _width,
					'background-position': -i * _width,
					'background-size': _parWidth
				})
			})


		}

		// 初始化自动播放下一个
		autoPlay(){
			var _this = this;
			clearInterval(this.timer);
			this.timer = setInterval(function () {
				_this.next();
			}, 5000)
		}
		//停止播放
		stopAutoPlay() {
			clearInterval(this.timer);
			this.timer = null;
		}
		now(callback) {

			console.log(this.currentBg[this.nowIndex])
			this.face.find('div').css({
				'background-image': 'url('+ this.currentBg[this.nowIndex] +')',
			});
			this.showImage(callback);
		}
		next(index, callback) {
			// console.log(11)
			this.nowIndex ++;
			if (typeof index == 'function') {
				callback = index;
			} else if (typeof index == 'number') {
				this.nowIndex = index;
			}
			// this.setting.isReady = false;
			
			this.nowIndex %= this.currentBg.length;
			// console.log(this.nowIndex)
			this.face.find('div').css({
				'background-image': 'url('+ this.currentBg[this.nowIndex] +')',
			});
			this.showImage(callback);
		}
		prev() {
			this.nowIndex --;
			if (this.nowIndex < 0) {
				this.nowIndex = this.currentBg.length-1;
			}
			// console.log(this.nowIndex)
			this.face.find('div').css({
				'background-image': 'url('+ this.currentBg[this.nowIndex] +')',
			});
			this.showImage();
		}
		showImage(callback) {
			this.setting.isReady = true;
			var _this = this;
			this.face.find('div').each(function (i, e) {
				setTimeout(function (i) {
					mTween(e, {top: 0, opacity: 100}, 500, 'easeOut', function () {
						if (i == 11) {
							// 当最后一块运动完成后 把上下运动的div恢复到应有的位置高度
							_this.hideImage();
							//恢复到应有的位置之后 透明度为0
							$('.face div').css ({opacity: 0});
							//让其对应的bg框显示
							$('.bg').css ({
								'opacity': 1,
							});
							//让其对应的bg框显示 face显示的图片
							$('.bg div').css({
								'background-image': $('.face div').eq(0).css('background-image')
							});

							_this.setting.isReady = false;
							callback && callback();
						}
						
						if (i == 0) {
							//如果是第0张  让bg 的透明度变为0   切换图片
							$('.bg').animate ({
								opacity: 0
							});
						}
					});
					// ???
				}, i*70, i);
			});
			// 显示对应的内容 根据_this.nowIndex
			if(typeof _this.setting.hideFn==='function'){
				_this.setting.hideFn(_this.setting.title[_this.nowIndex],
					_this.setting.infor[_this.nowIndex],
					_this.setting.hash[_this.nowIndex]);
			}

		}
		//恢复到设定的高度
		hideImage() {
			this.face.find('div').each(function(i, e){
				// let写可能有问题
				let dir = i%2 == 0 ? 1 : -1;
				$(e).css ({
					top:( dir * (tools.winSize().h * 0.4) * i/12 + dir * (tools.winSize().h * 0.2))
				})
			});

			if(typeof this.setting.showFn==='function'){
				this.setting.showFn();
			}
			
		}

	}


	// 主屏文字信息相关
	class IntroBox {
		constructor(selector){
			this.obj = $(selector);
			this.spanBox = this.obj.find('span');
		}
		//让主屏文字及信息显示出来
		showBox() {
			// spanBox透明度300ms变为1
			this.obj.fadeIn(300);
			// 内部的span清空行间样式 恢复默认样式
			this.spanBox.each(function (i, e) {
				$(e).attr({
					style: ''
				})


			})
		}
		//让主屏文字及信息显示隐藏
		hideBox(fn) {
			// spanBox透明度800ms变为0
			this.obj.fadeOut(800, function () {
				fn && fn();
			});
			// 内部的span的宽高为0
			this.spanBox.each(function (i, e) {
				$(e).width(0);
				$(e).height(0);
			})
		}
	}



	var setImage = new SetMainImage('#mainImagArea')	
	var mainIntroBox = new IntroBox('#centerBox .spanBox');

	// 初始化时 改变showFn和hideFn
	setImage.init ({
		showFn(title) {
			//menu是否可以点击
			menuCanTab = true;
			mainIntroBox.showBox();
			//jq透明度动画 让$('#title') $('#intro')淡入淡出效果
			$('#title').fadeIn(800);
			$('#intro').fadeIn(800);
		},
		hideFn(title, infor, hash) {
			mainIntroBox.hideBox();
			$('#title').fadeOut(800, function () {
				$('#title').html(title);
				$('#intro .joinIco').attr({
					href: hash
				})

			});
			$('#intro').fadeOut(800, function () {
				$('#intro p').html(infor)
			});
		}
	});

	// 初始化创建bg和face的divs  并且将其与title 和 p 一同生成
	setImage.setPos(function (title, infor) {
		
		$('#title').html(title);
		$('#intro p').html(infor)
	});
	// 调用自动播放
	setImage.autoPlay();

	//下一张
	$('.rightBtn').on('click touchstart',function () {
		if(	setImage.setting.isReady){
			return false;
		};
		// setImage.stopAutoPlay();
		setImage.next();
		setImage.autoPlay();
	});

	//上一张
	$('.leftBtn').on('click touchstart', function () {
		if(setImage.setting.isReady){
			return false;
		};
		// setImage.stopAutoPlay();
		setImage.prev();
		setImage.autoPlay();
	});

	// menu 点击事件

	// 目前的状态， 用于点击menu时跳转指向的目标
	var targetHash = 'menu';
	// 当前页的标示
	var nowHash = 'main';
	// 用于存放，要渲染页的文字内容
	var data;

	//	导航页
	var menuPage =  new SetMainImage('#mainImagArea');//
	// 点击menu 出现的页面 导航盒子
	var menuBox = new IntroBox('#menuBox .spanBox');
	// 文字页面
	var execPage =  new SetMainImage('#mainImagArea');
	// 文字的边框盒子
	var execBox = new IntroBox('#execBox .spanBox');
	// 联系我页面
	var contactPage = new SetMainImage('#contactPage');
	// 联系我box
	var contactBox = new IntroBox('#contactPage .spanBox');



	// 初始化   把 导航页的 shouFn  和 hideFn 替换一下
	menuPage.init({
		data: [
			'img/bg.jpg'
		],
		showFn: function () {

			centerBoxScroll.scrollTo(0, 0);
			$('#menuBox').fadeIn(400, function () {
				//导航菜单显示
				menuBox.showBox();
				//可以被点击的状态
				menuCanTab = true;
				centerBoxScroll.refresh();
			});
		},
		hideFn: function (title, infor) {
			menuBox.hideBox();
			$('#centerBox').fadeOut(400)

		}
	});

	// 初始化 文字页面
	execPage.init({
		data: [
			'img/bg2.jpg',
			'img/bg.jpg'
		],
		showFn: function () {
			menuCanTab = true;
			$('#execBox').fadeIn(function () {
				$('#sideBar').fadeIn(function () {
					canTab = true;
				});
				execBox.showBox();
				 setTimeout(function () {
				 	//	刷新IScroll
			        myScroll.refresh();
			    }, 0);
				 
				  myScroll.on('scroll', function () {
				  	// this.y 滚动条的 距父级的-top值 
				  	// this.targetBottom 滚动条距离
				  	// 滚动到底部时的 this.maxScrollY
					 if (isMobile) {
					 	this.targetBottom = this.maxScrollY - 30;
					 	this.targetTop = 30;
					 } else {
					 	this.targetBottom = this.maxScrollY;
					 	this.targetTop = 0;
					 }
					 if (this.y >= -20) {
						$('#header').fadeIn()
					 }
					 console.log(this.y,this.targetBottom,this.targetTop)
					 if(this.y <= (this.targetBottom)+50){
					 	$('#refrash').fadeIn()
					 } else {
					 	$('#refrash').fadeOut()
					 }
				  	if (this.y <= (this.targetBottom)) {
				  		if (canTab == false) {return false}
						canTab = false;
						var downEl  = $('#sideBar a').filter('.active').next()
						if (!(downEl.length)) {
							downEl = $('#sideBar a').eq(0)
						}
						downEl.trigger('click.bar')
						console.log(123)
				  	}
				  	if (this.y >= this.targetTop) {
				  		if (canTab == false) {return false}
						canTab = false;
						var downEl  = $('#sideBar a').filter('.active').next()
						if (!(downEl.length)) {
							downEl = $('#sideBar a').eq(0)
						}
						downEl.trigger('click.bar')
				  	}
				  	// console.log(1)
				 });


			})
		},
		hideFn: function (title, infor) {
			// console.log(555)
			$('#execBox').fadeOut(800);
			execBox.hideBox();
			$('#menuBox').fadeOut(600);
		}
	});



	// 初始化contact页面的内容
	// 把canract对应的页面数据 及 函数 替换一下
	contactPage.init({//-
		data: [
			'img/bg2.jpg'
		],
		showFn: function () {
			menuCanTab = true;
			$('#contactPage').fadeIn(function () {
				contactBox.showBox();
				centerBoxScroll.scrollTo(0, 0);
				centerBoxScroll.refresh()
			})
		},
		hideFn: function (title, infor) {
			$('#contactPage').fadeOut(800);
			contactBox.hideBox();
			$('#menuBox').fadeOut(600);
		}
	});


	// 头部的点击事件
	$('#header').on('click.menu touchstart', '.menu', function () {
		// 如果menuCanTab为假  则热跳出函数
		if(!menuCanTab){
			return false;
		};
		menuCanTab = false;
		//给点击的.menu 添加一个class 让其变 X
		$('.menu').toggleClass('active');
		window.location.hash = targetHash;
		// 当hash是触发window.onhashchange事件
		return false;
	})

	$('#intro .joinIco').on('click touchstart', function () {
		setImage.stopAutoPlay();
		menuPage.now();
		targetHash = 'main';
	})

	//点击menu的a的事件  自带herf
	$('#menuBox nav a').click(function () {
		var _this = this;
		$('#menuBox nav a').removeClass('active');
		$(this).addClass('active');
		$('.menu').toggleClass('active');
		$('#menuBox .spanBox').animate({
			top: $(_this).position().top
		})

	})

	// 当hash变化时触发的事件
	window.onhashchange = function () {

	//获取hash值 根据不同的hash值  进行不同的事件
		var hash = $.getHash();
// console.log(window.location.hash)
		switch (hash) {
			case 'menu':
				//把背景变为紫色
				$('#mainImagArea').addClass('bgBlue');
				//menu的背景变为青色
				$('.menu').addClass('sonStyle');
				// console.log(hash,nowHash)
				backMenu();
				nowHash = 'menu';
				// window.location.hash = '';
				break;
			case 'main':
				//紫色背景去掉
				$('#mainImagArea').removeClass('bgBlue');
				// 青色背景去掉
				$('.menu').removeClass('sonStyle');
				// menu导航盒子隐藏
				menuBox.hideBox();
				nowHash = 'main';
				$('#menuBox').fadeOut(600,function () {
					setImage.now(function () {
						$('#centerBox').fadeIn();
						centerBoxScroll.scrollTo(0, 0);
						centerBoxScroll.refresh()
					});
					setImage.autoPlay();
				});
				targetHash = 'menu';
				// window.location.hash = '';
				break;
			case 'executive' :
				mainAreaChange.in(pageData, 'executive')
				break;
			case 'ad' :
				mainAreaChange.in(pageData1, 'ad')
				break;
			case 'suc' :
				mainAreaChange.in(pageData2, 'suc')
				break;	


			case 'contact' :
				$('.menu').removeClass('sonStyle');
				nowHash = 'contact';
				contactPage.now();
				$('#sideImg').fadeIn(1000);
				// window.location.hash = '';
				targetHash = 'menu';
			default:
				break;
		}
		

	}


	// 由于 menu 功能指向具有多样性，所以单独使用一个方法，进行区分

	function backMenu () {
		switch (nowHash) {
			case 'main':
				//停止自动播放
				setImage.stopAutoPlay();
				//换背景 ，让其显示
				//并且让menu的spanbox也显示了出来
				menuPage.now();
				targetHash = 'main';
				// console.log(789)
				break;
			case 'executive':
				mainAreaChange.out('executive');
				break;
			case 'ad':
				mainAreaChange.out('ad');
				break;
			case 'suc':
				mainAreaChange.out('suc');
				break;

			case 'contact': {
				console.log(456)
				menuPage.now();
				contactBox.hideBox();
				$('#contactPage').fadeOut(800);
				$('#sideImg').fadeOut();
				targetHash = 'contact';
				break;
			}
			// default:
			// 	// statements_def
			// 	break;
		}
	}

//
	var mainAreaChange = {//-
		in: function (mainData, newHash) {
			// console.log(newHash)
			data = new DealData(mainData);
			$('#execBox .title').html(data.getTitle()[0]);
			$('#sideBar').html(data.setTitle())
			$('#execBox .artical').html(data.setLayOut(0));
			$('.menu').addClass('sonStyle');
			nowHash = newHash;
			execPage.now();
			// window.location.hash = '';
			targetHash = 'menu';
		},
		out: function (nextHash) {
			menuPage.now();
			execBox.hideBox();
			$('#execBox').fadeOut(800);
			$('#sideBar').fadeOut();
			targetHash = nextHash;
		}
	}



	//当窗口大小调整的时候，调整背景相关设置
	$(window).on('resize', function () {
		setImage.rePos()
	})

		// sideBar 的功能实现 小圆点

	$('#sideBar').on('click.bar', 'a', function (ev) {
		var _this = this;
		var index = $(_this).index();
		if ($(this).hasClass('active')) {
			return false;
		}
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		execPage.next(index ,function () {

			tabStyle(index);
			$('#execBox .title').html($(_this).html());
			$('#execBox .artical').html(data.setLayOut(index));
			myScroll.scrollTo(0, 0);
			$('#refrash').fadeOut()


		});
	})
//显示不同的背景及对应的样式
	function tabStyle (index) {
		index%=2;
		if(!index) {
			$('.menu').removeClass('sonStyle');
			$('#execBox').removeClass('conStyle1').addClass('conStyle2');
			$('#sideBar').removeClass('whiteStyle').addClass('blueStyle');;
		} else {
			$('.menu').addClass('sonStyle');
			$('#execBox').removeClass('conStyle2').addClass('conStyle1');
			$('#sideBar').removeClass('blueStyle').addClass('whiteStyle');
		}
	}