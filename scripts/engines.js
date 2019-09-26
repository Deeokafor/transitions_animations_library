//Copy from context function
function copy(){
    "use strict";

    var copyBtn = document.querySelectorAll('copy-code');
    var copied = document.querySelectorAll('copied');

    /*copyBtn.addEventListener('click', function(){
        copied.style.display = 'span';
        copied.innerHTML = 'copied';
        console.log('copy button clicked');
    });*/

    copyBtn.addEventListener('click', copyItem);
    function copyItem(){
        copied.style.display = 'span';
        console.log('copy button clicked');
    }

}
copy();

