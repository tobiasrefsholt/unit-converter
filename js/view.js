"use strict";

window.addEventListener("load", () => {
    updateView();
})

function updateView() {
    document.getElementById('app').innerHTML = /* html */ `
        <div class="converter">
            <div class="col">
                <p>From: </p>
                <p><input id="inputField" type="number" oninput="handeleInputChange(this.value)" onfocus="this.value = model.fields.input;"></p>
                <p>${getUnitListHTML('input')}</p>
            </div>
            <div class="col">
                <p>To: </p>
                <p><input type="number" value="${model.fields.output}" value="${model.fields.output}"></p>
                <p>${getUnitListHTML('output')}</p>
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