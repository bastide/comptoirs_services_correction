
/**
 * Convertit les données d'un formulaire en application/x-www-form-urlencoded
 * de la forme key1=value1&key2=value2
 * @param {string} formId l'id du formulaire
 * @returns {string} les données du formulaire au format x-www-form-urlencoded
 */
function formToParams(formId) {
    let formElement = document.getElementById(formId);
    return new URLSearchParams(new FormData(formElement)).toString()
}


/**
 * Faire un appel AJAX avec l'API fetch
 * Permet de récupérer erreur réseau et erreur de l'API
 * usage :
 * doAjaxRequest(url, options).then(showResult).catch(showError);
 * @param {string} url L'URL de l'API
 * @param {object} options Les options de la requête AJAX
 * @returns {Promise} Une promesse qui sera résolue avec le résultat de l'appel AJAX
 * @throws {object} Une exception qui sera levée si l'API a signalé une erreur
 */
async function doAjaxRequest(url, options) {
    // On fait l'appel AJAX
    const response = await fetch(url, options);
    // On récupère le résultat transmis en format JSON
    const result = await response.json();
    // L'API a signalé une erreur, on lève une exception
    if (!response.ok) throw result;
    // Tout s'est bien passé, on renvoie le résultat
    return result;
}

/**
 * Convertit les données d'un formulaire en objet javascript
 * @param {string} formId l'id du formulaire
 * @returns {object} les données du formulaire sous la forme d'un objet javascript
 */
function formToData(formId) {
    let formElement = document.getElementById(formId);
    let formData = {};
    Array.from(formElement.querySelectorAll('input, select, textarea'))
        .filter(element => element.name)
        .forEach(element => {
            formData[element.name] = element.type === 'checkbox' ? element.checked : element.value;
        });
    return formData;
}

/**
 * Initialise les champs d'un formulaire avec un objet javascript
 * @param {object} data les données à afficher dans le formulaire
 * @param {string} formId l'id du formulaire
 */
function dataToForm(data, formId) {
    let form = document.getElementById(formId);
    Object.keys(data).forEach(key => {
        let element = form.querySelector(`[name=${key}]`);
        if (element) {
            element.value = data[key];
        }
    });
}

/**
 * Convertit les données d'un formulaire en JSON
 * @param {string} formId l'id du formulaire
 * @returns {string} les données du formulaire au format JSON
 */
function formToJson(formId) {
    return JSON.stringify(formToData(formId));
}
