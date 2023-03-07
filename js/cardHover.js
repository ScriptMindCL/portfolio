const card = document.querySelector('.card');
const cardDetails = document.querySelector('.card-details');


export const CardHover = () => {

    //Event Listeners
    card.addEventListener('mouseover', showDetails);
    card.addEventListener('mouseout', showDetails);

    //Functions 
    function showDetails(e) {
        console.log(e);
        if (e.type === 'mouseover') {
            cardDetails.setAttribute('style', 'display: flex')
        }
        if (e.type === 'mouseout'){
            cardDetails.setAttribute('style', 'display: none')
        }
    }
}