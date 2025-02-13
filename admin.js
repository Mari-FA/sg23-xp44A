const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';

const listarEventos = async () => {

    const eventos = await fetch(SOUND_URL, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((resposta) => {

        //retorna lista em array de objetos
        return resposta.json();
    });

    // console.log(eventos);

    const tbody = document.querySelector('#tbodyAdm');

    let htmlEventos = "";

    eventos.forEach(evento => {
        htmlEventos += `
            <tr>
                <th scope="row">#</th>
                <td>${evento.scheduled.substring(0,10).replaceAll('-','/')}</td>
                <td>${evento.name}</td>
                <td>${evento.attractions.join(', ')}</td>
                <td>
                  <a href="reservas.html?id=${evento._id}" class="btn btn-dark">ver reservas</a>
                  <a href="editar-evento.html?id=${evento._id}" class="btn btn-secondary">editar</a>
                  <a href="excluir-evento.html?id=${evento._id}" class="btn btn-danger">excluir</a>
                </td>
              </tr>
        `;
    });

    tbody.innerHTML = htmlEventos;


}

listarEventos();

document.onload = () => {
    const url = new URL(window.location.href);
    const acao = url.searchParams.get('acao');

    if(acao != null && acao == 'edit'){
        alert('Evento atualizado com sucesso');
    }
}