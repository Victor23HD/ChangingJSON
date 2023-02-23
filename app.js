const clientes = require("./app.json");

const filtrarAparatamentos = (cliente) =>
{
    return cliente.filter((clienteUn) => 
    {
        return (clienteUn.endereco["apartamento"] && 
            !clienteUn.endereco["complemento"]
        );
    });
} 

const updatePhone = (cliente) =>
{
    return cliente.telefone = cliente.telefone.map((x) => 
    {
        let n1 = Math.floor(Math.random() * 99);
        let n2 = x.slice(0,5);
        let n3 = x.slice(6,10);
        
        return `(${n1}) ${n2}-${n3}`;
    });

}

clientes.forEach(updatePhone);
console.log(clientes);



 
