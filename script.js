document.getElementById('filterButton').addEventListener('click', function() {
    filterResults();
});

function filterResults() {
    var selectedDivision = document.getElementById('divisionSelect').value;
    var selectedCity = document.getElementById('citySelect').value;
    var selectedMeetingDay = document.getElementById('meetingDaySelect').value;
    var selectedClubType = document.getElementById('clubTypeSelect').value;
    var selectedLanguage = document.getElementById('languageSelect').value;
    var keyword = document.getElementById('keywordSearch').value.toLowerCase();
    var clubs = document.querySelectorAll('#clubList li');

    clubs.forEach(function(club) {
        var clubName = club.querySelector('a').textContent.toLowerCase();
        var clubFeatures = club.getAttribute('data-features').toLowerCase();
        var matchesKeyword = clubName.includes(keyword) || clubFeatures.includes(keyword);

        var clubDivision = club.getAttribute('data-division');
        var clubCity = club.getAttribute('data-city');
        var clubMeetingDay = club.getAttribute('data-meeting-day');
        var clubType = club.getAttribute('data-club-type');
        var clubLanguage = club.getAttribute('data-language');

        if (matchesKeyword && 
            (clubDivision === selectedDivision || selectedDivision === 'all') &&
            (clubCity === selectedCity || selectedCity === 'all') &&
            (clubMeetingDay === selectedMeetingDay || selectedMeetingDay === 'all') &&
            (clubType === selectedClubType || selectedClubType === 'all') &&
            (clubLanguage === selectedLanguage || selectedLanguage === 'all')) {
            club.style.display = 'block';
        } else {
            club.style.display = 'none';
        }
    });
}
