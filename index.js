const divPai = document.querySelector('#divPai-index')

async function ObjectNew (){
    const response = await fetch('https://xp41-soundgarden-api.herokuapp.com/events');
    const dados = await response.json();
    console.log (dados);
    const TresEventos = dados.slice (0,3);
    
    TresEventos.map((post) => {
        
        const artigo = document.createElement('article');
        const nomeData = document.createElement('h2');
        const atracoes = document.createElement('h4');
        const descricao = document.createElement('p');
        const button = document.createElement('a');

        divPai.className = "container d-flex justify-content-center align-items-center";
        artigo.className = "evento card p-5 m-3";
        nomeData.innerText = (`${post.name} - ${post.scheduled.substring(0,10).replaceAll('-','/')}`);
        atracoes.innerText = post.attractions.join(", ");
        descricao.innerText = post.description;
        button.setAttribute = ("href","#");
        button.className = "btn btn-primary";
        button.innerText = "reservar ingresso";
        

        artigo.appendChild(nomeData);
        artigo.appendChild(atracoes);
        artigo.appendChild(descricao);
        artigo.appendChild(button);

        divPai.appendChild(artigo);
    })

}

ObjectNew ();


