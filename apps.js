const form = document.querySelector('#searchForm');
const res = document.querySelector('#resTable');
const cont = document.getElementById("allContaint");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ctype = form.elements.coinType.value;
    cont.classList.add('mainClick');
    cont.classList.remove('main');    
    fetchPrice(ctype);

});
const options = {
    method: 'GET',
    headers: {'X-API-KEY': 'BMa+/CEHrUU30ts/NMn6NS+g9qakByMXFq17/Ey5KE4='}
  };
  
  fetch('https://openapiv1.coinstats.app/coins/price/avg', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


const showPrice = (coinData)=>{
    const price = coinData.price;
    const vol = coinData.avg;
    if(change<0){
        col = "red";
    }
    res.innerHTML = `<tr class="bg-primary" style="color: white;">
    <td>
        Property
    </td>
    <td>
        Value
    </td>
</tr>
<tr>
    <td>${coin}</td>
    <td style="color:${col};"><span style="font-size: 1.3em;">${price}</span> ${curr}</td>
</tr>
<tr>
    <td>Volume (24hrs)</td>
    <td>${vol}</td>
</tr>
<tr>
    <td>Change (24hrs)</td>
    <td style="color:${col};">${change} ${curr}</td>
</tr>`;
};