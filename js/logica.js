 const cotacaoDolar = 5.84;

    document.getElementById("txtReal").addEventListener("input", function(e) 
        {
            let value = e.target.value;

            value = value.replace(/\D/g, "");

            if (value.length > 2) 
            { 
                value = value.replace(/(\d{2})$/, ",$1");
            }

            if (value) 
            {
                value = "R$ " + value.replace(/(\d)(\d{3})$/, "$1.$2");
            }

            e.target.value = value;
        });

    document.getElementById('txtDolar').addEventListener("input", function(e) 
        {
            let value = e.target.value;

            value = value.replace(/\D/g, "");

            if (value.length > 2) 
            {
                value = value.replace(/(\d{2})$/, ",$1");
            }

            if (value) 
            {
                value = "$ " + value.replace(/(\d)(\d{3})$/, "$1.$2");
            }

            e.target.value = value;
        });

    function converterValor(event)
        {
            event.preventDefault();

            let spanErro = document.getElementById('erro');     
            let valorReal = document.getElementById('txtReal').value.replace("R$ ", "");
            let valorDolar = document.getElementById('txtDolar').value.replace("$ ", "");

            if (valorReal == "" && valorDolar == "") 
            {
                spanErro.innerText = "Nenhum valor foi digitado!";
                spanErro.style.color = "red";
                document.getElementById('txtReal').focus();
                return;
            }

            if (valorReal != "" && valorDolar != "") 
            {
                spanErro.innerText = "Preencha apenas um campo";
                spanErro.style.color = "red";
                valorReal = "";
                valorDolar = "";
                valorReal = document.getElementById('txtReal').focus();
                return;
            }

            if (valorReal != "" && valorDolar == "") 
            {
                valorDolar = parseFloat(valorReal) / cotacaoDolar;
                valorDolar = "$ " + valorDolar.toFixed(2).replace('.', ',').toString();
                document.getElementById('txtDolar').value = valorDolar
            }

            if (valorDolar != "" && valorReal == "") 
            {
                valorReal = parseFloat(valorDolar) * cotacaoDolar;
                valorReal = "R$ " + valorReal.toFixed(2).replace('.', ',').toString();
                document.getElementById('txtReal').value = valorReal;
            }
        }

    function limparCampos(event)
        {
            event.preventDefault();

            let valorReal = document.getElementById('txtReal');
            let valorDolar = document.getElementById('txtDolar');
            let spanErro = document.getElementById('erro');

            valorReal.value = "";
            valorDolar.value = "";
            spanErro.innerText = "";
            valorReal.focus();
        }