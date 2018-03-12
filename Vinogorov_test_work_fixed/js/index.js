var title = document.getElementsByClassName('capabilities_heading'),
    cont = document.getElementsByClassName('capabilities_list'),
    press = 0;

for (var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function() {
    	press += 1;
        if (!(this.classList.contains('active'))) {
            for(var i = 0; i < title.length; i++) {
                title[i].classList.remove('active');
            }
            this.classList.add('active');
        }
        if (press == 2) {
        	this.classList.remove('active')
       		press = 0;
        }
    })
}

