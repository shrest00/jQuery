// set heading content
const setUp = () =>{
    // Assign your name, major, and year to the level 3 headings
    $('#name').text('Name = Shakila Shrestha'); 
    $('#major').text('Major = CGT Interactive Muiltimedia'); 
    $('#year').text('Year = Senior'); 

    // Set the level 4 heading with bold content
    $('h4').html("<em>State = Indiana, USA</em>"); 
}

// Call the function when the document is ready
$(document).ready(setUp);


