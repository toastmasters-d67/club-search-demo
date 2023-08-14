document.getElementById('divisionSelect').addEventListener('change', function() {
    filterResults();
});

document.getElementById('keywordSearch').addEventListener('input', function() {
    filterResults();
});

function filterResults() {
    var selectedDivision = document.getElementById('divisionSelect').value;
    var keyword = document.getElementById('keywordSearch').value.toLowerCase();
    var clubs = document.querySelectorAll('#clubList li');

    clubs.forEach(function(club) {
        var clubName = club.querySelector('a').textContent.toLowerCase();
        var clubDivision = club.getAttribute('data-division');

        if (clubName.includes(keyword) && clubDivision === selectedDivision) {
            club.style.display = 'block';
        } else {
            club.style.display = 'none';
        }
    });
}
