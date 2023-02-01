
window.onload = function(){
    let i = 0;
    let j = 0;
    let add_icon = document.getElementsByClassName("create")[0];
    let default_div = document.getElementsByClassName("begin");
    let article = document.getElementsByClassName("card")[0];

    add_icon.addEventListener("click",()=>{
        default_div[0].style.display = "none";
        default_div[0].style.visibility= "hidden";
        default_div[1].style.display = "none";
        default_div[1].style.visibility= "hidden";

        let div_container_lines = document.createElement("div");
        div_container_lines.classList.add("container_lines");
        article.appendChild(div_container_lines);

        let div_end = document.createElement("div");
        div_end.classList.add("end");
        article.appendChild(div_end);

        let tasks_to_do_div_add = document.getElementsByClassName("end")[i];
        let container_lines = document.getElementsByClassName("container_lines")[0];


        let div = document.createElement("div");
        div.classList.add("line");
        div_container_lines.appendChild(div);

        let span_add_tasks = document.createElement("span");
        span_add_tasks.classList.add("material-symbols-outlined","center_end_span");
        span_add_tasks.innerHTML = "add_circle";
        tasks_to_do_div_add.appendChild(span_add_tasks);

        let tasks_to_do_div = document.getElementsByClassName("line")[i];

        let input = document.createElement("input");
        input.classList.add("field");
        input.style.color = "white";
        input.style.border = "1px solid white";
        input.style.backgroundColor = "#272727";
        input.style.borderRadius = "15px";
        input.id = i;
        input.style.padding = "7px";
        input.style.width = "80%";

        tasks_to_do_div.appendChild(input);
        input = document.getElementsByClassName("field")[i];


        let span_unchecked = document.createElement("span");
        span_unchecked.classList.add("material-symbols-outlined","marginLeft");
        span_unchecked.innerHTML = "radio_button_unchecked";
        span_add_tasks.id = i;
        tasks_to_do_div.appendChild(span_unchecked);
        

        input.addEventListener("keypress",(event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                if (input.value != "") {
                tasks_to_do_div.removeChild(input);
                tasks_to_do_div.removeChild(span_unchecked);

                let span_unchecked1 = document.createElement("span");
                span_unchecked1.classList.add("material-symbols-outlined","marginLeft");
                span_unchecked1.innerHTML = "radio_button_unchecked";
                span_add_tasks.id = i;

                span_delete=span_unchecked1;
                span_unchecked1.classList.add("unchecked");
                span_delete.classList.add("delete");
                span_delete.innerHTML = "delete";

                let text = input.value;

                let p = document.createElement("p");
                p.style.color = "white";
                p.style.backgroundColor = "#272727";
                p.id = i;
                p.innerHTML = text;
                p.style.padding = "7px";
                p.style.width = "auto";
                p.style.textOverflow = "ellipsis";

                tasks_to_do_div.appendChild(p);
                tasks_to_do_div.appendChild(span_unchecked);
                tasks_to_do_div.appendChild(span_delete);

                }
            }
        })

        // let span_delete = document.getElementsByClassName("delete")[i];

        // span_delete.addEventListener("click",()=>{
        //     container_lines.removeChild(tasks_to_do_div);
        //     i--;
        // });



        span_add_tasks.addEventListener("click",()=>{
            i++;
            let div = document.createElement("div");
            div.classList.add("line");
            div_container_lines.appendChild(div);
    
            let tasks_to_do_div = document.getElementsByClassName("line")[i];
    
            let input = document.createElement("input");
            input.classList.add("field");
            input.style.color = "white";
            input.style.border = "1px solid white";
            input.style.backgroundColor = "#272727";
            input.style.borderRadius = "15px";
            input.id = i;
            input.style.padding = "7px";
            input.style.width = "80%";
    
            tasks_to_do_div.appendChild(input);
            input = document.getElementsByClassName("field")[0];
    
    
            let span_unchecked = document.createElement("span");
            span_unchecked.classList.add("material-symbols-outlined","marginLeft");
            span_unchecked.innerHTML = "radio_button_unchecked";
            span_add_tasks.id = i;
            tasks_to_do_div.appendChild(span_unchecked);
            
    
            input.addEventListener("keypress",(event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    if (input.value != "") {
                    tasks_to_do_div.removeChild(input);
                    tasks_to_do_div.removeChild(span_unchecked);
    
                    let span_unchecked1 = document.createElement("span");
                    span_unchecked1.classList.add("material-symbols-outlined","marginLeft");
                    span_unchecked1.innerHTML = "radio_button_unchecked";
                    span_add_tasks.id = i;
    
                    span_delete=span_unchecked1;
                    span_delete.innerHTML = "delete";
    
                    let text = input.value;
    
                    let p = document.createElement("p");
                    p.style.color = "white";
                    p.style.backgroundColor = "#272727";
                    p.id = i;
                    p.innerHTML = text;
                    p.style.padding = "7px";
                    p.style.width = "auto";
                    p.style.textOverflow = "ellipsis";
    
                    tasks_to_do_div.appendChild(p);
                    tasks_to_do_div.appendChild(span_unchecked);
                    tasks_to_do_div.appendChild(span_delete);
    
                    }
                }
            })
        })

        

    })



}