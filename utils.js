function getAge(){
	dob = dateDiff('2019-10-31');
	document.getElementById('dob').innerText = dob;
}

function setActiveElement(el){
	el.classList.add('active');
}

function removeAllActive(nodes){
	nodes[1].classList.remove("active");
	nodes[3].classList.remove("active");
	nodes[5].classList.remove("active");
	nodes[7].classList.remove("active");
}

function setActive(item) {
	list = "";
	current = "";
	// Handle case of pressing the main logo
	if (item == "home") {
		current = document.getElementById("nav1");
		// Get list of all elements in navbar
		list = document.getElementById("nav1").parentElement.childNodes;
	} else{
		// Move to location
		window.location = item.attributes.href.value;
		// Get list of all elements in navbar
		list = item.parentElement.parentElement.childNodes;
		current = item.parentElement;
	}
	// Reset all active items and assign active to current section
	removeAllActive(list);
	// Add current element as active
	setActiveElement(current);
}

$(window).scroll(function() {
    var height = $(window).scrollTop();    
    // Use to measure when to change
    console.log(height);
    list = document.getElementById("navs").childNodes;
    removeAllActive(list);
    if(height  >= 6556) {
    	// set contact_us
    	setActiveElement(document.getElementById("nav4"));
    } else if (height >= 1397){
    	// set images
    	setActiveElement(document.getElementById("nav3"));
    } else if (height >= 621){
    	// set about
    	setActiveElement(document.getElementById("nav2"));
    } else {
    	// set home
    	setActiveElement(document.getElementById("nav1"));
    }
});

function dateDiff(startingDate, endingDate) {
	var str = "";
    var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
    if (!endingDate) {
        endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
    }
    var endDate = new Date(endingDate);
    if (startDate > endDate) {
        var swap = startDate;
        startDate = endDate;
        endDate = swap;
    }
    var startYear = startDate.getFullYear();
    var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
    var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var yearDiff = endDate.getFullYear() - startYear;
    var monthDiff = endDate.getMonth() - startDate.getMonth();
    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }
    var dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
        if (monthDiff > 0) {
            monthDiff--;
        } else {
            yearDiff--;
            monthDiff = 11;
        }
        dayDiff += daysInMonth[startDate.getMonth()];
    }
    // Handle special cases
    // Years
    if (yearDiff == 1)	str += yearDiff + " Year ";
    else if (yearDiff > 0)	str += yearDiff + " Years ";
   	//Months
    if (monthDiff == 1)	str += monthDiff + " Month ";
    else if (monthDiff > 0)	str += monthDiff + " Months ";
    //Days
    if (dayDiff == 1)	str += dayDiff + " Day";
    else if (dayDiff > 0)	str += dayDiff + " Days";
    //Return
    return str;
}