
document.addEventListener('DOMContentLoaded', function() {

    
    const links = document.querySelectorAll('a');

    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
          
            console.log('You clicked on:', link.textContent);

            
            alert('Navigating to ' + link.textContent);
        });
    });

});
