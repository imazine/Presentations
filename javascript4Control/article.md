#### 제어의 관점에서 바라본 자바스크립트
### JavaScript for Control

_ _ _

+ Speaker: 박일호
+ aka.: *iMaZiNe*
+ Front-end Engineer *@Company100*
+ Organizer *@undefine:D*

- - -

## 하고싶은 이야기
현업에서의 JavaScript 이야기.

- - -

### Ability of JavaScript
*JavaScript* 는 과연 무엇을 할 수 있을까요?

_ _ _

### @ BROWSER
+ DOM control
+ DOM style control
+ Browser API control
	+ canvas
	+ audio
	+ video
	+ web storage
	+ application cache
	+ xhr...

_ _ _

### @ SERVER
+ node.js
+ vert.x
+ rhino
+ 대다수의 script language 처럼

_ _ _

### @ API
+ Google Apps Script
+ [OS X Automation](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/)
+ [Windows runtime app](http://msdn.microsoft.com/en-us/library/windows/apps/br211385.aspx)
+ etc...

- - -

## 오늘의 주요 이야기
### BROWSER !

_ _ _

### Frequently Usecase on BROWSER?
#### 브라우저 에서 가장 빈번하게 사용되는 JavaScript

_ _ _

#### Frequently Usecase on Browser
+ DOM Control
+ DOM Style control
+ Browser API control

_ _ _

## How we can control DOM?

_ _ _

#### Basic DOM control

~~~js
// DOM Create
var DOM = document.createElement(TagName);

// DOM inject
document.body.appendChild(DOM);

// DOM style change
DOM.style.property = 'style';

~~~

_ _ _

## WHY WE CONTROL DOM?
#### 우리는 왜 DOM을 컨트롤 할까요

_ _ _

# Interactive UI
#### 사용자 경험의 향상을 위해

- - -

## 간단한 데모
슬라이드인 하는 메뉴를 만들어 봅시다.
_ _ _

### jQuery
~~~js
// jQuery animate

var nav = $('NavigationDOM'),
	button = $('NavButton'),
	navStatus = false;

nav.click(function(){
	if (navStatus){
		nav.animate({left: -200}, 1000, 'swing');
	} else {
		nav.animate({left: 0}, 1000, 'swing');
	}
	navStatus = !navStatus;
});
~~~

_ _ _

### Vanila script
~~~js
// Vanila script : Native JavaScript

var nav = document.getElementById('NavigationDOM'),
	button = document.getElementById('NavButton'),
	navStatus = false;

button.addEventListener('click', function(){
	if (navStatus) {
		leftTo(nav, -200);
	} else {
		leftTo(nav, 0);
	}
	navStatus = !navStatus;
});

function leftTo(elem, dest) {
	var current = elem.offsetLeft,
		direction = current < dest ? Math.ceil : Math.floor,
		timer;

	window.clearTimeout(timer);
	if (current != dest){
		var easingTo =  (current - dest) * 0.2;
		elem.style.left = direction(current - easingTo) + 'px';
		timer = setTimeout(function() {
			leftTo(elem, dest);
		}, 16);
	}
}
~~~

[DEMO](./demo1)

페이지 소스 보기를 이용해서 해당 소스를 확인해 주세요 :D

_ _ _

### With CSS3

~~~js
// JUST CONTROL CheckBoX !!

var button = document.getElementById('NavButton'),
	navStatus = document.getElementById('NavStatus');

button.addEventListener('click', function() {
	navStatus.checked = !navStatus.checked;
});
~~~

[DEMO](./demo2)

페이지 소스 보기를 이용해서 해당 소스를 확인해 주세요 :D

_ _ _

#### 시간이 허락한다면
## Draggable Element on Tablet

- - -

## 진짜 하고 싶었던 이야기
#### 현업에서 일어나는 문제를 바라보는 관점.
_ _ _

+ 제어의 관점에서 JavaScript를 바라보자.
+ 모든것을 JavaScript 로 제어하지 말자.
+ Browser 가 할 수 있는건 Browser 에게.
_ _ _

# Thanks

- - -

#Q&A
+ email: imazine@me.com
+ facebook: imazine80
