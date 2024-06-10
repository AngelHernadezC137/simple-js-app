let pokemonList= [
    {  name: 'Dragonite',
       height: 7, 
       type:['Dragon','Flying']},

    {  name: 'Salazzle', 
       height: 5, 
       type:['Poison','Fire']},

    {  name: 'Giritina', 
       height: 8, 
       type:['Dragon','Ghost']},
];

for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    document.write(pokemon.name + " (height: " + pokemon.height + ")");
    if (pokemon.height > 6) {
        document.write(" - Wow, that\'s Big!");
    }
    document.write("</br>");
};