let isNew = true;

window.onload = function() {
    readUsers();
}


    const formEditar= document.getElementById("formNewUser");
    const botao = document.getElementById('alterar');
    const idUser = getCookie('id');
    

    botao.addEventListener("click", async (event) => {
        event.preventDefault()
        
        //const txtIdade = document.getElementById('txt2').value;
        const txtEmail = document.getElementById('exampleInputEmail1').value;
        const txtName = document.getElementById('text1').value;
        const txtPass = document.getElementById('exampleInputPassword1').value;
        const txtRepPass = document.getElementById('exampleInputPassword2').value;
        const txtMorada = document.getElementById('text3').value;

       if(txtName=="" || txtPass =="" || txtMorada=="" || txtRepPass=="" || txtRepPass != txtPass) {
           alert('Preencha todos os campos!!');
       }else  
            {
            
            
               let response= await fetch(`http://localhost:3000/participants/${idUser}`, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "PUT",
                    body: `Nome_Participante=${txtName}&Password=${txtPass}&Localidade=${txtMorada}&Email=${txtEmail}`
                })
            

        alert('Informações alteradas com sucesso!!');           
            }
        
        readUsers();
    })

    const readUsers = async () => {
        formEditar.reset()
     
        //const txtIdade = document.getElementById('txt2');
        const txtEmail = document.getElementById('exampleInputEmail1');
        const txtName = document.getElementById('text1');
        const txtPass = document.getElementById('exampleInputPassword1');
        const txtRepPass = document.getElementById('exampleInputPassword2');
        const txtMorada = document.getElementById('text3');
        
        const response1 = await fetch(`http://localhost:3000/participants/${idUser}`);
        const users = await response1.json();

        const user = users[0];
        const email = user.Email;
        const nome = user.Nome_Participante;
        const password = user.pass;
        const morada = user.Localidade;
       // const idade = user.idade;

        
        txtEmail.value = email;
        txtName.value = nome;
        txtPass.value = password;
        txtRepPass.value = password;
        txtMorada.value = morada;
        //txtIdade.value = idade;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }


    

