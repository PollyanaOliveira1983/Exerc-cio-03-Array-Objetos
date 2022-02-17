class Usuario{
    constructor(codigo, nome){
        this.codigo = codigo
        this.nome = nome
    }
};

function funcao_Usuario(){
    /*
<!--
Crie um objeto "Usuário" com as propriedades que você desejar. 
Depois, mostre uma mensagem na tela perguntando quantos usuários  devem ser salvos. 
Após isso, peça todos os dados necessários para seu objeto usuário 
e depois o salve em um array. 
Quando todos os objetos Usuários forem salvos, 
mostre o valor de cada propriedade do usuário na tela do Browser.
-->
    */
    
    var variavel_array = [];   

    var variavel_quantidade_entrada = parseInt(prompt("Quantos usuários deseja cadastrar ?"));
    
    // Cadastro
    for (let index = 1; index <= variavel_quantidade_entrada; index++) {
        alert("Cadastrar usuario: " + String(index))
        let nome = prompt("Informe o nome do usuário: ")
        let codigo = prompt("Informe o codigo do usuário: ")
        if (nome != "" && codigo != "" ) {
            //se for verdadeiro cadastrar usuario

            let variavelDeClasseUsuario = new Usuario(codigo, nome)
            //coloca as informçoes no Array
            
            variavel_array.push(variavelDeClasseUsuario)

        }else {
            alert("O codigo e o nome não foram informados!!")
            break //finaliza o if(lupe)    
        }

    }

    //Imprimir para o usuario
    for (let index = 0; index < variavel_array.length; index++) {
        const usuariosCadastrados = variavel_array[index];
        alert(String(usuariosCadastrados.codigo) + " "  + String(usuariosCadastrados.nome))
    }  
  
    console.log(variavel_array);

}
