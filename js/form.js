let botaoAdd = document.querySelector('#add-evento')

botaoAdd.addEventListener('click', function (event) {
    
    event.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let evento = getValueForm(form)

    

    let contador = document.querySelectorAll('.evento').length

    document.querySelector('.total').textContent = contador + 4

     let erros = validarEvento(evento)

    if (erros.length > 0) {   
        mensagemErro(erros)
        return
    }

    addEvento(evento)
})


function validarEvento(evento) {
    let erros = []

    if (evento.nomeEvento.length == 0) {
        erros.push('O nome não pode estar em branco')
    }
    if (evento.quantidade.length == 0) {
        erros.push('A quantidade não pode estar em branco')
    }
    if (evento.local.length == 0) {
        erros.push('O local não pode estar em branco')
    }
    if (evento.status.length == 0) {
        erros.push('O status não pode estar em branco')
    }
    if (evento.hora.length == 0) {
        erros.push('O hora não pode estar em branco')
    }
    if (evento.data.length == 0) {
        erros.push('A data não pode estar em branco')
    }

    return erros
}

function mensagemErro(erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

//-----Montar um paciente-----//

function addEvento(evento) {
    let eventoTr = montarTr(evento)
    let tabela =document.querySelector('#tabela')

    tabela.appendChild(eventoTr)
}

//-----Montar uma linha da tabela-----//

function montarTr(evento) {
    let eventoTr = document.createElement('tr')
    eventoTr.classList.add('evento')

    eventoTr.appendChild(montarTd(evento.nomeEvento, 'info-nomeEvento'))
    eventoTr.appendChild(montarTd(evento.data, 'info-data'))
    eventoTr.appendChild(montarTd(evento.hora, 'info-hora'))
    eventoTr.appendChild(montarTd(evento.local, 'info-local'))
    eventoTr.appendChild(montarTd(evento.quantidade, 'info-quantidade'))
    eventoTr.appendChild(montarTd(evento.status, 'info-status'))

    return eventoTr
}

//-----Montar celula da linha-----//

function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

//-----Receber valores para tabela-----//

function getValueForm(form) {
    let evento = {
        nomeEvento: form.nomeEvento.value,
        data: form.data.value,
        hora: form.hora.value,
        local: form.local.value,
        quantidade: form.quantidade.value,
        status: form.status.value,
    }
    return evento
}
