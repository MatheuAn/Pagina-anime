
    
    //Title Postagem
   document.addEventListener('DOMContentLoaded', function () {
            var titlePost = document.querySelector('.titlePostagem');
            var tititpm = document.getElementById('tititpm');

            if (titlePost && tititpm) {
                tititpm.textContent = titlePost.textContent;
            }
        });
