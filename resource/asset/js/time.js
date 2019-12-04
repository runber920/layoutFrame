/**
 * @Description: 动态获取系统时间显示 <br>
 * @author: 王明 <br>
 * @date: 2019-07-09 08:20:26 上午 <br>
 * @from: [海南省海口市美兰区 runber920@outlook.com] <br>
 * @version: v 1.0 <br>
 */
function timeTick() {
	var year, month, day, hours, minutes, seconds, ap;
	var intYear, intMonth, intDay, intHours, intMinutes, intSeconds;
	var today;
	today = new Date();
	//intYear = today.getYear(); + 1900;
	//intYear = today.getYear();
	//通过检测发现，IE6-IE8都是正常的，IE9及以上的版本就不正常了。
	intYear = (today.getYear() < 1900) ? (1900 + today.getYear()) : today.getYear();
	intMonth = today.getMonth() + 1;
	intDay = today.getDate();
	intHours = today.getHours();
	intMinutes = today.getMinutes();
	intSeconds = today.getSeconds();
	// 获取系统时间的小时数
/*	if (intHours == 0) {
		hours = intHours + ":";ap = "凌 晨";
	} else if (intHours < 12) {
		hours = intHours + ":";ap = "早 晨";
	} else if (intHours == 12) {
		hours = intHours + ":";ap = "中 午";
	} else {
		intHours = intHours - 12;
		hours = intHours + ":";ap = "下 午";
	}
	*/
	
if(intHours < 6){hours = intHours + ":";ap ="凌晨好"} 
else if (intHours < 9){hours = intHours + ":";ap ="早上好"} 
else if (intHours < 12){hours = intHours + ":";ap ="上午好"} 
else if (intHours < 14){hours = intHours + ":";ap ="中午好"} 
else if (intHours < 17){hours = intHours + ":";ap ="下午好"} 
else if (intHours < 19){hours = intHours + ":";ap ="傍晚好"} 
else if (intHours < 22){hours = intHours + ":";ap ="晚上好"} 
else {hours = intHours + ":";ap = "夜里好"} 
	
	
	// 获取系统时间的分数
	if (intMinutes < 10) {
		minutes = "0" + intMinutes + ":";
	} else {
		minutes = intMinutes + ":";
	}
	// 获取系统时间的秒数
	if (intSeconds < 10) {
		seconds = "0" + intSeconds + " ";
	} else {
		seconds = intSeconds + " ";
	}
	var myweekday = "";
	mydate = new Date();
	myweekday = mydate.getDay();
	if (myweekday == 0)
		weekday = " 星期日 ";
	else if (myweekday == 1)
		weekday = " 星期一 ";
	else if (myweekday == 2)
		weekday = " 星期二 ";
	else if (myweekday == 3)
		weekday = " 星期三 ";
	else if (myweekday == 4)
		weekday = " 星期四 ";
	else if (myweekday == 5)
		weekday = " 星期五 ";
	else if (myweekday == 6)
		weekday = " 星期六 ";
	//timeString = intYear + '年' + intMonth + '月' + intDay + '日' + hours + minutes + seconds + ap + "  " + weekday;
	timeString = intYear + '年' + intMonth + '月' + intDay + '日' + hours + minutes + seconds + " " + weekday;
	document.getElementById("Clock").innerHTML = "["+timeString+"]";
	// 每隔0.1秒钟执行一次tick函数
	window.setTimeout("timeTick()", 100);
};

