const Link = "https://supreme-goldfish-x5x69g5xp5q73v4xj-5005.app.github.dev/region";
fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#regiontable tbody");
    data.forEach(r=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${r.region_id}</td>
        <td>${r.region_name}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
console.log(err.message);
});
