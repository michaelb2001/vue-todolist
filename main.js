let vm = new Vue({
    el:"#app",
    data: {
        arrayObj: [

        ]
    },
    methods:{
        aggiungiElemento : function(){

            let obj = {text : document.getElementById("aggiungi").value,
                       done : false};
            this.arrayObj.push(obj);
            document.getElementById("aggiungi").value = "";
        },
        sottolinea : function(){
            
        }
    }
});