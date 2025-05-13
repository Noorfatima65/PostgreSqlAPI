const Link = "https://solid-memory-4j64gpj6wxr5c7964-5005.app.github.dev/location";
fetch(Link).then(response=>{
    if(!response.ok){
        throw new Error("Failed To Fetch Data");
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#locationtable tbody");
    data.forEach(c=>{
        const row = document.createElement("tr");
        row.innerHTML=`
        <td>${l.location_id}</td>
        <td>${l.street_address}</td>
        <td>${l.postal_code}</td>
        <td>${l.city}</td>
        <td>${l.state_province}</td>
        <td>${l.country_id}</td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
console.log(err.message);
});
