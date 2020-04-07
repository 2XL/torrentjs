/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// local cookie with timestamp 1st access
// 
// 





console.log("BrowserUniqueness: ");

function getNavigatorFingerprint(useDebug) {
    var isDebugging  = (useDebug === undefined) ? "0" : (new Date).getTime();
    // the previous line allows to generate browsers with different id at same b
    var str;
    $(document).ready(function () {
	var d = new Detector();
	str = {
	    s0: navigator.product,
	    s1: navigator.appCodeName,
	    s2: navigator.appName,
	    s3: navigator.appVersion,
	    s4: navigator.language,
	    s5: navigator.languages.toString(),
	    s6: navigator.platform,
	    s7: navigator.productSub,
	    s8: navigator.userAgent,
	    s9: navigator.vendor,
	    s10: Object.keys(navigator.mimeTypes).map(function (idx) {
		var item = navigator.mimeTypes[idx];
		return [item.description, item.type, item.suffixes];
	    }).toString(),
	    s12: [screen.width, screen.height, screen.colorDepth].toString(),
	    s13: Object.keys(navigator.plugins).map(function (idx) {
		var item = navigator.plugins[idx];
		return [item.filename, item.name];
	    }).toString(),
	    s14: navigator.javaEnabled(),
	    s15: navigator.cookieEnabled,
	    s16: new Date().getTimezoneOffset(),
	    s17: PluginDetect.Plugins.java.classID,
	    s18: PluginDetect.Plugins.silverlight.digits.toString(),
	    s19: fonts_js().map(function(item){if(d.detect(item)) return item}).toString(),
	    s20: isDebugging,
	};
	// console.log(str);
    });
    return JSON.stringify(str);
}
