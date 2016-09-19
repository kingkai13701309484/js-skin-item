window.onload=function(){

 }
var skin = document.getElementById('skin'),
	sp = document.getElementsByTagName('span'),  //获取span标签
	keys = window.localStorage.getItem('key'),   //读取存储的数据
	colors=['#07ac72','#d87d23','#ae1be5','#2598be','#d12222'],   //创建那几个皮肤
	more=document.getElementById('search_c_bottom'),  //获取更多的id
	nav=document.getElementById('nav'),        //获取导航的id
	nav_ul=nav.getElementsByTagName('li'),      //获取导航里的li
	color = document.getElementById('color');

if(keys==null){
	//改变logo旁边的背景
	sp[0].style.background=colors[0];
	//改变更多的字体
	more.setAttribute('style','color:'+colors[0]);
	//改变导航条上面那条线
	nav.setAttribute('style','border-top:'+'2px'+' '+'solid'+' '+colors[0]);
	 //改变鼠标滑过的效果
for(i=0;i<nav_ul.length;i++){
		nav_ul[i].onmouseover=function(){
			this.style.background=colors[0];
			this.style.color='#fff';
		}
		nav_ul[i].onmouseout=function(){
			this.style.background='#fff';
			this.style.color="#333";
		}
	}  


}else if(keys=='0'){
	//改变logo旁边的背景
	sp[0].style.background=colors[keys];
	//改变更多的字体
	more.setAttribute('style','color:'+colors[keys]);
	//改变导航条上面那条线
	nav.setAttribute('style','border-top:'+'2px'+' '+'solid'+' '+colors[keys]);
	 //改变鼠标滑过的效果
for(i=0;i<nav_ul.length;i++){
		nav_ul[i].onmouseover=function(){
			this.style.background=colors[keys];
			this.style.color='#fff';
		}
		nav_ul[i].onmouseout=function(){
			this.style.background='#fff';
			this.style.color="#333";
		}
	}  

}else if(keys=='1'){
	//改变logo旁边的背景
	sp[0].style.background=colors[keys];
	//改变更多的字体
	more.setAttribute('style','color:'+colors[keys]);
	//改变导航条上面那条线
	nav.setAttribute('style','border-top:'+'2px'+' '+'solid'+' '+colors[keys]);
	 //改变鼠标滑过的效果
for(i=0;i<nav_ul.length;i++){
		nav_ul[i].onmouseover=function(){
			this.style.background=colors[keys];
			this.style.color='#fff';
		}
		nav_ul[i].onmouseout=function(){
			this.style.background='#fff';
			this.style.color="#333";
		}
	}  

}else if(keys=='2'){
	//改变logo旁边的背景
	sp[0].style.background=colors[keys];
	//改变更多的字体
	more.setAttribute('style','color:'+colors[keys]);
	//改变导航条上面那条线
	nav.setAttribute('style','border-top:'+'2px'+' '+'solid'+' '+colors[keys]);
	 //改变鼠标滑过的效果
for(i=0;i<nav_ul.length;i++){
		nav_ul[i].onmouseover=function(){
			this.style.background=colors[keys];
			this.style.color='#fff';
		}
		nav_ul[i].onmouseout=function(){
			this.style.background='#fff';
			this.style.color="#333";
		}
	}  

}else if(keys=='3'){
	//改变logo旁边的背景
	sp[0].style.background=colors[keys];
	//改变更多的字体
	more.setAttribute('style','color:'+colors[keys]);
	//改变导航条上面那条线
	nav.setAttribute('style','border-top:'+'2px'+' '+'solid'+' '+colors[keys]);
	 //改变鼠标滑过的效果
for(i=0;i<nav_ul.length;i++){
		nav_ul[i].onmouseover=function(){
			this.style.background=colors[keys];
			this.style.color='#fff';
		}
		nav_ul[i].onmouseout=function(){
			this.style.background='#fff';
			this.style.color="#333";
		}
	}  

}else{
	//改变logo旁边的背景
	sp[0].style.background=colors[keys];
	//改变更多的字体
	more.setAttribute('style','color:'+colors[keys]);
	//改变导航条上面那条线
	nav.setAttribute('style','border-top:'+'2px'+' '+'solid'+' '+colors[keys]);
	 //改变鼠标滑过的效果
for(i=0;i<nav_ul.length;i++){
		nav_ul[i].onmouseover=function(){
			this.style.background=colors[keys];
			this.style.color='#fff';
		}
		nav_ul[i].onmouseout=function(){
			this.style.background='#fff';
			this.style.color="#333";
		}
	}  

}



function test(num) {

	sp[0].style.background=colors[num];          //改变logo旁边的背景
	more.setAttribute('style','color:'+colors[num]);    //改变更多的字体
	nav.setAttribute('style','border-top:'+'2px'+' '+'solid'+' '+colors[num]);//改变导航条上面那条线
    for(i=0;i<nav_ul.length;i++){
		nav_ul[i].onmouseover=function(){
			this.style.background=colors[num];
			this.style.color='#fff';
		}
		nav_ul[i].onmouseout=function(){
			this.style.background='#fff';
			this.style.color="#333";
		}
	}  
                     
	window.localStorage.setItem('key', num);   //存储数据

}

