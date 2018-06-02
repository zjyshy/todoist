(function IIFET(){

    
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


    function clickE(value){


        this.cl = function(){
            

        }
    }

    function main(){

        var aa = new clickE();
        aa.cl();

    }
    addLoadEvent(main);











}
)();