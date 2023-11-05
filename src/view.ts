"use strict";

window.addEventListener("load", (): void => {
    updateView();
})

function updateView(): void {
    document.getElementById('app').innerHTML = /* html */ `
        <h1>Unit Converter</h1>
        ${getMenuHTML()}
        ${getConverterHTML()}
    `;
    document.getElementById("inputField").focus();
}

function getConverterHTML(): string {
    return /*html*/`
        <div class="converter">
            <div class="col">
                <h2>From: </h2>
                <input id="inputField" type="number" oninput="handleInputChange(this.valueAsNumber)" onfocus="this.value = model.fields.input || '';">
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

function getMenuHTML(): string {
    let buttonsHTML = '';
    for (let unit in model.pages) {
        let activeClass = (unit == model.app.currentPage) ? 'class="active"' : '';
        buttonsHTML += /* html */`
            <button onclick="changeView('${unit}')" ${activeClass}>${unit}</button>
        `;
    }
    return /*html*/`
        <div class="menu">
            ${buttonsHTML}
        </div>
    `;
}

function getUnitListHTML(fromOrTo: "input" | "output"): string {
    const currentPage = model.app.currentPage;
    const page = model.pages[currentPage];
    if (!page.units) return /*html*/ `
        <p>No units found</p>
    `;
    const selectedUnit = page.selectedUnit[fromOrTo];
    let optionsHTML = '';
    
    for (let unit in page.units) {
        let selected = (unit == selectedUnit) ? 'selected' : '';
        optionsHTML += /* html */ `
            <option ${selected} value="${unit}">${unit}</option>
        `;
    }
    return /* html */ `
        <select onchange="setUnit(this.value, '${fromOrTo}')" size="${Object.keys(page.units).length}">
            ${optionsHTML}
        </select>
    `;
}

function updateOutputField(): void {
    (<HTMLInputElement>document.getElementById('outputField')).valueAsNumber = model.fields.output;
}