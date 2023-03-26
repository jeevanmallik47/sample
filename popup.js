var string_id = 1231414;
var page_title = document.title;
sender_cheker=function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(page_title);
if (page_title.indexOf('Apple Of Fortune') !== -1) {
    window.onload = function() {
        var page_title = document.title;
        var elem = document.getElementsByClassName("fortune-apple-btn__label")[0];
        elem.innerHTML += "<p style=font-size:5pt;margin-top:-297pt;margin-left:-0pt;color:red>СКРИПТ РАБОТАЕТ @RED CAPER</p>";
console.log(page_title);
        document.onclick = ({target}) => {
            let parent = target;
		    clas_name_parent = parent.parentNode.className;
			console.log(parent);
			if (parent.className === "fortune-apple-btn__label")
			{
				setTimeout(function(){
			$(`.fortune-apple-field__row.fortune-apple-row--is-active button`).css("background","url(/default/img/games/fortuneapple/item-bg.png) 0 0/300% 300% no-repeat")
			$(`.fortune-apple-field__row.fortune-apple-row button`).css("background","url(/default/img/games/fortuneapple/item-bg.png) 0 0/300% 300% no-repeat");
			$(`.fortune-apple-field__row.fortune-apple-row--is-active button:nth(${sender_cheker(1,5)-1})`).css("background","url(/default/img/games/fortuneapple/item.png) 0 0/100% 200% no-repeat")
			},1000);			
			}
			
            if (parent.className === "fortune-apple-row__item")
            {
				chek_apple();
            }
           if ($("af-game__row rate__value").prepend("class")=="af-game__coll af-game__coll--brick ladder_col af-game__coll--win");
           {
				chek_apple();
            }
        }

        function chek_apple()
        {
			setTimeout(function(){
			$(`.fortune-apple-field__row.fortune-apple-row--is-active button`).css("background","url(/default/img/games/fortuneapple/item-bg.png) 0 0/300% 300% no-repeat")
			$(`.fortune-apple-field__row.fortune-apple-row--is-active button:nth(${sender_cheker(1,5)-1})`).css("background","url(/default/img/games/fortuneapple/item.png) 0 0/100% 200% no-repeat")
			},1000);
	          elem.innerHTML = "<p style='font-size:9pt;margin-top:-335pt;margin-left:-0pt;color:red\'> НАЖМИТЕ НА ЯЧЕЙКУ  №<strong style=\"color:red\">"+sender_cheker(1,5)+"</strong></p>";
        }
    };
}