(function IIFE(){



	var html = document.getElementsByTagName("html");
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var da = new Date();
	
	var div = document.getElementsByTagName("div"); 
	var findBox = document.getElementsByClassName("find_box");
	var findImg = document.getElementsByClassName("img_search");
	var todayAT = document.getElementsByClassName("today_add_task");
	var SAT = document.getElementsByClassName('sub_add_task');
	var conTab = document.getElementsByClassName('contab');
	var todayATR = document.getElementsByClassName("today_add_task_return");
	var todayATD = document.getElementsByClassName('today_add_task_date');
	
	var todayAddTaskFlag = 0;
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
		var dat = document.getElementsByClassName("date");
	
		dat[0].childNodes[0].nodeValue = week[da.getDay()]+ " "+ (da.getMonth()+1)+"月"+da.getDate()+"日";


	}


	function filters(){
		//	点击左侧的标签来改变主体的内容
		var agendaView = document.getElementById("agenda_view1");
		var filter = document.getElementsByClassName("filter");
		var fi = document.getElementById("top_filters1");
		for(let i = 0;i<filter.length;i++){

			filter[i].addEventListener("click",function(){
				var a = "agenda_view"+i;
				var b = "top_filters"+i;
				agendaView.setAttribute("id",a);
				fi.setAttribute("id",b);
				console.log(a);
			});
		}

	}

 
	function adju(){

		let hc = html[0].clientWidth;
			if(hc > 981){
			
			let a = (hc - 950)/2;
			
				id("app_holder").style = "margin-left:"+a+"px;";
				id("top_bar_inner").style = "margin-left:"+a+"px";
			}else{
				id("app_holder").style = "margin-left:0px;";
				id("top_bar_inner").style = "margin-left:0px;";
			}
	}


	function adjustViewport(){
		adju();
		window.addEventListener("resize", adju);
	}


	function unfold(){
	
		var exaPanel = document.getElementsByClassName("expansion_panel");
		var panelSuCo = document.getElementsByClassName("panel_summary_content");
		var collapse = document.getElementsByClassName("collapse");
		var collWrapper = document.getElementsByClassName("collapse_wrapper");
		var angle = document.getElementsByClassName("angle");
	

		let flag = [1,1,1];
		for(let i = 0;i<3;i++){
	
			panelSuCo[i].addEventListener("click",function(){
				if(flag[i]){

					collapse[i].style="height:"+collWrapper[i].offsetHeight+"px";
					angle[i].setAttribute("class","angle angle_overturn") ;
					
					flag[i]--;
					app_holder;
				}else{
				
		
					collapse[i].style="height:0px;";
					angle[i].setAttribute("class","angle") ;
					flag[i]++;
				}
			});
		}



	}


	function findInput(){
		findBox[0].addEventListener("click",function(){

			findBox[0].style = "width:596px;background-color:#fff"
			findImg[0].style = "background-position: 0 -1070px;" 
		});
		
		findBox[0].addEventListener("blur",function(){

			findBox[0].style = "width:256px;background:0"
			findImg[0].style = "background-position: 0 -1412px;" 
		})
	}


	function toadyAddTask(){
		todayAT[0].addEventListener("click",function(){

			id("today_add_task_content").style = "display:block"
			todayAT[0].style = "display:none;";


		})

		SAT[0].addEventListener('click',function(){

			testContent(1);
		});
		todayATR[0].addEventListener("click",function(){
			testContent(2);
		});
		todayATD[0].value = (da.getMonth()+1)+"月"+da.getDate()+"日";
	
	}

	function testContent(value){
	
		if(value == 1){

		
			if(conTab[0].childNodes[0].nodeValue.trim() ==""){
				

					id("today_add_task_content").style = "display:none";
					todayAT[0].style = "display:block;";
					conTab[0].childNodes[0].nodeValue =" ";
			
			


				}else{
					let CCN = conTab[0].childNodes[0].nodeValue;
					
					let todayATTC = document.getElementsByClassName("today_add_task_text_content")[todayAddTaskFlag];
					let li = document.createElement("li");
					id("today_task_list").appendChild(li);
					
					
					li.setAttribute("class","today_task_list_content today_task_list_content"+todayAddTaskFlag+"");
					let L =	id("today_task_list").getElementsByClassName("today_task_list_content"+todayAddTaskFlag+"")[0];
					console.log(todayAddTaskFlag);
					L.innerHTML = '<img class="move" src="https://d3ptyyxy2at9ui.cloudfront.net/065a2124d3d93a23b1701a9bbf7b4c8d.svg"> <div><span class=" today_task_finish today_task_finish'+todayAddTaskFlag+'"></span><span class="today_add_task_text"><span class = "today_add_task_text_content">'+CCN+'</span><img class="today_task-talk" src="img/holder.gif" alt=""></span><span class="today_indox">收件箱 <span class="circle"></span></span><span class="float_menu"></span></div>';
					conTab[0].childNodes[0].nodeValue =" ";
					taskFinish(todayAddTaskFlag);
					todayAddTaskFlag++;
				}
			}else{
				

				id("today_add_task_content").style = "display:none"
				todayAT[0].style = "display:block;";
				conTab[0].childNodes[0].nodeValue = undefined;
			}
		}

	function taskFinish(i){
		var todayTF = document.getElementsByClassName("today_task_finish"+i+"")[0];
		todayTF.addEventListener("click",function(){
			console.log(i);
			id("today_task_list").removeChild(document.getElementsByClassName("today_task_list_content"+i+"")[0]);
		})
	}

		
	

	function main(){

		
		adjustViewport();
	 	showDate();
		   filters();
		   unfold();
		findInput();
		toadyAddTask();


	}



	addLoadEvent(main);


















}
)();