var homePage = document.querySelector('#home')
var corsairPage = document.querySelector('#corsair-wrapper')




document.querySelector("#corsair-button").addEventListener('click', function(e) {
    

    setTimeout(function () {
        
        corsairPage.classList.add('opacity-change');
        
    }, 600);
})
