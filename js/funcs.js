var debug = 2; // -1: disable; 0: all; N: show level N debug msg.

//农历数据信息
var lunarInfo = new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0,
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0)

//太阳历每月天数
var solarMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
//天干
var Gan = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
//地支
var Zhi = new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
//属相
var Animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
//节气
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
//节气信息
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
//中文字串
var nStr1 = new Array('日','一','二','三','四','五','六','七','八','九','十');
var nStr2 = new Array('初','十','廿','卅','　');
//英语月份简写
var monthName = new Array("JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC");
//阴历日期中文
var chMonthName = new Array("正",'一','二','三','四','五','六','七','八','九','十','十一','腊');
var chDayName = new Array("初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十日","卅一日");
//国历节日 *表示节假日
var sFtv = new Array(
		"0101*元旦",
		"0214 情人节",
		"0308 妇女节",
		"0312 植树节",
		"0315 消费者权益日",
		"0401 愚人节",
		"0501*劳动节",
		"0504 青年节",
		"0601 儿童节",
		"0701 建党节 香港回归纪念日",
		"0801 建军节",
		"0808 父亲节",
		"0910 教师节",
		"1001*国庆节",
		"1220 澳门回归纪念日",
		"1225 圣诞节",
		"1226 毛泽东诞辰纪念"
		);

//农历节日 *表示节假日
var lFtv = new Array(
		"0101*春节",
		"0115 元宵节",
		"0505 端午节",
		"0707 七夕情人节",
		"0715 中元节",
		"0815 中秋节",
		"0909 重阳节",
		"1208 腊八节",
		"1223 小年",
		"0100*除夕"
		);

//按周计算 月周日
var wFtv = new Array(
		"0520 母亲节",
		"0630 国际父亲节"
		);

function log(level,  msg) {
        if (debug == 0 || debug == level)
        if(window.console) {
                window.console.log("[DEBUG]" + msg);
        }
}
//返回农历y年总天数
function lYearDays(y) {
   var i, sum = 348;
   for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0;
   return(sum+leapDays(y));
}
//返回农历y年闰月的天数
function leapDays(y) {
   if(leapMonth(y))  return((lunarInfo[y-1900] & 0x10000)? 30: 29);
   else return(0);
}
//返回农历 y年闰哪个月 1-12 , 没有闰月返回 0
function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf);
}
//返回农历 y年m月的总天数
function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
}
//根据日期算出农历日期
function Lunar(objDate) {
   var m = ""; // msg for log
   var i, leap=0, temp=0;
   var baseDate = new Date(1900,0,31);
   var offset   = Math.floor((objDate.getTime() + 2206425600000)/86400000);
   m += "objDate="+objDate.getTime()+", new Date(1900,0,31)="+baseDate.getTime();
   m += "offset="+offset;
   
   this.dayCyl = offset + 40;
   this.monCyl = 14;

   for(i=1900; i<2050 && offset>0; i++) {
      temp = lYearDays(i);
      offset -= temp;
      this.monCyl += 12;
   }
   
   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12;
   }

   this.year = i;
   this.yearCyl = i-1864;

   leap = leapMonth(i);
   this.isLeap = false;

   for(i=1; i<13 && offset>0; i++) {
      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { --i; this.isLeap = true; temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }

      if(this.isLeap==true && i==(leap+1)) this.isLeap = false;

      offset -= temp;
      if(this.isLeap == false) this.monCyl ++;
   }

   if(offset==0 && leap>0 && i==leap+1)
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { this.isLeap = true; --i; --this.monCyl;}

   if(offset<0){ offset += temp; --i; --this.monCyl; }

   this.month = i;
   this.day = offset + 1;
   
   m += "\noffset="+offset+", year="+this.year+", yearCyl="+this.yearCyl+", month="+this.month+",\n monthCyl="+this.monthCyl+", day="+this.day+", dayCyl="+this.dayCyl;
   log(2, m);
}
//返回公历天数
function solarDays(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
   else
      return(solarMonth[m]);
}
//返回干支
function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12]);
}
//日历对象
function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {

      this.isToday    = false;
      this.sYear      = sYear;
      this.sMonth     = sMonth;
      this.sDay       = sDay;
      this.week       = week;
      this.lYear      = lYear;
      this.lMonth     = lMonth;
      this.lDay       = lDay;
      this.isLeap     = isLeap;
      this.cYear      = cYear;
      this.cMonth     = cMonth;
      this.cDay       = cDay;

      this.color      = '';

      this.lunarFestival = '';
      this.solarFestival = '';
      this.solarTerms    = '';

}
//返回某年的第n个节气对应日期
function sTerm(y,n) {
   log(1,  "y="+y+" n="+n+" sTermInfo[n]="+sTermInfo[n]+" Date.UTC(1900,0,6,2,5)="+Date.UTC(1900,0,6,2,5)+" Date.UTC(1970,0,1,0,0)="+Date.UTC(1970,0,1,0,0) );
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) -2208549300000 );
   return(offDate.getUTCDate());
}
//建立日历
function calendar(y,m) {
    	log(1,  "i am in calendar() now");
	var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2;
	var lDPOS = new Array(3);
	var n = 0;
	var firstLM = 0;
     
	sDObj = new Date(y,m,1);
	     
	this.length    = solarDays(y,m);
    this.firstWeek = sDObj.getDay();

        log(1,  "this.length: "+this.length);
        log(1,  "begin loop for(var i=0;i<this.length;i++)");
	
	for(var i=0;i<this.length;i++) {	  
		if(lD>lX) {
			sDObj = new Date(y,m,i+1);
			lDObj = new Lunar(sDObj);
			lY    = lDObj.year;
			lM    = lDObj.month;
			lD    = lDObj.day;
			lL    = lDObj.isLeap;
			lX    = lL? leapDays(lY): monthDays(lY,lM);
	       
			if(n==0) firstLM = lM;
			lDPOS[n++] = i-lD+1;
	  	}
	  
		this[i] = new calElement(y, m+1, i+1, nStr1[(i+this.firstWeek)%7],
                               lY, lM, lD++, lL,
                               cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl), cyclical(lDObj.dayCyl++) );

		if((i+this.firstWeek)%7==0) this[i].color = '#fe7c50';
		if((i+this.firstWeek)%7==6) this[i].color = '#fe7c50';
     	}
        log(1,  "end loop for(var i=0;i<this.length;i++)");

	tmp1=sTerm(y,m*2  )-1;
	tmp2=sTerm(y,m*2+1)-1;
	log(1,  "m: "+m+" tmp1: "+tmp1+" "+solarTerm[m*2]+" tmp2: "+tmp2+" "+solarTerm[m*2+1]);
	this[tmp1].solarTerms = solarTerm[m*2];
     	this[tmp2].solarTerms = solarTerm[m*2+1];
	if(m==3) this[tmp1].color = '#fe7c50';
        
        log(1,  "begin loop for(i in sFtv)");
	for(i in sFtv)
		if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
			if(Number(RegExp.$1)==(m+1)) {
				this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' ';
				if(RegExp.$3=='*') this[Number(RegExp.$2)-1].color = '#fe7c50';
	       		}
     
        log(1,  "begin loop for(i in wFtv)");
	for(i in wFtv)
		if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
			if(Number(RegExp.$1)==(m+1)) {
				tmp1=Number(RegExp.$2);
				tmp2=Number(RegExp.$3);
				this[((this.firstWeek>tmp2)?7:0) + 7*(tmp1-1) + tmp2 - this.firstWeek].solarFestival += RegExp.$5 + ' ';
	       		}
     
        log(1,  "begin loop for(i in lFtv)");
	for(i in lFtv)  
		if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                        log(1,  lFtv[i]);
			tmp1=Number(RegExp.$1)-firstLM;
			if(tmp1==-11) tmp1=1;
			if(tmp1 >=0 && tmp1<n) {
				tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1;
				if( tmp2 >= 0 && tmp2<this.length) {
                                        log(1,  "tmp2 >= 0 && tmp2("+tmp2+")<this.length("+this.length+")");
                                        log(1,  RegExp.$4);
                                        log(1,  this[tmp2].lunarFestival);
					this[tmp2].lunarFestival += RegExp.$4 + ' ';
                                        log(1,  RegExp.$3);
					if(RegExp.$3=='*') this[tmp2].color = '#fe7c50';
				}
			}
	  	}
     
        
     
	if(y==tY && m==tM) {
		this[tD-1].isToday = true;
	}
}
//将日期名称转换为中文
function cDay(d){
	var s;
	switch (d) {
		case 10:
			s = '初十'; 
			break;
		case 20:
			s = '二十'; 
			break;
		case 30:
			s = '三十';
			break;
		default :
			s = nStr2[Math.floor(d/10)];
			s += nStr1[d%10];
	}
	return(s);
}


var cld;
//显示SY年SM月的日历
function drawCld(SY,SM) {
        log(1,  "i am in drawCld() now");
        
	var i,sD,s,size;
	var today = new Date();
	var d = today.getDate() - 1;
		log(1,  "begin to create calendar cld");
	cld = new calendar(SY,SM);
        log(1,  "calendar cld creation finished");

	document.getElementById("gz").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;农历' 
		+ cyclical(SY-1900+36) + Animals[(SY-4)%12] + '年 &nbsp;&nbsp;';
        log(1,  "innerHTML of gz is "+document.getElementById("gz").innerHTML);
    
    document.getElementById("datedetail").innerHTML = cld[d].sYear +'年'+ cld[d].sMonth
			+ '月'+cld[d].sDay +'日  星期' + cld[d].week + '<br /><p></p>' ;
	document.getElementById("daybig").innerHTML = cld[d].sDay +'<p></p>';
	document.getElementById("gzday").innerHTML = '<span>农历' + (cld[d].isLeap?'闰':'')
			+ chMonthName[cld[d].lMonth] + '月' + chDayName[cld[d].lDay - 1] + '<br />'
			+ cld[d].cYear + '年' + cld[d].cMonth
			+ '月' + cld[d].cDay + '日</span>';
    for(i=0;i<42;i++) {
	  
		sObj = document.getElementById('sd'+ i);
		lObj = document.getElementById('ld'+ i);
	  
		sObj.style.background = '';
	  	lObj.style.background = '';

		sD = i - cld.firstWeek + 1;	  	
	  	if(cld.firstWeek == 0){
	  		sD = i - cld.firstWeek - 6;
	  	}

		if(sD>-1 && sD<cld.length) {	       
			sObj.innerHTML = sD+1;
			if(cld[sD].isToday){
				//设置今天的背景色
				sObj.style.background = '#f9f5f1';
				lObj.style.background = '#f9f5f1';
			}
	       
			sObj.style.color = cld[sD].color;
			if(cld[sD].lDay==1)
				lObj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') 
					+ chMonthName[cld[sD].lMonth] + '月' 
					+ '初一' + '</b>';
			else
		    		lObj.innerHTML = cDay(cld[sD].lDay);
	       
			s=cld[sD].lunarFestival;
			if(s.length>0) {
				//农历节日名称大于5个字截去
				if(s.length>7) s = s.substr(0, 5)+'…';
				s = s.fontcolor('#8eb475');
			}
			else {
				s=cld[sD].solarFestival;
				if(s.length>0) {
					//阳历节日名称截去			
					size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?9:5;
			 		if(s.length>size+1) s = s.substr(0, size-1)+'…';
					s = s.fontcolor('#86a9c0');
				}
				else {
					s=cld[sD].solarTerms;
					if(s.length>0) s = s.fontcolor('#8eb475');
				}
			}
			if(s.length>0) lObj.innerHTML = s;
	  
		}
		else {
			sObj.innerHTML = ' ';
			lObj.innerHTML = ' ';
		}
     	}
}

//更改日历
function changeCld() {
	var y,m;
	y = document.getElementById("sy").selectedIndex + 1900;
	m = document.getElementById("sm").selectedIndex;
     	drawCld(y,m);
}
//按钮响应
function pushBtm(K) {
	switch (K){
		case 'YU' :
			if(document.getElementById("sy").selectedIndex > 0)
			       	document.getElementById("sy").selectedIndex--;
			break;
		case 'YD' :
			if(document.getElementById("sy").selectedIndex < 149) 
				document.getElementById("sy").selectedIndex++;
	       		break;
		case 'MU' :
			if(document.getElementById("sm").selectedIndex > 0) {      
				document.getElementById("sm").selectedIndex--;
			}
			else {
				document.getElementById("sm").selectedIndex = 11;
				if(document.getElementById("sy").selectedIndex > 0) 
					document.getElementById("sy").selectedIndex--;
			}
			break;
		case 'MD' :
			if(document.getElementById("sm").selectedIndex < 11) {
				document.getElementById("sm").selectedIndex++;
			}
			else {
				document.getElementById("sm").selectedIndex = 0;
				if(document.getElementById("sy").selectedIndex < 149) 
					document.getElementById("sy").selectedIndex++;
			}
			break;
		default :
			document.getElementById("sy").selectedIndex = tY - 1900;
			document.getElementById("sm").selectedIndex = tM;
	}
	changeCld();
}

var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();

var width = "130"; //detail层宽度
var offsetx = 2;
var offsety = 16;

var x = 0;
var y = 0;
var show = 0;
var sw = 0;
var cnt = 0;

var dStyle;

//日期点击响应
function mClick(v) {

	var festival = document.getElementById("festival");
	var datedetail = document.getElementById("datedetail");
	var sObj = document.getElementById('sd'+ v);
	var d = sObj.innerHTML - 1;
     
	if( sObj.innerHTML != '' ) {
		
		if(cld[d].solarTerms == '' 
				&& cld[d].solarFestival == '' 
				&& cld[d].lunarFestival == '')
		{
			festival.innerHTML = "";
		}
		else
		{			
			festival.innerHTML = cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival;
		}
		document.getElementById("gz").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;农历' 
		+ cyclical(cld[d].sYear-1900+36) + Animals[(cld[d].sYear-4)%12] + '年 &nbsp;&nbsp;';
        log(1,  "innerHTML of gz is "+document.getElementById("gz").innerHTML);
    
    	document.getElementById("datedetail").innerHTML = cld[d].sYear +'年'+ cld[d].sMonth
			+ '月'+cld[d].sDay +'日  星期' + cld[d].week + '<br /><p></p>' ;
		document.getElementById("daybig").innerHTML = cld[d].sDay + '<br/><p></p>';
		document.getElementById("gzday").innerHTML = '<span>农历' + (cld[d].isLeap?'闰':'')
			+ chMonthName[cld[d].lMonth] + '月' + chDayName[cld[d].lDay - 1] + '<br />'
			+ cld[d].cYear + '年' + cld[d].cMonth
			+ '月' + cld[d].cDay + '日</span>';
	}
}
//实时时间显示
function tick() {
	var today;
	var flag = true;
	var apm = new Array("上午","下午");
	today = new Date();
	var hours=today.getHours();
	var minutes=today.getMinutes();
	var seconds=today.getSeconds();
	if(hours > 12){
		hours = hours - 12;
		flag = false;
	}
	document.getElementById("clock").innerHTML = (flag?apm[0]:apm[1]) + hours + ':' + minutes + ':' + seconds;
	
     	window.setTimeout("tick()", 1000);
}
//cookie操作
function setCookie(name, value) {
	var today = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString()
}
//cookie操作
function getCookie(Name) {
   var search = Name + "=";
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search);
      if(offset != -1) {
         offset += search.length;
         end = document.cookie.indexOf(";", offset);
         if(end == -1) end = document.cookie.length;
         return unescape(document.cookie.substring(offset, end));
      }
      else return "";
   }
}

//日历初始化
function initial() {
	document.getElementById("sy").selectedIndex=tY-1900;
	document.getElementById("sm").selectedIndex=tM;
	drawCld(tY,tM);
	tick();
}
