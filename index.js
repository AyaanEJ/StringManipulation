const app = Vue.createApp({
    data() {
return{
//objekter   
result: null,
word: null,
words: [],
Character: []
    }   
},
methods: {
    show(){
        //refresher listen
        this.words = []

        //skriver hello
        this.words.push(this.word) 

        //udskriver det indtastede ord
        this.result = ""

        //Skriver hele ordet i CAPS-lock
        this.words.push(this.word.toUpperCase())

        //Skriver det hele med små bogstaver
        this.words.push(this.word.toLowerCase()) 

        //Skriver det første bogstav med Stort " H " (capitalized)
        this.words.push(this.word.charAt(0).toUpperCase() + this.word.slice(1))
      
        //Skriver det sidste bogstav med Stort " O " (End-capitalized)
        this.words.push(this.word.slice(0,-1) + this.word.slice(-1).toUpperCase())  
        
        //Skriver ordet " hallo " bag fra (reverse)
    
            //this.words = this.word.split('').reverse().join('')
            this.Character = this.word.split("")
            this.Character.reverse()
            this.words.push(this.Character.join(""))       
        
        }    
    }
}).mount("#app");






