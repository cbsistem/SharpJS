﻿Bridge.merge(new System.Globalization.CultureInfo("az-Cyrl", true), {
    englishName: "Azerbaijani (Cyrillic)",
    nativeName: "Азәрбајҹан дили",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        naNSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "ман.",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["Б","Бе","Ча","Ч","Ҹа","Ҹ","Ш"],
        abbreviatedMonthGenitiveNames: ["Јан","Фев","Мар","Апр","мая","ијун","ијул","Авг","Сен","Окт","Ноя","Дек",""],
        abbreviatedMonthNames: ["Јан","Фев","Мар","Апр","Мај","Ијун","Ијул","Авг","Сен","Окт","Ноя","Дек",""],
        amDesignator: "",
        dateSeparator: ".",
        dayNames: ["базар","базар ертәси","чәршәнбә ахшамы","чәршәнбә","ҹүмә ахшамы","ҹүмә","шәнбә"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "d MMMM yyyy HH:mm:ss",
        longDatePattern: "d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["јанвар","феврал","март","апрел","мај","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр",""],
        monthNames: ["jанвар","феврал","март","апрел","мај","ијун","ијул","август","сентјабр","октјабр","нојабр","декабр",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd.MM.yyyy",
        shortestDayNames: ["Б","Бе","Ча","Ч","Ҹа","Ҹ","Ш"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});