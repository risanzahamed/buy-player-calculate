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

document.getElementById("calculate-player").addEventListener("click" , function(){
    const playerCalculate = document.getElementById("calculate-input");
    const playerCalculateString = playerCalculate.value;
    const NewPlayerAmount = parseFloat(playerCalculateString)

    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpensesString = playerExpensesElement.innerText;
    const previousPlayerExpenses = parseFloat(playerExpensesString)

    const currentBalanceTotal = playerArray.length * NewPlayerAmount;
    playerExpensesElement.innerText = currentBalanceTotal

    playerCalculate.value = '';

    document.getElementById("calculate-total").addEventListener("click", function(){
        const managerInput = document.getElementById("manager-input");
        const managerInputCalculateString = managerInput.value;
        const NewManagerCalculateAmount = parseFloat(managerInputCalculateString)
    
        const coachInput = document.getElementById("coach-input");
        const coachInputCalculateString = coachInput.value;
        const NewCoachCalculateAmount = parseFloat(coachInputCalculateString)
        
        const totalPriceElement = document.getElementById("total-price");
        const totalPriceElementString = totalPriceElement.innerText;
        const previoustotalPrice = parseFloat(totalPriceElementString)
    
        const NewBalanceTotal =(NewManagerCalculateAmount + previoustotalPrice + NewCoachCalculateAmount);
        totalPriceElement.innerText = NewBalanceTotal
    
        const totalPriceAmount = NewBalanceTotal + currentBalanceTotal
        totalPriceElement.innerText = totalPriceAmount
    
        managerInput.value = '';
        coachInput.value = '';
    })
    
})
