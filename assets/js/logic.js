const userInput = $('textarea')

// Execute the following code when the DOM is fully loaded
$(document).ready(function(){
    // Function to display the current date and time using the 'dayjs' library
    function displayTime(){
        $('#currentDay').text(dayjs().format('DD MMM YYYY[,] hh:mm:ss a'))
    }

    // Function to set the styles and values for each time block based on the current time
    function setCurrent(){
        let timeBlock = $('.time-block')

        // Iterate through each time block
        timeBlock.each(function(){
            // Check if there is a stored value in the local storage for the current time block
            if(localStorage.getItem(parseInt($(this).attr('id'))) !== null){
                // If yes, set the value of the textarea to the stored value
                $(this).find(userInput).val(JSON.parse(localStorage.getItem(parseInt($(this).attr('id')))))
            }
            if (dayjs().hour() > parseInt($(this).attr('id'))){
                $(this).addClass(" past")
                $(this).removeClass(" present")
            }
            else if (dayjs().hour() === parseInt($(this).attr('id'))){
                $(this).addClass(" present")
                $(this).removeClass(" future")
            }
            else if( dayjs().hour() < parseInt($(this).attr('id'))){
                $(this).addClass(" future")
            }
        })
    }

// Event handler for the click event on buttons within the document
    $('button').on("click", function(){
        
        let parent = $(this).parent()
        let index = parseInt($(this).parent().attr('id'))
        
        // Store the value of the textarea in the local storage with the key being the time block's ID
        localStorage.setItem(index, JSON.stringify(parent.find(userInput).val()))

        // Retrieve the stored value from the local storage and set it as the value of the textarea
        let task = JSON.parse(localStorage.getItem(index))
        parent.find(userInput).val(task)
        
    })
    // Update the displayed time every second
    setInterval(displayTime,1000)

    // Set the current styles and values for time blocks on page load then update the current styles for time blocks every minute
    setCurrent()
    setInterval(setCurrent, 60000)



});