// var url = window.location.href;
// 	url = url.split("=");

// const data = null;

// const xhr = new XMLHttpRequest();

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

// var cityName = url[1];
// var requestURL = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query="+ cityName;

// xhr.open("GET", requestURL);
// xhr.setRequestHeader("X-RapidAPI-Host", "travel-advisor.p.rapidapi.com");
// xhr.setRequestHeader("X-RapidAPI-Key", "edc9fb93dfmsh4d8375f0c9307f5p1565f4jsnc27085c650ef");

// xhr.send(data);

// xhr.onload = () => {
// 	  // process response
// 	if (xhr.status == 200) {
// 	    // parse JSON data
// 	    //console.log(JSON.parse(xhr.response))
// 	    let responseObj = JSON.parse(xhr.response);
// 	    console.log (responseObj.data.Typeahead_autocomplete.results);
// 	} else {
//     	console.log('Error!')
//  	}	
// }

let url = new URLSearchParams(location.search);

//! To populate the HTML with new elements
let listOfHotels = (list) => {
   let listOfHotels = document.getElementById('list-view');

   list.forEach(hotel => {
      let hotelAnchorTag = document.createElement("a");
      hotelAnchorTag.setAttribute("href", `detail.html?id=` + hotel.result_object.location_id);
      hotelAnchorTag.setAttribute("class", "hotel-list-item");
      listOfHotels.appendChild(hotelAnchorTag);

      let hotelImage = document.createElement("img");
      hotelImage.innerHTML = "<img src=" + hotel.result_object.photo.images.small.url + " alt='" + hotel.result_object.name + "' class='hotel-image-small'/>";
      hotelAnchorTag.appendChild(hotelImage);

      let hotelContent = document.createElement("div");
      hotelContent.setAttribute("class", "description");
      hotelAnchorTag.appendChild(hotelContent);

      hotelContent.innerHTML += "<h3>" + hotel.result_object.name + "</h3>";
      hotelContent.innerHTML += hotel.result_object.rating + " <i class=\"material-icons\" style=\"color: gold;\">star</i>";
      hotelContent.innerHTML += "<p>" + hotel.result_object.address + "</p>";
   });
}

// HTTP request
let sendHttpRequest = () => {
   let xhr = new XMLHttpRequest();

   xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
         let result = JSON.parse(this.responseText).data;

         let arr = [];
         list = result.filter((element) => element.result_type == "lodging");

         list.forEach((element) => {
            arr.push([element.result_object.name
               + "<br><a href=\"detail.html?id="
               + element.result_object.location_id
               + "\">Book Hotel</a>", element.result_object.latitude, element.result_object.longitude]);
         });

         listOfHotels(list);

      }
   });

   xhr.open("GET", "https://travel-advisor.p.rapidapi.com/" + "locations/search?lang=en_US&limit=100&query=" + url.get('city'));
   xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
   xhr.setRequestHeader("x-rapidapi-key", "edc9fb93dfmsh4d8375f0c9307f5p1565f4jsnc27085c650ef");

   xhr.send();
}

sendHttpRequest();
