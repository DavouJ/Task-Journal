const userInput = $('textarea')

const userTasks = [0,0,0,0,0,0,0,0,0]
$(document).ready(function(){
    function displayTime(){
        $('#currentDay').text(dayjs().format('DD MMM YYYY[,] hh:mm:ss a'))
    }

    function setCurrent(){
        let timeBlock = $('.time-block')
        
        timeBlock.each(function(){
            if(localStorage.getItem(parseInt($(this).attr('id'))) !== null){
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

    $('button').on("click", function(){
        
        let parent = $(this).parent()
        let index = parseInt($(this).parent().attr('id'))
        
        //userTasks[parseInt($(this).parent().attr('id'))] = parent.find(userInput).val()
        //console.log(userTasks)
        localStorage.setItem(index, JSON.stringify(parent.find(userInput).val()))
        let task = JSON.parse(localStorage.getItem(index))
        parent.find(userInput).val(task)
        
    })

    setInterval(displayTime,1000)
    setCurrent()
    setInterval(setCurrent, 10000)



});