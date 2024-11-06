const quesHTMLContent = {
    quesContent: '<div id="ques-open-content" class="content-container"><div id="ques-open-content" class="text-container"><p class="title">על הלומדה:</p><div class="line">מטרת הלומדה:</div><div class="line">הצגת חטיבת החילוץ וההדרכה- היסטוריה, מבנה ותפקידים.</div><div class="line">הלומדה כוללת טקסט וגם סרטונים, לפעמים יחד ולפעמים לחוד.</div><div class="line">הסרטונים בלומדה יתחילו באופן אוטומטי.</div><div class="line"><span>לאורך הלומדה יופיעו </span><span id="def1" class="colored-text">מילים בצבע</span><span> אשר לאחר לחיצה עליהן יופיע ההסבר למושג.</span></div><div class="line">כמו כן, יופיעו קרוסלות של תמונות או טקסט. על מנת לצפות בהמשך הקרוסלה, לחצו על אחד החצים לפחות פעם אחת!</div><div class="line">בנוסף, הכפתורים האלו יופיעו לכל אורך הלומדה. לחצו עליהם כדי לצפות בשימוש שלהם:</div></div><div id="buttons"><img src="assets/images/menu-btn.svg" alt="כפתור התפריט" id="exmp-menu-btn" title="כפתור התפריט" class="example-btn"><img src="assets/images/info-btn.svg" alt="כפתור אודות" id="exmp-info-btn" title="כפתור אודות" class="example-btn"><img src="assets/images/ques-btn.svg" alt="כפתור המידע" id="exmp-ques-btn" title="כפתור המידע" class="example-btn"></div><span class="error" id="menu-error" style="display: none;">אופס, עליכם לעבור על כל הכפתורים!</span></div>',
    exmpMenuContent: '</div><div id="exmp-menu-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/menu-btn.svg" alt="כפתור התפריט" style="width: 2rem; margin-left: 0.5rem;"><span class="title">כפתור התפריט</span></div><div>כפתור זה יציג את ראשי הפרקים, אשר בלחיצה עליהם יוצגו תתי הנושאים בפרק.</div><div><span class="bold-txt">שימו לב! </span><span>לא ניתן יהיה לדלג על פרקים.</span></div><div>ניתן לעבור אחורה וקדימה בעזרת התפריט רק בין פרקים שכבר נצפו.</div></div>',
    exmpInfoContent: '</div><div id="exmp-info-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/info-btn.svg" alt="כפתור אודות" style="width: 2rem; margin-left: 0.5rem;"><p class="title">כפתור אודות</p></div><div>כפתור זה יציג את הקרדיטים ללומדה בהיטבי הפיתוח, התוכן, העיצוב, הגרפיקות וכן בעלי תפקידים נוספים אשר לקחו חלק בתהליך.</div></div>',
    exmpQuesContent: '</div><div id="exmp-ques-content" class="text-container"><div style="display: flex; align-items: center;"><img src="assets/images/ques-btn.svg" alt="כפתור המידע" style="width: 2rem; margin-left: 0.5rem;"><p class="title">כפתור המידע</p></div><div>כפתור זה יציג את כל התזכורות שמופיעות בעמודים הקודמים.</div><div>אם תרצו להיזכר במשהו, כפתור זה יהיה נגיש לכם לכל אורך הלומדה עם ההסברים הללו.</div></div>'
};

const definitionsText = {
    def1: ["כאן יופיע ההסבר למושג."],
    def2: ["מסגרת ארגונית בעורף הממונה על מרחב גזרתי בגזרת פיקוד העורף, המחוז כפוף ישירות למפקדת פיקוד העורף."],
    def3: ["נפה= מסגרת מרחבית של מסגרות ושל כוחות מילואים הכפופה למחוז ומופקדת על פעולת ההגנה האזרחית במרחבה בשעת חירום.\nהנפה הסדירה= המפקדה הקודמת לחטיבה אשר הורכבה מארבעה גדודי חילוץ והצלה סדירים, בסיס הכשרות ובסיס הכשרת מפקדים. הנפה הסדירה הייתה המפקדה היחידה המורכבת ממשרתי סדיר ועל כן שמה."],
    def4: ["בניין הכוח הוא החלק העוסק בבנייתו של הכוח העומד לרשות הצבא ויחידותיו."],
    def5: ["רצף קבוע של מופעי אימונים העומדים לראשות המסגרת המתאמנת במשך זמן מוגדר ותחום, במטרה לרענן, לשמר ולשפר כשירות בסיסית ומבצעית למסגרת המתאמנת."],
    def6: ["כשירות= תכונה כללית של גורם צבאי המבטאת את הערכת מידת יכולתם למלא כנדרש את תפקידיהם התקניים.\nכוננות= מצב של מוכנות ונכונות לפעולה טרם ההפעלה."],
    def7: ["מפקדה המוקמת ומופעלת כדי לפקד על גוף או על מכלול גופים לשם תכנון או ניהול הביצוע של משימה צבאית מסוימת או חלק ממנה."],
    def8: ["יחידה פיקודית שייעודה להוות מוקד מידע לאוכלוסייה בשגרה ובחירום ולהעביר הנחיות מצילות חיים בנושאי התגוננות אזרחית."],
    def9: ["אימון ורענון לטובת שיפור מוכנות הכוחות למשימה המבצעית אשר עתידים לבצע."],
    def10: ["מערכת שליטה ובקרה.\nהמערכת המרכזית לשימוש בפיקוד העורף- שוע''ל (שליטה ובקרה עורף לאומי)."],
    def11: ["מכלול הנתונים על אוכלוסייה במרחב מסוים על מנת לתת מענה אקטיבי בעת אירוע חירום."],
    def12: ["ציוד מכני הנדסי המשמש לחילוץ, קילוף והנפת אלמנטים באתר הרס."],
    def13: ["הנדסת חילוץ- מכלול פעולות הנדסיות שמבוצעות באתר הרס."],
    def14: ["איסוף נתונים וחללים- תחום הטיפול בחללים באירוע הרס."],
};

// all of the objects for page creation are organized as:
// element- text element: tag name, class value, id value, text value, parent element id
// image:  src path, alt value, id value, class value, title value, parent element id 
// carousel: object that contains the instrictions for creation
// video:  width, height, class, id, parent element id, src
// event listener: element id, event type, function
// all functions or variavles used in this creation type have to be defined with var
const openScreenContent = {
    el1: ["div", "main-title", "open-title", "", "page"],
    el2: ["div", "", "", "תעודת זהות-", "open-title"],
    el3: ["div", "", "", "חטיבת החילוץ וההדרכה", "open-title"],
    el4: ["button", "next-btn-timeline", "start-btn", "התחל", "page"],
    evLis5: ["start-btn", "click", "nextPage"]
}

var endScreenContent = {
    el1: ["div", "main-title", "open-title", "", "page"],
    el2: ["div", "con-sen", "", "כל הכבוד! סיימת את לומדת:", "page"],
    el3: ["div", "", "", "תעודת זהות-", "open-title"],
    el4: ["div", "", "", "חטיבת החילוץ וההדרכה", "open-title"],
    el5: ["div", "","re-do-button", "", "page"],
    img6: ["assets/images/re-do.svg", "חזור", "", "re-do-img", "", "re-do-button"],
    el7: ["div", "", "", "חזרה על הלומדה", "re-do-button"],
    evLis8: ["re-do-button", "click", "restart"]
}

var page2 = {
    el1: ["div", "open-text", "page3text", "", "page"],
    el2: ["div", "", "", "חטיבת החילוץ וההדרכה הינה החטיבה הסדירה היחידה בפיקוד העורף אשר בנוי ברובו מאנשי מילואים.\nעל מנת להבין לעומק את ייחודיות החטיבה, נעמיק בדרך שהחטיבה עברה מאז ועד היום- מ'פלח''ץ' לחטיבת החילוץ וההדרכה.", "page3text"],
    el3: ["button", "next-btn-timeline", "next-btn-2", "בואו נתחיל!", "page3text"]
}

var page3 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    vid2: ["enlistingvid", "59000"]
}

var page4 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1992- הקמת פיקוד העורף", "timeline-text-container"],
    el3: ["div", "quote", "quote-text", "", "timeline-text-container"],
    el4: ["strong", "", "", "''ביום מן הימים, מה שקרוי העורף יכריע לא פחות מהחזית. לא נוכל לעמוד במלחמה באמצעים צבאיים בלבד''", "quote-text"],
    el5: ["span", "quote-end", "", "(דוד בן גוריון, 1948)", "quote-text"],
    el6: ["div", "", "", "פיקוד העורף הוקם בשנת 1992 לאחר מלחמת המפרץ הראשונה בה האיום על העורף העלה את הצורך בהתגוננות אזרחית סדורה. \nבמקרה כזה, ישחרר פיקוד העורף את אלופי הפיקודים האחרים (צפון, מרכז, דרום) מדאגה לעורף, ויאפשר להם להתרכז בצרכים המבצעיים בחזית.", "timeline-text-container"],
    el7: ["button", "next-btn-timeline", "next-btn-4", "הבנתי!", "timeline-text-container"]
}

var page5 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2003- הקמת פלוגת החילוץ הראשונה- פלוגת 'שביט'", "timeline-text-container"],
    el3: ["div", "", "", "ממלחמת לבנון הראשונה ועד לאחר מלחמת המפרץ הורכבו פלוגות החילוץ וההצלה מאנשי מילואים בעלי ידע אזרחי הקשור בבינוי.\nלאחר מלחמת המפרץ הבינו שיש צורך בגוף סדיר שיהיה כונן לאירועי חילוץ בעורף, והתקבלה ההחלטה להקים פלוגת חילוץ סדירה ראשונה, פלוגת 'שביט'.", "timeline-text-container"],
    el4: ["button", "next-btn-timeline", "next-btn-5", "בואו נמשיך!", "timeline-text-container"]
}

var page6 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2004- הקמת פלוגת 'חץ' ופלוגת 'רותם'", "timeline-text-container"],
    el3: ["div", "", "", "בשנת 2004 הוקמו שתי פלוגות חילוץ נוספות- פלוגת 'חץ' ופלוגת 'רותם'.\nמשימת הבט''ש של הפלוגות האלו הייתה אבטחת בתי כלא בכלא 'עופר' ובכלא 'מגידו' בעוד שמשימתם האופרטיבית הייתה חילוץ והצלה.", "timeline-text-container"],
    el4: ["div", "bold-txt", "", "המושג 'פלח''ץ' מתייחס לתקופה שבה היו קיימות רק פלוגות חילוץ ללא שייכות לגדוד ולחטיבה.", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-6", "המשך", "timeline-text-container"]
}

var page7 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2008- איחוד פלוגות החילוץ והקמת גדוד שחר", "timeline-text-container"],
    el3: ["div", "shahar-text", "", "כאמור, בשלב זה ישנן 3 פלוגות חילוץ סדירות. \nלאחר מלחמת לבנון השנייה הוחלט לחבר את הפלוגות לכדי גדוד בעל מפקדה אשר תבנה ותפעיל את הכוח. \nאיחוד הפלוגות תחת מפקדה אחת אפשר יצירת סטנדרט אחיד ושפה משותפת.\nבשנת 2008, אוחדו שלוש פלוגות החילוץ והוקם הגדוד הראשון בחטיבה- גדוד 'שחר'.\nהגדוד החל להתקדם גם בהיבטים המבצעיים, החל מתחילת תעסוקות מבצעיות ביהודה ושומרון ועד כניסה לעזה כצוותי פריצה וצוותי חילוץ בעת הצורך.", "timeline-text-container"],
    el4: ["div", "shahar-text", "complex-text7", "", "timeline-text-container"],
    el5: ["span", "", "", "בתחילת דרכו גדוד 'שחר' היה כפוף ", "complex-text7"],
    el6: ["span", "colored-text", "def2", "למחוז", "complex-text7"],
    el7: ["span", "", "", " מרכז, אשר במקביל הורכב מגדודי מילואים.", "complex-text7"],
    img8: ["assets/images/gdud-shahar.svg", "גדוד שחר", "timeline-shahar-img", "timeline-symbol-img", "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-7", "הבנתי", "timeline-text-container"]
}

var page8 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2009- הקמת גדוד קדם", "timeline-text-container"],
    el3: ["div", "", "", "בשנת 2009 הוחלט להרחיב את מערך החילוץ הסדיר ולהקים גדוד נוסף בשם גדוד 'קדם' ולו 3 פלוגות: 'קרן', 'דוד' ו'מגן'.", "timeline-text-container"],
    img4: ["assets/images/gdud-kedem.svg", "גדוד קדם", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-8", "אני רוצה להמשיך!", "timeline-text-container"]
}

var page9 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2011- המעבר ממג''ל לפקע''ר", "timeline-text-container"],
    el3: ["div", "", "", "בשנת 2011 פיקוד העורף קיבל את האחריות על מחנה זיקים שעד אז, היה בכפיפות מג''ל.\nכלל המתגייסים ללוחמה בפיקוד העורף בין השנים 2009-2011 עברו הכשרה אשר הייתה מחולקת לשני חלקים: סגל מג''ל העביר למתגייסים החדשים את פרק הטירונות, ואת נושאי העורף העבירו מפקדים מפיקוד העורף. \nהידעת? במחזור הראשון שהתגייס ללוחמה בפיקוד העורף היו 80 חיילים בפלוגה. לצורך השוואה- במחזור הגיוס מרץ 2024, היו כ140 חיילים בפלוגה! ", "timeline-text-container"],
    img4: ["assets/images/magal.png", "מערך מגל", "timeline-magal-img", ["timeline-symbol-img", "shield-sym"], "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-9", "אני רוצה להמשיך!", "timeline-text-container"]
}

var page10 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד תבור", "timeline-text-container"],
    el3: ["div", "", "", "בשנת 2012 הוקם גדוד 'תבור' אשר בתוכו שלוש פלוגות:\n'תבל', 'ברק', 'ראם'.\nבשנת 2020 הוקמה בתוך הגדוד פלוגה נוספת בשם 'ונוס'.", "timeline-text-container"],
    img4: ["assets/images/gdud-tavor.svg", "גדוד תבור", "", "timeline-symbol-img", "", "timeline-text-container"],
    el5: ["button", "next-btn-timeline", "next-btn-10", "בואו נמשיך!", "timeline-text-container"]
}

var page11 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2012- הקמת גדוד רם", "timeline-text-container"],
    el3: ["div", "", "", "בשנת 2012 גדוד נ''מ (נגד מטוסים) של חיל האוויר ''סטינגר'' הוסב לפיקוד העורף. \nהוחלט כי הגדוד יעבור לפיקוד העורף לאחר סגירת הגדוד בחיל האוויר בשל חוסר צורך מבצעי ביחידה.\nרוב עיסוקו של הגדוד בשנותיו האחרונות בחיל האוויר היה תע''מ ביבשה. \nהשם שנבחר לגדוד החדש בפיקוד העורף הוא גדוד 'רם' אשר בתוכו שלוש פלוגות: 'רמון', 'מצדה', 'ארבל'- שמות הפלוגות ששונו ממושגים של חיל האוויר למושגים של פיקוד העורף. ", "timeline-text-container"],
    img4: ["assets/images/gdud-ram.svg", "גדוד רם", "timeline-ram-img", "timeline-symbol-img", "", "timeline-text-container"],
    // func5: ["handleFlipCards"]
}

var page12 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text11", "", "timeline-text-container"],
    el4: ["span", "", "", "ארבעת הגדודים הסדירים היו כפופים למחוז ירושלים והמרכז עד שבשנת 2013 הוחלט להקים ", "complex-text11"],
    el5: ["span", "colored-text", "def3", "נפה סדירה", "complex-text11"],
    el6: ["span", "", "", " בפיקוד העורף אשר אליה יהיו כפופים הגדודים הסדירים של הפיקוד.", "complex-text11"],
    el7: ["div", "", "", "ההחלטה התקבלה בעקבות המורכבות של המחוז לתת קשב גם לגדודי המילואים וגם לגדודים הסדירים.\nבנוסף לארבעת הגדודים הוכפפו לנפה בא''ח העורף וענף מפקדים (עליהם נפרט בהמשך).", "timeline-text-container"],
    img8: ["assets/images/hativa.svg", "סמל חטיבה", "", ["timeline-symbol-img", "shield-sym"], "", "timeline-text-container"],
    el9: ["button", "next-btn-timeline", "next-btn-12", "הבנתי", "timeline-text-container"],
    evLis10: ["next-btn-12", "click", "nextPage"]
}

var page13 = {
    el1: ["div", "timeline-opacity1", "timeline-text-container", "", "page"], 
    el2: ["div", ["title", "page13-title"], "timeline-title", "2013- הקמת הנפה הסדירה", "timeline-text-container"],
    vid3: ["nafavid", "195000"]
}

var page14 = {
    el1: ["div", "timeline-opacity1", "timeline-text-container", "", "page"],
    el2: ["div", "sub-title", "sub-title", "וכעת נעבור לזרוע השנייה שמרכיבה את חטיבת החילוץ וההדרכה:\nבה''ד 16", "timeline-text-container"],
    el3: ["button", "next-btn-timeline", "next-btn-14", "קדימה!", "timeline-text-container"],
    evLis4: ["next-btn-14", "click", "nextPage"]
}

var page15 = {
    // fix year text
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "1952- בה''ד 16", "timeline-text-container"],
    el3: ["div", "bahad16text", "", "מתוקף חוק הג''א, היו בבה''ד 16 ענפים אשר היו אמונים על הכשרת מקצועות העורף לאוכלוסיות השונות.\nבה''ד 16, ובשמו השני- ''המרכז הלאומי לחילוץ, אב''כ והתגוננות אזרחית'' ישב בצריפין והיה בנוי משלושה ענפים ומטה בה''ד:", "timeline-text-container"],
    el4: ["div", "", "branches", "", "timeline-text-container"],
    el5: ["div", "", "profession-branch", "", "branches"],
    img6: ["assets/images/profession-branch.png", "ענף מקצועות", "profession-branch-img", "branch-img", "", "profession-branch"],
    el7: ["div", "branch-text", "profession-branch-text", "ענף מקצועות", "profession-branch"],
    el8: ["div", "", "command-branch", "", "branches"],
    el9: ["div", "branch-text", "command-branch-text", "ענף מפקדות", "command-branch"],
    el10: ["div", "", "emi-branch", "", "branches"],
    img11: ["assets/images/emi-branch.png", "ענף אימון יחידות", "emi-branch-img", "branch-img", "", "emi-branch"],
    el12: ["div", "branch-text", "emi-branch-text", "ענף אימון יחידות", "emi-branch"],
    el13: ["div", "", "branch-explaination", "עברו על כל היחידות כדי להמשיך בלומדה", "timeline-text-container"],
    func14: ["timelineComplexPage"]
    // evLis14: ["branches", "click", "timelineComplexPage"]
}

var page16 = {
    el1: ["div", "timeline-text-page", "timeline-text-container", "", "page"], 
    el2: ["div", "title", "timeline-title", "2016- איחוד בה''ד 16 והנפה הסדירה", "timeline-text-container"],
    el3: ["div", "", "complex-text15", "", "timeline-text-container"],
    el4: ["span", "", "", "בשנת 2016 אוחד בה''ד 16 עם הנפה הסדירה והוקמה ", "complex-text15"],
    el5: ["strong", "", "", "חטיבת החילוץ וההדרכה", "complex-text15"],
    el6: ["div", "", "pin-container", "", "timeline-text-container"],
    img6: ["assets/images/new-fighter.svg", "סיכת לוחם חדשה", "new-fighter", ["timeline-symbol-img", "fighter-pin"], "", "pin-container"],
    img7: ["assets/images/old-fighter.svg", "סיכת לוחם ישנה", "old-fighter", ["timeline-symbol-img", "fighter-pin"], "", "pin-container"],
    el8: ["button", "next-btn-timeline", "next-btn-16", "המשך!", "timeline-text-container"]
}

var page17 = {
    el1: ["div", "", "american-question-container", "", "page"],
    el2: ["div", "american-question-title", "", "מתי הוקם פיקוד העורף?", "american-question-container"],
    el3: ["div", "", "american-ans-container", "", "american-question-container"],
    el4: ["div", "american-answer", "american-ans1", "1992", "american-ans-container"],
    el5: ["div", "american-answer", "american-ans2", "1990", "american-ans-container"],
    el6: ["div", "american-answer", "american-ans3", "2016", "american-ans-container"],
    el7: ["div", "american-answer", "american-ans4", "1982", "american-ans-container"],
    el8: ["button", "", "american-check-btn", "בדיקה", "american-question-container"],
    func9: ["americanHandleSelectedAnswer"],
    evLis10: ["american-check-btn", "click", "checkAmericanMultipulChoice"]
}

var page18 = {
    el1: ["div", "", "american-question-container", "", "page"],
    el2: ["div", "american-question-title", "", "בעקבות איזה אירוע הוחלט על הקמת פיקוד העורף?", "american-question-container"],
    el3: ["div", "", "american-ans-container", "", "american-question-container"],
    el4: ["div", "american-answer", "american-ans1", "מלחמת ששת הימים", "american-ans-container"],
    el5: ["div", "american-answer", "american-ans2", "מלחמת שלום הגליל", "american-ans-container"],
    el6: ["div", "american-answer", "american-ans3", "מלחמת המפרץ", "american-ans-container"],
    el7: ["div", "american-answer", "american-ans4", "פעולות התגמול", "american-ans-container"],
    el8: ["button", "", "american-check-btn", "בדיקה", "american-question-container"],
    func9: ["americanHandleSelectedAnswer"],
    evLis10: ["american-check-btn", "click", "checkAmericanMultipulChoice"]
}

var page19 = {
    el1: ["div", "choose-question-container", "choose-question-container", "", "page"],
    el2: ["div", "", "choose-question", "אילו שני גופים אוחדו בשנת 2016 לחטיבת החילוץ וההדרכה כפי שהיא היום?", "choose-question-container"],
    el3: ["div", "choose-card-container", "choose-card-container", "", "choose-question-container"],
    el4: ["div", "choose-card", "choose-ans1", "בה''ד 16", "choose-card-container"],
    el5: ["div", "choose-card", "choose-ans2", "מפקדה משימתית", "choose-card-container"],
    el6: ["div", "choose-card", "choose-ans3", "גדוד שחר", "choose-card-container"],
    el7: ["div", "choose-card", "choose-ans4", "מחוז מרכז", "choose-card-container"],
    el8: ["div", "choose-card", "choose-ans5", "מחוז צפון", "choose-card-container"],
    el9: ["div", "choose-card", "choose-ans6", "מפקדת אלון", "choose-card-container"],
    el10: ["div", "choose-card", "choose-ans7", "ענף מפקדים", "choose-card-container"],
    el11: ["div", "choose-card", "choose-ans8", "נפה 60 (הנפה הסדירה)", "choose-card-container"],
    el12: ["div", "choose-card", "choose-ans9", "בה''ד 10", "choose-card-container"],
    el13: ["div", "choose-card", "choose-ans10", "ענף מקצועות", "choose-card-container"],
    el14: ["bbutton", "", "choose-check-btn", "בדוק", "choose-question-container"],
    el15: ["div", "choose-error", "choose-error-msg", "עליכם לבחור 2 תשובות בלבד", "choose-question-container"],
    func16: ["chooseCardsQuestion"]
}

var page20 = {
    el1: ["div", "connect-question-container", "connect-question-container", "", "page"],
    el2: ["div", "", "connect-question", "התאם בין התאריך לאירוע. לחץ על 2 תשובות משורות שונות ולחץ על הכפתור כדי לבדוק את תשובתך", "connect-question-container"],
    el3: ["div", "connect-card-container", "connect-card-container", "", "connect-question-container"],
    el4: ["div", "connect-year-container", "connect-year-container", "", "connect-card-container"],
    el5: ["div", "connect-event-container", "connect-event-container", "", "connect-card-container"],
    el6: ["div", "connect-card", "connect-year1", "1992", "connect-year-container"],
    el7: ["div", "connect-card", "connect-year2", "2003", "connect-year-container"],
    el8: ["div", "connect-card", "connect-year3", "2004", "connect-year-container"],
    el9: ["div", "connect-card", "connect-year4", "2008", "connect-year-container"],
    el10: ["div", "connect-card", "connect-year5", "2009", "connect-year-container"],
    el11: ["div", "connect-card", "connect-year6", "2012", "connect-year-container"],
    el12: ["div", "connect-card", "connect-year7", "2012", "connect-year-container"],
    el13: ["div", "connect-card", "connect-year8", "2013", "connect-year-container"],
    el14: ["div", "connect-card", "connect-year9", "2016", "connect-year-container"],
    el15: ["div", "connect-card", "connect-event6", "הקמת גדוד תבור", "connect-event-container"],
    el16: ["div", "connect-card", "connect-event2", "הקמת פלוגת החילוץ הראשונה- פלוגת 'שביט'", "connect-event-container"],
    el17: ["div", "connect-card", "connect-event8", "הקמת הנפה הסדירה", "connect-event-container"],
    el18: ["div", "connect-card", "connect-event3", "הקמת פלוגת 'חץ' ופלוגת 'רותם'", "connect-event-container"],
    el19: ["div", "connect-card", "connect-event9", "איחוד בה''ד 16 והנפה הסדירה והקמת חטיבת החילוץ", "connect-event-container"],
    el20: ["div", "connect-card", "connect-event5", "הקמת גדוד קדם", "connect-event-container"],
    el21: ["div", "connect-card", "connect-event1", "הקמת פיקוד העורף", "connect-event-container"],
    el22: ["div", "connect-card", "connect-event7", "הקמת גדוד רם", "connect-event-container"],
    el23: ["div", "connect-card", "connect-event4", "איחוד פלוגות החילוץ והקמת גדוד שחר", "connect-event-container"],
    el24: ["button", "", "connect-check-btn", "בדיקה", "connect-question-container"],
    el25: ["div", "connect-error", "connect-error-msg", "עליכם לבחור 2 תשובות בלבד", "connect-question-container"],
    func26: ["connectTwoQuestion"]
}

var page21= {
    el1: ["div", "", "american-question-container", "", "page"],
    el2: ["div", "american-question-title", "", "בחרו את המשפט הנכון", "american-question-container"],
    el3: ["div", "", "american-ans-container", "", "american-question-container"],
    el4: ["div", "american-answer", "american-ans1", "משימתן של פלוגות החילוץ הראשונות היתה קיום הכשרות למדריכים וללוחמים במקצועות העורף", "american-ans-container"],
    el5: ["div", "american-answer", "american-ans2", "משימתן של פלוגות החילוץ הראשונות היתה אבטחת כלא מגידו", "american-ans-container"],
    el6: ["div", "american-answer", "american-ans3", "משימתן של פלוגות החילוץ הראשונות היתה אימון גדודי המילואים לחילוץ ולאב''כ", "american-ans-container"],
    el7: ["button", "", "american-check-btn", "בדיקה", "american-question-container"],
    func8: ["americanHandleSelectedAnswer"],
    evLis9: ["american-check-btn", "click", "checkAmericanMultipulChoice"]

}

var page22 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"], 
    el2: ["div", "con-sen", "", "עכשיו, לאחר שלמדנו על הדרך שעברה החטיבה עד היום, נעבור ל:", "main-roles"],
    el3: ["div", "sub-title", "sub-title-roles", "ייעוד ותפקידי חטיבת החילוץ וההדרכה", "main-roles"],
    el4: ["button", "next-btn-timeline", "next-btn-22", "קדימה!", "main-roles"],
    evLis5: ["next-btn-22", "click", "nextPage"]
}

var page23 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "ייעוד ותפקידי חטיבת החילוץ וההדרכה", "main-roles"],
    el3: ["div", "", "complex-text28", "", "main-roles"],
    el4: ["span", "", "", "חטיבת החילוץ וההדרכה תהווה גוף ", "complex-text28"], 
    el5: ["span", "colored-text", "def4", "לבניין כוח", "complex-text28"], 
    el6: ["span", "", "", " של מערך הלחימה בפקע''ר, ותכשיר ותאמן את מסגרות פקע''ר בסדיר ובמיל' בתחומי החילוץ והאב''כ.", "complex-text28"], 
    el7: ["div", "", "", "מפקדת החטיבה תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירת המלחמה, לרבות מחוץ לגבולות מדינת ישראל ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה.", "main-roles"], 
    img8: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis9: ["roles-next-arrow", "click", "nextPage"]
}

var page24 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "", "info-roles", "", "main-roles"],
    el3: ["div", "title", "", "תפקידי החטיבה בשגרה ובחירום", "info-roles"],
    el4: ["div", "info-carousel", "info-carousel", "", "info-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    el6: ["div", "error", "rolesErrorText", "עליך לעבור על כל המידע בקרוסלות על מנת להמשיך", "main-roles"],
    func7: ["rolesCarousels"]
}

var page25 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- טורקיה", "main-roles"], 
    img4: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    vid5: ["turkeyvid", "320000"]
}

var page26 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "מפקדה משימתית- קורונה", "main-roles"], 
    el4: ["div", ["roles-text", "corona-text"], "", "עם פרוץ מגפת הקורונה, פיקוד העורף ובתוכו החטיבה לקחו חלק משמעותי במאמצי הסיוע וההתמודדות עם המשבר הלאומי בכל רחבי הארץ.\nעיקרי המשימות אשר החטיבה לקחה בהן חלק כ'מפקדה משימתית': ", "main-roles"],
    el5: ["ol", ["roles-text", "corona-text"], "corona-list", "", "main-roles"],
    el6: ["li", ["roles-text", "corona-text"], "", "סיוע למשרד הבריאות ולרשויות המקומיות בקיום הסברה ממוקדת ומותאמת אוכלוסיות", "corona-list"],
    el7: ["li", ["roles-text", "corona-text"], "", "סיוע בפינוי חולי קורונה לבתי חולים ", "corona-list"],
    el8: ["li", ["roles-text", "corona-text"], "", "סיוע בהגנה ושמירה על אוכלוסיות בסיכון", "corona-list"],
    el9: ["div", ["roles-text", "corona-text"], "", "כל זאת על מנת להציל חיים ולאפשר את המשך תפקוד המשק תחת הגבלות הקורונה.", "main-roles"],
    img10: ["assets/images/polaroid.svg", "רקע", "polaroid-corona", "polaroid", "", "main-roles"],
    img11: ["assets/images/tape.svg", "עיצוב", "corona-tape", "tape", "", "main-roles"],
    img12: ["assets/images/corona-img.JPG", "תמונת קורונה", "corona-img", "roles-img", "", "main-roles"],
    img13: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis14: ["roles-next-arrow", "click", "nextPage"]
}

var page27 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בעורף", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה הינם הגוף הסדיר בעל כשירות החילוץ הגבוהה ביותר. המחלצים ערוכים לביצוע פעולות חילוץ במתאר הרס מלחמתי בתוך שטח מדינת ישראל (כתוצאה מפגיעת רקטה לדוגמה), אסונות טבע וכשלים הנדסיים כל זאת במטרה להציל חיים.", "main-roles"],
    img5: ["assets/images/polaroid.svg", "רקע", "polaroid-rescue", "polaroid", "", "main-roles"],
    img6: ["assets/images/tape.svg", "עיצוב", "", "tape", "", "main-roles"],
    img7: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis8: ["roles-next-arrow", "click", "nextPage"],
    func9: ["rescueImgCarousel"]
}

var page28 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "לאור מאפייני הלחימה במרחב התמרון (בשטח מדינת האויב), המאופיינים במרחב בנוי רווי מטענים ותשתיות תת קרקע ממולכדות, נדרש מענה מבצעי לאיום פגיעה בכוחותינו לאור קריסת מבנה או חלל תת קרקע.\nהכוח שמוכשר לתת מענה בפעולות חילוץ של כוחות מתמרנים של צה''ל מהריסות מבנים במרחב הלחימה, הינם לוחמי החילוץ של חטיבת החילוץ וההדרכה.", "main-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    vid6: ["buildingvid", "41000"],
}

var page29 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "חילוץ בסיוע לתמרון", "main-roles"], 
    el4: ["div", "roles-text", "", "בעת תמרון בשטח אויב קיימת סכנה להתמוטטות מבנה על כוחותינו.\nתרחיש זה שונה בתכלית מתרחיש התמוטטות בעורף, מכיוון שאין באפשרות ארגוני החירום להגיע לאירוע.\nבמלחמה, גדודי החטיבה יצוותו לאוגדות מתמרנות בתצורת צק''פים (צוותי קרב פלוגתיים) אשר יתנו מענה לאירועי חילוץ של כוחותינו בשטח האויב.", "main-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    vid6: ["daysvid", "106000"],
}

var page30 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "אב''כ", "main-roles"], 
    el4: ["div", "roles-text", "", "לגדודי החטיבה כשירות לטפל באירועים כימיים בעורף, טיהור המוקד הנגוע ופינוי האוכלוסייה עפ''י צורך.\nהלוחמים והלוחמות בגדוד מתמקצעים ביכולות השונות הנדרשות לטיפול באירוע כה מורכב: גילוי וזיהוי מוקד הזיהום, טיהור השטח הנגוע, טיהור בני אדם וכלי רכב היוצאים מהאזור הנגוע ועוד. כל זאת על מנת שיוכלו לפעול ביעילות ולהציל חיים בזמן הקצר ביותר.", "main-roles"],
    vid5: ["abachvid", "0"],
    img6: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    evLis7: ["roles-next-arrow", "click", "nextPage"]
}

var page31 = {
    el1: ["div", "roles-text-page", "main-roles", "", "page"],
    el2: ["div", "title", "", "תפקידים מרכזיים", "main-roles"],
    el3: ["div", "subtitle", "", "בט''ש", "main-roles"], 
    el4: ["div", "roles-text", "", "גדודי החטיבה מבצעים תעסוקה מבצעית מלאה באיו''ש ובגבולות המדינה: מעצרי מבוקשים, סיורים, תצפיות, מארבים ועוד…\nהלוחמים והלוחמות מוכשרים ללחימה בשטח פתוח ובשטח בנוי, ביום ובלילה, בכדי להגן על ביטחון מדינת ישראל.", "main-roles"],
    img5: ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"],
    vid6: ["batashvid", "94000"],
}

var page32 = {
    el1: ["div", "", "multiple-question-container", "", "page"],
    el2: ["div", "multiple-question-title", "multiple-question-title", "מהם תפקידי החטיבה בשגרה? יכולה להיות יותר מתשובה אחת נכונה", "multiple-question-container"],
    el3: ["div", "", "multiple-ans-container", "", "multiple-question-container"],
    el4: ["div", "multiple-answer-cont", "multiple-ans1", "", "multiple-ans-container"],
    el5: ["div", "multiple-answer-cont", "multiple-ans2", "", "multiple-ans-container"],
    el6: ["div", "multiple-answer-cont", "multiple-ans3", "", "multiple-ans-container"],
    el7: ["div", "multiple-answer-cont", "multiple-ans4", "", "multiple-ans-container"],
    el8: ["div", "multiple-answer-cont", "multiple-ans5", "", "multiple-ans-container"],
    el9: ["span", "multiple-answer", "", "", "multiple-ans1"],
    el10: ["span", "", "", "לשמש כח כוננות מיידי לאירועי חילוץ, הצלה ואב''כ", "multiple-ans1"],
    el11: ["span", "multiple-answer", "", "", "multiple-ans2"],
    el12: ["span", "", "", "להכשיר את מקצועות העורף בסדיר ובמילואים ואת מערך הלחימה בפקע''ר", "multiple-ans2"],
    el13: ["span", "multiple-answer", "", "", "multiple-ans3"],
    el14: ["span", "", "", "לדאוג לאבטחתו של בית הסוהר מגידו בשגרה ובחירום", "multiple-ans3"],
    el15: ["span", "multiple-answer", "", "", "multiple-ans4"],
    el16: ["span", "", "", "לשלח גדודים ולאמן מסגרות תוך כדי תעסוקה מבצעית", "multiple-ans4"],
    el17: ["span", "multiple-answer", "", "", "multiple-ans5"],
    el18: ["span", "", "", "חיזוק החוסן הלאומי והצלת חיים בשגרה", "multiple-ans5"],
    el19: ["button", "", "multiple-check-btn", "בדיקה", "multiple-question-container"],
    el20: ["div", "multiple-error", "", "יש לבחור תשובה על מנת לבדוק את השאלה", "multiple-question-container"],
    func21: ["multipleAnswersQuestion"]
}

var page33 = {
    el1: ["div", "sentence-question-container", "sentence-question-container", "", "page"],
    el2: ["div", "", "sentence-question", "השלימו את המשפט בעזרת מחסן המילים", "sentence-question-container"],
    el3: ["div", "sentence", "sentence", "", "sentence-question-container"],
    el4: ["span", "", "", "חטיבת החילוץ וההדרכה תהווה גוף ל ", "sentence"],
    el5: ["span", "sentence-drop-zone", "sentence-drop1", "", "sentence"],
    el6: ["span", "", "", " של מערך הלחימה בפקע''ר, ", "sentence"],
    el7: ["span", "sentence-drop-zone", "sentence-drop2", "", "sentence"],
    el8: ["span", "connective-letter", "", " ו", "sentence"],
    el9: ["span", "sentence-drop-zone", "sentence-drop3", "", "sentence"],
    el10: ["span", "", "", " את מסגרות פקע''ר ב ", "sentence"],
    el11: ["span", "sentence-drop-zone", "sentence-drop4", "", "sentence"],
    el12: ["span", "connective-letter", "", " וב", "sentence"],
    el13: ["span", "sentence-drop-zone", "sentence-drop5", "", "sentence"],
    el14: ["span", "", "", " בתחומי ה ", "sentence"],
    el15: ["span", "sentence-drop-zone", "sentence-drop6", "", "sentence"],
    el16: ["span", "connective-letter", "", " וה", "sentence"],
    el17: ["span", "sentence-drop-zone", "sentence-drop7", "", "sentence"],
    el18: ["div", "sentence-word-bank", "sentence-word-bank", "", "sentence-question-container"],
    el19: ["button", "", "sentence-next-btn", "הבא", "sentence-question-container"],
    func20: ["completeSentenceQuestion"]
}

var page34 = {
    el1: ["div", "sentence-question-container", "sentence-question-container", "", "page"],
    el2: ["div", "", "sentence-question-containerquestion", "השלימו את המשפט בעזרת מחסן המילים", "sentence-question-container"],
    el3: ["div", "sentence", "sentence", "", "sentence-question-container"],
    el4: ["span", "", "", "מפקדת החטיבה תשמש כ ", "sentence"],
    el5: ["span", "sentence-drop-zone", "sentence-drop1", "", "sentence"],
    el6: ["span", "", "", " בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירות ה", "sentence"],
    el7: ["span", "sentence-drop-zone", "sentence-drop2", "", "sentence"],
    el8: ["span", "connective-letter", "", " , לרבות ", "sentence"],
    el9: ["span", "sentence-drop-zone", "sentence-drop3", "", "sentence"],
    el10: ["span", "", "", " גבולות מדינת ישראל ותפקד על מבצעים ", "sentence"],
    el11: ["span", "sentence-drop-zone", "sentence-drop4", "", "sentence"],
    el12: ["span", "connective-letter", "", " ברגיעה ובלחימה.", "sentence"],
    el13: ["div", "sentence-word-bank", "sentence-word-bank", "", "sentence-question-container"],
    el14: ["button", "", "sentence-next-btn", "הבא", "sentence-question-container"],
    func15: ["completeSentenceQuestion"]
}

var page35 = {
    el1: ["div", "organizing-question-container", "organizing-question-container", "", "page"],
    el2: ["div", "", "organizing-question", "סדרו את תפקידי החטיבה בהתאם לתפקידיה בשגרה ובחירום", "organizing-question-container"],
    el3: ["div", "organizing-drop-zone-container", "organizing-drop-zone-container", "", "organizing-question-container"],
    el4: ["div", "organizing-drop-zone", "routine-zone", "", "organizing-drop-zone-container"],
    el5: ["div", "organizing-drop-zone-title", "", "שגרה", "routine-zone"],
    el6: ["div", "organizing-drop-zone", "emergency-zone", "", "organizing-drop-zone-container"],
    el7: ["div", "organizing-drop-zone-title", "", "חירום", "emergency-zone"],
    el8: ["div", "organizing-word-bank", "organizing-word-bank", "", "organizing-question-container"],
    el9: ["div", "organizing-word", "task5", "לתגבר את מרכז המידע הפיקודי וביצוע משימות סיוע אזרחי", "organizing-word-bank"],
    el10: ["div", "organizing-word", "task2", "לפתח ידע מקצועי בעולמות החילוץ והאב''כ", "organizing-word-bank"],
    el11: ["div", "organizing-word", "task3", "לאמן ולשמר כשירות למסגרות המילואים בפיקוד בהתאם למחזוריות האימונים", "organizing-word-bank"],
    el12: ["div", "organizing-word", "task4", "פו''ש על אירועי חילוץ, הצלה, בלתי קונבנציונליים ופינוי אוכלוסיה", "organizing-word-bank"],
    el13: ["div", "organizing-word", "task1", "לשמש בניין הכוח של גדודי החילוץ וההצלה הסדירים, בא''ח, ביה''ס לפיקוד ולמקצועות העורף ובסיס אימון יחידות פיקודי", "organizing-word-bank"],
    el14: ["div", "organizing-word", "task6", "לבצע אימונים והכשרות במסגרת תכנית 'זמן יקר'", "organizing-word-bank"],
    el15: ["button", "", "organizing-next-btn", "הבא", "organizing-question-container"],
    func16: ["organizingDragAndDrop"]
}

// page 36
var page36 = {
    el1: ["div", "structure-text-page", "structure", "", "page"],
    el2: ["div", "con-sen", "", "וכעת נעבור לסקירת:", "structure"],
    el3: ["div", "sub-title", "", "מבנה החטיבה ויחידותיה", "structure"],
    el4: ["button", "next-btn-timeline", "next-btn-36", "קדימה!", "structure"],
    evLis5: ["next-btn-36", "click", "nextPage"]
}

// page 37
var page37 = {
    el1: ["div", "structure-text-page", "structure", "", "page"],
    el2: ["div", "", "structure-tree", "", "structure"],
    func3: ["handleStructureTree"],
    el4: ["div", "explain-structure", "explain-structure", "עברו על כל היחידות כדי להמשיך בלומדה", "structure"]
}

var page38 = {
    el1: ["div", "connect-question-container", "connect-question-container", "", "page"],
    el2: ["div", "", "connect-question", "התאם בין היחידה לתפקידה. לחץ על 2 תשובות משורות שונות ולחץ על הכפתור כדי לבדוק את תשובתך", "connect-question-container"],
    el3: ["div", "connect-card-container", "connect-card-container", "", "connect-question-container"],
    el4: ["div", "connect-year-container", "connect-year-container", "", "connect-card-container"],
    el5: ["div", "connect-event-container", "connect-event-container", "", "connect-card-container"],
    el6: ["div", "connect-card", "connect-unit1", "בא''פ העורף", "connect-year-container"],
    el7: ["div", "connect-card", "connect-unit2", "בית הספר לפיקוד ומקצועות העורף", "connect-year-container"],
    el8: ["div", "connect-card", "connect-unit3", "מפקדת החטיבה", "connect-year-container"],
    el9: ["div", "connect-card", "connect-unit5", "בא''ח העורף", "connect-year-container"],
    el10: ["div", ["large-connect-card", "connect-card"], "connect-unit-exp2", "מתמחה בהכשרת מפקדים ומדריכים בחילוץ, לחימה, אב''כ , עורף, ובשמירת כשירות הפרט בתחומי ליבת העורף", "connect-event-container"],
    el11: ["div", ["large-connect-card", "connect-card"], "connect-unit-exp3", "מכשיר לוחמים ומפתח את המפקדים למקצועות החילוץ, אב''כ ולוחמה", "connect-event-container"],
    el12: ["div", ["large-connect-card", "connect-card"], "connect-unit-exp4", "תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירות המלחמה , לרבות מחוץ לגבולות המדינה ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה", "connect-event-container"],
    el13: ["div", ["large-connect-card", "connect-card"], "connect-unit-exp5", "מתמחה בהובלה וחניכה של אימוני גדודי מילואים בתחומי חילוץ, אב''כ וחי''ר קל, חניכת גדודי החטיבה באימונים בין קווים ותו''כ תע''מ, והובלת קורסים והכשרות בתחומי: חילוץ, רפואה, שו''ב , אנו''ח, הנדסה , צמ''ה, אוכלוסייה", "connect-event-container"],
    el14: ["button", "", "connect-check-btn", "בדיקה", "connect-question-container"],
    el15: ["div", "connect-error", "connect-error-msg", "עליכם לבחור 2 תשובות בלבד", "connect-question-container"],
    func16: ["connectTwoQuestion"]
}

var page39 = {
    el1: ["div", "", "multiple-question-container", "", "page"],
    el2: ["div", "multiple-question-title", "multiple-question-title", "מהם תחומי הכשירות המרכזיים של לוחמי החטיבה? יכולה להיות יותר מתשובה אחת נכונה", "multiple-question-container"],
    el3: ["div", "", "multiple-ans-container", "", "multiple-question-container"],
    el4: ["div", "multiple-answer-cont", "multiple-ans1", "", "multiple-ans-container"],
    el5: ["div", "multiple-answer-cont", "multiple-ans2", "", "multiple-ans-container"],
    el6: ["div", "multiple-answer-cont", "multiple-ans3", "", "multiple-ans-container"],
    el7: ["div", "multiple-answer-cont", "multiple-ans4", "", "multiple-ans-container"],
    el8: ["div", "multiple-answer-cont", "multiple-ans5", "", "multiple-ans-container"],
    el9: ["span", "multiple-answer", "", "", "multiple-ans1"],
    el10: ["span", "", "", "לש''ב", "multiple-ans1"],
    el11: ["span", "multiple-answer", "", "", "multiple-ans2"],
    el12: ["span", "", "", "חילוץ", "multiple-ans2"],
    el13: ["span", "multiple-answer", "", "", "multiple-ans3"],
    el14: ["span", "", "", "כושר גופני", "multiple-ans3"],
    el15: ["span", "multiple-answer", "", "", "multiple-ans4"],
    el16: ["span", "", "", "מנהיגות ופיקוד", "multiple-ans4"],
    el17: ["span", "multiple-answer", "", "", "multiple-ans5"],
    el18: ["span", "", "", "אב''כ", "multiple-ans5"],
    el19: ["button", "", "multiple-check-btn", "בדיקה", "multiple-question-container"],
    el20: ["div", "multiple-error", "", "יש לבחור תשובה על מנת לבדוק את השאלה", "multiple-question-container"],
    func21: ["multipleAnswersQuestion"]

}

var page40 = {
    el1: ["div", "", "american-question-container", "", "page"],
    el2: ["div", "american-question-title", "", "מה מסמל המשולש הכחול בסמל החטיבה?", "american-question-container"],
    el3: ["div", "", "american-ans-container", "", "american-question-container"],
    el4: ["div", "american-answer", "american-ans1", "הגנה על העורף", "american-ans-container"],
    el5: ["div", "american-answer", "american-ans2", "תפקיד החטיבה בתור מפקדה משימתית בשגרה ובחירום", "american-ans-container"],
    el6: ["div", "american-answer", "american-ans3", "הכשרת ואימון לוחמי החטיבה במילואים", "american-ans-container"],
    el7: ["div", "american-answer", "american-ans4", "הסמל הבינלאומי לחילוץ", "american-ans-container"],
    el8: ["button", "", "american-check-btn", "בדיקה", "american-question-container"],
    func9: ["americanHandleSelectedAnswer"],
    evLis10: ["american-check-btn", "click", "checkAmericanMultipulChoice"]
}

var page41 = {
    el1: ["div", "connect-question-container", "connect-question-container", "", "page"],
    el2: ["div", "", "connect-question", "התאם בין היחידה לבין המדור/יחידה שכפופה לה. לחץ על 2 תשובות משורות שונות ולחץ על הכפתור כדי לבדוק את תשובתך", "connect-question-container"],
    el3: ["div", "connect-card-container", "connect-card-container", "", "connect-question-container"],
    el4: ["div", "connect-year-container", "connect-year-container", "", "connect-card-container"],
    el5: ["div", "connect-event-container", "connect-event-container", "", "connect-card-container"],
    el6: ["div", "connect-card", "connect-unit1", "מדור אב''כ", "connect-year-container"],
    el7: ["div", "connect-card", "connect-unit2", "אימון מתקדם", "connect-year-container"],
    el8: ["div", "connect-card", "connect-unit3", "חניכת אוכלוסייה", "connect-year-container"],
    el9: ["div", "connect-card", "connect-unit4", "גדוד תבור", "connect-year-container"],
    el10: ["div", "connect-card", "connect-unit-exp1", "בא''פ העורף", "connect-event-container"],
    el11: ["div", "connect-card", "connect-unit-exp2", "בא''ח העורף", "connect-event-container"],
    el12: ["div", "connect-card", "connect-unit-exp3", "מפקדת החטיבה", "connect-event-container"],
    el13: ["div", "connect-card", "connect-unit-exp4", "בית הספר לפיקוד ולמקצועות העורף", "connect-event-container"],
    el14: ["button", "", "connect-check-btn", "בדיקה", "connect-question-container"],
    el15: ["div", "connect-error", "connect-error-msg", "עליכם לבחור 2 תשובות בלבד", "connect-question-container"],
    func16: ["connectTwoQuestion"]
}

const hativaDetails = {
    el1: ["div", "structure-details", "hativa-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "hativa-details"],
    el3: ["div", "", "hativa-text-container", "", "hativa-details"],
    el4: ["div", ["title", "details-title"], "", "מפקדת חטיבת החילוץ וההדרכה", "hativa-text-container"],
    img5: ["assets/images/hativa.svg", "חטיבת החילוץ וההדרכה", "hativa-details-img", "details-img", "", "hativa-details"],
    el6: ["div", ["details-text", "hativa-text"], "", "מפקדת החטיבה תשמש כמפקדה משימתית בחירום ובתוך כך תפעל באירועי חילוץ והצלה בכל זירת המלחמה, לרבות מחוץ לגבולות מדינת ישראל ותפקד על מבצעים במרחב האזרחי ברגיעה ובלחימה.", "hativa-text-container"],
    el7: ["div", "hativa-details-exp-text", "", "לחצו על הסמל!", "hativa-text-container"],
    img8: ["assets/images/hativa-sym-exp.svg", "symbol explination", "hativa-sym-exp", "", "", "hativa-details"],
}

const bahDetails = {
    el1: ["div", "structure-details", "bah-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "bah-details"],
    el3: ["div", ["title", "details-title"], "", "בא''ח העורף", "bah-details"],
    img4: ["assets/images/bah.svg", "בא''ח העורף", "", "details-img", "", "bah-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "bah-details"],
    el6: ["div", "subtitle", "", "הכר את בא''ח העורף", "details-conteiner"],
    el7: ["div", "details-text", "", "בסיס אימונים חטיבתי להכשרת לוחמי החטיבה למקצועות החילוץ, אב''כ ולוחמה.", "details-conteiner"],
    el8: ["div", "subtitle", "", "מגמות הבא''ח והכשרות", "details-conteiner"],
    el9: ["ul", "details-list", "details-list", "", "details-conteiner"],
    el10: ["li", "", "", "מכין לוחמות.", "details-list"],
    el11: ["li", "", "", "אימון יסוד - הכשרת הלוחם ברמת ''כושר לחימה''- בסיסי ב'.", "details-list"],
    el12: ["li", "", "", "אימון מתקדם- הכשרת הלוחם ללוחמה ברמת ''כושר לחימה- מתקדם א'', ולחילוץ ברמת מחלץ 06.", "details-list"],
    el13: ["li", "", "", "הכשרות נוספות לחיילים מאותרים: מש''קי מודיעין אוכלוסייה, קלע, מטול, מפקדי חוליה.", "details-list"],
    el14: ["div", "closed-card", "closed-card-bah", "", "details-conteiner"],
    el15: ["span", "closed-card-title", "", "הידעת?", "closed-card-bah"],
    img16: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-bah"],
    car17: ["bahCarousel"],
    evLis18: ["closed-card-bah", "click", "openCarouselCard"],
    evLis19: ["close-btn-structure", "click", "closeDetails"]
}

const bafDetails = {
    el1: ["div", "structure-details", "baf-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "baf-details"],
    el3: ["div", ["title", "details-title"], "", "בא''פ העורף", "baf-details"],
    img4: ["assets/images/baf.svg", "בא''פ העורף", "", "details-img", "", "baf-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "baf-details"],
    el6: ["div", "subtitle", "", "הכר את בא''פ העורף", "details-conteiner"],
    el7: ["div", "details-text", "details-text", "", "details-conteiner"],
    el8: ["span", "", "", "בסיס אימונים פיקודי המתמחה בהובלה וחניכה של אימוני גדודי מילואים בתחומי חילוץ, אב''כ וחי''ר קל, חניכת גדודי החטיבה הסדירים באימונים בין קווים ותו''כ תע''מ והובלת קורסים והכשרות בתחומי חילוץ, רפואה, ", "details-text"],
    el9: ["span", "colored-text", "def10", "שו''ב, ", "details-text"],
    el10: ["span", "colored-text", "def11", "אוכלוסייה, ", "details-text"],
    el11: ["span", "colored-text", "def12", "צמ''ה, ", "details-text"],
    el12: ["span", "colored-text", "def13", "הנדסה ", "details-text"],
    el13: ["span", "colored-text", "def14", "ואנו''ח.", "details-text"],
    el14: ["div", "subtitle", "", "מדורי הבא''פ וחניכה", "details-conteiner"],
    el15: ["ul", "details-list", "details-list", "", "details-conteiner"],
    el16: ["li", "", "", "2 מדורי אימוני חילוץ.", "details-list"],
    el17: ["li", "", "", "מדור צמ''ה.", "details-list"],
    el18: ["li", "", "", "מדור רפואה.", "details-list"],
    el19: ["li", "", "", "מדור הנדסה.", "details-list"],
    el20: ["li", "", "", "חניכת אוכלוסייה.", "details-list"],
    el21: ["li", "", "", "חניכת שו''ב.", "details-list"],
    el22: ["li", "", "", "חניכת אנו''ח.", "details-list"],
    el23: ["div", "closed-card", "closed-card-baf", "", "details-conteiner"],
    el24: ["span", "closed-card-title", "", "הידעת?", "closed-card-baf"],
    img25: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-baf"],
    car26: ["bafCarousel"],
    evLis27: ["closed-card-baf", "click", "openCarouselCard"],
    evLis28: ["close-btn-structure", "click", "closeDetails"]
}

const schoolDetailsA = {
    el1: ["div", "structure-details", "school-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "school-details"],
    el3: ["div", ["title", "details-title"], "", "ביה''ס לפיקוד ומקצועות העורף", "school-details"],
    img4: ["assets/images/school-of-oref.svg", "ביה''ס לפיקוד ומקצועות העורף", "school-details-img", "details-img", "", "school-details"],
    el5: ["div", "details-conteiner", "details-part-1", "", "school-details"],
    el6: ["div", "subtitle", "", "הכר את ביה''ס לפיקוד ומקצועות העורף", "details-part-1"],
    el7: ["div", "details-text", "", "בית הספר החיילי למקצועות הפיקוד והעורף, המתמחה בהכשרת מפקדים ומדריכים בחילוץ, לחימה, אב''כ, בעורף, ובשמירת כשירות הפרט בתחומי ליבת העורף.", "details-part-1"],
    el8: ["div", "closed-card", "closed-card-school", "", "details-part-1"],
    el9: ["span", "closed-card-title", "", "הידעת?", "closed-card-school"],
    el10: ["div", "school-details-exp-text", "", "לחצו על החץ", "details-part-1"],
    img11: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-school"],
    img12: ["assets/images/arrow.svg", "next", "school-next-arrow", "next-left", "", "details-part-1"],
    car13: ["schoolCarousel"],
    evLis14: ["closed-card-school", "click", "openCarouselCard"],
    evLis15: ["school-next-arrow", "click", "changeSchoolDetailsPart"]
}

const schoolDetailsB = {
    el1: ["div", "structure-details", "school-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "school-details"],
    el3: ["div", ["title", "details-title"], "", "ביה''ס לפיקוד ומקצועות העורף", "school-details"],
    img4: ["assets/images/school-of-oref.svg", "ביה''ס לפיקוד ומקצועות העורף", "school-details-img", "details-img", "", "school-details"],
    el5: ["div", "details-conteiner", "details-part-2", "", "school-details"],
    el6: ["div", "subtitle", "", "מגמות בית הספר והכשרות", "details-part-2"],
    el7: ["div", "sub-sub-title", "", "מגמת הכשרות יסוד", "details-part-2"],
    el8: ["ul", "details-list", "details-list-1", "", "details-part-2"],
    el9: ["li", "", "", "מחלקת זאב (טירונות ברמת כושר לחימה אישי עורפי).", "details-list-1"],
    el10: ["li", "", "", "קורסי הדרכה: קמ''ד אב''כ, קמ''ד חילוץ, קמ''ד חירום, קורס מבצעים.", "details-list-1"],
    el11: ["div", "sub-sub-title", "", "מגמות הפיקוד", "details-part-2"],
    el12: ["ul", "details-list", "details-list-2", "", "details-part-2"],
    el13: ["li", "", "", "קורס מ''כים- הכשרת הלוחם לתפקיד מפקד בחטיבה ברמת 'כושר לחימה'- מתקדם ב', ומחלץ 07.", "details-list-2"],
    el14: ["li", "", "", "השלמה לקצונה 'חנית'- השלמה לקצונה לאוכלוסיית הלוחמים בוגרי מגמת 'שדה' בבה''ד 1.", "details-list-2"],
    el15: ["li", "", "", "השלמה לקצונה 'מורג'- השלמה לקצונה לאוכלוסיית המטה בוגרי מגמת 'מעוז' בבה''ד 1.", "details-list-2"],
    el16: ["li", "", "", "הכנות לקצונה לאוכלוסיית הלוחמים ('כידון') והמטה ('צור').", "details-list-2"],
    el17: ["div", "sub-sub-title", "", "מגמת מקצועות", "details-part-2"],
    el18: ["ul", "details-list", "details-list-3", "", "details-part-2"],
    el19: ["li", "", "", "מדור הכשרות חילוץ.", "details-list-3"],
    el20: ["li", "", "", "מדור הכשרות אב''כ.", "details-list-3"],
    el21: ["div", "closed-card", "closed-card-school", "", "details-part-2"],
    el22: ["span", "closed-card-title", "", "הידעת?", "closed-card-school"],
    img23: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-school"],
    img24: ["assets/images/arrow.svg", "next", "school-next-arrow", "next-right", "", "details-part-2"],
    car25: ["schoolCarousel"],
    evLis26: ["closed-card-school", "click", "openCarouselCard"],
    evLis27: ["close-btn-structure", "click", "closeDetails"],
    evLis28: ["school-next-arrow", "click", "changeSchoolDetailsPart"]
}

const matachimDetails = {
    el1: ["div", "structure-details", "matachim-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "matachim-details"],
    el3: ["div", ["title", "details-title"], "", "יחידת מתכים", "matachim-details"],
    img4: ["assets/images/matachim.svg", "יחידת מתכים", "", ["details-img", "matachim-img"], "", "matachim-details"],
    el5: ["div", "details-conteiner", "details-conteiner", "", "matachim-details"],
    el6: ["div", "subtitle", "", "תפקידה של יחידת מתכים", "details-conteiner"],
    el7: ["div", "details-text", "", "להגן קרקעית על מתקן 'מתכים' באמצעות יחידותיו וכוחות ת''פ.\nהסד''כ אשר מבצע את ההגנה על היחידה בפועל הוא כוח פלוגתי של אחד הגדודים בחטיבה אשר מתחלף ע''פ גרף התע''מ.\nבשנת 2020 הוקמה תחת גדוד תבור פלוגת ונוס אשר משימתה בחירום היא הגנה על מתכים.", "details-conteiner"],
    el8: ["div", "closed-card", "closed-card-matachim", "", "details-conteiner"],
    el9: ["span", "closed-card-title", "", "הידעת?", "closed-card-matachim"],
    img10: ["assets/images/arrow.svg", "open", "", "closed-card-arrow", "", "closed-card-matachim"],
    car11: ["matachimCarousel"],
    evLis12: ["closed-card-matachim", "click", "openCarouselCard"],
    evLis13: ["close-btn-structure", "click", "closeDetails"]
}

const gdudimDetails = {
    el1: ["div", "structure-details", "gdudim-details", "", "page"],
    img2: ["assets/images/close-btn.svg", "X", "close-btn-structure", "close-details-btn", "", "gdudim-details"],
    el3: ["div", ["title", "details-title"], "", "גדודים", "gdudim-details"],
    el4: ["div", "details-conteiner", "details-conteiner", "", "gdudim-details"],
    img5: ["assets/images/gdud-shahar.svg", "", "", "structure-details-gdud-shahar", "", "details-conteiner"],
    img6: ["assets/images/gdud-tavor.svg", "", "", "structure-details-gdud-tavor", "", "details-conteiner"],
    img7: ["assets/images/gdud-kedem.svg", "", "", "structure-details-gdud-kedem", "", "details-conteiner"],
    img8: ["assets/images/gdud-ram.svg", "", "", "structure-details-gdud-ram", "", "details-conteiner"],
    img9: ["assets/images/shahar-explaination.svg", "", "", "structure-details-gdud-shahar-exp", "", "details-conteiner"],
    img10: ["assets/images/tavor-explaination.svg", "", "", "structure-details-gdud-tavor-exp", "", "details-conteiner"],
    img11: ["assets/images/kedem-explaination.svg", "", "", "structure-details-gdud-kedem-exp", "", "details-conteiner"],
    img12: ["assets/images/ram-explaination.svg", "", "", "structure-details-gdud-ram-exp", "", "details-conteiner"],
    img13: ["assets/images/arrow.svg", "<<", "continue-gdudim-exp-next", "", "", "details-conteiner"],
    el14: ["div", "error", "structure-gdudim-error", "עליך לעבור על כל הסמלים כדי לסיים", "details-conteiner"],
}

var bahCarousel = {
    items: 3,
    carouselIndicators: false,
    visible: false,
    arrows: true,
    closable: true,
    carouselName: "bah",
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "bah-card-1"],
        ["div", "card-text", "", "בבאח העורף מדור גיוס ייעודי לתפקידי החטיבה ומדור זה מוביל את תהליך הגיוס ממלש''ב ועד לחייל, מדור זה מנהל את הרשתות החברתיות של החטיבה ומייצג את החטיבה באירועי הגיוס של צה''ל.", "bah-card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "bah-card-2"],
        ["div", "card-text", "", "בא''ח העורף בחירום הינו גדוד הצלה וחילוץ חמישי בחטיבת החילוץ ומשמש כעתודה חטיבתית למשימות חילוץ קל וסיוע אזרחי. מפקדת הבא''ח הינה מפקדת הגדוד ופלוגות האימון המתקדם בשיתוף קורס מכ''ים והשלמה לקצונה חנית משמשות כפלוגות חילוץ.", "bah-card-2"]
    ],
    card3: [
        ["strong", "card-title", "", "הידעת?", "bah-card-3"],
        ["div", "card-text", "", "להכשרת הלוחם בבא''ח 3 מחזורי גיוס, הלוחמים משתבצים ב4 פלוגות הכשרה (שחר, קדם, תבור, רם) ועולים לגדודים המבצעיים, כל פלוגה לגדוד האורגני שלה.", "bah-card-3"]
    ]
}

var bafCarousel = {
    items: 2,
    carouselIndicators: false,
    visible: false,
    arrows: true,
    closable: true,
    carouselName: "baf",
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "baf-card-1"],
        ["div", "card-text", "", "בעבר בא''פ העורף נקרא ענף אימון יחידות תחת בה''ד 16 ולאחר מכן תחת חטיבת החילוץ וההדרכה בצריפין. בשנת 2020 ענף אימון יחידות (ענף אמ''י) עבר למכלול זיקים והוקם בא''פ העורף.", "baf-card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "baf-card-2"],
        ["div", "card-text", "", "בא''פ העורף הינו בסיס אימונים פיקודי ועל כן נאמן על הכשרות ואימונים של כלל יחידות פיקוד העורף ועל כשירות היחידות והמערכים המקצועיים של הפיקוד.", "baf-card-2"]
    ],
}

var schoolCarousel = {
    items: 3,
    carouselIndicators: false,
    visible: false,
    arrows: true,
    closable: true,
    carouselName: "school",
    cardType: "el",
    card1: [
        ["strong", "card-title", "", "הידעת?", "school-card-1"],
        ["div", "card-text", "", "בשנת 2018 תחת חטיבת החילוץ וההדרכה הוקם ביה''ס לפיקוד ומקצועות העורף שהינו תוצר של איחוד גדוד הפיקוד וענף מקצועות אשר ישבו בבה''ד 16.", "school-card-1"]
    ],
    card2: [
        ["strong", "card-title", "", "הידעת?", "school-card-2"],
        ["div", "card-text", "", "עד שנת 2015 התקיימה השלמה לקצונה אחידה ללוחמים ומטה.\nבשנת 2015 התפצלה ההשלמה למגמת חנית- קציני חילוץ לוחמים, ומגמת מורג- קציני עורף.", "school-card-2"]
    ],
    card3: [
        ["strong", "card-title", "", "הידעת?", "school-card-3"],
        ["div", "card-text", "", "מדור הכשרות אב''כ הינו גוף צבאי ייחודי הממונה על תחום אב''כ בכלל צה''ל ומעביר הכשרות בכלל יחידות צה''ל.", "school-card-3"]
    ]
}

let hativaStructure;
let bafStructure;
let bahStructure;
let schoolStructure;
let gdudimStructure;
let sidebar;
let menuBtn;
let pageNum;
let dropdown;
let dropdownIcon;
let activeDropdown = null; // Track the currently active dropdown
let quesVisited = false;
let currPage = 1;
let furthestPageVisited = 41;
let currExpShown = "";
let currDefShown = ""; // type string
let currSchoolDetailsShown = "";
let complexBranchesVisited = [];
let currDetails = "";
let detailsVisited = [];
let currPageEvLis = [];
let finishButtonAdded = false;
let currCarouselRelevant = "";
let structureExplainTextRemoved = false;
let complexFinishButton = ["button", "next-btn-timeline", "next-btn-15", "סיימתי!", "timeline-text-container"];
let enlisingBtn = ["button", "next-btn-timeline", "next-btn-3", "בואו נמשיך!", "timeline-text-container"];
let nafaBtn = ["button", "next-btn-timeline", "next-btn-13", "הבנתי", "timeline-text-container"];
let rolesNextBtn = ["assets/images/arrow.svg", "המשך", "roles-next-arrow", "next-arrow", "", "main-roles"];
let structureFinishBtn = ["button", "next-btn-timeline", "finished-structure", "סיימתי!", "structure"];
let gdudimNextClicks = 0;
let gdudimAllowFinish = false;
let gdudimNextEnabled = true;
let totalFlipped = 0; 
let flippedStatus = {card1: false, card2: false, card3: false}; 
let page3VidFinished = false;
let page13VidFinished = false;
let page20VidFinished = false;
let page23VidFinished = false;
let page24VidFinished = false;
let page26VidFinished = false;
let hativaSymbolVisited = false;
let hativaSymbolOpen = false;
let schoolDetailsVisited = false;
let routineNum = [];
let emergencyNum = [];
let routineCar;
let emergancyCar;
let correctAmerican;
let americanCheckButton;
let multipleCheckButton;
let multipleError;
let multipleCorrectSelectedCount = 0;
let multipleTotalCorrect; // Number of correct answers for the first question
let multipleCorrectAnswers;
let multipleCorrectAnswers1 = ['multiple-ans1', 'multiple-ans2', 'multiple-ans4'];
let multipleCorrectAnswers2 = ['multiple-ans2', 'multiple-ans5'];
let chooseSelectedCards = [];
let chooseCorrectAnswersSelected = 0;
const chooseCorrectAnswers = ['choose-ans1', 'choose-ans8'];
let chooseQuestionFinished = false;
let chooseCheckBtn;
let chooseErrorMsg;
let chooseWrongAnim = false;
const completeSentenceWordBankContent = [
    {id: 'sentence-word1', text: 'חילוץ'},
    {id: 'sentence-word2', text: 'תכשיר'},
    {id: 'sentence-word3', text: 'בניין כוח'},
    {id: 'sentence-word5', text: 'סדיר'},
    {id: 'sentence-word6', text: 'תאמן'},
    {id: 'sentence-word7', text: 'אב״כ'},
    {id: 'sentence-word8', text: 'מילואים'},
    {id: 'sentence-word9', text: 'בתוך'},
    {id: 'sentence-word10', text: 'מחוץ'},
    {id: 'sentence-word11', text: 'הארץ'},
    {id: 'sentence-word12', text: 'חטיבה'},
    {id: 'sentence-word13', text: 'חילוץ והצלה'},
    {id: 'sentence-word14', text: 'כתום'},
    {id: 'sentence-word15', text: 'בשגרה'},
    {id: 'sentence-word16', text: 'במרחב האזרחי'},
    {id: 'sentence-word17', text: 'מפקדה משימתית'},
    {id: 'sentence-word18', text: 'מלחמה'}
];
const completeSentenceCorrectPairsPage33 = {
    'sentence-drop1': 'sentence-word3',
    'sentence-drop2': 'sentence-word2',
    'sentence-drop3': 'sentence-word6',
    'sentence-drop4': 'sentence-word5',
    'sentence-drop5': 'sentence-word8',
    'sentence-drop6': 'sentence-word1',
    'sentence-drop7': 'sentence-word7'
};
const completeSentenceCorrectPairsPage34 = {
    'sentence-drop1': 'sentence-word17',
    'sentence-drop2': 'sentence-word18',
    'sentence-drop3': 'sentence-word10',
    'sentence-drop4': 'sentence-word16'
};
let completeSentenceCorrectPairs; // Start with page 33 pairs
let completeSentenceDropZones;
let completeSentenceNextButton;
const organizingCorrectPairs = {
    'routine-zone': ['task1', 'task2', 'task3'], // Correct tasks for routine
    'emergency-zone': ['task4', 'task5', 'task6'] // Correct tasks for emergency
};
let organizingDropZones;
let organizingNextButton;
let organizingSuccessfulDrops = []; // Array to keep track of successful drops
let organizingAllFilled = false; // Global variable to track if all tasks are filled
let connectTwoSelectedCards = [];
let connectTwoQuestionNumber; // Track the current question
let connectTwoIsNextQuestionReady = false; // Track if the button should load the next question
// List of available colors (will be applied in order)
const connectTwoAvailableColors = ['#cb9ee1', '#f3d2db', '#a1d4df', '#f9f6c1', '#eecfbc', '#bccfd3', '#e6d5c3', '#c2dbbe', '#d3e6ed'];
let connectTwoColorIndex = 0; // Start at the first color
const connectTwoCorrectPairsQuestion1 = {
    'connect-year1': 'connect-event1',
    'connect-year2': 'connect-event2',
    'connect-year3': 'connect-event3',
    'connect-year4': 'connect-event4',
    'connect-year5': 'connect-event5',
    'connect-year6': ['connect-event6', 'connect-event7'],
    'connect-year7': ['connect-event6', 'connect-event7'],
    'connect-year8': 'connect-event8',
    'connect-year9': 'connect-event9'
};
const connectTwoCorrectPairsQuestion2 = {
    'connect-unit1': 'connect-unit-exp5',
    'connect-unit2': 'connect-unit-exp2',
    'connect-unit3': 'connect-unit-exp4',
    'connect-unit5': 'connect-unit-exp3'
};
const connectTwoCorrectPairsQuestion3 = {
    'connect-unit1': 'connect-unit-exp4',
    'connect-unit2': 'connect-unit-exp2',
    'connect-unit3': 'connect-unit-exp1',
    'connect-unit4': 'connect-unit-exp3'
}
let connectTwoCorrectPairs; 
let connectTwoAllCorrectPairsMatched;
let connectTwoCheckBtn;
let connectTwoErrorMsg;
let timelineRoll;
let connectTwoWrongAnim = false;

window.addEventListener("load", (event) => {
    hativaStructure = document.getElementById("st-hativa");
    bafStructure = document.getElementById("st-baf");
    bahStructure = document.getElementById("st-bah");
    schoolStructure = document.getElementById("st-school");
    gdudimStructure = document.getElementById("st-gdudim");
    sidebar = document.getElementById('sidebar');
    menuBtn = document.getElementById('menu-btn');
    timelineRoll = document.getElementById("timeline-roll");
    startLomda();
});

const startLomda = () => {
    document.getElementById("load-anim").style.display = "none";
    document.getElementById("info-btn").style.opacity = 1;
    document.getElementById("ques-btn").style.opacity = 1;
    menuBtn.style.opacity = 1;
    document.getElementById("sym-hativa").style.opacity = 1;
    document.getElementById("sym-gapa-unofficial").style.opacity = 1;
    createScreen(openScreenContent);
    document.getElementById("info-btn").addEventListener("click", showInfo);
    document.getElementById("ques-btn").addEventListener("click", showQues);
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("colored-text")) {
            createDefinitionElement(event);
        } else if (!event.target.classList.contains("definition")) {
            if (currDefShown !== "") {
                closeDefinition();
            }
        }
    });
    menuBtn.addEventListener('click', () => {
        sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'block' : 'none';
        updateMenuItemState(); // Update the item states each time menu is toggled
    });
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (sidebar.style.display === 'block' && !sidebar.contains(e.target) && e.target !== menuBtn) {
            sidebar.style.display = 'none';
            document.querySelectorAll('.dropdown').forEach(dropdownLink => {
                if (dropdownLink.classList.contains("active")) {
                    dropdownLink.classList.remove("active")
                }
            });
        }
    });
    // Dropdown toggle
    document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
        dropdownIcon = dropdownLink.querySelector('.dropdown-icon');
        dropdownIcon.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent currPage update if dropdown icon clicked
            dropdown = dropdownLink.parentElement;
            // Close the currently active dropdown if it's open
            if (activeDropdown && activeDropdown !== dropdown) {
                activeDropdown.classList.remove('active');
            }
            // Toggle the clicked dropdown and set it as active
            dropdown.classList.toggle('active');
            activeDropdown = dropdown.classList.contains('active') ? dropdown : null;
        });
        // Set click event to update currPage if main item is clicked
        dropdownLink.addEventListener('click', function(e) {
            e.stopPropagation();
            const itemId = dropdownLink.querySelector('span').id; // Get main item id
            const pageNum = parseInt(itemId.split('-').pop());
            // Update currPage only if enabled
            if (dropdownLink.classList.contains('enabled') && furthestPageVisited >= pageNum) {
                currPage = pageNum;
                sidebar.style.display = 'none'; // Close menu after click
            }
        });
    });
    // Menu item click handler
    document.querySelectorAll('.dropdown-menu li, .dropdown > a > span').forEach(item => {
        item.addEventListener('click', function () {
            const itemId = this.id;
            pageNum = parseInt(itemId.split('-').pop());
            if (this.classList.contains('disabled')) {
                sidebar.style.display = 'none';
                return;
            }
            timelineRoll.classList = "timeline";
            if (currPage === 1) {
                if (document.getElementById("start-btn")) {
                    document.getElementById("start-btn").removeEventListener("click", nextPage);
                }
            } else if (currPage >= 2 && currPage <= 16 || currPage === 22 || currPage === 36) {
                if (document.getElementById(`next-btn-${currPage}`)) {
                    document.getElementById(`next-btn-${currPage}`).removeEventListener("click", nextPage);
                }
            } else if (currPage >= 23 && currPage <= 31) {
                if (document.getElementById("roles-next-arrow")) {
                    document.getElementById("roles-next-arrow").removeEventListener("click", nextPage);
                }
            }
            videoEnded();
            let changedPage = currPage;
            if (changedPage === 11) {
                document.getElementById("flip-card-component").style.display = "none";
                let innerCards = document.querySelectorAll(".flip-card-inner");
                innerCards.forEach((innerCard, index) => {
                    if (innerCard.classList.contains("flipped")) {
                        innerCard.classList.toggle('flipped');
                    }
                });
            } else if (changedPage === 27) {
                document.getElementById("rescueCarousel").style.display = "none";
            } else if (changedPage === 24) {
                routineCar.style.display = "none";
                emergancyCar.style.display = "none";
            } 
            currPage = !isNaN(pageNum) ? pageNum : 37;
            if (isNaN(pageNum)) {
                currPage--;
                nextPage();
            } else {
                hideStructureTree();
                currPage--;
                nextPage();
            }
            if (isNaN(pageNum)) {
                let detailsName = itemId.split('-').pop();
                if (detailsName === "hativa") {
                    openHativaDetails();
                } else if (detailsName === "baf") {
                    openBafDetails();
                } else if (detailsName === "bah") {
                    openBahDetails();
                } else if (detailsName === "school") {
                    openSchoolDetails();
                } else if (detailsName === "gdudim") {
                    openGdudimDetails();
                }
            }
            sidebar.style.display = 'none';
        });
    });
    // Initialize menu item states based on furthestPageVisited
    updateMenuItemState();
}

function updateMenuItemState() {
    document.querySelectorAll('.dropdown-menu li, .dropdown > a > span').forEach(item => {
        pageNum = parseInt(item.id.split('-').pop());
        if (isNaN(pageNum)) {
            item.classList.toggle('enabled', furthestPageVisited >= 37);
            item.classList.toggle('disabled', furthestPageVisited < 37);
        } else {
            item.classList.toggle('enabled', furthestPageVisited >= pageNum);
            item.classList.toggle('disabled', furthestPageVisited < pageNum);
        }
    });
}

const createScreen = (currObject) => {
    let openContentKeys = Object.keys(currObject);
    for (let i = 1; i <= openContentKeys.length; i++) {
        if (openContentKeys[i - 1].includes("el")) {
            createTextElement(currObject[openContentKeys[i - 1]]);
            continue;
        } else if (openContentKeys[i - 1].includes("evLis")) {
            let lisFunc = currObject[`evLis${i}`][2];
            document.getElementById(currObject[`evLis${i}`][0]).addEventListener(currObject[`evLis${i}`][1], window[lisFunc]);
            currPageEvLis = ["id", currObject[`evLis${i}`][0], currObject[`evLis${i}`][1], lisFunc];
            continue;
        } else if (openContentKeys[i - 1].includes("img")) {
            createImgElement(currObject[openContentKeys[i - 1]]);
            continue;
        } else if (openContentKeys[i - 1].includes("func")) {
            let func = currObject[`func${i}`];
            window[func]();
            continue;
        } else if (openContentKeys[i - 1].includes("vid")) {
            addVideo(currObject[openContentKeys[i - 1]]);
        } else if (openContentKeys[i - 1].includes("car")) {
            let carouselObject = currObject[`car${i}`];
            createCarousel(window[carouselObject]);
        }
    }
}

const createTextElement = (list) => {
    // values in list are organized as: tag name, class value, id value, text value, parent element id - all saved as string. if there is no value, it will be ""
    let newElement = document.createElement(list[0]);
    if (list[1] !== "") {
        if ((typeof list[1]) === "object") {
            newElement.classList.add(...list[1]);
        } else {
            newElement.classList.add(list[1]);
        }
    }
    if (list[2] !== "") {
        newElement.setAttribute("id", list[2]);
    }
    newElement.innerText = list[3];
    document.getElementById(list[4]).appendChild(newElement);
}

const createImgElement = (list) => {
    // values in list are organized as: src path, id value, class value, title value, parent element id - all saved as string. if there is no value, it will be ""
    let newIMG = document.createElement("img");
    newIMG.src = list[0];
    newIMG.alt = list[1];
    if (list[2] !== "") {
        newIMG.setAttribute("id", list[2]);
    }
    if (list[3] !== "") {
        if ((typeof list[3]) === "object") {
            newIMG.classList.add(...list[3]);
        } else {
            newIMG.classList.add(list[3]);
        }
    }
    newIMG.setAttribute("title", list[4]);
    document.getElementById(list[5]).appendChild(newIMG);
}


const createVideo = (vidList) => {
    let newVideo = document.createElement("video");
    newVideo.width = vidList[0];
    newVideo.height = vidList[1];
    newVideo.classList.add(vidList[2]);
    newVideo.setAttribute("id", vidList[3]);
    newVideo.setAttribute("controls", "controls");
    newVideo.setAttribute("autoplay", "autoplay");
    document.getElementById(vidList[4]).appendChild(newVideo);
    let sourceTag = document.createElement("source");
    sourceTag.src = vidList[5];
    sourceTag.setAttribute("type", "video/mp4");
    newVideo.appendChild(sourceTag);
    newVideo.onended = () => {
        window[`page${currPage}VidFinished`] = true;
        createVidBnt();
    };
    if (window[`page${currPage}VidFinished`]) {
        createVidBnt();
    }
}

const addVideo = (vidList) => {
    if (currPage === 3) {
        setTimeout(() => {
            document.getElementById("enlistingvid").classList.add("show-anim");
        }, 2500);
    } else {
        document.getElementById(vidList[0]).style.opacity = 1;
    }
    document.getElementById(vidList[0]).style.zIndex = 5;
    setTimeout(() => {
        window[`page${currPage}VidFinished`] = true;
        createVidBnt();
    }, 0);
    if (window[`page${currPage}VidFinished`]) {
        createVidBnt();
    }
}

const videoEnded = () => {
    if (currPage === 3) {
        document.getElementById("enlistingvid").classList.replace("show-anim", "hide-anim");
        setTimeout(() => {
            document.getElementById("enlistingvid").classList.remove("hide-anim");
            document.getElementById("enlistingvid").style.opacity = "0";
            document.getElementById("enlistingvid").style.zIndex = "-1";
        }, 1000);
    } else if (currPage === 13) {
        document.getElementById("nafavid").style.opacity = "0";
        document.getElementById("nafavid").style.zIndex = "-1";
    } else if (currPage === 25) {
        document.getElementById("turkeyvid").style.opacity = "0";
        document.getElementById("turkeyvid").style.zIndex = "-1";
    } else if (currPage === 28) {
        document.getElementById("buildingvid").style.opacity = "0";
        document.getElementById("buildingvid").style.zIndex = "-1";
    } else if (currPage === 29) {
        document.getElementById("daysvid").style.opacity = "0";
        document.getElementById("daysvid").style.zIndex = "-1";
    } else if (currPage === 30) {
        document.getElementById("abachvid").style.opacity = "0";
        document.getElementById("abachvid").style.zIndex = "-1";
    } else if (currPage === 31) {
        document.getElementById("batashvid").style.opacity = "0";
        document.getElementById("batashvid").style.zIndex = "-1";
    }
}

const createCarousel = (carouselContent) => {
    // create container el for carousel
    currCarouselRelevant = carouselContent.carouselName;
    let carouselExampleIndicators = document.createElement("div");
    carouselExampleIndicators.setAttribute("id", carouselContent.carouselName);
    carouselExampleIndicators.classList.add("carousel", "slide");
    carouselExampleIndicators.classList.add("carousel-dark");
    carouselExampleIndicators.style.display = "none";
    carouselExampleIndicators.setAttribute("data-bs-ride", "carousel");
    document.querySelector(".details-conteiner").appendChild(carouselExampleIndicators);
    // create inner container
    let carouselInner = document.createElement("div");
    carouselInner.setAttribute("id", `${carouselContent.carouselName}-carousel-inner`);
    carouselInner.classList.add("carousel-inner");
    document.getElementById(carouselContent.carouselName).appendChild(carouselInner);
    // create X button 
    let newIMG = document.createElement("img");
    newIMG.src = "assets/images/close-btn.svg";
    newIMG.alt = "X";
    newIMG.setAttribute("id", `${carouselContent.carouselName}-close-card-button`);
    newIMG.classList.add("close-card-button");
    document.getElementById(`${carouselContent.carouselName}-carousel-inner`).appendChild(newIMG);
    newIMG.addEventListener("click", closeCarouselCard);
    // create cards according to card num
    for (let i = 0; i < carouselContent.items; i++) {
        let newItem = document.createElement("div");
        newItem.setAttribute("id", `${carouselContent.carouselName}-carousel-item-${i + 1}`);
        newItem.setAttribute("data-bs-interval", 5000);
        newItem.classList.add("carousel-item");
        if (i === 0) {
            newItem.classList.add("active");
        }
        carouselInner.appendChild(newItem);
        // create card content according to type
        let cardItem = document.createElement("div");
        cardItem.setAttribute("id", `${carouselContent.carouselName}-card-${i + 1}`);
        cardItem.classList.add("d-block", "w-100", "card");
        newItem.appendChild(cardItem);
        for (let j = 0; j < carouselContent[`card${i + 1}`].length; j++) {
            createTextElement(carouselContent[`card${i + 1}`][j]);
        }
    }
    // create arrows, change color accordingly
    if (carouselContent.arrows) {
        let carouselControlPrev = document.createElement("a");
        carouselControlPrev.setAttribute("id", `${carouselContent.carouselName}-carousel-control-prev`);
        carouselControlPrev.classList.add("carousel-control-prev");
        carouselControlPrev.href = `#${carouselContent.carouselName}`;
        carouselControlPrev.setAttribute("role", "button");
        carouselControlPrev.setAttribute("data-bs-slide", "prev");
        carouselInner.appendChild(carouselControlPrev);
        let carouselControlPrevIcon = document.createElement("span");
        carouselControlPrevIcon.classList.add("carousel-control-prev-icon", "prev-icon-card");
        carouselControlPrevIcon.setAttribute("aria-hidden", "true");
        carouselControlPrev.appendChild(carouselControlPrevIcon);
        let carouselControlNext = document.createElement("a");
        carouselControlNext.setAttribute("id", `${carouselContent.carouselName}-carousel-control-next`);
        carouselControlNext.classList.add("carousel-control-next");
        carouselControlNext.href = `#${carouselContent.carouselName}`;
        carouselControlNext.setAttribute("role", "button");
        carouselControlNext.setAttribute("data-bs-slide", "next");
        carouselInner.appendChild(carouselControlNext);
        let carouselControlNextIcon = document.createElement("span");
        carouselControlNextIcon.classList.add("carousel-control-next-icon", "next-icon-card");
        carouselControlNextIcon.setAttribute("aria-hidden", "true");
        carouselControlNext.appendChild(carouselControlNextIcon);
    }
}

// relevant only for the structure page, remember to reset when handling tructure page
var openCarouselCard = () => {
    document.getElementById(currCarouselRelevant).style.display = "block";
}

var closeCarouselCard = () => {
    document.getElementById(currCarouselRelevant).style.display = "none";
}

const showInfo = () => {
    let style = document.getElementById("info").style.display;
    if (document.getElementById("ques-container").style.display === "none") {
        if (style === "none") {
            document.getElementById("info").style.display = "block";
        } else {
            document.getElementById("info").style.display = "none";
        }
        document.getElementById("close-btn-info").addEventListener("click", () => {
            document.getElementById("info").style.display = "none";
        });
    }
}

const showQues = () => {
    let currText = 'ques-text';
    let menuExpVisited = false;
    let infoExpVisited = false;
    let quesExpVisited = false;
    let displayStyle = document.getElementById("ques-container").style.display;
    if (document.getElementById("info").style.display === "none") {
        if (displayStyle === "none") {
            document.getElementById("page").style.opacity = "0";
            document.getElementById("ques-container").style.display = "block";
            document.getElementById("ques-content").innerHTML = quesHTMLContent.quesContent;
            document.getElementById("ques-container").addEventListener("click", (event) => {
                // listener for multipule click events inside ques container
                if (event.target.id === "exmp-menu-btn") {
                    currText = "exmp-menu-text";
                    document.getElementById("ques-content").innerHTML = quesHTMLContent.exmpMenuContent;
                    menuExpVisited = true;
                } else if (event.target.id === "exmp-info-btn") {
                    currText = "exmp-info-text";
                    document.getElementById("ques-content").innerHTML = quesHTMLContent.exmpInfoContent;
                    infoExpVisited = true;
                } else if (event.target.id === "exmp-ques-btn") {
                    currText = "exmp-ques-text";
                    document.getElementById("ques-content").innerHTML = quesHTMLContent.exmpQuesContent;
                    quesExpVisited = true;    
                } else if (event.target.id === "close-btn-ques") { 
                    if (menuExpVisited && infoExpVisited && quesExpVisited) {
                        quesVisited = true;
                    }
                    if (currText === 'exmp-menu-text' || currText === 'exmp-info-text' || currText === 'exmp-ques-text') {
                        document.getElementById("ques-content").innerHTML = quesHTMLContent.quesContent;
                        currText = 'ques-text';
                    } else if (!quesVisited && currText === 'ques-text') {
                        document.getElementById("menu-error").style.display = "block"; 
                    } else if (quesVisited) {
                        document.getElementById("ques-container").style.display = "none";
                        document.getElementById("page").style.opacity = "1";
                    }
                    } else if (event.target.id !== "close-btn-ques") {
                        if (document.getElementById("menu-error") !== null ) {
                            document.getElementById("menu-error").style.display = "none";
                        }
                    } 
            });
        } else if (quesVisited) {
            document.getElementById("ques-container").style.display = "none";
            document.getElementById("ques-container").innerHTML = '';
            document.getElementById("page").style.opacity = "1";
        }
    }
}

const createDefinitionElement = (event) => {
    if (currDefShown !== "") {
        closeDefinition();
    }
    currExpShown = `${event.target.id}-exp`;
    currDefShown = `${event.target.id}`;
    let newDef = document.createElement("div");
    newDef.classList.add("definition");
    newDef.setAttribute("id", currExpShown);
    document.getElementById("main").appendChild(newDef);
    let newDefClose = document.createElement("img");
    newDefClose.src = "assets/images/close-btn.svg";
    newDefClose.setAttribute("id", `${event.target.id}-close`);
    newDefClose.alt = "סגור";
    newDefClose.classList.add("close-def-btn");
    newDef.appendChild(newDefClose);
    let newDefText = document.createElement("div");
    newDefText.classList.add("def-text");
    newDefText.innerText = definitionsText[event.target.id];
    newDef.appendChild(newDefText);
    event.target.style.color = "#c55b10";
    newDef.addEventListener("click", closeDefinition);
}

const closeDefinition = () => {
    document.getElementById(currExpShown).removeEventListener("click", closeDefinition);
    if (document.getElementById(currDefShown)) {
        document.getElementById(currDefShown).style.color = "#ff8205";
    }
    document.getElementById(currExpShown).remove();
    currDefShown = "";
    currExpShown = "";
}

const createVidBnt = () => {
    if (currPage === 3) {
        createTextElement(enlisingBtn);
        document.getElementById(enlisingBtn[2]).addEventListener("click", nextPage);
        currPageEvLis = ["id", enlisingBtn[2], "click", "nextPage"];
    } else if (currPage === 13) {
        createTextElement(nafaBtn);
        document.getElementById(nafaBtn[2]).addEventListener("click", nextPage);
        currPageEvLis = ["id", nafaBtn[2], "click", "nextPage"];
    } else if (currPage === 25 || currPage === 28 || currPage === 29 || currPage === 31) {
        document.getElementById("roles-next-arrow").addEventListener("click", nextPage);
    }
}



const createComplaxTimelineBtn = () => {
    if (!finishButtonAdded) {
        finishButtonAdded = true;
        createTextElement(complexFinishButton);
        document.getElementById("next-btn-15").addEventListener("click", nextPage);
    }
}

var handleFlipCards = () => {
    document.getElementById("flip-card-component").style.display = "block";
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const cardInner = card.querySelector('.flip-card-inner');
            cardInner.classList.toggle('flipped');
            if (!flippedStatus[`card${index + 1}`]) {
                flippedStatus[`card${index + 1}`] = true;
                totalFlipped++;
            }
            if (totalFlipped === cards.length) {
                document.getElementById('instruction').style.display = 'none'; 
                document.getElementById('next-btn-11').style.display = 'block'; 
                document.getElementById('next-btn-11').addEventListener("click", nextPage);
            }
        });
    });
}

var timelineComplexPage = () => {
    document.getElementById("branches").addEventListener("click", (event) => {
        if (event.target.id.startsWith("profession-branch")) {
            document.getElementById("branch-explaination").innerText = "הכשרות למדריכים וחיילים למקצועות השונים בעורף, הכשרת אב''כ לכלל צה''ל, והכשרת אזרחים לתפקידם בחירום";
            if (!complexBranchesVisited.includes("profession-branch")) {
                complexBranchesVisited.push("profession-branch");
            }
            if (complexBranchesVisited.length === 3) {
                createComplaxTimelineBtn();
            }
        } else if (event.target.id.startsWith("command-branch")) {
            document.getElementById("branch-explaination").innerText = "אחראי על אימון מפקדות הפיקוד ברמה המחוזית והנפתית";
            if (!complexBranchesVisited.includes("command-branch")) {
            complexBranchesVisited.push("command-branch");
            }
            if (complexBranchesVisited.length === 3) {
                createComplaxTimelineBtn();
            }
        } else if (event.target.id.startsWith("emi-branch")) {
            document.getElementById("branch-explaination").innerText = "אחראי על אימון המסגרות הגדודיות- גדודי המילואים והסדיר לשמירת הכשירות במקצועות החילוץ והאב''כ";
            if (!complexBranchesVisited.includes("emi-branch")) {
            complexBranchesVisited.push("emi-branch");
        }
            if (complexBranchesVisited.length === 3) {
                createComplaxTimelineBtn();
            }
        }
    });
    if (complexBranchesVisited.length === 3) {
        createComplaxTimelineBtn();
    }
}

var rolesCarousels = () => {
    // 'slide.bs.carousel' event is when the slide of the carousel's item is activated, as in one of the arrows was clicked / automatic slide happened
    // this fonction shows the carousels and checks if the user went through the entire carousels.
    // only after that happens, the click on the page's arrow allows tomove to the next page
    // if that is not the case, the click will trigger an error massage that will dissapear after a few seconds
    routineCar = document.getElementById("routineRoles");
    emergancyCar = document.getElementById("emergencyRoles");
    routineCar.style.display = "block";
    emergancyCar.style.display = "block";
    routineCar.addEventListener('slide.bs.carousel', function () {
        let currItemID = document.querySelector("#routineRoles-carousel-inner > .active").id;
        if (!routineNum.includes(currItemID)) {
            routineNum.push(currItemID);
        }
    });
    emergancyCar.addEventListener('slide.bs.carousel', function () {
        let currItemID = document.querySelector("#emergencyRoles-carousel-inner > .active").id;
        if (!emergencyNum.includes(currItemID)) {
            emergencyNum.push(currItemID);
        }
    });
    document.getElementById("roles-next-arrow").addEventListener("click", removeRolesCarousels);
}

const removeRolesCarousels = () => {
    if (routineNum.length >= 7 && emergencyNum.length >= 4) {
        routineCar.style.display = "none";
        emergancyCar.style.display = "none";
        document.getElementById("roles-next-arrow").removeEventListener("click", removeRolesCarousels);
        nextPage();
    } else {
        document.getElementById("rolesErrorText").style.display = "block";
        setTimeout(() => {
            if (document.getElementById("rolesErrorText")) {
                document.getElementById("rolesErrorText").style.display = "none";
            }
        }, 10000);
    }
}

const removeRescueImageCarousel = () => {
    document.getElementById("rescueCarousel").style.display = "none";
}

var rescueImgCarousel = () => {
    document.getElementById("rescueCarousel").style.display = "block";
    document.getElementById("roles-next-arrow").addEventListener("click", removeRescueImageCarousel);
}

var handleStructureTree = () => {
    document.getElementById("st-structure").style.display = "block";
    hativaStructure.style.display = "block";
    bafStructure.style.display = "block";
    bahStructure.style.display = "block";
    schoolStructure.style.display = "block";
    gdudimStructure.style.display = "block";
    hativaStructure.addEventListener("click", openHativaDetails);
    bafStructure.addEventListener("click", openBafDetails);
    bahStructure.addEventListener("click", openBahDetails);
    schoolStructure.addEventListener("click", openSchoolDetails);
    gdudimStructure.addEventListener("click", openGdudimDetails);
}

const hideStructureTree = () => {
    document.getElementById("st-structure").style.display = "none";
    hativaStructure.style.display = "none";
    bafStructure.style.display = "none";
    bahStructure.style.display = "none";
    schoolStructure.style.display = "none";
    gdudimStructure.style.display = "none";
    hativaStructure.removeEventListener("click", openHativaDetails);
    bafStructure.removeEventListener("click", openBafDetails);
    bahStructure.removeEventListener("click", openBahDetails);
    schoolStructure.removeEventListener("click", openSchoolDetails);
    gdudimStructure.removeEventListener("click", openGdudimDetails);
}

const openHativaDetails = () => {
    createScreen(hativaDetails);
    currDetails = "hativa";
    document.getElementById("hativa-details-img").addEventListener("click", openHativaSymbol);
    document.getElementById("close-btn-structure").addEventListener("click", closeDetails);
}

const openHativaSymbol = () => {
    document.getElementById("hativa-details-img").removeEventListener("click", openHativaSymbol);
    document.getElementById("close-btn-structure").removeEventListener("click", closeDetails);
    document.getElementById("hativa-text-container").classList.add("hide-anim");
    setTimeout(() => {
        document.getElementById("hativa-details-img").classList.add("hativa-larger");
        setTimeout(() => {
            document.getElementById("hativa-sym-exp").classList.add("show-anim");
            hativaSymbolVisited = true;
            hativaSymbolOpen = true;
            if (!detailsVisited.includes("hativa") && hativaSymbolVisited) {
                detailsVisited.push("hativa");
            }
            document.getElementById("close-btn-structure").addEventListener("click", closeHativaSymbol);
        }, 2000);
    }, 500);
}

const closeHativaSymbol = () => {
    document.getElementById("close-btn-structure").removeEventListener("click", closeHativaSymbol);
    document.getElementById("hativa-sym-exp").classList.replace("show-anim", "hide-anim");
    setTimeout(() => {
        document.getElementById("hativa-details-img").classList.replace("hativa-larger", "hativa-smaller");
        setTimeout(() => {
            document.getElementById("hativa-text-container").classList.replace("hide-anim", "show-anim");
            setTimeout(() => {
                document.getElementById("hativa-sym-exp").classList.remove("hide-anim");
                document.getElementById("hativa-details-img").classList.remove("hativa-smaller");
                document.getElementById("hativa-text-container").classList.remove("show-anim");
                hativaSymbolOpen = false;
                setTimeout(() => {
                    document.getElementById("close-btn-structure").addEventListener("click", closeDetails);
                    document.getElementById("hativa-details-img").addEventListener("click", openHativaSymbol);
                }, 500)
            }, 1500);
        }, 2000);
    }, 1000);
}

const openBafDetails = () => {
    createScreen(bafDetails);
    currDetails = "baf";
    if (!detailsVisited.includes("baf")) {
        detailsVisited.push("baf");
    }
}

const openBahDetails = () => {
    createScreen(bahDetails);
    currDetails = "bah";
    if (!detailsVisited.includes("bah")) {
        detailsVisited.push("bah");
    }
}

const openSchoolDetails = () => {
    createScreen(schoolDetailsA);
    currSchoolDetailsShown = "a";
    currDetails = "school-a";
    if (!detailsVisited.includes("school-a")) {
        detailsVisited.push("school-a");
    }
    if (schoolDetailsVisited) {
        document.getElementById("close-btn-structure").addEventListener("click", closeDetails);
    }
}

const openGdudimDetails = () => {
    gdudimNextClicks = 0;
    createScreen(gdudimDetails);
    currDetails = "gdudim";
    if (!detailsVisited.includes("gdudim")) {
        detailsVisited.push("gdudim");
    }
    document.getElementById("close-btn-structure").addEventListener("click", checkGdudimFinish);
    document.getElementById("continue-gdudim-exp-next").addEventListener("click", gdudimDetailsNext);
}

var changeSchoolDetailsPart = () => {
    if (currSchoolDetailsShown === "a") {
        closeDetails();
        createScreen(schoolDetailsB);
        currSchoolDetailsShown = "b";
        currDetails = "school-b";
        if (!detailsVisited.includes("school-b")) {
            detailsVisited.push("school-b");
        }
    } else if (currSchoolDetailsShown === "b") {
        closeDetails();
        createScreen(schoolDetailsA);
        currSchoolDetailsShown = "a";
        currDetails = "school-a";
        if (!detailsVisited.includes("school-a")) {
            detailsVisited.push("school-a");
        }
    }
    if (!schoolDetailsVisited) {
        document.getElementById("close-btn-structure").addEventListener("click", closeDetails);
        schoolDetailsVisited = true;
    }
}

const checkGdudimFinish = () => {
    if (gdudimAllowFinish) {
        closeDetails();
    } else {
        document.getElementById("structure-gdudim-error").style.display = "block";
        setTimeout(() => {
            if (document.getElementById("structure-gdudim-error")) {
                document.getElementById("structure-gdudim-error").style.display = "none";
            }
        }, 10000);
    }
}

// animation from right to left
const gdudimDetailsNext = () => {
    document.getElementById("continue-gdudim-exp-next").removeEventListener("click", gdudimDetailsNext);
    document.getElementById("close-btn-structure").removeEventListener("click", checkGdudimFinish);
    let gdudShahar = document.querySelector(".structure-details-gdud-shahar");
    let gdudTavor = document.querySelector(".structure-details-gdud-tavor");
    let gdudKedem = document.querySelector(".structure-details-gdud-kedem");
    let gdudRam = document.querySelector(".structure-details-gdud-ram");
    let shaharExp = document.querySelector(".structure-details-gdud-shahar-exp");
    let tavorExp = document.querySelector(".structure-details-gdud-tavor-exp");
    let kedemExp = document.querySelector(".structure-details-gdud-kedem-exp");
    let ramExp = document.querySelector(".structure-details-gdud-ram-exp");
    if (gdudimNextEnabled) {
        if (gdudimNextClicks % 4 === 1) {
            gdudimExpAnim(gdudShahar, shaharExp, gdudTavor, tavorExp);
        } else if (gdudimNextClicks % 4 === 2) {
            gdudimExpAnim(gdudTavor, tavorExp, gdudKedem, kedemExp);
        } else if (gdudimNextClicks % 4 === 3) {
            gdudimExpAnim(gdudKedem, kedemExp, gdudRam, ramExp);
            gdudimAllowFinish = true;
        } else if (gdudimNextClicks % 4 === 0) {
            gdudimExpAnim(gdudRam, ramExp, gdudShahar, shaharExp);
        }
    }
    
}

const gdudimExpAnim = (currGdud, currExp, nextGdud, nextExp) => {
    gdudimNextEnabled = false;
    if (gdudimNextClicks === 0) {
        nextExp.classList.add("show-exp");
        gdudimNextEnabled = true;
        gdudimNextClicks++;
        document.getElementById("continue-gdudim-exp-next").addEventListener("click", gdudimDetailsNext);
        document.getElementById("close-btn-structure").addEventListener("click", checkGdudimFinish);
    } else {
        currExp.classList.replace("show-exp", "hide-exp");
        setTimeout(() => {
            if (gdudimNextClicks === 1) {
                currGdud.classList.add("hide-gdud-right");
            } else {
                currGdud.classList.replace("show-gdud-right", "hide-gdud-right");
            }
            nextGdud.classList.add("show-gdud-right");
            setTimeout(() => {
                if (gdudimNextClicks === 1) {
                    currGdud.style.opacity = 0;
                }
                currGdud.classList.remove("hide-gdud-right");
                if (gdudimNextClicks >= 4) {
                    nextExp.classList.replace("hide-exp", "show-exp");
                } else {
                    nextExp.classList.add("show-exp");
                }
                setTimeout(() => {
                    gdudimNextEnabled = true;
                    gdudimNextClicks++;
                    document.getElementById("continue-gdudim-exp-next").addEventListener("click", gdudimDetailsNext);
                    document.getElementById("close-btn-structure").addEventListener("click", checkGdudimFinish);
                }, 1000);
            }, 1500);
        }, 1000);
    }
}


var closeDetails = () => {
    if (currDetails !== "hativa" && currDetails !== "gdudim") {
        document.querySelector(".close-card-button").removeEventListener("click", closeCarouselCard);
    } else if (currDetails === "hativa") {
        document.getElementById("hativa-details-img").removeEventListener("click", openHativaSymbol);
    }
    currDetails = "";
    document.getElementById("close-btn-structure").removeEventListener("click", closeDetails);
    document.querySelector(".structure-details").remove();
    if (detailsVisited.length === 6) {
        if (!structureExplainTextRemoved) {
            if (document.getElementById("explain-structure")) {
                document.getElementById("explain-structure").remove();
            }
            if (!document.getElementById("finished-structure")) {
                createTextElement(structureFinishBtn);
                document.getElementById("finished-structure").addEventListener("click", nextPage);
            }
        }
    }
    
}

// questions
var americanHandleSelectedAnswer = () => {

    const americanAnswers = document.querySelectorAll('.american-answer');
    if (currPage === 17) {
        correctAmerican = document.getElementById('american-ans1');
    } else if (currPage === 18) {
        correctAmerican = document.getElementById('american-ans3');
    } else if (currPage === 21) {
        correctAmerican = document.getElementById('american-ans2');
    } else if (currPage === 40) {
        correctAmerican = document.getElementById('american-ans4');
    }
    americanCheckButton = document.getElementById('american-check-btn');
    let americanSelectedAnswer = null;
    americanAnswers.forEach(answer => {
        answer.addEventListener('click', function americanAnswer(event) {
            if (americanCheckButton.textContent !== 'הבא') {
                event.stopPropagation(); // Prevent the click from bubbling to the body
                // If the clicked answer is already selected, deselect it
                if (americanSelectedAnswer === answer) {
                    answer.classList.remove('selected');
                    americanSelectedAnswer = null;
                } else {
                    // Deselect previously selected answer (if any)
                    if (americanSelectedAnswer) {
                        americanSelectedAnswer.classList.remove('selected');
                    }
                    // Select the clicked answer
                    answer.classList.add('selected');
                    americanSelectedAnswer = answer;
                }
            }
        });
    });
    // Deselect any selected answer if a non-answer element is clicked
    document.addEventListener('click', function americanAnswerClick(event) {
        if (!event.target.classList.contains('american-answer')) {
            if (americanSelectedAnswer) {
                if (americanCheckButton.textContent === 'הבא') {
                    document.getElementById('american-check-btn').removeEventListener("click", checkAmericanMultipulChoice);
                    document.getElementById('american-check-btn').addEventListener("click", nextPage);
                    this.removeEventListener("click", americanAnswerClick);
                }
                americanSelectedAnswer.classList.remove('selected');
                americanSelectedAnswer = null;
            }
        }
    });
}

// Check if the selected answer is correct
var checkAmericanMultipulChoice = () => {
    let americanSelectedAnswer = document.querySelector('.selected');
    // If no answer is selected, return
    if (!americanSelectedAnswer) return;
    if (americanSelectedAnswer === correctAmerican) {
        // Correct answer
        americanSelectedAnswer.classList.remove('selected');
        americanSelectedAnswer.classList.add('correct');
        americanCheckButton.textContent = 'הבא';
    } else {
        // Wrong answer
        americanSelectedAnswer.classList.remove('selected');
        americanSelectedAnswer.classList.add('wrong');
        americanCheckButton.textContent = 'בדיקה נוספת';
        // Disable the wrong answer so it can't be selected again
        americanSelectedAnswer.style.pointerEvents = 'none';
    }
}

var multipleAnswersQuestion = () => {
    multipleHandleSelection();
    multipleCheckButton = document.getElementById('multiple-check-btn');
    multipleCheckButton.addEventListener('click', multipleCheckAnswers);
}

const multipleHandleSelection = () => {
    const answers = document.querySelectorAll('.multiple-answer');
    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            // Toggle "selected" class
            if (answer.classList.contains('selected')) {
                answer.classList.remove('selected');
            } else {
                answer.classList.add('selected');
            }
            // Hide error message if visible
            multipleError = document.querySelector('.multiple-error');
            if (multipleError.style.display === 'block') {
                multipleError.style.display = 'none';
            }
        });
    });
}

  // Check the selected answers
  const multipleCheckAnswers = () => {
    if (currPage === 32) {
        multipleTotalCorrect = multipleCorrectAnswers1.length;
        multipleCorrectAnswers = multipleCorrectAnswers1;
    } else {
        multipleTotalCorrect = multipleCorrectAnswers2.length;
        multipleCorrectAnswers = multipleCorrectAnswers2;
    }
    let multipleSelectedAnswers = document.querySelectorAll('.selected');
    multipleError = document.querySelector('.multiple-error');
    // Show error if no answers are selected
    if (multipleSelectedAnswers.length === 0) {
      multipleError.style.display = 'block';
      return;
    }
    // Iterate over selected answers and check if they are correct
    multipleSelectedAnswers.forEach(answer => {
        const parentID = answer.parentElement.id;
        if (multipleCorrectAnswers.includes(parentID)) {
            // Correct answer
            answer.classList.replace('selected', 'correct');
            multipleCorrectSelectedCount++; // Increase the correct answer count
        } else {
            // Wrong answer
            answer.classList.replace('selected', 'wrong');
        }
        // Disable checked answers
        answer.style.pointerEvents = 'none';
    });
    // Check if all correct answers were selected
    if (multipleCorrectSelectedCount >= multipleTotalCorrect) {
        multipleCheckButton.textContent = 'הבא';
        multipleCheckButton.removeEventListener('click', multipleCheckAnswers);
        multipleCheckButton.addEventListener('click', nextPage);
        document.querySelectorAll('.multiple-answer').forEach(answer => {
            answer.style.pointerEvents = 'none'; // Prevent further selection
        });
    } else {
        multipleCheckButton.textContent = 'בדיקה נוספת';
    }
}

var chooseCardsQuestion = () => {
    chooseQuestionFinished = false;
     // Attach event listeners to the cards
     document.querySelectorAll('.choose-card').forEach(card => {
        card.addEventListener('click', () => chooseHandleSelection(card));
    });

    // Attach event listener to the check button
    document.getElementById('choose-check-btn').addEventListener('click', chooseNextButton);
}

const chooseNextButton = () => {
    chooseCheckBtn = document.getElementById('choose-check-btn');
    if (chooseQuestionFinished && chooseCheckBtn.textContent === 'הבא') {
        nextPage();
    } else {
        chooseCheckAnswers(); // Check answers if not finished
    }

}

// Handle card selection and deselection
const chooseHandleSelection = (card) => {
    if (!chooseQuestionFinished && document.getElementById('choose-check-btn').textContent !== 'הבא' && !chooseWrongAnim) {
        if (card.classList.contains('selected')) {
            // Deselect the card if it is already selected
            card.classList.remove('selected');
            chooseSelectedCards = chooseSelectedCards.filter(c => c !== card.id);
        } else {
            // If there are already two selected cards, deselect the first one
            if (chooseSelectedCards.length === 2) {
                const chooseFirstSelected = chooseSelectedCards.shift(); // Remove the first selected card
                document.getElementById(chooseFirstSelected).classList.remove('selected');
            }
            // Select the new card
            card.classList.add('selected');
            chooseSelectedCards.push(card.id);
        }
        // Hide error message when card is selected
        chooseErrorMsg = document.getElementById('choose-error-msg');
        if (chooseErrorMsg.style.display === 'block') {
            chooseErrorMsg.style.display = 'none';
        }
    }
}

// Check the selected answers
const chooseCheckAnswers = () => {
    chooseErrorMsg = document.getElementById('choose-error-msg');
    if (chooseSelectedCards.length < 2) {
        chooseErrorMsg.style.display = 'block';
        // Deselect all selected cards
        chooseSelectedCards.forEach(cardId => {
            document.getElementById(cardId).classList.remove('selected');
        });
        chooseSelectedCards = []; // Clear selected cards
        // Hide the error message after 10 seconds
        setTimeout(() => {
            chooseErrorMsg.style.display = 'none';
        }, 10000);
        return;
    }
    // Check if both selected cards are correct
    const chooseBothCorrect = chooseSelectedCards.every(cardId => chooseCorrectAnswers.includes(cardId));
    if (chooseBothCorrect) {
        // If both answers are correct
        const chooseCheckBtn = document.getElementById('choose-check-btn');
        chooseSelectedCards.forEach(cardId => {
            document.getElementById(cardId).classList.replace('selected', 'correct');
        });
        chooseCheckBtn.textContent = 'הבא'; // Change button text to "הבא"
        chooseQuestionFinished = true; // Set flag to indicate the question is finished
        chooseSelectedCards = []; // Clear selected cards
    } else {
        // If either answer is wrong, apply the blink animation
        chooseSelectedCards.forEach(cardId => {
            const card = document.getElementById(cardId);
            card.classList.replace('selected', 'wrong-anim');
            chooseWrongAnim = true;
            card.removeEventListener('click', () => chooseHandleSelection(card));
        });
        // Allow re-selection after the animation duration
        setTimeout(() => {
            chooseSelectedCards.forEach(cardId => {
                const card = document.getElementById(cardId);
                card.classList.remove('wrong-anim'); // Remove the wrong class
                card.style.pointerEvents = 'auto'; // Re-enable selection
            });
            chooseSelectedCards = []; // Clear selected cards
            chooseWrongAnim = false;
        }, 2250); // Duration of 3 cycles of 0.75s animation (0.75 * 3)
    }
}

var completeSentenceQuestion = () => {
    if (currPage === 33) {
        completeSentenceCorrectPairs = completeSentenceCorrectPairsPage33; // Start with page 33 pairs
    } else {
        completeSentenceCorrectPairs = completeSentenceCorrectPairsPage34;
    }
    completeSentenceDropZones = document.querySelectorAll('.sentence-drop-zone');
    completeSentenceNextButton = document.getElementById('sentence-next-btn');
    // Populate the word bank for the first time
    const completeSentenceWordBank = document.getElementById('sentence-word-bank');
    completeSentenceWordBankContent.forEach(word => {
        const completeSentenceWordElement = document.createElement('div');
        completeSentenceWordElement.id = word.id;
        completeSentenceWordElement.className = 'sentence-word';
        completeSentenceWordElement.textContent = word.text;
        completeSentenceWordElement.setAttribute('draggable', 'true');
        completeSentenceWordElement.addEventListener('dragstart', completeSentenceDrag);
        completeSentenceWordBank.appendChild(completeSentenceWordElement);
    });
    // Make the drop zones droppable
    completeSentenceDropZones.forEach(completeSentenceDropZone => {
        completeSentenceDropZone.addEventListener('dragover', completeSentenceAllowDrop); // Allow drop over the zone
        completeSentenceDropZone.addEventListener('drop', completeSentenceDrop); // Handle the drop action
    });
    // Add event listener to Next button
    completeSentenceNextButton.addEventListener('click', nextPage);
}

function completeSentenceAllowDrop(event) {
    event.preventDefault(); // Allow the drop action
}

function completeSentenceDrag(event) {
    event.dataTransfer.setData('text', event.target.id); // Store the word ID being dragged
}


const completeSentenceDrop = (event) => {
    event.preventDefault();
    const completeSentenceDropZoneId = event.target.id; // Get the drop zone ID
    const completeSentenceWordId = event.dataTransfer.getData('text'); // Get the dragged word's ID
    const completeSentenceDroppedElement = document.getElementById(completeSentenceWordId); // Select the dragged word element
    // Ensure that the drop happens only in empty drop zones and correct zones
    if (!event.target.hasChildNodes() && completeSentenceCorrectPairs[completeSentenceDropZoneId] === completeSentenceWordId) {
        // If correct pair, drop it and remove styling
        completeSentenceDroppedElement.classList.remove('sentence-word');
        completeSentenceDroppedElement.style.backgroundColor = 'transparent';
        completeSentenceDroppedElement.style.border = 'none';
        completeSentenceDroppedElement.style.padding = '0';
        completeSentenceDroppedElement.style.paddingBottom = '0.2rem';
        completeSentenceDroppedElement.style.fontSize = '0.7rem';
        completeSentenceDroppedElement.style.cursor = 'default';
        // Move the word into the correct drop zone and disable dragging
        event.target.appendChild(completeSentenceDroppedElement);
        completeSentenceDroppedElement.setAttribute('draggable', 'false');
        event.target.style.pointerEvents = 'none'; // Disable further interaction with the drop zone
        // Check if all drop zones are correctly filled
        completeSentenceCheckCompletion();
    } else {
        // If not correct, return the word to the word bank
        const completeSentenceWordBank = document.querySelector('.sentence-word-bank');
        completeSentenceWordBank.appendChild(completeSentenceDroppedElement);
    }
}

const completeSentenceCheckCompletion = () => {
    let completeSentenceAllFilled = true;
    completeSentenceDropZones.forEach(completeSentenceDropZone => {
        // Check if each drop zone has the correct word
        const completeSentenceChild = completeSentenceDropZone.firstChild;
        if (!completeSentenceChild || completeSentenceCorrectPairs[completeSentenceDropZone.id] !== completeSentenceChild.id) {
            completeSentenceAllFilled = false;
        }
    });
    // If all drop zones are correctly filled, display the "Next" button
    if (completeSentenceAllFilled) {
        completeSentenceNextButton.style.display = 'block';
    }
}

var organizingDragAndDrop = () => {
    organizingAllFilled = false;
    organizingDropZones = document.querySelectorAll('.organizing-drop-zone');
    organizingNextButton = document.getElementById('organizing-next-btn');
    document.querySelectorAll('.organizing-word').forEach(organizingWord => {
        organizingWord.setAttribute('draggable', 'true'); // Set organizingWords as draggable
        organizingWord.addEventListener('dragstart', organizingDrag); // Add drag event
    });
    organizingDropZones.forEach(organizingDropZone => {
        organizingDropZone.addEventListener('dragover', organizingAllowDrop); // Allow drop over the zone
        organizingDropZone.addEventListener('drop', organizingDrop); // Handle the drop action
    });
}

const organizingAllowDrop = (event) => {
    if (!organizingAllFilled) {
        event.preventDefault(); // Allow the drop action
    }
}

const organizingDrag = (event) => {
    event.dataTransfer.setData('text', event.target.id); // Store the word ID being dragged
}

const organizingDrop = (event) => {
    if (!organizingAllFilled) {
        event.preventDefault();
        const organizingDropZoneId = event.target.id; // Get the drop zone ID
        const organizingWordId = event.dataTransfer.getData('text'); // Get the dragged word's ID
        const organizingDroppedElement = document.getElementById(organizingWordId); // Select the dragged word element
        // Check if the drop zone is correct
        if (organizingCorrectPairs[organizingDropZoneId] && organizingCorrectPairs[organizingDropZoneId].includes(organizingWordId)) {
            // If correct pair, drop it
            event.target.appendChild(organizingDroppedElement);
            organizingDroppedElement.setAttribute('draggable', 'false'); // Disable further dragging
            organizingSuccessfulDrops.push(organizingWordId); // Track successful drop
            organizingCheckCompletion(); // Check if all tasks are correctly placed
        } else {
            // If not correct, return the word to the word bank
            const organizingWordBank = document.querySelector('.organizing-word-bank');
            organizingWordBank.appendChild(organizingDroppedElement);
        }
    }
}

const organizingCheckCompletion = () => {
    // Check if all required tasks have been successfully placed
    organizingAllFilled = organizingSuccessfulDrops.length === (organizingCorrectPairs['routine-zone'].length + organizingCorrectPairs['emergency-zone'].length);
    // If all drop zones are correctly filled, display the "Next" button
    if (organizingAllFilled) {
        organizingNextButton.style.display = 'block';
        organizingNextButton.addEventListener("click", () => {
            nextPage();
        })
    }
}

var connectTwoQuestion = () => {
    connectTwoAllCorrectPairsMatched = 0;
    if (currPage === 20) {
        connectTwoCorrectPairs = connectTwoCorrectPairsQuestion1; // Start with the first question's pairs
        connectTwoQuestionNumber = 1;
    } else if (currPage === 38) {
        connectTwoCorrectPairs = connectTwoCorrectPairsQuestion2; // Start with the first question's pairs
        connectTwoQuestionNumber = 2;
    } else if (currPage === 41) {
        connectTwoCorrectPairs = connectTwoCorrectPairsQuestion3; // Start with the first question's pairs
        connectTwoQuestionNumber = 3;
    }
    // Get the initial containers and add event listeners for the first question
    const connectTwoYearContainer = document.querySelector('.connect-year-container');
    const connectTwoEventContainer = document.querySelector('.connect-event-container');
    connectTwoYearContainer.querySelectorAll('.connect-card').forEach(card => {
        card.addEventListener('click', () => {
            if (!connectTwoWrongAnim) {
                connectTwoHandleSelectedAnswerCards(card, connectTwoYearContainer);
            }
        });
    });
    connectTwoEventContainer.querySelectorAll('.connect-card').forEach(card => {
        card.addEventListener('click', () => {
            if (!connectTwoWrongAnim) {
                connectTwoHandleSelectedAnswerCards(card, connectTwoEventContainer);
            }
        });
    });
    // Add event listener for the check button
    document.getElementById('connect-check-btn').addEventListener('click', () => {
        if (connectTwoIsNextQuestionReady) {
            // connectTwoQuestionNumber++;
            connectTwoAllCorrectPairsMatched = 0;
            connectTwoColorIndex = 0; // Reset color index for the second question
            connectTwoIsNextQuestionReady = false; // Reset flag
            nextPage();
        } else {
            connectTwoCheckAnswerCards();
        }
    });
}

const connectTwoGetNextColor = () => {
    const color = connectTwoAvailableColors[connectTwoColorIndex];
    connectTwoColorIndex = (connectTwoColorIndex + 1) % connectTwoAvailableColors.length; // Cycle through colors
    return color;
}

// Handle card selection and deselection
const connectTwoHandleSelectedAnswerCards = (card, container) => {
    const connectTwoSelectedCard = container.querySelector('.selected');
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        connectTwoSelectedCards = connectTwoSelectedCards.filter(c => c !== card);
    } else {
        if (connectTwoSelectedCard) {
            connectTwoSelectedCard.classList.remove('selected');
            connectTwoSelectedCards = connectTwoSelectedCards.filter(c => c !== connectTwoSelectedCard);
        }
        if (!card.classList.contains("correct")) {
            card.classList.add('selected');
            connectTwoSelectedCards.push(card);
        }
    }
}

// Check the selected answer cards
function connectTwoCheckAnswerCards() {
    const connectTwoCheckBtn = document.getElementById('connect-check-btn');
    const connectTwoErrorMsg = document.getElementById('connect-error-msg');
    // Ensure exactly two cards are selected
    if (connectTwoSelectedCards.length !== 2) {
        connectTwoErrorMsg.style.display = 'block';
        setTimeout(() => connectTwoErrorMsg.style.display = 'none', 10000);
        connectTwoSelectedCards.forEach(card => card.classList.remove('selected'));
        connectTwoSelectedCards = [];
        return;
    }
    const [connectTwoFirstCard, connectTwoSecondCard] = connectTwoSelectedCards;
    const connectTwoFirstCardId = connectTwoFirstCard.id;
    const connectTwoSecondCardId = connectTwoSecondCard.id;
    // Check if the selected pair is correct, accounting for either selection order
    const connectTwoIsCorrectPair = (connectTwoCorrectPairs[connectTwoFirstCardId] === connectTwoSecondCardId || connectTwoCorrectPairs[connectTwoSecondCardId] === connectTwoFirstCardId) ||
        (Array.isArray(connectTwoCorrectPairs[connectTwoFirstCardId]) && connectTwoCorrectPairs[connectTwoFirstCardId].includes(connectTwoSecondCardId)) ||
        (Array.isArray(connectTwoCorrectPairs[connectTwoSecondCardId]) && connectTwoCorrectPairs[connectTwoSecondCardId].includes(connectTwoFirstCardId));
    if (connectTwoIsCorrectPair) {
        const connectTwoNextColor = connectTwoGetNextColor();
        connectTwoFirstCard.style.backgroundColor = `${connectTwoNextColor}80`; // Opacity 0.5 (hex 80)
        connectTwoSecondCard.style.backgroundColor = `${connectTwoNextColor}80`; // Opacity 0.5 (hex 80)
        connectTwoFirstCard.style.borderColor = connectTwoNextColor;
        connectTwoSecondCard.style.borderColor = connectTwoNextColor;
        connectTwoFirstCard.classList.add('correct');
        connectTwoSecondCard.classList.add('correct');
        connectTwoFirstCard.classList.remove('selected');
        connectTwoSecondCard.classList.remove('selected');
        connectTwoSelectedCards = [];
        connectTwoAllCorrectPairsMatched++;
        // Check if all pairs are matched
        if ((connectTwoQuestionNumber === 1 && connectTwoAllCorrectPairsMatched === 9) || (connectTwoQuestionNumber === 2 && connectTwoAllCorrectPairsMatched === 4) || (connectTwoQuestionNumber === 3 && connectTwoAllCorrectPairsMatched === 4)) {
            connectTwoCheckBtn.textContent = 'הבא'; // Change the button text to "הבא"
            connectTwoIsNextQuestionReady = true; // Flag to show the next question on click
        }
    } else {
        connectTwoFirstCard.classList.add('wrong-anim');
        connectTwoSecondCard.classList.add('wrong-anim');
        connectTwoWrongAnim = true;
        setTimeout(() => {
            connectTwoFirstCard.classList.remove('wrong-anim');
            connectTwoSecondCard.classList.remove('wrong-anim');
            connectTwoFirstCard.classList.remove('selected');
            connectTwoSecondCard.classList.remove('selected');
            connectTwoSelectedCards = [];
            connectTwoWrongAnim = false;
        }, 1500);
    }
}

const basicNextPage = () => {
    document.getElementById("page").innerHTML = "";
    currPage++;
    if (currPage > furthestPageVisited) {
        furthestPageVisited = currPage;
    }
    let currObjContent = window[`page${currPage}`];
    createScreen(currObjContent);
}

const timelineFirstAnimSection = () => {
    if (document.getElementById("timeline-text-container")) {
        document.getElementById("timeline-text-container").classList.add("hide-anim");
    }
    timelineRoll.classList.add(`tl-page-${currPage}`);
}

const timelineLastAnimSection = () => {
    timelineRoll.classList.remove(`tl-page-${currPage - 1}`);
    document.getElementById(`next-btn-${currPage}`).addEventListener("click", nextPage);
}

var nextPage = () => {
    if (currPage === 1 && !quesVisited) {
        showQues();
    } else {
        if (currPage === 1) {
            if (document.getElementById("start-btn")) {
                document.getElementById("start-btn").removeEventListener("click", nextPage);
            }
        } else if (currPage >= 2 && currPage <= 16 || currPage === 22 || currPage === 36) {
            if (document.getElementById(`next-btn-${currPage}`)) {
                document.getElementById(`next-btn-${currPage}`).removeEventListener("click", nextPage);
            }
        } else if (currPage >= 23 && currPage <= 31) {
            if (document.getElementById("roles-next-arrow")) {
                document.getElementById("roles-next-arrow").removeEventListener("click", nextPage);
            }
        }
        if (currExpShown !== "") {
            document.getElementById(currExpShown).remove();
            currDefShown = "";
            currExpShown = "";
        }
        if (currPage === 1) {
            timelineRoll.classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                basicNextPage();
                setTimeout(function() {
                    if (document.getElementById("page3text")) {
                        document.getElementById("page3text").classList.add("show-anim");
                    }
                    if (document.getElementById("next-btn-2")) {
                        document.getElementById("next-btn-2").addEventListener("click", nextPage);
                    }
                }, 3000);
            }, 500);
        } else if (currPage === 4) {
            // animation is 3 s long
            timelineRoll.classList.remove(`tl-page-${currPage - 1}`);
            if (document.getElementById("timeline-text-container")) {
                document.getElementById("timeline-text-container").classList.add("hide-anim");
            }
            timelineRoll.classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                basicNextPage();
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        timelineRoll.classList = "timeline";
                        document.getElementById(`next-btn-${currPage}`).addEventListener("click", nextPage);
                    }, 500);
                }, 3000);
            }, 500);
        } else if (currPage === 2) {
            // animation is 2 s long
            timelineRoll.classList.remove(`tl-page-${currPage - 1}`);
            if (document.getElementById("page3text")) {
                document.getElementById("page3text").classList.add("hide-anim");
            }
            timelineRoll.classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                basicNextPage();
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        timelineRoll.classList = "timeline";
                    }, 500);
                }, 2000);
            }, 500);
        } else if (currPage === 8 || currPage === 10) {
            // animation is 2.5 s long
            if (document.getElementById("timeline-text-container")) {
                document.getElementById("timeline-text-container").classList.add("hide-anim");
            }
            timelineRoll.classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                basicNextPage();
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        timelineRoll.classList = "timeline";
                        document.getElementById(`next-btn-${currPage}`).addEventListener("click", nextPage);
                        if (currPage === 11) {
                            handleFlipCards();
                        }
                    }, 500);
                }, 2000);
            }, 500);
        } else if (5 <= currPage && currPage <= 7 || currPage === 9 || currPage === 11) {
            // animation is 3.5 s long
            if (currPage === 11) {
                document.getElementById("flip-card-component").style.display = "none";
                let innerCards = document.querySelectorAll(".flip-card-inner");
                innerCards.forEach((innerCard, index) => {
                    if (innerCard.classList.contains("flipped")) {
                        innerCard.classList.toggle('flipped');
                    }
                });
            }
            if (document.getElementById("timeline-text-container")) {
                document.getElementById("timeline-text-container").classList.add("hide-anim");
            }
            timelineRoll.classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                basicNextPage();
                setTimeout(function() {
                    document.getElementById("timeline-text-container").classList.add("show-anim");
                    setTimeout(function() {
                        timelineRoll.classList = "timeline";
                        document.getElementById(`next-btn-${currPage}`).addEventListener("click", nextPage);
                    }, 500);
                }, 3000);
            }, 500);
        } else if (currPage === 3 || currPage === 14 || currPage === 15) {
            // animation is 4.5 s long
            if (currPage === 3) {
                timelineRoll.classList.remove(`tl-page-${currPage - 1}`);
                videoEnded();
            } else if (currPage === 15) {
                finishButtonAdded = false;
            }
            if (document.getElementById("timeline-text-container")) {
                document.getElementById("timeline-text-container").classList.add("hide-anim");
            }
            timelineRoll.classList.add(`tl-page-${currPage}`);
            setTimeout(function() {
                basicNextPage();
                setTimeout(function() {
                    if (document.getElementById("timeline-text-container")) {
                        document.getElementById("timeline-text-container").classList.add("show-anim");
                    }
                    timelineRoll.classList = "timeline";
                    if (currPage !== 15) {
                        document.getElementById(`next-btn-${currPage}`).addEventListener("click", nextPage);
                    }
                }, 4500);
            }, 500);
        } else if (currPage === 13 || currPage === 25 || currPage >= 28 && currPage <= 31) {
            videoEnded();
            basicNextPage();
        } else if (currPage === 41) {
            document.getElementById("page").innerHTML = "";
            createScreen(endScreenContent);
        } else if (currPage === 27) {
            basicNextPage();
            document.getElementById("rescueCarousel").style.display = "none";
        } else if (currPage === 37) {
            hideStructureTree();
            basicNextPage();
        } else {
            basicNextPage();
        }
    }
}
    
var restart = () => {
    document.getElementById("re-do-button").removeEventListener("click", restart);
    document.getElementById("page").innerHTML = "";
    currPage = 1;
    currExpShown = "";
    currDefShown = ""; // type string
    currSchoolDetailsShown = "";
    complexBranchesVisited = [];
    currDetails = "";
    currPageEvLis = [];
    createScreen(openScreenContent);
}