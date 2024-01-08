const userInput = $('textarea')

const userTasks = []
$(document).ready(function(){
    function displayTime(){
        $('#currentDay').text(dayjs().format('DD MMM YYYY[,] hh:mm:ss a'))
    }

    function setCurrent(){
        let timeBlock = $('.time-block')
        timeBlock.each(function(){
            
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

    $('button').on("click", function(){
        let parent = $(this).parent()
        
        userTasks[parseInt($(this).parent().attr('id'))] = parent.find(userInput).val()
        console.log(userTasks)
        userTasksSerialised = JSON.stringify(userTasks)

    })

    setInterval(displayTime,1000)
    setCurrent()
    setInterval(setCurrent, 10000)



});