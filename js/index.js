(function IIFE(){



var html = document.getElementsByTagName("html")
var week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var da = new Date();
var div = document.getElementsByTagName("div"); 
function addLoadEvent(func){

	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;


	}else{

		window.onload = function(){

			oldonload();
			func();
		};
	}
}
function id(vl){
	let a = document.getElementById(vl);
	return a;

}


function showDate(){
	var dat = document.getElementsByClassName('date');
	
	dat[0].childNodes[0].nodeValue = week[da.getDay()]+ ' '+ (da.getMonth()+1)+"月"+da.getDate()+"日";


}


function filters(){
//	点击左侧的标签来改变主体的内容
	var agendaView = document.getElementById("agenda_view1")
	var filter = document.getElementsByClassName('filter');
	var fi = document.getElementById("top_filters1");
	for(let i = 0;i<filter.length;i++){

		filter[i].addEventListener('click',function(){
			var a = "agenda_view"+i;
			var b = "top_filters"+i;
			agendaView.setAttribute("id",a);
			fi.setAttribute("id",b);
		console.log(a);
		})
	}

}

 


function adjustViewport(){
	window.addEventListener("resize", function(){
		let hc = html[0].clientWidth;
		if(hc > 981){
			
			
			id("app_holder").style = "margin-left:30%;";

		}else if(hc>1200 &&hc <1500){
			
			id("app_holder").style = "margin-left:"+hc/20+"px";
		}

		});
}


function unfold(){
	
	var exaPanel = document.getElementsByClassName('expansion_panel');
	var panelSuCo = document.getElementsByClassName('panel_summary_content');
	var collapse = document.getElementsByClassName('collapse');
	var collWrapper = document.getElementsByClassName('collapse_wrapper');
	var angle = document.getElementsByClassName('angle');
	

	let flag = [1,1,1];
	for(let i = 0;i<3;i++){
	
		panelSuCo[i].addEventListener('click',function(){
			if(flag[i]){

				collapse[i].style="height:"+collWrapper[i].offsetHeight+"px";
				angle[i].setAttribute("class","angle angle_overturn") ;
				id('left_menu').setAttribute("class","left_menu_over");
				flag[i]--;
				app_holder
			}else{
				id('left_menu').setAttribute("class","left_menu");
		
				collapse[i].style="height:0px;";
				angle[i].setAttribute("class","angle") ;
				flag[i]++;
			}
		})
	}



}
function main(){

		
		adjustViewport();
	 	showDate();
		   filters();
		   unfold();
	   


	}



addLoadEvent(main);


















}
)();