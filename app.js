fetch("drinks.json")
.then(response => response.json())
.then(drinks => {

    drinks.forEach(drink=>{
        drink.combined =
        (drink.kmo + drink.jron) / 2;

        drink.diff =
        Math.abs(drink.kmo - drink.jron);
    });

    drinks.sort(
        (a,b)=>b.combined-a.combined
    );

    const table =
    document.getElementById("leaderboardBody");

    drinks.forEach((drink,index)=>{

        let rowClass="";

        if(index===0) rowClass="gold";
        if(index===1) rowClass="silver";
        if(index===2) rowClass="bronze";

        table.innerHTML += `
        <tr class="${rowClass}">
            <td>${index+1}</td>
            <td>${drink.name}</td>
            <td>${drink.kmo}</td>
            <td>${drink.jron}</td>
            <td>${drink.combined.toFixed(2)}</td>
        </tr>
        `;
    });

    document.getElementById("favorite").innerText =
        drinks[0].name;

    const kmoFav =
        [...drinks].sort((a,b)=>b.kmo-a.kmo)[0];

    const jronFav =
        [...drinks].sort((a,b)=>b.jron-a.jron)[0];

    const debate =
        [...drinks].sort((a,b)=>b.diff-a.diff)[0];

    document.getElementById("kmoFavorite").innerText =
        kmoFav.name;

    document.getElementById("jronFavorite").innerText =
        jronFav.name;

    document.getElementById("debate").innerText =
        debate.name;

});
