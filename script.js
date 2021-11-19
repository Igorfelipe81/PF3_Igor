let ValorFuturoPoupado = document.getElementById('ValorFuturoPoupado');


function pace () {
    let nome = document.getElementById('nome').value;
    let Mensalmente = document.getElementById('Mensalmente').value;
    let MensaisN = document.getElementById('MensaisN').value;
    let Taxa = parseFloat(document.getElementById('Taxa').value/100);
    let resultado = document.getElementById('resultado');

    if (nome !== '' && Mensalmente !== '' && MensaisN !== '') {
        let ValorFuturoCalculo = (Mensalmente*((((1+ Taxa)**MensaisN) - 1) / Taxa));
        let ValorFuturoCalculoFOrmatado = ValorFuturoCalculo.toFixed(2);
        let TaxaFormatadaproburrodousuario = (Taxa *100)
        resultado.textContent = `Aoba ${nome}! bão demais da conta? Se você aplicar R$
         ${Mensalmente} por  ${MensaisN} meses, contando com o juros fixo de ${TaxaFormatadaproburrodousuario}%, terá um valor futuro de R$ ${ValorFuturoCalculoFOrmatado} `;

    }
    else
    {
        resultado.textContent = `Para obter o resultado , é necessario que preencha todos os campos vazios!`;

    }

}

ValorFuturoPoupado.addEventListener('click', pace);
       
        
        

        
        