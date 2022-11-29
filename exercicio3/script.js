const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "agua",
}

pokemon1.ataques = [];

pokemon1.ataques.push({
    nome: "investida",
    dano: 40,
    tipo: "normal",
    precisao: 100,
})


pokemon2.ataques = [];
pokemon1.ataques.push(...pokemon1.ataques);

pokemon1.ataques.push({
    nome: "Jato de agua",
    dano: 45,
    tipo: "grama",
    precisao: 100
});


console.log(pokemon1)
console.log(pokemon2)