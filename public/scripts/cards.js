

function chooseCard(year, month, money) {
    if (year < 1998 && year > 1958  ) {
        if(money > 50 && money < 6000){
            if (month < 12){
                $('#resultCard').val("МТБанк 'Халва'");
                $('#moreInf').append('<a href="#halva" class="button more" >Подробнее</a>');
            }
        }
        else{
            if( money < 1000){
                if (month < 24){
                    $('#resultCard').val("Белгазпром 'Карта покупок'");
                    $('#moreInf').append('<a href="#pokupok" class="button more">Подробнее</a>');
                }
            }
            else {
                if( money < 1500){
                    if (month < 24){
                        $('#resultCard').val("Москва-Минск 'SMART'");
                        $('#moreInf').append('<a href="#smart" class="button more">Подробнее</a>');
                    }
                }
            }
        }


    }
    else{
        $('#resultCard').val('Не доступно оформить рассрочку');
    }
}

$('#btnResultCard').click(function(){
    let year = $('#year').val();
    let month = $('#monthSum').val();
    let money = $('#moneySum').val();
    chooseCard(year, month, money);
});
