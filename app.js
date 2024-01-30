    let jokeList = document.getElementById('jokeList');
    let jokePara = document.getElementById('jokePara');
    let genButton = document.getElementById('genButton');
    let jokePara2 = document.getElementById('jokePara2');
    let linkClass = document.getElementById('linkClass');
    let spookyUrl = 'https://v2.jokeapi.dev/joke/Spooky?blacklistFlags=nsfw,religious';
    let progUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious';
    let punUrl = 'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious';
    let miscUrl = 'https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious';
    
    
    let jokeGenerator =()=>{
        jokePara2.innerHTML = '';
        jokePara.innerHTML = '';
        let jokeSelection = jokeList.value
        console.log(jokeSelection)
        switch (jokeSelection){
            case 'programming':
            fetch(progUrl)
            .then((jokeResponse)=>{
                return jokeResponse.json();
            }).then((jokeMsg)=>{
                if(jokeMsg.type ==='single'){
                    jokePara.innerHTML = jokeMsg.joke;
                }
                else{
                    jokePara.innerHTML = jokeMsg.setup
                    setTimeout(() => {
                        jokePara2.innerHTML = jokeMsg.delivery
                    }, 2000);
                }
                
            }).catch((error)=>{
                console.log(error)
            })
            break;
            case 'spooky':
                fetch(spookyUrl)
            .then((jokeResponse)=>{
                return jokeResponse.json();
            }).then((jokeMsg)=>{
                if(jokeMsg.type ==='single'){
                    jokePara.innerHTML = jokeMsg.joke;
                }
                else{
                    jokePara.innerHTML = jokeMsg.setup
                    setTimeout(() => {
                        jokePara2.innerHTML = jokeMsg.delivery
                    }, 2000);
                }
            }).catch((error)=>{
                console.log(error)
            })
            break;
            case 'puns':
                fetch(punUrl)
            .then((jokeResponse)=>{
                return jokeResponse.json();
            }).then((jokeMsg)=>{
                if(jokeMsg.type ==='single'){
                    jokePara.innerHTML = jokeMsg.joke;
                }
                else{
                    jokePara.innerHTML = jokeMsg.setup
                    setTimeout(() => {
                        jokePara2.innerHTML = jokeMsg.delivery
                    }, 2000);
                }
            }).catch((error)=>{
                console.log(error)
            })
            break;
            case 'misc':
                fetch(miscUrl)
                .then((miscResponse)=>{
                    return miscResponse.json()
                }).then((miscJoke)=>{
                    if(miscJoke.type ==='single'){
                        jokePara.innerHTML = miscJoke.joke
                    }
                    else{
                        jokePara.innerHTML = miscJoke.setup
                        setTimeout(() => {
                            jokePara2.innerHTML = miscJoke.delivery
                        }, 2000);
                    }
                }).catch((error)=>{
                    console.log(error)
                })
                break;
        }
    }

linkClass.addEventListener('click', ()=>{
    window.open('https://github.com/SaroshAhmed')
})