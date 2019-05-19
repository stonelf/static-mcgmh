
/* 缺日闰日表
 * 第一层代表一年，第二层代表一月。
 * 数组中负数表示当天缺日，正数表示当天闰日
 * 0表示该月是个闰月。
 * 空数组表示该月没有闰日没有缺日(吉祥月)。
 * 从铁兔年一月初一（1951.2.7）开始推算。
 */

var specialDays=[[[-28],[8,-21],[-25],[1,-18],[0,7,-10,-22,27],[-14],[-17,24],[-9],[-13,19],[-6,24,-30],[],[-4,16,-29],[20,-22]],//1951
[[-28],[11,-21],[-25],[5,-18],[-21],[2,-14],[-17,28],[-10],[-13,23],[-7,28,-29],[-13,15],[-6,19,-30]],//1952
[[],[-5,11,-28],[15,-22],[-25],[10,-18],[-21],[7,-13],[-17],[3,-10],[-14,26],[-8],[-13,18]],//1953
[[-7,21],[0,-1],[-5,14,-29],[],[-3,9,-25],[-28],[6,-21],[-24],[2,-17],[-22,26],[-15,30],[-9],[-14,21]],//1954
[[-8,25],[-2],[-6,18,-29],[],[-3,14,-25],[-28],[11,-21],[-24],[6,-18],[-22,29],[-16],[2,-10]],//1955
[[-15,24],[-9,29],[-2,-14,16],[-6,22,-29],[],[-3,19,-25],[-7,8,-28],[15,-20],[-25],[0,10,-18],[-23],[2,-17],[5,-11]],//1956
[[-16,27],[-10],[-14,22],[-7],[-10,18],[-2],[-5,14,-28],[],[-2,9,-25],[13,-19],[-24],[5,-18]],//1957
[[9,-11,-24,26],[-17],[1,-10],[-14,26],[-7],[-10,23],[-2],[-5,19,-29],[],[-2,13,-26],[],[-2,4,-25]],//1958
[[8,-19],[-24],[1,-17],[5,-10],[-14],[1,-6,-18,21],[0,-10,28],[-1,-13,18],[-6,23,-29],[],[-3,16,-27],[],[-2,8,-24]],//1959
[[11,-20],[-24],[4,-18],[-21,30],[-14],[-17,26],[-10],[-13,22],[-6],[-11,16],[-4,19,-28],[]],//1960
[[-3,11,-27],[14,-21],[-25],[8,-18],[-21],[4,-14],[-17],[1,-10],[-13,26],[-7],[-11,19],[-5,22,-29]],//1961
[[],[-4,14,-28],[0],[-3,7,-25],[13,-18,-29],[3,-21],[10,-13,-24,30],[-17],[6,-9,-21,25],[-14,30],[-7],[-12,22],[-6,25,-30]],//1962
[[],[-5,17,-29],[],[-2,12,-26],[-28],[8,-21],[-24],[5,-17],[-21,29],[-14],[3,-8],[-13,25]],//1963
[[-8],[-13,16],[-6,21,-29],[],[-3,16,-26],[-28],[13,-21],[-24],[9,-17],[-21],[2,-15],[0,-22,23],[-14,27]],//1964
[[-9],[-13,20],[-6,26,-29],[-10,15],[-3,23,-24],[-6,12,-28],[],[-1,8,-25],[13,-17],[-22],[6,-17],[-22,27]],//1965
[[-16],[1,-10],[-13,24],[-7],[-10,20],[-3],[-5,17,-28],[],[-2,12,-25],[-30],[5,-23],[8,-18]],//1966
[[-23,30],[-17],[4,-10],[-14,29],[-7],[-10,25],[-2],[0,-5,22,-28],[],[-2,16,-26],[-30],[8,-25],[11,-19]],//1967
[[-24],[4,-17],[-21,28],[-14],[-17,24],[-10],[-13,21],[-6],[-10,15],[-3,19,-27],[],[-1,11,-26]],//1968
[[14,-20],[-24],[7,-18],[-21],[2,-14],[-17,29],[-10],[-13,25],[-6],[-10,19],[-4,22,-27],[]],//1969
[[-3,14,-27],[],[-2,6,-25],[11,-18],[0,-21],[7,-14],[-17],[4,-9,-21,23],[-13,29],[-6],[-11,22],[-5],[-11,13]],//1970
[[-4,17,-28],[],[-2,10,-25],[-29],[6,-21],[-24],[3,-17],[-20,28],[-14],[3,-6,-19,21],[-12,25],[-6]],//1971
[[-11,17],[-5,20,-29],[],[-2,14,-26],[-28],[11,-21],[-24],[7,-17],[-20],[2,-14],[-19,25],[-13,28],[0,-7]],//1972
[[-12,20],[-6,24,-29],[-11,13],[-3,19,-25],[-28],[16,-20],[-2,6,-24],[12,-17],[-21],[6,-15],[-20,28],[-14]],//1973
[[1,-8],[-13,23],[-6],[-10,18],[-3],[-6,15,-28],[],[-1,11,-24],[-28],[5,-22],[9,-16],[-21]],//1974
[[1,-15],[4,-9],[-13,27],[-7],[-10,23],[-3],[-5,20,-28],[],[-1,15,-25],[0,-29],[8,-23],[12,-17],[-22]],//1975
[[3,-16],[-21,26],[-14],[1,-6,-18,21],[-10,28],[-2,-13,18],[-5,25,-27],[-9,14],[-2,19,-25],[-30],[12,-24],[]],//1976
[[-1,2,-23],[7,-17],[-21],[1,-14],[-17,27],[-10],[-13,23],[-6],[-9,18],[-3,24,-25],[-8,11],[-1,14,-25]],//1977
[[],[-1,6,-24],[10,-18],[-21],[5,-14],[0,-17],[1,-10],[-13,28],[-6],[-10,22],[-3],[-8,14],[-2,17,-27]],//1978
[[],[-1,10,-25],[15,-17,-29],[4,-21],[10,-13,-25,30],[-17],[-20,27],[-13],[3,-5,-18,21],[-10,25],[-4],[-9,17]],//1979
[[-3,20,-27],[],[-2,13,-25],[-29],[9,-22],[-24],[5,-17],[-20],[1,-13],[-17,25],[-11,28],[-5]],//1980
[[-10,20],[-5,24,-28],[0],[-2,17,-26],[-29],[13,-21],[-24],[10,-17],[-20],[5,-14],[-18,28],[-12],[1,-6]],//1981
[[-11,23],[-6],[-10,17],[-3],[-6,12,-29],[],[-1,9,-24],[-28],[4,-21],[9,-14],[-19],[1,-14]],//1982
[[-20,22],[-12,26],[-6],[-10,21],[-3],[-6,17,-29],[],[-1,14,-24],[-28],[8,-22],[0,-27,30],[-20],[4,-15]],//1983
[[-20,26],[-13,30],[-6],[-10,25],[-3],[-6,22,-28],[-10,11],[-1,18,-25],[-29],[12,-23],[-28],[4,-22]],//1984
[[7,-16],[-20,30],[-14],[-17,24],[-10],[-13,21],[-6],[-9,17],[-2],[-6,11,-30],[15,-24],[-29]],//1985
[[6,-23],[10,-17],[-21],[3,-14],[-17,29],[-10],[-13,26],[0,-6],[-9,21],[-2],[-7,15],[-1,18,-25],[-30]],//1986
[[9,-24],[14,-16,-29],[2,-21],[8,-14],[-17],[4,-9,-21,24],[-13],[1,-5,-17,20],[-9,25],[-3],[-7,18],[-2,21,-26]],//1987
[[],[-1,13,-25],[-28],[7,-22],[-25],[3,-17],[-20,30],[-13],[-17,24],[-10,29],[-3],[-9,20]],//1988
[[-3],[-9,12],[-2,16,-25],[0,-29],[11,-22],[-24],[8,-17],[-20],[4,-13],[-17,28],[-11],[-17,20],[-10,23]],//1989
[[-4],[-9,16],[-2,20,-25],[-7,9,-29],[16,-21],[-2,6,-24],[14,-16,-28],[3,-20],[8,-13],[-18],[1,-12],[-17,23]],//1990
[[-11,26],[-5],[-9,20],[-3],[-6,15,-29],[],[-1,12,-24],[-27],[7,-21],[-25],[1,-19],[4,-13],[0,-18,26]],//1991
[[-12,29],[-6],[-10,24],[-3],[-6,20,-29],[],[-1,16,-24],[-28],[11,-21],[-26],[4,-20],[7,-14]],//1992
[[-19,29],[-13],[-17,23],[-10,28],[-2,-14,18],[-6],[-9,15],[-2],[-6,10,-28],[15,-22],[-27],[7,-21]],//1993
[[10,-15],[-20],[3,-14],[-17,27],[-10],[-13,24],[-6],[-9,20],[0,-2],[-6,14,-29],[18,-23],[-28],[10,-22]],//1994
[[-28],[2,-21],[6,-14],[-17],[2,-10],[-13,29],[-5],[-9,24],[-2],[-6,18,-30],[],[-6,9,-29]],//1995
[[13,-23],[-28],[6,-21],[12,-13,-25],[1,-17],[-20,27],[-13],[-16,23],[-9,28],[-2,-15,16],[-7,21],[-1]],//1996
[[-7,12,-30],[16,-24],[-28],[10,-22],[-25],[0,5,-17],[-20],[2,-13],[-16,27],[-10],[-14,20],[-8,24],[-3]],//1997
[[-7,15],[-1,19,-24],[-29],[14,-22],[-25],[10,-17],[-20],[7,-13],[-17],[1,-11],[-15,23],[-9,26]],//1998
[[-4],[-8,19],[-2],[-6,13,-29],[],[-2,9,-24],[-27],[6,-20],[-24,30],[-18],[4,-11],[-16,26]],//1999
[[-11,30],[0,-4],[-9,22],[-3],[-6,18,-29],[],[-2,14,-24],[-27],[10,-21],[-25],[4,-18],[8,-12],[-18,29]],//2000
[[-12],[-17,22],[-10,26],[-3],[-6,22,-28],[-10,12],[-2,19,-24],[-5,9,-28],[-14,21],[-25],[7,-20],[-26,28]],//2001
[[-19],[2,-13],[-17,26],[-10],[-13,21],[-6],[-9,18],[-2],[-5,13,-28],[19,-20],[0,-3,6,-26],[10,-21],[-26]],//2002
[[2,-20],[6,-13],[-17,30],[-10],[-13,26],[-6],[-9,23],[-2],[-5,17,-29],[],[-4,10,-28],[13,-22]],//2003
[[-27],[5,-20],[10,-13,-25,28],[-17],[4,-10,-22,24],[-13],[2,-5,-16,22],[-9,27],[-1,-14,16],[-6,21,-30],[],[-5,13,-29]],//2004
[[16,-23],[-27],[9,-21],[-25],[3,-18],[-20,30],[0,-13],[-16,26],[-9],[-13,20],[-7,24],[-1],[-6,16,-30]],//2005
[[19,-23],[-28],[13,-22],[-25],[8,-18],[-20],[5,-13],[-16,30],[-10],[-14,24],[-8,27],[-1]],//2006
[[-7,19],[-1],[-5,12,-29],[17,-21],[-3,7,-25],[14,-16,-28],[4,-20],[-24,29],[-17],[4,-10],[-15,27],[-9]],//2007
[[-15,18],[-8,22],[-2],[0,-6,16,-29],[],[-2,12,-25],[-27],[9,-20],[-24],[3,-17],[-23,26],[-16,30],[-10]],//2008
[[-15,21],[-9,25],[-3],[-6,20,-29],[],[-2,17,-24],[-27],[13,-20],[-24],[7,-18],[-23,29],[-17]],//2009
[[2,-11],[-16,25],[-10],[-14,19],[-6,26,-27],[-9,16],[-2],[-5,12,-28],[],[-2,6,-25],[10,-19],[0,-24],[2,-18]],//2010
[[5,-12],[-17,29],[-10],[-13,24],[-6],[-9,21],[-2],[-5,16,-28],[],[-2,10,-26],[13,-20],[-25]],//2011
[[5,-19],[9,-12,-25,27],[-17],[3,-10],[-13,29],[-6],[-9,25],[-1],[-5,20,-29],[],[-3,13,-27],[17,-21]],//2012
[[-26],[8,-20],[-24],[2,-18],[-21,28],[-13],[-16,24],[-9],[0,-12,20],[-6,24,-29],[],[-4,16,-28],[]],//2013
[[-4,7,-27],[12,-21],[-25],[6,-18],[-20],[3,-13],[-16,29],[-9],[-13,23],[-6],[-12,16],[-5,19,-30]],//2014
[[],[-4,11,-28],[15,-21],[-25],[11,-17],[-20],[8,-12,-24,27],[-16],[3,-9],[-13,27],[-7],[-12,19]],//2015
[[-6,22,-30],[],[-5,15,-29],[],[0,-2,10,-25],[-28],[6,-20],[-23],[2,-17],[-21,26],[-14,30],[-8],[-13,22]],//2016
[[-8,25],[-1],[-6,19,-29],[],[-2,14,-25],[-27],[11,-20],[-24],[6,-17],[-21,30],[-15],[3,-9]],//2017
[[-15,25],[-9],[-13,18],[-6,23,-29],[],[-2,20,-24],[-5,10,-28],[16,-19],[-2,5,-24],[10,-18],[-22],[3,-17]],//2018
[[6,-10],[0,-16,28],[-9],[-13,22],[-6],[-9,18],[-2],[-5,15,-28],[],[-1,10,-25],[14,-18],[-23],[5,-18]],//2019
[[-23,27],[-16],[2,-10],[-13,27],[-6],[-9,23],[-2],[-5,19,-28],[],[-2,13,-26],[],[-1,5,-25]],//2020
[[8,-19],[-23],[1,-17],[6,-9,-21,25],[-14],[2,-5,-17,22],[-9],[-12,18],[-6,24,-28],[0],[-3,16,-27],[],[-2,8,-26]],//2021
[[11,-20],[-24],[5,-17],[-21,30],[-14],[-16,27],[-9],[-12,23],[-6],[-10,16],[-4,19,-28],[]],//2022
[[-3,11,-27],[15,-20],[-24],[9,-18],[-21],[5,-13],[-16],[2,-9],[-13,26],[-6],[-11,19],[-5,22,-29]],//2023
[[],[-4,14,-28],[],[-2,8,-25],[14,-17,-28],[4,-21],[0,-23],[1,-16],[-20,26],[-13,30],[-7],[-12,22],[-6,25,-30]],//2024
[[],[-5,18,-28],[],[-2,12,-25],[-28],[9,-21],[-23],[5,-17],[-20,30],[-14],[4,-7],[-13,25]],//2025
[[-7],[-12,17],[-5,22,-29],[],[-2,17,-25],[-28],[14,-20],[-24],[9,-17],[-21],[3,-15],[-21,24]],//2026
[[-14,28],[-8],[0,-12,21],[-6],[-10,16],[-2],[-5,13,-28],[],[-1,9,-24],[14,-16,-29],[2,-22],[6,-16],[-21,28]],//2027
[[-15],[1,-9],[-13,25],[-6],[-9,21],[-2],[-5,18,-28],[],[-1,13,-25],[-29],[6,-23],[9,-17]],//2028
[[-22],[1,-16],[5,-9,-22,23],[-13,29],[-6],[-9,26],[-2,-13,16],[-5,22,-27],[],[-2,16,-25],[-30],[0,9,-24],[12,-18]],//2029
[[-23],[4,-17],[-21,28],[-14],[-17,25],[-9],[-12,21],[-5],[-9,16],[-2,20,-26],[],[-1,11,-25]],//2030
[[15,-19],[-24],[8,-17],[-21],[3,-14],[-16,30],[-9],[-12,25],[-5],[-9,19],[-3,23,-27],[]],//2031
[[-2,14,-27],[],[-1,7,-24],[12,-17],[-21],[8,-13,-25,28],[-16],[0,5,-8,-20,24],[-13,29],[-6],[-10,22],[-4],[-10,14]],//2032
[[-3,17,-28],[],[-1,11,-25],[-28],[6,-21],[-23],[3,-16],[-20,29],[-13],[-18,22],[-11,25],[-6]],//2033
[[-11,17],[-4,21,-28],[],[-2,15,-25],[-28],[11,-21],[-23],[8,-16],[-20],[2,-14],[-18,25],[-12,28]],//2034
[[-7],[-11,20],[-5,25,-27],[-10,14],[0,-2,20,-24],[-6,10,-28],[18,-19],[-1,7,-24],[13,-16,-28],[1,-21],[6,-15],[-19,28],[-14]],//2035
[[1,-8],[-12,24],[-6],[-9,19],[-2],[-5,15,-28],[],[-1,11,-24],[-28],[6,-22],[9,-15],[-21]],//2036
[[1,-15],[5,-8,-21,22],[-13,28],[-6],[-9,23],[-2],[-5,20,-28],[],[-1,15,-24],[-28],[9,-23],[13,-16],[0,-22]],//2037
[[4,-16],[-20,27],[-13],[3,-5,-17,22],[-9],[-12,19],[-5],[-8,15],[-1,19,-25],[-29],[12,-24],[-30]],//2038
[[3,-23],[7,-17],[-20],[1,-14],[-17,27],[-9],[-12,24],[-5],[-8,19],[-2],[-7,11],[-1,15,-25]],//2039
[[-30],[7,-24],[11,-17],[-21],[6,-14],[-17],[2,-9],[-12,28],[-5],[0,-9,22],[-3],[-8,15],[-2,17,-26]],//2040
[[],[-1,10,-24],[-28],[5,-21],[-24],[1,-16],[-19,27],[-12],[-17,22],[-10,26],[-4],[-9,17]],//2041
[[-3,21,-27],[],[-1,14,-25],[-28],[9,-21],[-24],[6,-16],[-19],[2,-13],[-17,25],[-11,29],[-5]],//2042
[[-10,20],[-4,25,-27],[-9,13],[-2,18,-25],[-28],[0,14,-21],[-24],[11,-16,-28,30],[-20],[5,-13],[-18,28],[-12],[2,-5]],//2043
[[-11,23],[-5],[-9,17],[-2],[-5,13,-28],[],[-1,10,-24],[-27],[5,-21],[10,-13],[-19],[1,-13]],//2044
[[-19,23],[-12,27],[-6],[-9,30],[-2],[-5,18,-28],[],[-1,14,-24],[-28],[9,-21],[-26],[1,-20]],//2045
[[4,-14],[-19,26],[0,-13],[1,-6,-18,19],[-10,26],[-2,-14,16],[-5,23,-27],[-9,13],[-1,19,-24],[-28],[12,-22],[-27],[4,-21]],//2046
[[7,-15],[-20,30],[-13],[-17,25],[-10],[-12,23],[-5],[-8,18],[-1],[-6,12,-29],[15,-23],[-28]],//2047
[[7,-22],[10,-16],[-20],[4,-14],[-17,30],[-10],[-12,27],[-5],[-8,22],[-2],[0,-6,15,-30],[18,-24],[-29]],//2048
[[10,-23],[-28],[3,-21],[8,-13,-25,28],[-17],[5,-8,-20,25],[-12],[2,-4,-16,21],[-9,25],[-2],[-7,18],[-1,21,-25]],//2049
[[-30],[13,-24],[-28],[7,-21],[-24],[4,-17],[-19,30],[-12],[-16,25],[-10,29],[-3]]]//2050

var startDate=new Date("1951/2/7");
/*方法说明
 *@method getZangli
 *@param{String,Date,Number}p 可以转换成标准日期的入参
 *@return {
 * @value 藏历日期
 * @extraInfo 附加信息
 * @month 藏历月份信息
 * @tMonth 藏历月份名
 * @day 藏历日期
 * @dayLeap 这一天为闰日
 * @monthLeap 这个月是闰月
 * @dayMiss 这一天藏历缺日，往后顺推一天
 * } 
*/
function getZangli(p){
	var d=p;
	if (typeof d == "undefined" || d==""){
		d=new Date();
	}
	if (typeof d == "string"){
		d=new Date(d);
		if("Invalid Date" == d.toString()){
			console.error("错误：\""+p+"\" 字符串的日期格式不对");
			return "error";
		}
	}
	if (typeof d == "number"){
		console.warn("警告：尝试把数字 "+p+" 按秒转换成日期");
		d=new Date(d);
	}

	if(d.constructor != Date){
		console.error("错误：只能接受日期类型数字类型或者标准格式的字符串类型输入,当前输入的是"+ p.constructor.toString());
		return {value:"error"};
	}
	
	if (d.getTime()<(new Date("1951/2/7").getTime())){
		console.error("错误:不能转换早于1951年2月7日的日期");
		return {value:"error"};
	}
	if (d.getTime()>=(new Date("2051/1/13").getTime())){
		console.error("错误:不能转换晚于2051年1月12日的日期");
		return {value:"error"};
	}
	
	var days=Math.round((d-startDate)/86400/1000);
	var countingDays=0;
	var countingMonth=0;
	for(var years=0;years<specialDays.length;years++){
		var leapMonths=0;//这一年前面闰了几个月
		for(var months=0;months<specialDays[years].length;months++){
			var tDays=30;		
			for(var i=0;i<specialDays[years][months].length;i++){
				if(specialDays[years][months][i]<0)
					tDays--;
				else if(specialDays[years][months][i]>0)
					tDays++;
				else  if(specialDays[years][months][i]==0)
					leapMonths++;
			}
			if(countingDays+tDays<=days){ //还没到当前月，直接累加日子
				countingDays+=tDays;
			}else{
				var dayLeap=false,dayMiss=false,monthLeap=false;
				var tDays = days-countingDays;
				for(var i=0;i<specialDays[years][months].length;i++){
					if(specialDays[years][months][i]==0){//闰月
						monthLeap=true;						
					}else{
						var sd = specialDays[years][months][i];
						if(sd+1==-tDays){//当天缺日
							dayMiss=true;
							tDays++;
						}else if(sd == tDays){//当天闰日
							dayLeap=true;
							tDays--;
						}else if(sd>0 && sd<tDays){//前面出现一个闰日
								tDays--;
						}else if(sd<0 && -sd-1<tDays){//前面出现一个缺日
								tDays++;
						}
					}
				}
				var result={};
				result.year="铁水木火土".substr(Math.floor((years+1)/2) % 5,1)+"兔龙蛇马羊猴鸡狗猪鼠牛虎".substr(years % 12,1);
				
				result.month= (monthLeap?"闰":"")+["正","二","三","四","五","六","七","八","九","十","十一","十二"][months-leapMonths];
				result.tMonth=(monthLeap?"闰":"")+["神变","苦行","具香","萨嘎","作净","明净","具醉","具贤","天降","持众","庄严","满意"][months-leapMonths]
				result.day= (dayLeap?"闰":"")+["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"][tDays];
				result.dayLeap=dayLeap;
				result.monthLeap=monthLeap;
				result.dayMiss=dayMiss;
				result.value=result.year+"年"+result.month+"月("+result.tMonth+"月)"+result.day;
				extraInfo="";
				extraInfo2=""
				if(!dayLeap)switch (tDays){
					case 0:
						if(months==0) extraInfo="神变节";else{extraInfo="禅定胜王佛节日";extraInfo2="作何善恶成百倍";}
						break;
					case 3:if(months==5) extraInfo="释迦牟尼佛初转法轮日";break;
					case 6:if(months==3) extraInfo="释迦牟尼佛诞辰";break;
					case 7:extraInfo="药师佛节日";extraInfo2="作何善恶成千倍";break;
					case 9:extraInfo="莲师荟供日";extraInfo2="作何善恶成十万倍";break;
					case 14:
						if(months==3) extraInfo="释迦牟尼佛成道日涅槃日";
						else if(months==5) extraInfo="释迦牟尼佛入胎日";
						else extraInfo="阿弥陀佛节日";extraInfo2="作何善恶成百万倍";
						break;
					case 17:extraInfo="观音菩萨节日";extraInfo2="作何善恶成千万倍";break;
					case 19:if(months==8) extraInfo="释迦牟尼佛天降日";break;
					case 20:extraInfo="地藏王菩萨节日";extraInfo2="作何善恶成亿倍";break;
					case 24:extraInfo="空行母荟供日";break;
					case 29:extraInfo="释迦牟尼佛节日";extraInfo2="作何善恶成九亿倍";break;
				}
				result.extraInfo=extraInfo;
				result.extraInfo2=extraInfo2;
				result.toString=function(){
					return this.value
				}
				return result;
				
			}
		}
	}
}

if (typeof zangli_callback == "function"){
	zangli_callback();
}

//为了方便，把农历的代码也放进来
// 代码来自 https://github.com/jjonline/calendar.js

/**
* @1900-2100区间内的公历、农历互转
* @charset UTF-8
* @Author  Jea杨(JJonline@JJonline.Cn)
* @Time    2014-7-21
* @Time    2016-8-13 Fixed 2033hex、Attribution Annals
* @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
* @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
* @Version 1.0.3
* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
*/
var calendar = {

    /**
      * 农历1900-2100的润大小信息表
      * @Array Of Property
      * @return Hex
      */
    lunarInfo:[0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,//1900-1909
            0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977,//1910-1919
            0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,//1920-1929
            0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,//1930-1939
            0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,//1940-1949
            0x06ca0,0x0b550,0x15355,0x04da0,0x0a5b0,0x14573,0x052b0,0x0a9a8,0x0e950,0x06aa0,//1950-1959
            0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,//1960-1969
            0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b6a0,0x195a6,//1970-1979
            0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570,//1980-1989
            0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x05ac0,0x0ab60,0x096d5,0x092e0,//1990-1999
            0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5,//2000-2009
            0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,//2010-2019
            0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,//2020-2029
            0x05aa0,0x076a3,0x096d0,0x04afb,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,//2030-2039
            0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0,//2040-2049
            /**Add By JJonline@JJonline.Cn**/
            0x14b63,0x09370,0x049f8,0x04970,0x064b0,0x168a6,0x0ea50, 0x06b20,0x1a6c4,0x0aae0,//2050-2059
            0x0a2e0,0x0d2e3,0x0c960,0x0d557,0x0d4a0,0x0da50,0x05d55,0x056a0,0x0a6d0,0x055d4,//2060-2069
            0x052d0,0x0a9b8,0x0a950,0x0b4a0,0x0b6a6,0x0ad50,0x055a0,0x0aba4,0x0a5b0,0x052b0,//2070-2079
            0x0b273,0x06930,0x07337,0x06aa0,0x0ad50,0x14b55,0x04b60,0x0a570,0x054e4,0x0d160,//2080-2089
            0x0e968,0x0d520,0x0daa0,0x16aa6,0x056d0,0x04ae0,0x0a9d4,0x0a2d0,0x0d150,0x0f252,//2090-2099
            0x0d520],//2100

    /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
    solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],

    /**
      * 天干地支之天干速查表
      * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
      * @return Cn string
      */
    Gan:["\u7532","\u4e59","\u4e19","\u4e01","\u620a","\u5df1","\u5e9a","\u8f9b","\u58ec","\u7678"],

    /**
      * 天干地支之地支速查表
      * @Array Of Property
      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
      * @return Cn string
      */
    Zhi:["\u5b50","\u4e11","\u5bc5","\u536f","\u8fb0","\u5df3","\u5348","\u672a","\u7533","\u9149","\u620c","\u4ea5"],

    /**
      * 天干地支之地支速查表<=>生肖
      * @Array Of Property
      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
      * @return Cn string
      */
    Animals:["\u9f20","\u725b","\u864e","\u5154","\u9f99","\u86c7","\u9a6c","\u7f8a","\u7334","\u9e21","\u72d7","\u732a"],

    /**
      * 24节气速查表
      * @Array Of Property
      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
      * @return Cn string
      */
    solarTerm:["\u5c0f\u5bd2","\u5927\u5bd2","\u7acb\u6625","\u96e8\u6c34","\u60ca\u86f0","\u6625\u5206","\u6e05\u660e","\u8c37\u96e8","\u7acb\u590f","\u5c0f\u6ee1","\u8292\u79cd","\u590f\u81f3","\u5c0f\u6691","\u5927\u6691","\u7acb\u79cb","\u5904\u6691","\u767d\u9732","\u79cb\u5206","\u5bd2\u9732","\u971c\u964d","\u7acb\u51ac","\u5c0f\u96ea","\u5927\u96ea","\u51ac\u81f3"],

    /**
      * 1900-2100各年的24节气日期速查表
      * @Array Of Property
      * @return 0x string For splice
      */
    sTermInfo:['9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f',
              '97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f','b027097bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd0b06bdb0722c965ce1cfcc920f',
              'b027097bd097c36b0b6fc9274c91aa','9778397bd19801ec9210c965cc920e','97b6b97bd19801ec95f8c965cc920f',
              '97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2','9778397bd197c36c9210c9274c91aa',
              '97b6b97bd19801ec95f8c965cc920e','97bd09801d98082c95f8e1cfcc920f','97bd097bd097c36b0b6fc9210c8dc2',
              '9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec95f8c965cc920e','97bcf97c3598082c95f8e1cfcc920f',
              '97bd097bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf97c3598082c95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f',
              '97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf97c359801ec95f8c965cc920f','97bd097bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf97c359801ec95f8c965cc920f','97bd097bd07f595b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9210c8dc2','9778397bd19801ec9210c9274c920e','97b6b97bd19801ec95f8c965cc920f',
              '97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
              '97b6b97bd19801ec95f8c965cc920f','97bd07f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2',
              '9778397bd097c36c9210c9274c91aa','97b6b97bd19801ec9210c965cc920e','97bd07f1487f595b0b0bc920fb0722',
              '7f0e397bd097c36b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c965cc920e','97bcf7f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e','97bcf7f1487f531b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b97bd19801ec9210c965cc920e',
              '97bcf7f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b97bd19801ec9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
              '9778397bd097c36b0b6fc9210c91aa','97b6b97bd197c36c9210c9274c920e','97bcf7f0e47f531b0b0bb0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','9778397bd097c36c9210c9274c920e',
              '97b6b7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c36b0b6fc9210c8dc2',
              '9778397bd097c36b0b70c9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc9210c8dc2','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f595b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
              '9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc920fb0722','9778397bd097c36b0b6fc9274c91aa','97b6b7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9274c91aa',
              '97b6b7f0e47f531b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
              '9778397bd097c36b0b6fc9210c91aa','97b6b7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','9778397bd097c36b0b6fc9210c8dc2','977837f0e37f149b0723b0787b0721',
              '7f07e7f0e47f531b0723b0b6fb0722','7f0e37f5307f595b0b0bc920fb0722','7f0e397bd097c35b0b6fc9210c8dc2',
              '977837f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0721','7f0e37f1487f595b0b0bb0b6fb0722',
              '7f0e397bd097c35b0b6fc9210c8dc2','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722','977837f0e37f14998082b0787b06bd',
              '7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd097c35b0b6fc920fb0722',
              '977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14998082b0787b06bd',
              '7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0b0bb0b6fb0722','7f0e397bd07f595b0b0bc920fb0722',
              '977837f0e37f14998082b0723b06bd','7f07e7f0e37f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
              '7f0e397bd07f595b0b0bc920fb0722','977837f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b0721',
              '7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f595b0b0bb0b6fb0722','7f0e37f0e37f14898082b0723b02d5',
              '7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e37f1487f531b0b0bb0b6fb0722',
              '7f0e37f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e37f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd',
              '7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e37f14898082b072297c35',
              '7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722',
              '7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f149b0723b0787b0721',
              '7f0e27f1487f531b0b0bb0b6fb0722','7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14998082b0723b06bd',
              '7f07e7f0e47f149b0723b0787b0721','7f0e27f0e47f531b0723b0b6fb0722','7f0e37f0e366aa89801eb072297c35',
              '7ec967f0e37f14998082b0723b06bd','7f07e7f0e37f14998083b0787b0721','7f0e27f0e47f531b0723b0b6fb0722',
              '7f0e37f0e366aa89801eb072297c35','7ec967f0e37f14898082b0723b02d5','7f07e7f0e37f14998082b0787b0721',
              '7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66aa89801e9808297c35','665f67f0e37f14898082b0723b02d5',
              '7ec967f0e37f14998082b0787b0721','7f07e7f0e47f531b0723b0b6fb0722','7f0e36665b66a449801e9808297c35',
              '665f67f0e37f14898082b0723b02d5','7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721',
              '7f0e36665b66a449801e9808297c35','665f67f0e37f14898082b072297c35','7ec967f0e37f14998082b0787b06bd',
              '7f07e7f0e47f531b0723b0b6fb0721','7f0e26665b66a449801e9808297c35','665f67f0e37f1489801eb072297c35',
              '7ec967f0e37f14998082b0787b06bd','7f07e7f0e47f531b0723b0b6fb0721','7f0e27f1487f531b0b0bb0b6fb0722'],

    /**
      * 数字转中文速查表
      * @Array Of Property
      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
      * @return Cn string
      */
    nStr1:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"],

    /**
      * 日期转农历称呼速查表
      * @Array Of Property
      * @trans ['初','十','廿','卅']
      * @return Cn string
      */
    nStr2:["\u521d","\u5341","\u5eff","\u5345"],

    /**
      * 月份转农历称呼速查表
      * @Array Of Property
      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
      * @return Cn string
      */
    nStr3:["\u6b63","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u51ac","\u814a"],

    /**
      * 返回农历y年一整年的总天数
      * @param lunar Year
      * @return Number
      * @eg:var count = calendar.lYearDays(1987) ;//count=387
      */
    lYearDays:function(y) {
        var i, sum = 348;
        for(i=0x8000; i>0x8; i>>=1) { sum += (this.lunarInfo[y-1900] & i)? 1: 0; }
        return(sum+this.leapDays(y));
    },

    /**
      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
      * @param lunar Year
      * @return Number (0-12)
      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
      */
    leapMonth:function(y) { //闰字编码 \u95f0
        return(this.lunarInfo[y-1900] & 0xf);
    },

    /**
      * 返回农历y年闰月的天数 若该年没有闰月则返回0
      * @param lunar Year
      * @return Number (0、29、30)
      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
      */
    leapDays:function(y) {
        if(this.leapMonth(y))  {
            return((this.lunarInfo[y-1900] & 0x10000)? 30: 29);
        }
        return(0);
    },

    /**
      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
      * @param lunar Year
      * @return Number (-1、29、30)
      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
      */
    monthDays:function(y,m) {
        if(m>12 || m<1) {return -1}//月份参数从1至12，参数错误返回-1
        return( (this.lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
    },

    /**
      * 返回公历(!)y年m月的天数
      * @param solar Year
      * @return Number (-1、28、29、30、31)
      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
      */
    solarDays:function(y,m) {
        if(m>12 || m<1) {return -1} //若参数错误 返回-1
        var ms = m-1;
        if(ms==1) { //2月份的闰平规律测算后确认返回28或29
            return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28);
        }else {
            return(this.solarMonth[ms]);
        }
    },

    /**
     * 农历年份转换为干支纪年
     * @param  lYear 农历年的年份数
     * @return Cn string
     */
    toGanZhiYear:function(lYear) {
        var ganKey = (lYear - 3) % 10;
        var zhiKey = (lYear - 3) % 12;
        if(ganKey == 0) ganKey = 10;//如果余数为0则为最后一个天干
        if(zhiKey == 0) zhiKey = 12;//如果余数为0则为最后一个地支
        return this.Gan[ganKey-1] + this.Zhi[zhiKey-1];

    },

    /**
     * 公历月、日判断所属星座
     * @param  cMonth [description]
     * @param  cDay [description]
     * @return Cn string
     */
    toAstro:function(cMonth,cDay) {
        var s   = "\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf";
        var arr = [20,19,21,21,21,22,23,23,23,23,22,22];
        return s.substr(cMonth*2 - (cDay < arr[cMonth-1] ? 2 : 0),2) + "\u5ea7";//座
    },

    /**
      * 传入offset偏移量返回干支
      * @param offset 相对甲子的偏移量
      * @return Cn string
      */
    toGanZhi:function(offset) {
        return this.Gan[offset%10] + this.Zhi[offset%12];
    },

    /**
      * 传入公历(!)y年获得该年第n个节气的公历日期
      * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
      * @return day Number
      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
      */
    getTerm:function(y,n) {
        if(y<1900 || y>2100) {return -1;}
        if(n<1 || n>24) {return -1;}
        var _table = this.sTermInfo[y-1900];
        var _info = [
            parseInt('0x'+_table.substr(0,5)).toString() ,
            parseInt('0x'+_table.substr(5,5)).toString(),
            parseInt('0x'+_table.substr(10,5)).toString(),
            parseInt('0x'+_table.substr(15,5)).toString(),
            parseInt('0x'+_table.substr(20,5)).toString(),
            parseInt('0x'+_table.substr(25,5)).toString()
        ];
        var _calday = [
            _info[0].substr(0,1),
            _info[0].substr(1,2),
            _info[0].substr(3,1),
            _info[0].substr(4,2),

            _info[1].substr(0,1),
            _info[1].substr(1,2),
            _info[1].substr(3,1),
            _info[1].substr(4,2),

            _info[2].substr(0,1),
            _info[2].substr(1,2),
            _info[2].substr(3,1),
            _info[2].substr(4,2),

            _info[3].substr(0,1),
            _info[3].substr(1,2),
            _info[3].substr(3,1),
            _info[3].substr(4,2),

            _info[4].substr(0,1),
            _info[4].substr(1,2),
            _info[4].substr(3,1),
            _info[4].substr(4,2),

            _info[5].substr(0,1),
            _info[5].substr(1,2),
            _info[5].substr(3,1),
            _info[5].substr(4,2),
        ];
        return parseInt(_calday[n-1]);
    },

    /**
      * 传入农历数字月份返回汉语通俗表示法
      * @param lunar month
      * @return Cn string
      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
      */
    toChinaMonth:function(m) { // 月 => \u6708
        if(m>12 || m<1) {return -1} //若参数错误 返回-1
        var s = this.nStr3[m-1];
        s+= "\u6708";//加上月字
        return s;
    },

    /**
      * 传入农历日期数字返回汉字表示法
      * @param lunar day
      * @return Cn string
      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
      */
    toChinaDay:function(d){ //日 => \u65e5
        var s;
        switch (d) {
            case 10:
            s = '\u521d\u5341'; break;
        case 20:
            s = '\u4e8c\u5341'; break;
            break;
        case 30:
            s = '\u4e09\u5341'; break;
            break;
        default :
            s = this.nStr2[Math.floor(d/10)];
            s += this.nStr1[d%10];
        }
        return(s);
    },

    /**
      * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
      * @param y year
      * @return Cn string
      * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
      */
    getAnimal: function(y) {
        return this.Animals[(y - 4) % 12]
    },

    /**
      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
      * @param y  solar year
      * @param m  solar month
      * @param d  solar day
      * @return JSON object
      * @eg:console.log(calendar.solar2lunar(1987,11,01));
      */
    solar2lunar:function (y,m,d) { //参数区间1900.1.31~2100.12.31
        //年份限定、上限
        if(y<1900 || y>2100) {
            return -1;// undefined转换为数字变为NaN
        }
        //公历传参最下限
        if(y==1900&&m==1&&d<31) {
            return -1;
        }
        //未传参  获得当天
        if(!y) {
            var objDate = new Date();
        }else {
            var objDate = new Date(y,parseInt(m)-1,d)
        }
        var i, leap=0, temp=0;
        //修正ymd参数
        var y = objDate.getFullYear(),
            m = objDate.getMonth()+1,
            d = objDate.getDate();
        var offset = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;
        for(i=1900; i<2101 && offset>0; i++) {
            temp    = this.lYearDays(i);
            offset -= temp;
        }
        if(offset<0) {
            offset+=temp; i--;
        }

        //是否今天
        var isTodayObj = new Date(),
            isToday    = false;
        if(isTodayObj.getFullYear()==y && isTodayObj.getMonth()+1==m && isTodayObj.getDate()==d) {
            isToday = true;
        }
        //星期几
        var nWeek = objDate.getDay(),
           cWeek  = this.nStr1[nWeek];
        //数字表示周几顺应天朝周一开始的惯例
        if(nWeek==0) {
            nWeek = 7;
        }
        //农历年
        var year   = i;
        var leap   = this.leapMonth(i); //闰哪个月
        var isLeap = false;

        //效验闰月
        for(i=1; i<13 && offset>0; i++) {
            //闰月
            if(leap>0 && i==(leap+1) && isLeap==false){
                --i;
                isLeap = true; temp = this.leapDays(year); //计算农历闰月天数
            }
            else{
                temp = this.monthDays(year, i);//计算农历普通月天数
            }
            //解除闰月
            if(isLeap==true && i==(leap+1)) { isLeap = false; }
            offset -= temp;
        }
        // 闰月导致数组下标重叠取反
        if(offset==0 && leap>0 && i==leap+1)
        {
            if(isLeap){
                isLeap = false;
            }else{
                isLeap = true; --i;
            }
        }
        if(offset<0)
        {
            offset += temp; --i;
        }
        //农历月
        var month      = i;
        //农历日
        var day        = offset + 1;
        //天干地支处理
        var sm         = m-1;
        var gzY        = this.toGanZhiYear(year);

        // 当月的两个节气
        // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
        var firstNode  = this.getTerm(y,(m*2-1));//返回当月「节」为几日开始
        var secondNode = this.getTerm(y,(m*2));//返回当月「节」为几日开始

        // 依据12节气修正干支月
        var gzM        = this.toGanZhi((y-1900)*12+m+11);
        if(d>=firstNode) {
            gzM        = this.toGanZhi((y-1900)*12+m+12);
        }

        //传入的日期的节气与否
        var isTerm = false;
        var Term   = null;
        if(firstNode==d) {
            isTerm  = true;
            Term    = this.solarTerm[m*2-2];
        }
        if(secondNode==d) {
            isTerm  = true;
            Term    = this.solarTerm[m*2-1];
        }
        //日柱 当月一日与 1900/1/1 相差天数
        var dayCyclical = Date.UTC(y,sm,1,0,0,0,0)/86400000+25567+10;
        var gzD         = this.toGanZhi(dayCyclical+d-1);
        //该日期所属的星座
        var astro       = this.toAstro(m,d);

        return {'lYear':year,'lMonth':month,'lDay':day,'Animal':this.getAnimal(year),'IMonthCn':(isLeap?"\u95f0":'')+this.toChinaMonth(month),'IDayCn':this.toChinaDay(day),'cYear':y,'cMonth':m,'cDay':d,'gzYear':gzY,'gzMonth':gzM,'gzDay':gzD,'isToday':isToday,'isLeap':isLeap,'nWeek':nWeek,'ncWeek':"\u661f\u671f"+cWeek,'isTerm':isTerm,'Term':Term,'astro':astro};
    },

    /**
      * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
      * @param y  lunar year
      * @param m  lunar month
      * @param d  lunar day
      * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
      * @return JSON object
      * @eg:console.log(calendar.lunar2solar(1987,9,10));
      */
    lunar2solar:function(y,m,d,isLeapMonth) {   //参数区间1900.1.31~2100.12.1
        var isLeapMonth = !!isLeapMonth;
        var leapOffset  = 0;
        var leapMonth   = this.leapMonth(y);
        var leapDay     = this.leapDays(y);
        if(isLeapMonth&&(leapMonth!=m)) {return -1;}//传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
        if(y==2100&&m==12&&d>1 || y==1900&&m==1&&d<31) {return -1;}//超出了最大极限值
        var day  = this.monthDays(y,m);
        var _day = day;
        //bugFix 2016-9-25
        //if month is leap, _day use leapDays method
        if(isLeapMonth) {
            _day = this.leapDays(y,m);
        }
        if(y < 1900 || y > 2100 || d > _day) {return -1;}//参数合法性效验

        //计算农历的时间差
        var offset = 0;
        for(var i=1900;i<y;i++) {
            offset+=this.lYearDays(i);
        }
        var leap = 0,isAdd= false;
        for(var i=1;i<m;i++) {
            leap = this.leapMonth(y);
            if(!isAdd) {//处理闰月
                if(leap<=i && leap>0) {
                    offset+=this.leapDays(y);isAdd = true;
                }
            }
            offset+=this.monthDays(y,i);
        }
        //转换闰月农历 需补充该年闰月的前一个月的时差
        if(isLeapMonth) {offset+=day;}
        //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
        var stmap   =   Date.UTC(1900,1,30,0,0,0);
        var calObj  =   new Date((offset+d-31)*86400000+stmap);
        var cY      =   calObj.getUTCFullYear();
        var cM      =   calObj.getUTCMonth()+1;
        var cD      =   calObj.getUTCDate();

        return this.solar2lunar(cY,cM,cD);
    }
};



function CalConv(){
	var d=new Date();
	lunar=calendar.solar2lunar()
	console.log(lunar)
	var result="佛历";//佛历按4月初八过一年
	if(lunar.lMonth>4||lunar.lMonth==4 &&(lunar.lDay>7||lunar.isLeap)){ 
		result+=(lunar.lYear+544)+"年 ";
	}else{
		result+=(lunar.lYear+543)+"年 ";		
	}
	result += lunar.gzYear+"("+lunar.Animal+")年"+lunar.IMonthCn+lunar.IDayCn; //农历
	var z=getZangli(d);
	result += " 藏历"+z.value
	if(z.extraInfo)
		result+="，"+z.extraInfo;
	if(z.extraInfo2)
		result+="，"+z.extraInfo2;
		
	var e=document.getElementById("lunarSPAN")||document.getElementById("top_right_time")
	if(!e){
		document.write(result)
	}else{
		e.innerHTML=result;
	}
}


