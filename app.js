fetch("drinks.json")
.then(response => response.json())
.then(drinks => {

    drinks.forEach(d =>{
        d.combined = ((d.kmo + d.jron)/2);
        d.diff = Math.abs(d.kmo - d.jron);
    });

    drinks.sort((a,b)=> b.combined - a.combined);

    const body =
        document.getElementById("leaderboardBody");

    drinks.forEach((drink,index)=>{

        let cls="";

        if(index===0) cls="gold";
        if(index===1) cls="silver";
        if(index===2) cls="bronze";

        body.innerHTML += `
        <tr class="${cls}">
            <td>${index+1}</td>
            <td>${drink.name}</td>
            <td>${drink.kmo.toFixed(1)}</td>
            <td>${drink.jron.toFixed(1)}</td>
            <td>${drink.combined.toFixed(2)}</td>
        </tr>
        `;
    });

    document.getElementById("favorite").textContent =
        drinks[0].name;

    const kmoFav =
        [...drinks].sort((a,b)=>b.kmo-a.kmo)[0];

    const jronFav =
        [...drinks].sort((a,b)=>b.jron-a.jron)[0];

    const debate =
        [...drinks].sort((a,b)=>b.diff-a.diff)[0];

    document.getElementById("kmoFavorite").textContent =
        kmoFav.name;

    document.getElementById("jronFavorite").textContent =
        jronFav.name;

    document.getElementById("debate").textContent =
        debate.name;
});
