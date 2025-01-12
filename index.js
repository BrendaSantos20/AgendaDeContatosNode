import {read} from "./src/readline.mjs";

async function app () {

    const contatos = [];

    while (true){
        const contato = await read.question("Adicione um contato na lista\n");
        contatos.push(contato);
        console.log(contatos);
    }
} 

app();
