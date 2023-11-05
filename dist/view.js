"use strict";
window.addEventListener("load", () => {
    updateView();
});
function updateView() {
    document.getElementById('app').innerHTML = `
        <h1>Unit Converter</h1>
        ${getMenuHTML()}
        ${getConverterHTML()}
    `;
    document.getElementById("inputField").focus();
}
function getConverterHTML() {
    return `
        <div class="converter">
            <div class="col">
                <h2>From: </h2>
                <input id="inputField" type="number" oninput="handleInputChange(this.value)" onfocus="this.value = model.fields.input || '';">
                ${getUnitListHTML('input')}
            </div>
            <div class="col">
                <h2>To: </h2>
                <input id="outputField" disabled type="number" value="${model.fields.output || ''}">
                ${getUnitListHTML('output')}
            </div>
        </div>
    `;
}
function getMenuHTML() {
    let buttonsHTML = '';
    for (let unit in model.pages) {
        let activeClass = (unit == model.app.currentPage) ? 'class="active"' : '';
        buttonsHTML += `
            <button onclick="changeView('${unit}')" ${activeClass}>${unit}</button>
        `;
    }
    return `
        <div class="menu">
            ${buttonsHTML}
        </div>
    `;
}
function getUnitListHTML(fromOrTo) {
    const currentPage = model.app.currentPage;
    const page = model.pages[currentPage];
    if (!page.units)
        return `
        <p>No units found</p>
    `;
    const selectedUnit = page.selectedUnit[fromOrTo];
    let optionsHTML = '';
    for (let unit in page.units) {
        let selected = (unit == selectedUnit) ? 'selected' : '';
        optionsHTML += `
            <option ${selected} value="${unit}">${unit}</option>
        `;
    }
    return `
        <select onchange="setUnit(this.value, '${fromOrTo}')" size="${Object.keys(page.units).length}">
            ${optionsHTML}
        </select>
    `;
}
function updateOutputField() {
    document.getElementById('outputField').value = model.fields.output;
}
