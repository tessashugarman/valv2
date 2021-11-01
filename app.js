var responseDiv=document.body.querySelector(".response");
var list=[];

document.body.querySelector(".button").addEventListener("click", function (){
    var userValue=document.body.querySelector(".input").value;
    if (userValue === "coolStudent123"){
        responseDiv.innerHTML="";
        function createNav() {
            var nav = document.createElement("nav");
            createButton(pages[0]);
            createButton(pages[1]);
            createButton(pages[2]);

            document.body.appendChild(nav);

            // function createButton(pg) {
            //     var butt = document.createElement("button");
            //     butt.innerHTML = pg;
            //     butt.addEventListener("click", function () {
            //         navigate(pg);
            //     })
            //     nav.appendChild(butt);
            // }

        }
        function createWrapper(){
            var wrapper=document.createElement("div");
            wrapper.classList.add("wrapper");
            document.body.appendChild(wrapper);
        }

        function navigate(pg){
            if(pg==="home"){
                homePage();
            }else if (pg==="about"){
                aboutPage();
            }else {
                viewPage();
            }
        }

        function homePage(){
            var wrapper=document.body.querySelector(".wrapper");
            wrapper.innerHTML="";
            var header=document.createElement("h1");
            header.innerHTML="Home Page";
            wrapper.appendChild(header);
        }

        function aboutPage(){
            var wrapper=document.body.querySelector(".wrapper");
            wrapper.innerHTML="";
            var header=document.createElement("h1");
            var subtitle=document.createElement("h3");
            header.innerHTML="About Page";
            subtitle.innerHTML="Tessa Shugarman"
            wrapper.appendChild(header);
            wrapper.appendChild(subtitle);
        }

        function viewPage(){
            var wrapper = document.body.querySelector(".wrapper");
            wrapper.innerHTML="";
            var title= document.createElement("h1");
            title.innerHTML="View Page";
            wrapper.appendChild(title);
            var stat=document.createElement("h1");
            wrapper.appendChild(stat);

                var in1=document.createElement("input");
                in1.setAttribute("type", "text");
                in1.setAttribute("placeholder", "Text Box");

                var in2=document.createElement("input");
                in2.setAttribute("type", "text");
                in2.setAttribute("type", "Importance");

                    wrapper.appendChild(in1);
                    wrapper.appendChild(in2);

                var btn=document.createElement("button");
                btn.innerHTML="Save";
                btn.addEventListener("click", function (){
                    if (in1.value.length > 1){
                        if (isNaN(Number(in2.value)) === false){
                            list.push({grade: in2.value, note: in1.value})
                            renderList();
                        }else if (isNaN(Number(in2.value)) === true){
                            stat.innerHTML="Please put a valid number in the importance box"
                        }
                    } else if (in1.value.length <= 1){
                        stat.innerHTML="Please type a word/phrase longer than 1 character"
                    }
                })
            wrapper.appendChild(btn);

                var note=document.createElement("h4");
                wrapper.appendChild(note);
                var list=[{grade: "", note: ""}];


                function renderList(){
                    note.innerHTML="";
                    for (var i=0; i<list.length; i++){
                        var el = document.createElement("div");
                        el.innerHTML=list[i].grade + " " + list[i].note;
                        note.appendChild(el);
                    }
                }
        }

    }
    createNav();
    createWrapper();
})