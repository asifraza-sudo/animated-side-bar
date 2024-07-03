
document.addEventListener('DOMContentLoaded', function() {
    var mySidebar = document.getElementById('sidebar');
    var myOpenBtn = document.getElementById('openBtn');
    var myCloseBtn = document.getElementById('closeBtn');
    var myMenuItems = document.querySelectorAll('.mySidebar-menu li');

    myOpenBtn.addEventListener('click', function() {
        mySidebar.style.width = '250px';
        document.body.style.marginLeft = '250px';
        myMenuItems.forEach(function(item, index) {
            item.style.animationDelay = (index * 0.1) + 's';
        });
    });

    myCloseBtn.addEventListener('click', function() {
        mySidebar.style.width = '0';
        document.body.style.marginLeft = '0';
        myMenuItems.forEach(function(item) {
            item.style.animationDelay = '0s';
        });
    });
});
