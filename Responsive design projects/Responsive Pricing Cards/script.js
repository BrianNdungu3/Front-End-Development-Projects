function togglePricing() {
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        var price = card.querySelector('.price');
        var button = card.querySelector('button');
        if (price.innerHTML.includes('/month')) {
            price.innerHTML = price.innerHTML.replace('/month', '/year');
            button.innerHTML = 'Switch to Monthly';
        } else {
            price.innerHTML = price.innerHTML.replace('/year', '/month');
            button.innerHTML = 'Switch to Yearly';
        }
    });
}
