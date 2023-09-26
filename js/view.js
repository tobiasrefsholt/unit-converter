"use strict";

window.addEventListener("load", () => {
    updateView();
})

function updateView() {
    document.getElementById('app').innerHTML = /* html */ `
        <h1>Unit Converter</h1>
        <div class="converter">
            <div class="col">
                <h2>From: </h2>
                <input id="inputField" type="number" oninput="handeleInputChange(this.value)" onfocus="this.value = model.fields.input;">
                ${getUnitListHTML('input')}
            </div>
            <div class="col">
                <h2>To: </h2>
                <input disabled type="number" value="${model.fields.output}" value="${model.fields.output}">
                ${getUnitListHTML('output')}
            </div>
        </div>
    `;
    document.getElementById("inputField").focus();
}

function getUnitListHTML(fromOrTo) {
    const selectedUnit = model.app.selectedUnit[fromOrTo];
    let optionsHTML = '';
    for (let unit in model.units) {
        let selected = (unit == selectedUnit) ? 'selected' : '';
        optionsHTML += /* html */ `
            <option ${selected} value="${unit}">${unit}</option>
        `;
    }
    return /* html */ `
        <select onchange="setUnit(this.value, '${fromOrTo}')" size="${Object.keys(model.units).length}">
            ${optionsHTML}
        </select>
    `;
}