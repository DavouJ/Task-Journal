const userinput = $('.user-input')
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



    setInterval(displayTime,1000)
    setCurrent()
    setInterval(setCurrent, 10000)



});