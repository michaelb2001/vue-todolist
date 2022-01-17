let vm = new Vue({
    el:"#app",
    data: {
        isActive : false,
        line : "text-decoration-line-trought text-dark",
        arrayObj: []
    },
    methods:{
        aggiungiElemento : function(){
            if(document.getElementById("aggiungi").value != ""){
                let obj = {text : document.getElementById("aggiungi").value,
                          done : false};
                this.arrayObj.push(obj);
                document.getElementById("aggiungi").value = "";
            }

        },

        cancellaElemento : function(index){
            this.arrayObj.splice(index, 1);
        },

        toggleClass : function(index){
     
            this.arrayObj[index].done = !this.arrayObj[index].done;
          }
        
    }
});