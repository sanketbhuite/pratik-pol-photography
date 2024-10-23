let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitorCount').innerText = `Visitor Count: ${visitCount}`;


    function showHome() {
        document.getElementById('homePage').style.display = 'block';
        document.getElementById('galleryPage').style.display = 'none';
        document.getElementById('aboutPage').style.display = 'none';
    }

    function showGallery() {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('galleryPage').style.display = 'block';
        document.getElementById('aboutPage').style.display = 'none';
    }

    function showAbout() {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('galleryPage').style.display = 'none';
        document.getElementById('aboutPage').style.display = 'block';
    }

