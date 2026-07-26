const API_KEY = "";  //i remove api key because github give security error

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const loading = document.getElementById("loading");
const askBtn = document.getElementById("askBtn");

askBtn.addEventListener("click", askAI);

async function askAI(){

    const prompt = question.value.trim();

    if(prompt===""){
        alert("Enter your question");
        return;
    }

    answer.innerHTML="";
    loading.style.display="block";

    try{

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    contents:[
                        {
                            parts:[
                                {
                                    text:`You are an AI Study Assistant.\n\n${prompt}`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        loading.style.display="none";

        if(!response.ok){
            answer.innerHTML="❌ Some thing issue";
            console.log(data);
            return;
        }

        if(
            data.candidates &&
            data.candidates.length>0 &&
            data.candidates[0].content.parts.length>0
        ){
            answer.innerHTML=data.candidates[0].content.parts[0].text;
        }
        else{
            answer.innerHTML="No response received.";
        }

    }
    catch(error){
        loading.style.display="none";
        answer.innerHTML="❌ Some thing issue";
        console.error(error);
    }

}