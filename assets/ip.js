$.getJSON("https://api.ipify.org?format=jsonp&callback=?", function(ip_data){
    var ip_address = ip_data.ip;
    // $.getJSON("http://ip-api.com/json/" + ip_address, function(data){
    
    // var city = data.city,
    //     region = data.regionName,
    //     country = data.country,
    //     isp = data.isp,
    //     location =  city + ', ' + region + ', ' + country,
    //     loc_gmap = encodeURIComponent(location),
    //     loc_iframe = `
    //         <iframe
    //             width="400"
    //             height="400"
    //             frameborder="0" style="border:0"
    //             src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCGXwwRdW5nMP90h3w9rd5gApXb8jkcPJg
    //                 &q=${loc_gmap}&zoom=12">
    //         </iframe>
    //     `;

    // console.log(city);
    
    // });
    console.log(ip_address);
    console.log('{{ page.layout }}');
});
