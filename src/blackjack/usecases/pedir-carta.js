/**
 * Esta funcion pide una carta
 * @param {Array<string>} deck Es un arreglo de string
 * @returns{String} retorna un String con el valor de la carta
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}