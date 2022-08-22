const playerArray = [];

function display (selectedPlayers)
{
    console.log(selectedPlayers);
    const tableBody = document.getElementById("selected-players")
    tableBody.innerHTML = "";
    
    for(let i = 0 ; i < selectedPlayers.length; i++)
    {
        // console.log(playerArray[i].playerName);
        const playersName = playerArray[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th class="bg-black text-2xl border-0">${i+1}</th>
        <td class="bg-black text-2xl border-0">${playersName}</td>
        `
        tableBody.appendChild(tr);
    }
}

function playerClick (element){
    // console.log(element.parentNode.children[1].innerText)
    const playerName = element.parentNode.children[1].innerText;
    const playerObject ={
        playerName: playerName
    }
    console.log(playerName)
    playerArray.push(playerObject)
    // console.log(playerArray)
    // console.log(playerArray.length)
    document.getElementById("player-select").innerHTML = playerArray.length

    display(playerArray)
}


