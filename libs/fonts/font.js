/**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didn't fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */

/**
 * Usage: d = new Detector();
 *        d.detect('font name');
 */
function fonts_js() {
    return [
	"Symbol", 
	"Arial", "Courier New", "Times New Roman", "Georgia", 
	"Trebuchet MS", "Verdana", "Impact", "Comic Sans MS", 
	"Webdings", "Tahoma", "Microsoft Sans Serif", "Wingdings", 
	"Arial Black", "Lucida Console", "Marlett", "Lucida Sans Unicode", 
	"Courier", "Franklin Gothic Medium", "Palatino Linotype", 
	"Sylfaen", "Estrangelo Edessa", "Tunga", "Mangal", "Raavi", 
	"Latha", "Gautami", "Shruti", "MV Boli", "Calibri", "Cambria", 
	"Constantia", "Candara", "Corbel", "Consolas", "Cambria Math", 
	"Segoe UI", "MS Mincho", "Wingdings 2", "Wingdings 3", "Vrinda", 
	"Kartika", "Century Gothic", "Arial Narrow", "Garamond", 
	"Book Antiqua", "Bookman Old Style", "MS Reference Sans Serif", 
	"MS Reference Specialty", "Bookshelf Symbol 7", "Monotype Corsiva",
	"Meiryo", "Arial Unicode MS", "Century", "Gabriola",
	"Plantagenet Cherokee", "Segoe Print", "Segoe Script", "Meiryo UI", 
	"MT Extra", "SimSun", "Batang", "Gulim", "MS PMincho", "MS PGothic", 
	"MS Gothic", "Mongolian Baiti", "Microsoft Yi Baiti", "PMingLiU", 
	"Microsoft Himalaya", "SimHei", "MingLiU", "Segoe UI Light", 
	"Simplified Arabic", "Cordia New", "Miriam Fixed", "EucrosiaUPC",
	"Simplified Arabic Fixed", "Rod", "Angsana New", "Narkisim",
	"FrankRuehl", "JasmineUPC", "Dotum", "DotumChe", "IrisUPC",
	"FreesiaUPC", "GulimChe", "LilyUPC", "DilleniaUPC", "Miriam",
	"MS UI Gothic", "Traditional Arabic", "Levenim MT", "David",
	"KodchiangUPC", "Iskoola Pota", "SimSun-ExtB", "BrowalliaUPC", 
	"Euphemia", "CordiaUPC", "Browallia New", "AngsanaUPC", "Nyala",
	"NSimSun", "Kalinga", "GungsuhChe", "MingLiU_HKSCS-ExtB",
	"MingLiU_HKSCS", "MingLiU-ExtB", "PMingLiU-ExtB", "BatangChe", 
	"Gungsuh", "Aharoni", "Andalus", "Gisha", "Microsoft Uighur",
	"MoolBoran", "DokChampa", "DaunPenh", "Microsoft Tai Le", 
	"Leelawadee", "Malgun Gothic", "Microsoft JhengHei", 
	"Microsoft YaHei", "Arabic Typesetting", "Segoe UI Semibold", 
	"Segoe UI Symbol", "Ebrima", "Khmer UI", "Lao UI", "FangSong", 
	"Microsoft New Tai Lue", "KaiTi", "Microsoft PhagsPa", "Kokila", 
	"DFKai-SB", "Sakkal Majalla", "Utsaah", "Shonar Bangla", "Vani", 
	"Vijaya", "Aparajita", "Mistral", "Haettenschweiler", "MS Outlook",
	"Lucida Sans", "Lucida Handwriting", "Lucida Bright",
	"Freestyle Script", "Juice ITC", "Tempus Sans ITC", "Kristen ITC", 
	"Stencil", "Jokerman", "Bell MT", "Vivaldi", "Cooper Black", 
	"Bauhaus 93", "Harrington", "Matura MT Script Capitals", 
	"Baskerville Old Face", "Playbill", "Modern No. 20", "Colonna MT",
	"Onyx", "Britannic Bold", "Bernard MT Condensed", "Footlight MT Light",
	"Papyrus", "Wide Latin", "Brush Script MT", "Lucida Calligraphy",
	"Lucida Fax", "Centaur", "Broadway", "Californian FB",
	"Berlin Sans FB Demi", "Berlin Sans FB", "Algerian", 
	"Old English Text MT", "High Tower Text", "Niagara Solid",
	"Magneto", "Poor Richard", "Kunstler Script", "Harlow Solid Italic",
	"Viner Hand ITC", "Informal Roman", "Snap ITC",
	"Bodoni MT Poster Compressed", "Niagara Engraved", "Showcard Gothic",
	"Ravie", "Parchment", "Vladimir Script", "Chiller", 
	"Century Schoolbook", "Bradley Hand ITC", "Franklin Gothic Book", 
	"French Script MT", "Pristina", "Copperplate Gothic Bold", 
	"Copperplate Gothic Light", "Curlz MT", "Edwardian Script ITC",
	"Engravers MT", "Rockwell", "Rockwell Extra Bold", "Perpetua",
	"Arial Rounded MT Bold", "Franklin Gothic Demi", "Franklin Gothic Heavy",
	"Franklin Gothic Demi Cond", "Franklin Gothic Medium Cond",
	"Gill Sans MT", "Lucida Sans Typewriter", "Felix Titling", "Maiandra GD",
	"Eras Light ITC", "Goudy Old Style", "Calisto MT", "OCR A Extended",
	"Blackadder ITC", "Eras Demi ITC", "Gloucester MT Extra Condensed",
	"Imprint MT Shadow", "Gill Sans Ultra Bold", "Tw Cen MT", 
	"Perpetua Titling MT", "Gigi", "Agency FB", "Script MT Bold", 
	"Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold",
	"Elephant", "Castellar", "Goudy Stout", "Eras Medium ITC", 
	"Bodoni MT Condensed", "Bodoni MT", "Bodoni MT Black",
	"Gill Sans Ultra Bold Condensed", "Forte", 
	"Eras Bold ITC", "Rockwell Condensed", "Tw Cen MT Condensed",
	"Tw Cen MT Condensed Extra Bold", "Rage Italic",
	"Palace Script MT", "System", "Terminal", "Fixedsys", "MS Sans Serif",
	"Small Fonts", "MS Serif", "Modern", "Roman",
	"Script", "Courier New CE", "Times New Roman CE", "Times New Roman Greek", 
	"Courier New Baltic", "Arial CYR", "Arial CE",
	"Times New Roman TUR", "Courier New Greek", "Arial Baltic", 
	"Courier New TUR", "Times New Roman CYR", "Arial Greek", "Arial TUR",
	"Times New Roman Baltic", "Courier New CYR", "Times New Roman Cyr",
	"Courier New Cyr", "Arial Cyr", "Calibri Light", "Myriad Pro",
	"Hobo Std", "Trajan Pro", "Minion Pro", "Giddyup Std", 
	"Adobe Caslon Pro", "Blackoak Std", "Chaparral Pro", "OCR A Std", 
	"Birch Std",
	"Adobe Garamond Pro", "Tekton Pro", "Adobe Caslon Pro Bold", 
	"Cooper Std Black", "Myriad Pro Cond", "Adobe Garamond Pro Bold", 
	"Kozuka Mincho Pro EL", 
	"Myriad Pro Light", "Kozuka Mincho Pro B", "Kozuka Mincho Pro L", 
	"Kozuka Mincho Pro M", "Kozuka Gothic Pro B", "Kozuka Gothic Pro R", 
	"Kozuka Gothic Pro L",
	"Kozuka Gothic Pro M", "Kozuka Gothic Pro H", "Kozuka Gothic Pro EL",
	"Poplar Std", "Kozuka Mincho Pro R", "Kozuka Mincho Pro H", 
	"Letter Gothic Std", "Brush Script Std", 
	"Mesquite Std", "Stencil Std", "Orator Std", "Charlemagne Std",
	"Prestige Elite Std", "Rosewood Std Regular", "Minion Pro Med", 
	"Minion Pro SmBd", "Lithos Pro Regular", 
	"Tekton Pro Ext", "Nueva Std Cond", "Tekton Pro Cond",
	"Minion Pro Cond", "Arabic Transparent", "Adobe Ming Std L", 
	"Adobe Song Std L", "Adobe Fangsong Std R", "Adobe Myungjo Std M",
	"Adobe Kaiti Std R", "Adobe Heiti Std R", "Kozuka Mincho Pr6N H",
	"Kozuka Gothic Pr6N R", "Kozuka Gothic Pr6N M", "Kozuka Mincho Pr6N EL", 
	"Kozuka Mincho Pr6N L", "Kozuka Mincho Pr6N R", 
	"Kozuka Mincho Pr6N M", "Kozuka Gothic Pr6N L", "Kozuka Mincho Pr6N B", 
	"Kozuka Gothic Pr6N H", "Kozuka Gothic Pr6N B", "Kozuka Gothic Pr6N EL",
	"Adobe Fan Heiti Std B", "Adobe Gothic Std B", 
	"Adobe Hebrew", "Adobe Arabic", "Swis721 BT", "Swis721 Lt BT",
	"Swis721 Blk BT", "OCR-A BT", "OCR-B 10 BT", "Eccentric Std", 
	"Bell Gothic Std Light",
	"Bell Gothic Std Black", "WP CyrillicA", "WP CyrillicB", "Futura Md BT", 
	"Nueva Std", "Adobe Devanagari", "Myriad Hebrew", "Myriad Arabic", 
	"Freehand521 BT", "Adobe Naskh Medium", "Chaparral Pro Light", 
	"Swis721 Hv BT", "WP Greek Courier", "WP Greek Century", "DejaVu Sans",
	"WP Greek Helve", "WP MultinationalA Roman", 
	"WP MultinationalB Courier", "WP MultinationalB Roman", 
	"DejaVu Sans Mono", "WP MultinationalA Helve",
	"WP MultinationalB Helve", "WP MultinationalA Courier", "DejaVu Serif",
	"OpenSymbol", "Swis721 Cn BT", "DejaVu Sans Light", "Swis721 LtEx BT",
	"Swis721 BlkCn BT", "DejaVu Sans Condensed", "DejaVu Serif Condensed",
	"WP ArabicScript Sihafa", "Arno Pro", "WP Arabic Sihafa", 
	"WP Hebrew David", "Arno Pro Light Display", "Arno Pro Display", 
	"Arno Pro Smbd Caption", "Arno Pro Caption", "Arno Pro Subhead",
	"Arno Pro SmText", "Arno Pro Smbd Display", "Arno Pro Smbd SmText", 
	"Arno Pro Smbd", "Arno Pro Smbd Subhead", "Bickham Script Pro Regular", 
	"Bickham Script Pro Semibold", "Garamond Premr Pro", 
	"Garamond Premr Pro Smbd", 
	"Gentium Book Basic", "Gentium Basic", "GothicI", "GothicE",
	"BankGothic Lt BT", 
	"BankGothic Md BT", "Bickham Script Two", "ISOCTEUR", "ISOCPEUR",
	"Dutch801 Rm BT", 
	"CommercialScript BT", "ScriptS", "TeamViewer8", "Swis721 BlkEx BT", 
	"Swis721 BdCnOul BT",
	"Monotxt", "GothicG", "Swis721 Ex BT", "Swis721 LtCn BT", "RomanD",
	"Dutch801 XBd BT", "Txt", 
	"Vineta BT", "GreekS", "Monospac821 BT", "ScriptC", "CountryBlueprint",
	"Complex", "Swis721 BlkOul BT", "GreekC", "Simplex", "ISOCP2", 
	"Technic", 
	"ISOCP3", "Swis721 BdOul BT", "ISOCP", "TechnicBold", "RomanS",
	"WST_Engl", "TechnicLite", "RomanT", "Romantic", "Symeteo", "WST_Fren",
	"CityBlueprint", "ISOCT2", "Symath", "ISOCT3", "GDT", "Syastro",
	"Symap", "ISOCT", "RomanC", "ItalicC", "SansSerif", "EuroRoman", 
	"Symusic", "ItalicT", "CommercialPi BT", "Proxy 1", "Proxy 2", 
	"WST_Czec", "Proxy 6", "Proxy 5", "Proxy 4", "Proxy 3", "PanRoman", 
	"Italic", "Stylus BT", "Proxy 9", "Proxy 8", "WST_Germ", "Proxy 7", 
	"SuperFrench", "UniversalMath1 BT", "WST_Ital", "WST_Swed", "WST_Span", 
	"AmdtSymbols", "AMGDT", "AcadEref", "AIGDT", "ZWAdobeF", 
	"Bickham Script One", "Microsoft JhengHei UI", "Amadeus", 
	"Microsoft YaHei UI", "Copyist", "Gadugi", "Nirmala UI",
	"Segoe UI Semilight", "Ariston", 
	"Heather Script One", "Carolina", "Myriad Web Pro", "Alexandra Script",
	"Square721 BT", "AnastasiaScript", "GENISO", "Calligraph", 
	"Ouverture script", "Decor", "Helvetica", "Annabelle",
	"Clarendon Lt BT", "Clarendon Blk BT", "Liberation Sans Narrow", 
	"Clarendon BT", "Ceremonious Two", "Eurostile"];
}


var Detector = function() {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];
   // var baseFonts = fonts_js();

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }

    this.detect = detect;
};