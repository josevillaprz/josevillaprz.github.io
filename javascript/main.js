class App {
    constructor(){
        console.log("app started");
        this.getData();
    }

    getData(){
        document.querySelector('#bmiBtn').addEventListener('click', e=>this.bmi(e));
        document.querySelector('#submitBtn').addEventListener('click', e=>this.contact(e));
    }

    bmi(e){
        e.preventDefault();
        // get the values entered by the user
        let height = document.querySelector("#height"),
            weight = document.querySelector("#weight"),
            age = document.querySelector("#age"),
            gender = document.querySelector("#gender-select").value;
        
        // validate the inputs
        let valid = Validation.validateForm(height, weight, age);

        if(valid){
            // reset input styles
            
            // calculate the bmi
            let bmi = Utils.calcualteBmi(height.value, weight.value);
            
            // output the calculated bmi to the html
            let div = document.querySelector("#output"),
            p = document.createElement('p');
            // remove any previous 'p' tag
            div.removeChild(div.lastChild);
            // add new p tag and append
            p.innerHTML= bmi;
            div.appendChild(p);
        }
    }

    contact(e){
        e.preventDefault();
        console.log("hello");
    }
}

(()=>{
    const app = new App();
})();