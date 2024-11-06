<<<<<<< HEAD
/* flatpickr v4.6.13, @license MIT */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.flatpickr = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */

	var __assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};

	function __spreadArrays() {
		for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
		for (var r = Array(s), k = 0, i = 0; i < il; i++)
			for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
				r[k] = a[j];
		return r;
	}

	var HOOKS = [
		"onChange",
		"onClose",
		"onDayCreate",
		"onDestroy",
		"onKeyDown",
		"onMonthChange",
		"onOpen",
		"onParseConfig",
		"onReady",
		"onValueUpdate",
		"onYearChange",
		"onPreCalendarPosition",
	];
	var defaults = {
		_disable: [],
		allowInput: false,
		allowInvalidPreload: false,
=======
/* flatpickr v4.1.4, @license MIT */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.flatpickr = factory());
}(this, (function () { 'use strict';

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */



	var __assign = Object.assign || function __assign(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};

	function compareDates(date1, date2, timeless) {
		if (timeless !== false) {
			return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
				new Date(date2.getTime()).setHours(0, 0, 0, 0));
		}
		return date1.getTime() - date2.getTime();
	}
	var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
	var getWeek = function (givenDate) {
		var onejan = new Date(givenDate.getFullYear(), 0, 1);
		return Math.ceil(((givenDate.getTime() - onejan.getTime()) / 86400000 +
			onejan.getDay() +
			1) /
			7);
	};
	var duration = {
		DAY: 86400000,
	};

	var defaults = {
		_disable: [],
		_enable: [],
		allowInput: false,
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		altFormat: "F j, Y",
		altInput: false,
		altInputClass: "form-control input",
		animate: typeof window === "object" &&
<<<<<<< HEAD
			window.navigator.userAgent.indexOf("MSIE") === -1,
		ariaDateFormat: "F j, Y",
		autoFillDefaultTime: true,
=======
		window.navigator.userAgent.indexOf("MSIE") === -1,
		ariaDateFormat: "F j, Y",
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		clickOpens: true,
		closeOnSelect: true,
		conjunction: ", ",
		dateFormat: "Y-m-d",
		defaultHour: 12,
		defaultMinute: 0,
		defaultSeconds: 0,
		disable: [],
		disableMobile: false,
<<<<<<< HEAD
		enableSeconds: false,
		enableTime: false,
		errorHandler: function (err) {
			return typeof console !== "undefined" && console.warn(err);
		},
		getWeek: function (givenDate) {
			var date = new Date(givenDate.getTime());
			date.setHours(0, 0, 0, 0);
			// Thursday in current week decides the year.
			date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
			// January 4 is always in week 1.
			var week1 = new Date(date.getFullYear(), 0, 4);
			// Adjust to Thursday in week 1 and count number of weeks from date to week1.
			return (1 +
				Math.round(((date.getTime() - week1.getTime()) / 86400000 -
						3 +
						((week1.getDay() + 6) % 7)) /
					7));
		},
=======
		enable: [],
		enableSeconds: false,
		enableTime: false,
		errorHandler: console.warn,
		getWeek: getWeek,
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		hourIncrement: 1,
		ignoredFocusElements: [],
		inline: false,
		locale: "default",
		minuteIncrement: 5,
		mode: "single",
<<<<<<< HEAD
		monthSelectorType: "dropdown",
		nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
		noCalendar: false,
		now: new Date(),
=======
		nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
		noCalendar: false,
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		onChange: [],
		onClose: [],
		onDayCreate: [],
		onDestroy: [],
		onKeyDown: [],
		onMonthChange: [],
		onOpen: [],
		onParseConfig: [],
		onReady: [],
		onValueUpdate: [],
		onYearChange: [],
<<<<<<< HEAD
		onPreCalendarPosition: [],
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		plugins: [],
		position: "auto",
		positionElement: undefined,
		prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
		shorthandCurrentMonth: false,
<<<<<<< HEAD
		showMonths: 1,
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		static: false,
		time_24hr: false,
		weekNumbers: false,
		wrap: false,
	};

	var english = {
		weekdays: {
			shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			longhand: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			],
		},
		months: {
			shorthand: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			longhand: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
		},
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
		ordinal: function (nth) {
			var s = nth % 100;
			if (s > 3 && s < 21)
				return "th";
			switch (s % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		rangeSeparator: " to ",
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle",
		amPM: ["AM", "PM"],
<<<<<<< HEAD
		yearAriaLabel: "Year",
		monthAriaLabel: "Month",
		hourAriaLabel: "Hour",
		minuteAriaLabel: "Minute",
		time_24hr: false,
	};

	var pad = function (number, length) {
		if (length === void 0) { length = 2; }
		return ("000" + number).slice(length * -1);
	};
	var int = function (bool) { return (bool === true ? 1 : 0); };
	/* istanbul ignore next */
	function debounce(fn, wait) {
		var t;
		return function () {
			var _this = this;
			var args = arguments;
			clearTimeout(t);
			t = setTimeout(function () { return fn.apply(_this, args); }, wait);
=======
	};

	var pad = function (number) { return ("0" + number).slice(-2); };
	var int = function (bool) { return (bool === true ? 1 : 0); };
	function debounce(func, wait, immediate) {
		if (immediate === void 0) { immediate = false; }
		var timeout;
		return function () {
			var context = this, args = arguments;
			timeout !== null && clearTimeout(timeout);
			timeout = window.setTimeout(function () {
				timeout = null;
				if (!immediate)
					func.apply(context, args);
			}, wait);
			if (immediate && !timeout)
				func.apply(context, args);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		};
	}
	var arrayify = function (obj) {
		return obj instanceof Array ? obj : [obj];
	};
<<<<<<< HEAD
=======
	function mouseDelta(e) {
		var delta = e.wheelDelta || -e.deltaY;
		return delta >= 0 ? 1 : -1;
	}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4

	function toggleClass(elem, className, bool) {
		if (bool === true)
			return elem.classList.add(className);
		elem.classList.remove(className);
	}
	function createElement(tag, className, content) {
		var e = window.document.createElement(tag);
		className = className || "";
		content = content || "";
		e.className = className;
		if (content !== undefined)
			e.textContent = content;
		return e;
	}
	function clearNode(node) {
		while (node.firstChild)
			node.removeChild(node.firstChild);
	}
	function findParent(node, condition) {
		if (condition(node))
			return node;
		else if (node.parentNode)
			return findParent(node.parentNode, condition);
<<<<<<< HEAD
		return undefined; // nothing found
	}
	function createNumberInput(inputClassName, opts) {
		var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
		if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
			numInput.type = "number";
		}
		else {
			numInput.type = "text";
			numInput.pattern = "\\d*";
		}
		if (opts !== undefined)
			for (var key in opts)
				numInput.setAttribute(key, opts[key]);
=======
		return undefined;
	}
	function createNumberInput(inputClassName) {
		var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
		numInput.type = "text";
		numInput.pattern = "\\d*";
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		wrapper.appendChild(numInput);
		wrapper.appendChild(arrowUp);
		wrapper.appendChild(arrowDown);
		return wrapper;
	}
<<<<<<< HEAD
	function getEventTarget(event) {
		try {
			if (typeof event.composedPath === "function") {
				var path = event.composedPath();
				return path[0];
			}
			return event.target;
		}
		catch (error) {
			return event.target;
		}
	}

	var doNothing = function () { return undefined; };
	var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
	var revFormat = {
		D: doNothing,
=======

	var do_nothing = function () { return undefined; };
	var revFormat = {
		D: do_nothing,
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		F: function (dateObj, monthName, locale) {
			dateObj.setMonth(locale.months.longhand.indexOf(monthName));
		},
		G: function (dateObj, hour) {
<<<<<<< HEAD
			dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
=======
			dateObj.setHours(parseFloat(hour));
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		},
		H: function (dateObj, hour) {
			dateObj.setHours(parseFloat(hour));
		},
		J: function (dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		K: function (dateObj, amPM, locale) {
<<<<<<< HEAD
			dateObj.setHours((dateObj.getHours() % 12) +
=======
			dateObj.setHours(dateObj.getHours() % 12 +
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
		},
		M: function (dateObj, shortMonth, locale) {
			dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
		},
		S: function (dateObj, seconds) {
			dateObj.setSeconds(parseFloat(seconds));
		},
		U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
<<<<<<< HEAD
		W: function (dateObj, weekNum, locale) {
			var weekNumber = parseInt(weekNum);
			var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
			date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
			return date;
=======
		W: function (dateObj, weekNum) {
			var weekNumber = parseInt(weekNum);
			return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		},
		Y: function (dateObj, year) {
			dateObj.setFullYear(parseFloat(year));
		},
		Z: function (_, ISODate) { return new Date(ISODate); },
		d: function (dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
		h: function (dateObj, hour) {
<<<<<<< HEAD
			dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
=======
			dateObj.setHours(parseFloat(hour));
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		},
		i: function (dateObj, minutes) {
			dateObj.setMinutes(parseFloat(minutes));
		},
		j: function (dateObj, day) {
			dateObj.setDate(parseFloat(day));
		},
<<<<<<< HEAD
		l: doNothing,
=======
		l: do_nothing,
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		m: function (dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		n: function (dateObj, month) {
			dateObj.setMonth(parseFloat(month) - 1);
		},
		s: function (dateObj, seconds) {
			dateObj.setSeconds(parseFloat(seconds));
		},
<<<<<<< HEAD
		u: function (_, unixMillSeconds) {
			return new Date(parseFloat(unixMillSeconds));
		},
		w: doNothing,
=======
		w: do_nothing,
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		y: function (dateObj, year) {
			dateObj.setFullYear(2000 + parseFloat(year));
		},
	};
	var tokenRegex = {
<<<<<<< HEAD
		D: "",
		F: "",
=======
		D: "(\\w+)",
		F: "(\\w+)",
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		G: "(\\d\\d|\\d)",
		H: "(\\d\\d|\\d)",
		J: "(\\d\\d|\\d)\\w+",
		K: "",
<<<<<<< HEAD
		M: "",
=======
		M: "(\\w+)",
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		S: "(\\d\\d|\\d)",
		U: "(.+)",
		W: "(\\d\\d|\\d)",
		Y: "(\\d{4})",
		Z: "(.+)",
		d: "(\\d\\d|\\d)",
		h: "(\\d\\d|\\d)",
		i: "(\\d\\d|\\d)",
		j: "(\\d\\d|\\d)",
<<<<<<< HEAD
		l: "",
		m: "(\\d\\d|\\d)",
		n: "(\\d\\d|\\d)",
		s: "(\\d\\d|\\d)",
		u: "(.+)",
=======
		l: "(\\w+)",
		m: "(\\d\\d|\\d)",
		n: "(\\d\\d|\\d)",
		s: "(\\d\\d|\\d)",
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		w: "(\\d\\d|\\d)",
		y: "(\\d{2})",
	};
	var formats = {
<<<<<<< HEAD
		// get the date in UTC
		Z: function (date) { return date.toISOString(); },
		// weekday name, short, e.g. Thu
		D: function (date, locale, options) {
			return locale.weekdays.shorthand[formats.w(date, locale, options)];
		},
		// full month name e.g. January
		F: function (date, locale, options) {
			return monthToStr(formats.n(date, locale, options) - 1, false, locale);
		},
		// padded hour 1-12
		G: function (date, locale, options) {
			return pad(formats.h(date, locale, options));
		},
		// hours with leading zero e.g. 03
		H: function (date) { return pad(date.getHours()); },
		// day (1-30) with ordinal suffix e.g. 1st, 2nd
=======
		Z: function (date) { return date.toISOString(); },
		D: function (date, locale, options) {
			return locale.weekdays.shorthand[formats.w(date, locale, options)];
		},
		F: function (date, locale, options) {
			return monthToStr(formats.n(date, locale, options) - 1, false, locale);
		},
		G: function (date, locale, options) {
			return pad(formats.h(date, locale, options));
		},
		H: function (date) { return pad(date.getHours()); },
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		J: function (date, locale) {
			return locale.ordinal !== undefined
				? date.getDate() + locale.ordinal(date.getDate())
				: date.getDate();
		},
<<<<<<< HEAD
		// AM/PM
		K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
		// shorthand month e.g. Jan, Sep, Oct, etc
		M: function (date, locale) {
			return monthToStr(date.getMonth(), true, locale);
		},
		// seconds 00-59
		S: function (date) { return pad(date.getSeconds()); },
		// unix timestamp
=======
		K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
		M: function (date, locale) {
			return monthToStr(date.getMonth(), true, locale);
		},
		S: function (date) { return pad(date.getSeconds()); },
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		U: function (date) { return date.getTime() / 1000; },
		W: function (date, _, options) {
			return options.getWeek(date);
		},
<<<<<<< HEAD
		// full year e.g. 2016, padded (0001-9999)
		Y: function (date) { return pad(date.getFullYear(), 4); },
		// day in month, padded (01-30)
		d: function (date) { return pad(date.getDate()); },
		// hour from 1-12 (am/pm)
		h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
		// minutes, padded with leading zero e.g. 09
		i: function (date) { return pad(date.getMinutes()); },
		// day in month (1-30)
		j: function (date) { return date.getDate(); },
		// weekday name, full, e.g. Thursday
		l: function (date, locale) {
			return locale.weekdays.longhand[date.getDay()];
		},
		// padded month number (01-12)
		m: function (date) { return pad(date.getMonth() + 1); },
		// the month number (1-12)
		n: function (date) { return date.getMonth() + 1; },
		// seconds 0-59
		s: function (date) { return date.getSeconds(); },
		// Unix Milliseconds
		u: function (date) { return date.getTime(); },
		// number of the day of the week
		w: function (date) { return date.getDay(); },
		// last two digits of year e.g. 16 for 2016
		y: function (date) { return String(date.getFullYear()).substring(2); },
	};

	var createDateFormatter = function (_a) {
		var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
		return function (dateObj, frmt, overrideLocale) {
			var locale = overrideLocale || l10n;
			if (config.formatDate !== undefined && !isMobile) {
				return config.formatDate(dateObj, frmt, locale);
			}
			return frmt
				.split("")
				.map(function (c, i, arr) {
					return formats[c] && arr[i - 1] !== "\\"
						? formats[c](dateObj, locale, config)
						: c !== "\\"
							? c
							: "";
				})
				.join("");
		};
	};
	var createDateParser = function (_a) {
		var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
		return function (date, givenFormat, timeless, customLocale) {
			if (date !== 0 && !date)
				return undefined;
			var locale = customLocale || l10n;
			var parsedDate;
			var dateOrig = date;
			if (date instanceof Date)
				parsedDate = new Date(date.getTime());
			else if (typeof date !== "string" &&
				date.toFixed !== undefined // timestamp
			)
				// create a copy
				parsedDate = new Date(date);
			else if (typeof date === "string") {
				// date string
				var format = givenFormat || (config || defaults).dateFormat;
				var datestr = String(date).trim();
				if (datestr === "today") {
					parsedDate = new Date();
					timeless = true;
				}
				else if (config && config.parseDate) {
					parsedDate = config.parseDate(date, format);
				}
				else if (/Z$/.test(datestr) ||
					/GMT$/.test(datestr) // datestrings w/ timezone
				) {
					parsedDate = new Date(date);
				}
				else {
					var matched = void 0, ops = [];
					for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
						var token_1 = format[i];
						var isBackSlash = token_1 === "\\";
						var escaped = format[i - 1] === "\\" || isBackSlash;
						if (tokenRegex[token_1] && !escaped) {
							regexStr += tokenRegex[token_1];
							var match = new RegExp(regexStr).exec(date);
							if (match && (matched = true)) {
								ops[token_1 !== "Y" ? "push" : "unshift"]({
									fn: revFormat[token_1],
									val: match[++matchIndex],
								});
							}
						}
						else if (!isBackSlash)
							regexStr += "."; // don't really care
					}
					parsedDate =
						!config || !config.noCalendar
							? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
							: new Date(new Date().setHours(0, 0, 0, 0));
					ops.forEach(function (_a) {
						var fn = _a.fn, val = _a.val;
						return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
					});
					parsedDate = matched ? parsedDate : undefined;
				}
			}
			/* istanbul ignore next */
			if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
				config.errorHandler(new Error("Invalid date provided: " + dateOrig));
				return undefined;
			}
			if (timeless === true)
				parsedDate.setHours(0, 0, 0, 0);
			return parsedDate;
		};
	};
	/**
	 * Compute the difference in dates, measured in ms
	 */
	function compareDates(date1, date2, timeless) {
		if (timeless === void 0) { timeless = true; }
		if (timeless !== false) {
			return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
				new Date(date2.getTime()).setHours(0, 0, 0, 0));
		}
		return date1.getTime() - date2.getTime();
	}
	var isBetween = function (ts, ts1, ts2) {
		return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
	};
	var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
		return hours * 3600 + minutes * 60 + seconds;
	};
	var parseSeconds = function (secondsSinceMidnight) {
		var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
		return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
	};
	var duration = {
		DAY: 86400000,
	};
	function getDefaultHours(config) {
		var hours = config.defaultHour;
		var minutes = config.defaultMinute;
		var seconds = config.defaultSeconds;
		if (config.minDate !== undefined) {
			var minHour = config.minDate.getHours();
			var minMinutes = config.minDate.getMinutes();
			var minSeconds = config.minDate.getSeconds();
			if (hours < minHour) {
				hours = minHour;
			}
			if (hours === minHour && minutes < minMinutes) {
				minutes = minMinutes;
			}
			if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
				seconds = config.minDate.getSeconds();
		}
		if (config.maxDate !== undefined) {
			var maxHr = config.maxDate.getHours();
			var maxMinutes = config.maxDate.getMinutes();
			hours = Math.min(hours, maxHr);
			if (hours === maxHr)
				minutes = Math.min(maxMinutes, minutes);
			if (hours === maxHr && minutes === maxMinutes)
				seconds = config.maxDate.getSeconds();
		}
		return { hours: hours, minutes: minutes, seconds: seconds };
	}

=======
		Y: function (date) { return date.getFullYear(); },
		d: function (date) { return pad(date.getDate()); },
		h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
		i: function (date) { return pad(date.getMinutes()); },
		j: function (date) { return date.getDate(); },
		l: function (date, locale) {
			return locale.weekdays.longhand[date.getDay()];
		},
		m: function (date) { return pad(date.getMonth() + 1); },
		n: function (date) { return date.getMonth() + 1; },
		s: function (date) { return date.getSeconds(); },
		w: function (date) { return date.getDay(); },
		y: function (date) { return String(date.getFullYear()).substring(2); },
	};

>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
	if (typeof Object.assign !== "function") {
		Object.assign = function (target) {
			var args = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				args[_i - 1] = arguments[_i];
			}
			if (!target) {
				throw TypeError("Cannot convert undefined or null to object");
			}
			var _loop_1 = function (source) {
				if (source) {
					Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
				}
			};
			for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
				var source = args_1[_a];
				_loop_1(source);
			}
			return target;
		};
	}

<<<<<<< HEAD
	var DEBOUNCED_CHANGE_MS = 300;
	function FlatpickrInstance(element, instanceConfig) {
		var self = {
			config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
			l10n: english,
		};
		self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
		self._handlers = [];
		self.pluginElements = [];
		self.loadedPlugins = [];
		self._bind = bind;
		self._setHoursFromDate = setHoursFromDate;
		self._positionCalendar = positionCalendar;
=======
	function FlatpickrInstance(element, instanceConfig) {
		var self = {};
		self.parseDate = parseDate;
		self.formatDate = formatDate;
		self._animationLoop = [];
		self._handlers = [];
		self._bind = bind;
		self._setHoursFromDate = setHoursFromDate;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		self.changeMonth = changeMonth;
		self.changeYear = changeYear;
		self.clear = clear;
		self.close = close;
<<<<<<< HEAD
		self.onMouseOver = onMouseOver;
		self._createElement = createElement;
		self.createDay = createDay;
		self.destroy = destroy;
		self.isEnabled = isEnabled;
		self.jumpToDate = jumpToDate;
		self.updateValue = updateValue;
=======
		self._createElement = createElement;
		self.destroy = destroy;
		self.isEnabled = isEnabled;
		self.jumpToDate = jumpToDate;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		self.open = open;
		self.redraw = redraw;
		self.set = set;
		self.setDate = setDate;
		self.toggle = toggle;
		function setupHelperFunctions() {
			self.utils = {
				getDaysInMonth: function (month, yr) {
					if (month === void 0) { month = self.currentMonth; }
					if (yr === void 0) { yr = self.currentYear; }
					if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
						return 29;
					return self.l10n.daysInMonth[month];
				},
			};
		}
		function init() {
			self.element = self.input = element;
			self.isOpen = false;
			parseConfig();
			setupLocale();
			setupInputs();
			setupDates();
			setupHelperFunctions();
			if (!self.isMobile)
				build();
			bindEvents();
			if (self.selectedDates.length || self.config.noCalendar) {
				if (self.config.enableTime) {
<<<<<<< HEAD
					setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
				}
				updateValue(false);
			}
			setCalendarWidth();
			var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
			/* TODO: investigate this further

			  Currently, there is weird positioning behavior in safari causing pages
			  to scroll up. https://github.com/chmln/flatpickr/issues/563

			  However, most browsers are not Safari and positioning is expensive when used
			  in scale. https://github.com/chmln/flatpickr/issues/1096
			*/
			if (!self.isMobile && isSafari) {
				positionCalendar();
			}
			triggerEvent("onReady");
		}
		function getClosestActiveElement() {
			var _a;
			return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
				.activeElement || document.activeElement);
		}
		function bindToInstance(fn) {
			return fn.bind(self);
		}
		function setCalendarWidth() {
			var config = self.config;
			if (config.weekNumbers === false && config.showMonths === 1) {
				return;
			}
			else if (config.noCalendar !== true) {
				window.requestAnimationFrame(function () {
					if (self.calendarContainer !== undefined) {
						self.calendarContainer.style.visibility = "hidden";
						self.calendarContainer.style.display = "block";
					}
					if (self.daysContainer !== undefined) {
						var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
						self.daysContainer.style.width = daysWidth + "px";
						self.calendarContainer.style.width =
							daysWidth +
							(self.weekWrapper !== undefined
								? self.weekWrapper.offsetWidth
								: 0) +
							"px";
						self.calendarContainer.style.removeProperty("visibility");
						self.calendarContainer.style.removeProperty("display");
					}
				});
			}
		}
		/**
		 * The handler for all events targeting the time inputs
		 */
		function updateTime(e) {
			if (self.selectedDates.length === 0) {
				var defaultDate = self.config.minDate === undefined ||
				compareDates(new Date(), self.config.minDate) >= 0
					? new Date()
					: new Date(self.config.minDate.getTime());
				var defaults = getDefaultHours(self.config);
				defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
				self.selectedDates = [defaultDate];
				self.latestSelectedDateObj = defaultDate;
			}
			if (e !== undefined && e.type !== "blur") {
				timeWrapper(e);
			}
			var prevValue = self._input.value;
			setHoursFromInputs();
			updateValue();
			if (self._input.value !== prevValue) {
				self._debouncedChange();
			}
		}
		function ampm2military(hour, amPM) {
			return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
=======
					setHoursFromDate(self.config.noCalendar
						? self.latestSelectedDateObj || self.config.minDate
						: undefined);
				}
				updateValue(false);
			}
			self.showTimeInput =
				self.selectedDates.length > 0 || self.config.noCalendar;
			if (self.weekWrapper !== undefined && self.daysContainer !== undefined) {
				self.calendarContainer.style.width =
					self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
			}
			if (!self.isMobile)
				positionCalendar();
			triggerEvent("onReady");
		}
		function bindToInstance(fn) {
			return fn.bind(self);
		}
		function updateTime(e) {
			if (self.config.noCalendar && self.selectedDates.length === 0) {
				var minDate = self.config.minDate;
				self.setDate(new Date().setHours(!minDate ? self.config.defaultHour : minDate.getHours(), !minDate ? self.config.defaultMinute : minDate.getMinutes(), !minDate || !self.config.enableSeconds
					? self.config.defaultSeconds
					: minDate.getSeconds()), false);
				setHoursFromInputs();
				updateValue();
			}
			timeWrapper(e);
			if (self.selectedDates.length === 0)
				return;
			if (!self.minDateHasTime ||
				e.type !== "input" ||
				e.target.value.length >= 2) {
				setHoursFromInputs();
				updateValue();
			}
			else {
				setTimeout(function () {
					setHoursFromInputs();
					updateValue();
				}, 1000);
			}
		}
		function ampm2military(hour, amPM) {
			return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		}
		function military2ampm(hour) {
			switch (hour % 24) {
				case 0:
				case 12:
					return 12;
				default:
					return hour % 12;
			}
		}
<<<<<<< HEAD
		/**
		 * Syncs the selected date object time with user's time input
		 */
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		function setHoursFromInputs() {
			if (self.hourElement === undefined || self.minuteElement === undefined)
				return;
			var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
				? (parseInt(self.secondElement.value, 10) || 0) % 60
				: 0;
<<<<<<< HEAD
			if (self.amPM !== undefined) {
				hours = ampm2military(hours, self.amPM.textContent);
			}
			var limitMinHours = self.config.minTime !== undefined ||
				(self.config.minDate &&
					self.minDateHasTime &&
					self.latestSelectedDateObj &&
					compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
					0);
			var limitMaxHours = self.config.maxTime !== undefined ||
				(self.config.maxDate &&
					self.maxDateHasTime &&
					self.latestSelectedDateObj &&
					compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
					0);
			if (self.config.maxTime !== undefined &&
				self.config.minTime !== undefined &&
				self.config.minTime > self.config.maxTime) {
				var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
				var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
				var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
				if (currentTime > maxBound && currentTime < minBound) {
					var result = parseSeconds(minBound);
					hours = result[0];
					minutes = result[1];
					seconds = result[2];
				}
			}
			else {
				if (limitMaxHours) {
					var maxTime = self.config.maxTime !== undefined
						? self.config.maxTime
						: self.config.maxDate;
					hours = Math.min(hours, maxTime.getHours());
					if (hours === maxTime.getHours())
						minutes = Math.min(minutes, maxTime.getMinutes());
					if (minutes === maxTime.getMinutes())
						seconds = Math.min(seconds, maxTime.getSeconds());
				}
				if (limitMinHours) {
					var minTime = self.config.minTime !== undefined
						? self.config.minTime
						: self.config.minDate;
					hours = Math.max(hours, minTime.getHours());
					if (hours === minTime.getHours() && minutes < minTime.getMinutes())
						minutes = minTime.getMinutes();
					if (minutes === minTime.getMinutes())
						seconds = Math.max(seconds, minTime.getSeconds());
				}
			}
			setHours(hours, minutes, seconds);
		}
		/**
		 * Syncs time input values with a date
		 */
		function setHoursFromDate(dateObj) {
			var date = dateObj || self.latestSelectedDateObj;
			if (date && date instanceof Date) {
				setHours(date.getHours(), date.getMinutes(), date.getSeconds());
			}
		}
		/**
		 * Sets the hours, minutes, and optionally seconds
		 * of the latest selected date object and the
		 * corresponding time inputs
		 * @param {Number} hours the hour. whether its military
		 *                 or am-pm gets inferred from config
		 * @param {Number} minutes the minutes
		 * @param {Number} seconds the seconds (optional)
		 */
=======
			if (self.amPM !== undefined)
				hours = ampm2military(hours, self.amPM.textContent);
			if (self.config.minDate &&
				self.minDateHasTime &&
				self.latestSelectedDateObj &&
				compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {
				hours = Math.max(hours, self.config.minDate.getHours());
				if (hours === self.config.minDate.getHours())
					minutes = Math.max(minutes, self.config.minDate.getMinutes());
			}
			if (self.config.maxDate &&
				self.maxDateHasTime &&
				self.latestSelectedDateObj &&
				compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
				hours = Math.min(hours, self.config.maxDate.getHours());
				if (hours === self.config.maxDate.getHours())
					minutes = Math.min(minutes, self.config.maxDate.getMinutes());
			}
			setHours(hours, minutes, seconds);
		}
		function setHoursFromDate(dateObj) {
			var date = dateObj || self.latestSelectedDateObj;
			if (date)
				setHours(date.getHours(), date.getMinutes(), date.getSeconds());
		}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		function setHours(hours, minutes, seconds) {
			if (self.latestSelectedDateObj !== undefined) {
				self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
			}
			if (!self.hourElement || !self.minuteElement || self.isMobile)
				return;
			self.hourElement.value = pad(!self.config.time_24hr
<<<<<<< HEAD
				? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
=======
				? (12 + hours) % 12 + 12 * int(hours % 12 === 0)
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				: hours);
			self.minuteElement.value = pad(minutes);
			if (self.amPM !== undefined)
				self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
			if (self.secondElement !== undefined)
				self.secondElement.value = pad(seconds);
		}
<<<<<<< HEAD
		/**
		 * Handles the year input and incrementing events
		 * @param {Event} event the keyup or increment event
		 */
		function onYearInput(event) {
			var eventTarget = getEventTarget(event);
			var year = parseInt(eventTarget.value) + (event.delta || 0);
			if (year / 1000 > 1 ||
				(event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
				changeYear(year);
			}
		}
		/**
		 * Essentially addEventListener + tracking
		 * @param {Element} element the element to addEventListener to
		 * @param {String} event the event name
		 * @param {Function} handler the event handler
		 */
		function bind(element, event, handler, options) {
			if (event instanceof Array)
				return event.forEach(function (ev) { return bind(element, ev, handler, options); });
			if (element instanceof Array)
				return element.forEach(function (el) { return bind(el, event, handler, options); });
			element.addEventListener(event, handler, options);
			self._handlers.push({
				remove: function () { return element.removeEventListener(event, handler, options); },
			});
=======
		function onYearInput(event) {
			var year = parseInt(event.target.value) + (event.delta || 0);
			if (year.toString().length === 4 || event.key === "Enter") {
				self.currentYearElement.blur();
				if (!/[^\d]/.test(year.toString()))
					changeYear(year);
			}
		}
		function bind(element, event, handler) {
			if (event instanceof Array)
				return event.forEach(function (ev) { return bind(element, ev, handler); });
			if (element instanceof Array)
				return element.forEach(function (el) { return bind(el, event, handler); });
			element.addEventListener(event, handler);
			self._handlers.push({ element: element, event: event, handler: handler });
		}
		function onClick(handler) {
			return function (evt) {
				evt.which === 1 && handler(evt);
			};
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		}
		function triggerChange() {
			triggerEvent("onChange");
		}
<<<<<<< HEAD
		/**
		 * Adds all the necessary event listeners
		 */
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		function bindEvents() {
			if (self.config.wrap) {
				["open", "close", "toggle", "clear"].forEach(function (evt) {
					Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
						return bind(el, "click", self[evt]);
					});
				});
			}
			if (self.isMobile) {
				setupMobile();
				return;
			}
			var debouncedResize = debounce(onResize, 50);
<<<<<<< HEAD
			self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
			if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
				bind(self.daysContainer, "mouseover", function (e) {
					if (self.config.mode === "range")
						onMouseOver(getEventTarget(e));
				});
			bind(self._input, "keydown", onKeyDown);
			if (self.calendarContainer !== undefined) {
				bind(self.calendarContainer, "keydown", onKeyDown);
			}
			if (!self.config.inline && !self.config.static)
				bind(window, "resize", debouncedResize);
			if (window.ontouchstart !== undefined)
				bind(window.document, "touchstart", documentClick);
			else
				bind(window.document, "mousedown", documentClick);
			bind(window.document, "focus", documentClick, { capture: true });
			if (self.config.clickOpens === true) {
				bind(self._input, "focus", self.open);
				bind(self._input, "click", self.open);
			}
			if (self.daysContainer !== undefined) {
				bind(self.monthNav, "click", onMonthNavClick);
				bind(self.monthNav, ["keyup", "increment"], onYearInput);
				bind(self.daysContainer, "click", selectDate);
=======
			self._debouncedChange = debounce(triggerChange, 300);
			if (self.config.mode === "range" &&
				self.daysContainer &&
				!/iPhone|iPad|iPod/i.test(navigator.userAgent))
				bind(self.daysContainer, "mouseover", function (e) {
					return onMouseOver(e.target);
				});
			bind(window.document.body, "keydown", onKeyDown);
			if (!self.config.static)
				bind(self._input, "keydown", onKeyDown);
			if (!self.config.inline && !self.config.static)
				bind(window, "resize", debouncedResize);
			if (window.ontouchstart !== undefined)
				bind(window.document.body, "touchstart", documentClick);
			bind(window.document.body, "mousedown", onClick(documentClick));
			bind(self._input, "blur", documentClick);
			if (self.config.clickOpens === true) {
				bind(self._input, "focus", self.open);
				bind(self._input, "mousedown", onClick(self.open));
			}
			if (self.daysContainer !== undefined) {
				self.monthNav.addEventListener("wheel", function (e) { return e.preventDefault(); });
				bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
				bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
				bind(self.monthNav, ["keyup", "increment"], onYearInput);
				bind(self.daysContainer, "mousedown", onClick(selectDate));
				if (self.config.animate) {
					bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
					bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
				}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			if (self.timeContainer !== undefined &&
				self.minuteElement !== undefined &&
				self.hourElement !== undefined) {
				var selText = function (e) {
<<<<<<< HEAD
					return getEventTarget(e).select();
				};
				bind(self.timeContainer, ["increment"], updateTime);
				bind(self.timeContainer, "blur", updateTime, { capture: true });
				bind(self.timeContainer, "click", timeIncrement);
=======
					return e.target.select();
				};
				bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
				bind(self.timeContainer, "mousedown", onClick(timeIncrement));
				bind(self.timeContainer, ["wheel", "increment"], self._debouncedChange);
				bind(self.timeContainer, "input", triggerChange);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
				if (self.secondElement !== undefined)
					bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
				if (self.amPM !== undefined) {
<<<<<<< HEAD
					bind(self.amPM, "click", function (e) {
						updateTime(e);
					});
				}
			}
			if (self.config.allowInput) {
				bind(self._input, "blur", onBlur);
			}
		}
		/**
		 * Set the calendar view to a particular date.
		 * @param {Date} jumpDate the date to set the view to
		 * @param {boolean} triggerChange if change events should be triggered
		 */
		function jumpToDate(jumpDate, triggerChange) {
			var jumpTo = jumpDate !== undefined
				? self.parseDate(jumpDate)
=======
					bind(self.amPM, "mousedown", onClick(function (e) {
						updateTime(e);
						triggerChange();
					}));
				}
			}
		}
		function processPostDayAnimation() {
			self._animationLoop.forEach(function (f) { return f(); });
			self._animationLoop = [];
		}
		function animateDays(e) {
			if (self.daysContainer && self.daysContainer.childNodes.length > 1) {
				switch (e.animationName) {
					case "fpSlideLeft":
						self.daysContainer.lastChild &&
						self.daysContainer.lastChild.classList.remove("slideLeftNew");
						self.daysContainer.removeChild(self.daysContainer
							.firstChild);
						self.days = self.daysContainer.firstChild;
						processPostDayAnimation();
						break;
					case "fpSlideRight":
						self.daysContainer.firstChild &&
						self.daysContainer.firstChild.classList.remove("slideRightNew");
						self.daysContainer.removeChild(self.daysContainer
							.lastChild);
						self.days = self.daysContainer.firstChild;
						processPostDayAnimation();
						break;
					default:
						break;
				}
			}
		}
		function animateMonths(e) {
			switch (e.animationName) {
				case "fpSlideLeftNew":
				case "fpSlideRightNew":
					self.navigationCurrentMonth.classList.remove("slideLeftNew");
					self.navigationCurrentMonth.classList.remove("slideRightNew");
					var nav = self.navigationCurrentMonth;
					while (nav.nextSibling &&
					/curr/.test(nav.nextSibling.className))
						self.monthNav.removeChild(nav.nextSibling);
					while (nav.previousSibling &&
					/curr/.test(nav.previousSibling.className))
						self.monthNav.removeChild(nav.previousSibling);
					self.oldCurMonth = undefined;
					break;
			}
		}
		function jumpToDate(jumpDate) {
			var jumpTo = jumpDate !== undefined
				? parseDate(jumpDate)
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				: self.latestSelectedDateObj ||
				(self.config.minDate && self.config.minDate > self.now
					? self.config.minDate
					: self.config.maxDate && self.config.maxDate < self.now
						? self.config.maxDate
						: self.now);
<<<<<<< HEAD
			var oldYear = self.currentYear;
			var oldMonth = self.currentMonth;
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			try {
				if (jumpTo !== undefined) {
					self.currentYear = jumpTo.getFullYear();
					self.currentMonth = jumpTo.getMonth();
				}
			}
			catch (e) {
<<<<<<< HEAD
				/* istanbul ignore next */
				e.message = "Invalid date supplied: " + jumpTo;
				self.config.errorHandler(e);
			}
			if (triggerChange && self.currentYear !== oldYear) {
				triggerEvent("onYearChange");
				buildMonthSwitch();
			}
			if (triggerChange &&
				(self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
				triggerEvent("onMonthChange");
			}
			self.redraw();
		}
		/**
		 * The up/down arrow handler for time inputs
		 * @param {Event} e the click event
		 */
		function timeIncrement(e) {
			var eventTarget = getEventTarget(e);
			if (~eventTarget.className.indexOf("arrow"))
				incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
		}
		/**
		 * Increments/decrements the value of input associ-
		 * ated with the up/down arrow by dispatching an
		 * "increment" event on the input.
		 *
		 * @param {Event} e the click event
		 * @param {Number} delta the diff (usually 1 or -1)
		 * @param {Element} inputElem the input element
		 */
		function incrementNumInput(e, delta, inputElem) {
			var target = e && getEventTarget(e);
=======
				e.message = "Invalid date supplied: " + jumpTo;
				self.config.errorHandler(e);
			}
			self.redraw();
		}
		function timeIncrement(e) {
			if (~e.target.className.indexOf("arrow"))
				incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
		}
		function incrementNumInput(e, delta, inputElem) {
			var target = e && e.target;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			var input = inputElem ||
				(target && target.parentNode && target.parentNode.firstChild);
			var event = createEvent("increment");
			event.delta = delta;
			input && input.dispatchEvent(event);
		}
		function build() {
			var fragment = window.document.createDocumentFragment();
			self.calendarContainer = createElement("div", "flatpickr-calendar");
			self.calendarContainer.tabIndex = -1;
			if (!self.config.noCalendar) {
				fragment.appendChild(buildMonthNav());
				self.innerContainer = createElement("div", "flatpickr-innerContainer");
				if (self.config.weekNumbers) {
					var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
					self.innerContainer.appendChild(weekWrapper);
					self.weekNumbers = weekNumbers;
					self.weekWrapper = weekWrapper;
				}
				self.rContainer = createElement("div", "flatpickr-rContainer");
				self.rContainer.appendChild(buildWeekdays());
				if (!self.daysContainer) {
					self.daysContainer = createElement("div", "flatpickr-days");
					self.daysContainer.tabIndex = -1;
				}
				buildDays();
				self.rContainer.appendChild(self.daysContainer);
				self.innerContainer.appendChild(self.rContainer);
				fragment.appendChild(self.innerContainer);
			}
			if (self.config.enableTime) {
				fragment.appendChild(buildTime());
			}
			toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
<<<<<<< HEAD
			toggleClass(self.calendarContainer, "animate", self.config.animate === true);
			toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
			self.calendarContainer.appendChild(fragment);
			var customAppend = self.config.appendTo !== undefined &&
				self.config.appendTo.nodeType !== undefined;
=======
			toggleClass(self.calendarContainer, "animate", self.config.animate);
			self.calendarContainer.appendChild(fragment);
			var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			if (self.config.inline || self.config.static) {
				self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
				if (self.config.inline) {
					if (!customAppend && self.element.parentNode)
						self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
					else if (self.config.appendTo !== undefined)
						self.config.appendTo.appendChild(self.calendarContainer);
				}
				if (self.config.static) {
					var wrapper = createElement("div", "flatpickr-wrapper");
					if (self.element.parentNode)
						self.element.parentNode.insertBefore(wrapper, self.element);
					wrapper.appendChild(self.element);
					if (self.altInput)
						wrapper.appendChild(self.altInput);
					wrapper.appendChild(self.calendarContainer);
				}
			}
			if (!self.config.static && !self.config.inline)
				(self.config.appendTo !== undefined
					? self.config.appendTo
					: window.document.body).appendChild(self.calendarContainer);
		}
<<<<<<< HEAD
		function createDay(className, date, _dayNumber, i) {
			var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
			dayElement.dateObj = date;
			dayElement.$i = i;
			dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
			if (className.indexOf("hidden") === -1 &&
				compareDates(date, self.now) === 0) {
				self.todayDateElem = dayElement;
				dayElement.classList.add("today");
				dayElement.setAttribute("aria-current", "date");
=======
		function createDay(className, date, dayNumber, i) {
			var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
			dayElement.dateObj = date;
			dayElement.$i = i;
			dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
			if (compareDates(date, self.now) === 0) {
				self.todayDateElem = dayElement;
				dayElement.classList.add("today");
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			if (dateIsEnabled) {
				dayElement.tabIndex = -1;
				if (isDateSelected(date)) {
					dayElement.classList.add("selected");
					self.selectedDateElem = dayElement;
					if (self.config.mode === "range") {
						toggleClass(dayElement, "startRange", self.selectedDates[0] &&
<<<<<<< HEAD
							compareDates(date, self.selectedDates[0], true) === 0);
						toggleClass(dayElement, "endRange", self.selectedDates[1] &&
							compareDates(date, self.selectedDates[1], true) === 0);
						if (className === "nextMonthDay")
							dayElement.classList.add("inRange");
=======
							compareDates(date, self.selectedDates[0]) === 0);
						toggleClass(dayElement, "endRange", self.selectedDates[1] &&
							compareDates(date, self.selectedDates[1]) === 0);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
					}
				}
			}
			else {
<<<<<<< HEAD
				dayElement.classList.add("flatpickr-disabled");
=======
				dayElement.classList.add("disabled");
				if (self.selectedDates[0] &&
					self.minRangeDate &&
					date > self.minRangeDate &&
					date < self.selectedDates[0])
					self.minRangeDate = date;
				else if (self.selectedDates[0] &&
					self.maxRangeDate &&
					date < self.maxRangeDate &&
					date > self.selectedDates[0])
					self.maxRangeDate = date;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			if (self.config.mode === "range") {
				if (isDateInRange(date) && !isDateSelected(date))
					dayElement.classList.add("inRange");
<<<<<<< HEAD
			}
			if (self.weekNumbers &&
				self.config.showMonths === 1 &&
				className !== "prevMonthDay" &&
				i % 7 === 6) {
				self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
=======
				if (self.selectedDates.length === 1 &&
					self.minRangeDate !== undefined &&
					self.maxRangeDate !== undefined &&
					(date < self.minRangeDate || date > self.maxRangeDate))
					dayElement.classList.add("notAllowed");
			}
			if (self.weekNumbers &&
				className !== "prevMonthDay" &&
				dayNumber % 7 === 1) {
				self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" +
					self.config.getWeek(date) +
					"</span>");
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			triggerEvent("onDayCreate", dayElement);
			return dayElement;
		}
<<<<<<< HEAD
		function focusOnDayElem(targetNode) {
			targetNode.focus();
			if (self.config.mode === "range")
				onMouseOver(targetNode);
		}
		function getFirstAvailableDay(delta) {
			var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
			var endMonth = delta > 0 ? self.config.showMonths : -1;
			for (var m = startMonth; m != endMonth; m += delta) {
				var month = self.daysContainer.children[m];
				var startIndex = delta > 0 ? 0 : month.children.length - 1;
				var endIndex = delta > 0 ? month.children.length : -1;
				for (var i = startIndex; i != endIndex; i += delta) {
					var c = month.children[i];
					if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
						return c;
				}
			}
			return undefined;
		}
		function getNextAvailableDay(current, delta) {
			var givenMonth = current.className.indexOf("Month") === -1
				? current.dateObj.getMonth()
				: self.currentMonth;
			var endMonth = delta > 0 ? self.config.showMonths : -1;
			var loopDelta = delta > 0 ? 1 : -1;
			for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
				var month = self.daysContainer.children[m];
				var startIndex = givenMonth - self.currentMonth === m
					? current.$i + delta
					: delta < 0
						? month.children.length - 1
						: 0;
				var numMonthDays = month.children.length;
				for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
					var c = month.children[i];
					if (c.className.indexOf("hidden") === -1 &&
						isEnabled(c.dateObj) &&
						Math.abs(current.$i - i) >= Math.abs(delta))
						return focusOnDayElem(c);
				}
			}
			self.changeMonth(loopDelta);
			focusOnDay(getFirstAvailableDay(loopDelta), 0);
			return undefined;
		}
		function focusOnDay(current, offset) {
			var activeElement = getClosestActiveElement();
			var dayFocused = isInView(activeElement || document.body);
			var startElem = current !== undefined
				? current
				: dayFocused
					? activeElement
					: self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
						? self.selectedDateElem
						: self.todayDateElem !== undefined && isInView(self.todayDateElem)
							? self.todayDateElem
							: getFirstAvailableDay(offset > 0 ? 1 : -1);
			if (startElem === undefined) {
				self._input.focus();
			}
			else if (!dayFocused) {
				focusOnDayElem(startElem);
			}
			else {
				getNextAvailableDay(startElem, offset);
			}
		}
		function buildMonthDays(year, month) {
			var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
			var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
			var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
			var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
			// prepend days from the ending of previous month
			for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
				days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
			}
			// Start at 1 since there is no 0th day
			for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
				days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
			}
			// append days from the next month
			for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
			(self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
				days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
			}
			//updateNavigationCurrentMonth();
			var dayContainer = createElement("div", "dayContainer");
			dayContainer.appendChild(days);
			return dayContainer;
		}
		function buildDays() {
			if (self.daysContainer === undefined) {
				return;
			}
			clearNode(self.daysContainer);
			// TODO: week numbers for each month
			if (self.weekNumbers)
				clearNode(self.weekNumbers);
			var frag = document.createDocumentFragment();
			for (var i = 0; i < self.config.showMonths; i++) {
				var d = new Date(self.currentYear, self.currentMonth, 1);
				d.setMonth(self.currentMonth + i);
				frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
			}
			self.daysContainer.appendChild(frag);
			self.days = self.daysContainer.firstChild;
			if (self.config.mode === "range" && self.selectedDates.length === 1) {
				onMouseOver();
			}
		}
		function buildMonthSwitch() {
			if (self.config.showMonths > 1 ||
				self.config.monthSelectorType !== "dropdown")
				return;
			var shouldBuildMonth = function (month) {
				if (self.config.minDate !== undefined &&
					self.currentYear === self.config.minDate.getFullYear() &&
					month < self.config.minDate.getMonth()) {
					return false;
				}
				return !(self.config.maxDate !== undefined &&
					self.currentYear === self.config.maxDate.getFullYear() &&
					month > self.config.maxDate.getMonth());
			};
			self.monthsDropdownContainer.tabIndex = -1;
			self.monthsDropdownContainer.innerHTML = "";
			for (var i = 0; i < 12; i++) {
				if (!shouldBuildMonth(i))
					continue;
				var month = createElement("option", "flatpickr-monthDropdown-month");
				month.value = new Date(self.currentYear, i).getMonth().toString();
				month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
				month.tabIndex = -1;
				if (self.currentMonth === i) {
					month.selected = true;
				}
				self.monthsDropdownContainer.appendChild(month);
			}
		}
		function buildMonth() {
			var container = createElement("div", "flatpickr-month");
			var monthNavFragment = window.document.createDocumentFragment();
			var monthElement;
			if (self.config.showMonths > 1 ||
				self.config.monthSelectorType === "static") {
				monthElement = createElement("span", "cur-month");
			}
			else {
				self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
				self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
				bind(self.monthsDropdownContainer, "change", function (e) {
					var target = getEventTarget(e);
					var selectedMonth = parseInt(target.value, 10);
					self.changeMonth(selectedMonth - self.currentMonth);
					triggerEvent("onMonthChange");
				});
				buildMonthSwitch();
				monthElement = self.monthsDropdownContainer;
			}
			var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
			var yearElement = yearInput.getElementsByTagName("input")[0];
			yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
			if (self.config.minDate) {
				yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
			}
			if (self.config.maxDate) {
				yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
				yearElement.disabled =
					!!self.config.minDate &&
					self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
			}
			var currentMonth = createElement("div", "flatpickr-current-month");
			currentMonth.appendChild(monthElement);
			currentMonth.appendChild(yearInput);
			monthNavFragment.appendChild(currentMonth);
			container.appendChild(monthNavFragment);
			return {
				container: container,
				yearElement: yearElement,
				monthElement: monthElement,
			};
		}
		function buildMonths() {
			clearNode(self.monthNav);
			self.monthNav.appendChild(self.prevMonthNav);
			if (self.config.showMonths) {
				self.yearElements = [];
				self.monthElements = [];
			}
			for (var m = self.config.showMonths; m--;) {
				var month = buildMonth();
				self.yearElements.push(month.yearElement);
				self.monthElements.push(month.monthElement);
				self.monthNav.appendChild(month.container);
			}
			self.monthNav.appendChild(self.nextMonthNav);
		}
		function buildMonthNav() {
			self.monthNav = createElement("div", "flatpickr-months");
			self.yearElements = [];
			self.monthElements = [];
			self.prevMonthNav = createElement("span", "flatpickr-prev-month");
			self.prevMonthNav.innerHTML = self.config.prevArrow;
			self.nextMonthNav = createElement("span", "flatpickr-next-month");
			self.nextMonthNav.innerHTML = self.config.nextArrow;
			buildMonths();
			Object.defineProperty(self, "_hidePrevMonthArrow", {
				get: function () { return self.__hidePrevMonthArrow; },
				set: function (bool) {
					if (self.__hidePrevMonthArrow !== bool) {
						toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
						self.__hidePrevMonthArrow = bool;
					}
=======
		function focusOnDay(currentIndex, offset) {
			var newIndex = currentIndex + offset || 0, targetNode = (currentIndex !== undefined
				? self.days.childNodes[newIndex]
				: self.selectedDateElem ||
				self.todayDateElem ||
				self.days.childNodes[0]);
			var focus = function () {
				targetNode = targetNode || self.days.childNodes[newIndex];
				targetNode.focus();
				if (self.config.mode === "range")
					onMouseOver(targetNode);
			};
			if (targetNode === undefined && offset !== 0) {
				if (offset > 0) {
					self.changeMonth(1, true, undefined, true);
					newIndex = newIndex % 42;
				}
				else if (offset < 0) {
					self.changeMonth(-1, true, undefined, true);
					newIndex += 42;
				}
				return afterDayAnim(focus);
			}
			focus();
		}
		function afterDayAnim(fn) {
			self.config.animate === true ? self._animationLoop.push(fn) : fn();
		}
		function buildDays(delta) {
			if (self.daysContainer === undefined) {
				return;
			}
			var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() -
				self.l10n.firstDayOfWeek +
				7) %
				7, isRangeMode = self.config.mode === "range";
			var prevMonthDays = self.utils.getDaysInMonth((self.currentMonth - 1 + 12) % 12);
			var daysInMonth = self.utils.getDaysInMonth(), days = window.document.createDocumentFragment();
			var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
			if (self.weekNumbers && self.weekNumbers.firstChild)
				self.weekNumbers.textContent = "";
			if (isRangeMode) {
				self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
				self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
			}
			for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
				days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
			}
			for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
				days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
			}
			for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
				days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
			}
			if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
				self._hidePrevMonthArrow =
					self._hidePrevMonthArrow ||
					(!!self.minRangeDate &&
						self.minRangeDate > days.childNodes[0].dateObj);
				self._hideNextMonthArrow =
					self._hideNextMonthArrow ||
					(!!self.maxRangeDate &&
						self.maxRangeDate <
						new Date(self.currentYear, self.currentMonth + 1, 1));
			}
			else
				updateNavigationCurrentMonth();
			var dayContainer = createElement("div", "dayContainer");
			dayContainer.appendChild(days);
			if (!self.config.animate || delta === undefined)
				clearNode(self.daysContainer);
			else {
				while (self.daysContainer.childNodes.length > 1)
					self.daysContainer.removeChild(self.daysContainer.firstChild);
			}
			if (delta && delta >= 0)
				self.daysContainer.appendChild(dayContainer);
			else
				self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);
			self.days = self.daysContainer.childNodes[0];
		}
		function buildMonthNav() {
			var monthNavFragment = window.document.createDocumentFragment();
			self.monthNav = createElement("div", "flatpickr-month");
			self.prevMonthNav = createElement("span", "flatpickr-prev-month");
			self.prevMonthNav.innerHTML = self.config.prevArrow;
			self.currentMonthElement = createElement("span", "cur-month");
			self.currentMonthElement.title = self.l10n.scrollTitle;
			var yearInput = createNumberInput("cur-year");
			self.currentYearElement = yearInput.childNodes[0];
			self.currentYearElement.title = self.l10n.scrollTitle;
			if (self.config.minDate)
				self.currentYearElement.min = self.config.minDate
					.getFullYear()
					.toString();
			if (self.config.maxDate) {
				self.currentYearElement.max = self.config.maxDate
					.getFullYear()
					.toString();
				self.currentYearElement.disabled =
					!!self.config.minDate &&
					self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
			}
			self.nextMonthNav = createElement("span", "flatpickr-next-month");
			self.nextMonthNav.innerHTML = self.config.nextArrow;
			self.navigationCurrentMonth = createElement("div", "flatpickr-current-month");
			self.navigationCurrentMonth.appendChild(self.currentMonthElement);
			self.navigationCurrentMonth.appendChild(yearInput);
			monthNavFragment.appendChild(self.prevMonthNav);
			monthNavFragment.appendChild(self.navigationCurrentMonth);
			monthNavFragment.appendChild(self.nextMonthNav);
			self.monthNav.appendChild(monthNavFragment);
			Object.defineProperty(self, "_hidePrevMonthArrow", {
				get: function () { return self.__hidePrevMonthArrow; },
				set: function (bool) {
					if (self.__hidePrevMonthArrow !== bool)
						self.prevMonthNav.style.display = bool ? "none" : "block";
					self.__hidePrevMonthArrow = bool;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				},
			});
			Object.defineProperty(self, "_hideNextMonthArrow", {
				get: function () { return self.__hideNextMonthArrow; },
				set: function (bool) {
<<<<<<< HEAD
					if (self.__hideNextMonthArrow !== bool) {
						toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
						self.__hideNextMonthArrow = bool;
					}
				},
			});
			self.currentYearElement = self.yearElements[0];
=======
					if (self.__hideNextMonthArrow !== bool)
						self.nextMonthNav.style.display = bool ? "none" : "block";
					self.__hideNextMonthArrow = bool;
				},
			});
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			updateNavigationCurrentMonth();
			return self.monthNav;
		}
		function buildTime() {
			self.calendarContainer.classList.add("hasTime");
			if (self.config.noCalendar)
				self.calendarContainer.classList.add("noCalendar");
<<<<<<< HEAD
			var defaults = getDefaultHours(self.config);
			self.timeContainer = createElement("div", "flatpickr-time");
			self.timeContainer.tabIndex = -1;
			var separator = createElement("span", "flatpickr-time-separator", ":");
			var hourInput = createNumberInput("flatpickr-hour", {
				"aria-label": self.l10n.hourAriaLabel,
			});
			self.hourElement = hourInput.getElementsByTagName("input")[0];
			var minuteInput = createNumberInput("flatpickr-minute", {
				"aria-label": self.l10n.minuteAriaLabel,
			});
			self.minuteElement = minuteInput.getElementsByTagName("input")[0];
=======
			self.timeContainer = createElement("div", "flatpickr-time");
			self.timeContainer.tabIndex = -1;
			var separator = createElement("span", "flatpickr-time-separator", ":");
			var hourInput = createNumberInput("flatpickr-hour");
			self.hourElement = hourInput.childNodes[0];
			var minuteInput = createNumberInput("flatpickr-minute");
			self.minuteElement = minuteInput.childNodes[0];
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
			self.hourElement.value = pad(self.latestSelectedDateObj
				? self.latestSelectedDateObj.getHours()
				: self.config.time_24hr
<<<<<<< HEAD
					? defaults.hours
					: military2ampm(defaults.hours));
			self.minuteElement.value = pad(self.latestSelectedDateObj
				? self.latestSelectedDateObj.getMinutes()
				: defaults.minutes);
			self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
			self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
			self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
			self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
			self.hourElement.setAttribute("maxlength", "2");
			self.minuteElement.setAttribute("min", "0");
			self.minuteElement.setAttribute("max", "59");
			self.minuteElement.setAttribute("maxlength", "2");
=======
					? self.config.defaultHour
					: military2ampm(self.config.defaultHour));
			self.minuteElement.value = pad(self.latestSelectedDateObj
				? self.latestSelectedDateObj.getMinutes()
				: self.config.defaultMinute);
			self.hourElement.step = self.config.hourIncrement.toString();
			self.minuteElement.step = self.config.minuteIncrement.toString();
			self.hourElement.min = self.config.time_24hr ? "0" : "1";
			self.hourElement.max = self.config.time_24hr ? "23" : "12";
			self.minuteElement.min = "0";
			self.minuteElement.max = "59";
			self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self.timeContainer.appendChild(hourInput);
			self.timeContainer.appendChild(separator);
			self.timeContainer.appendChild(minuteInput);
			if (self.config.time_24hr)
				self.timeContainer.classList.add("time24hr");
			if (self.config.enableSeconds) {
				self.timeContainer.classList.add("hasSeconds");
				var secondInput = createNumberInput("flatpickr-second");
<<<<<<< HEAD
				self.secondElement = secondInput.getElementsByTagName("input")[0];
				self.secondElement.value = pad(self.latestSelectedDateObj
					? self.latestSelectedDateObj.getSeconds()
					: defaults.seconds);
				self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
				self.secondElement.setAttribute("min", "0");
				self.secondElement.setAttribute("max", "59");
				self.secondElement.setAttribute("maxlength", "2");
=======
				self.secondElement = secondInput.childNodes[0];
				self.secondElement.value = pad(self.latestSelectedDateObj
					? self.latestSelectedDateObj.getSeconds()
					: self.config.defaultSeconds);
				self.secondElement.step = self.minuteElement.step;
				self.secondElement.min = self.minuteElement.min;
				self.secondElement.max = self.minuteElement.max;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
				self.timeContainer.appendChild(secondInput);
			}
			if (!self.config.time_24hr) {
<<<<<<< HEAD
				// add self.amPM if appropriate
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
					? self.hourElement.value
					: self.config.defaultHour) > 11)]);
				self.amPM.title = self.l10n.toggleTitle;
				self.amPM.tabIndex = -1;
				self.timeContainer.appendChild(self.amPM);
			}
			return self.timeContainer;
		}
		function buildWeekdays() {
			if (!self.weekdayContainer)
				self.weekdayContainer = createElement("div", "flatpickr-weekdays");
<<<<<<< HEAD
			else
				clearNode(self.weekdayContainer);
			for (var i = self.config.showMonths; i--;) {
				var container = createElement("div", "flatpickr-weekdaycontainer");
				self.weekdayContainer.appendChild(container);
			}
			updateWeekdays();
			return self.weekdayContainer;
		}
		function updateWeekdays() {
			if (!self.weekdayContainer) {
				return;
			}
			var firstDayOfWeek = self.l10n.firstDayOfWeek;
			var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
			if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
				weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
			}
			for (var i = self.config.showMonths; i--;) {
				self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
			}
		}
		/* istanbul ignore next */
=======
			var firstDayOfWeek = self.l10n.firstDayOfWeek;
			var weekdays = self.l10n.weekdays.shorthand.slice();
			if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
				weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
			}
			self.weekdayContainer.innerHTML = "\n    <span class=flatpickr-weekday>\n      " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n    </span>\n    ";
			return self.weekdayContainer;
		}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		function buildWeeks() {
			self.calendarContainer.classList.add("hasWeeks");
			var weekWrapper = createElement("div", "flatpickr-weekwrapper");
			weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
			var weekNumbers = createElement("div", "flatpickr-weeks");
			weekWrapper.appendChild(weekNumbers);
			return {
				weekWrapper: weekWrapper,
				weekNumbers: weekNumbers,
			};
		}
<<<<<<< HEAD
		function changeMonth(value, isOffset) {
			if (isOffset === void 0) { isOffset = true; }
			var delta = isOffset ? value : value - self.currentMonth;
			if ((delta < 0 && self._hidePrevMonthArrow === true) ||
				(delta > 0 && self._hideNextMonthArrow === true))
=======
		function changeMonth(value, is_offset, animate, from_keyboard) {
			if (is_offset === void 0) { is_offset = true; }
			if (animate === void 0) { animate = self.config.animate; }
			if (from_keyboard === void 0) { from_keyboard = false; }
			var delta = is_offset ? value : value - self.currentMonth;
			if ((delta < 0 && self._hidePrevMonthArrow) ||
				(delta > 0 && self._hideNextMonthArrow))
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				return;
			self.currentMonth += delta;
			if (self.currentMonth < 0 || self.currentMonth > 11) {
				self.currentYear += self.currentMonth > 11 ? 1 : -1;
				self.currentMonth = (self.currentMonth + 12) % 12;
				triggerEvent("onYearChange");
<<<<<<< HEAD
				buildMonthSwitch();
			}
			buildDays();
			triggerEvent("onMonthChange");
			updateNavigationCurrentMonth();
		}
		function clear(triggerChangeEvent, toInitial) {
			if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
			if (toInitial === void 0) { toInitial = true; }
			self.input.value = "";
			if (self.altInput !== undefined)
				self.altInput.value = "";
			if (self.mobileInput !== undefined)
				self.mobileInput.value = "";
			self.selectedDates = [];
			self.latestSelectedDateObj = undefined;
			if (toInitial === true) {
				self.currentYear = self._initialDate.getFullYear();
				self.currentMonth = self._initialDate.getMonth();
			}
			if (self.config.enableTime === true) {
				var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
				setHours(hours, minutes, seconds);
			}
			self.redraw();
			if (triggerChangeEvent)
				// triggerChangeEvent is true (default) or an Event
=======
			}
			buildDays(animate ? delta : undefined);
			if (!animate) {
				triggerEvent("onMonthChange");
				return updateNavigationCurrentMonth();
			}
			var nav = self.navigationCurrentMonth;
			if (delta < 0) {
				while (nav.nextSibling &&
				/curr/.test(nav.nextSibling.className))
					self.monthNav.removeChild(nav.nextSibling);
			}
			else if (delta > 0) {
				while (nav.previousSibling &&
				/curr/.test(nav.previousSibling.className))
					self.monthNav.removeChild(nav.previousSibling);
			}
			self.oldCurMonth = self.navigationCurrentMonth;
			self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);
			var daysContainer = self.daysContainer;
			if (daysContainer.firstChild && daysContainer.lastChild) {
				if (delta > 0) {
					daysContainer.firstChild.classList.add("slideLeft");
					daysContainer.lastChild.classList.add("slideLeftNew");
					self.oldCurMonth.classList.add("slideLeft");
					self.navigationCurrentMonth.classList.add("slideLeftNew");
				}
				else if (delta < 0) {
					daysContainer.firstChild.classList.add("slideRightNew");
					daysContainer.lastChild.classList.add("slideRight");
					self.oldCurMonth.classList.add("slideRight");
					self.navigationCurrentMonth.classList.add("slideRightNew");
				}
			}
			self.currentMonthElement = self.navigationCurrentMonth
				.firstChild;
			self.currentYearElement = self.navigationCurrentMonth.lastChild
				.childNodes[0];
			updateNavigationCurrentMonth();
			if (self.oldCurMonth.firstChild)
				self.oldCurMonth.firstChild.textContent = monthToStr(self.currentMonth - delta, self.config.shorthandCurrentMonth, self.l10n);
			afterDayAnim(function () { return triggerEvent("onMonthChange"); });
			if (from_keyboard &&
				document.activeElement &&
				document.activeElement.$i) {
				var index_1 = document.activeElement.$i;
				afterDayAnim(function () {
					focusOnDay(index_1, 0);
				});
			}
		}
		function clear(triggerChangeEvent) {
			if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
			self.input.value = "";
			if (self.altInput)
				self.altInput.value = "";
			if (self.mobileInput)
				self.mobileInput.value = "";
			self.selectedDates = [];
			self.latestSelectedDateObj = undefined;
			self.showTimeInput = false;
			self.redraw();
			if (triggerChangeEvent)
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				triggerEvent("onChange");
		}
		function close() {
			self.isOpen = false;
			if (!self.isMobile) {
<<<<<<< HEAD
				if (self.calendarContainer !== undefined) {
					self.calendarContainer.classList.remove("open");
				}
				if (self._input !== undefined) {
					self._input.classList.remove("active");
				}
=======
				self.calendarContainer.classList.remove("open");
				self._input.classList.remove("active");
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			triggerEvent("onClose");
		}
		function destroy() {
			if (self.config !== undefined)
				triggerEvent("onDestroy");
			for (var i = self._handlers.length; i--;) {
<<<<<<< HEAD
				self._handlers[i].remove();
=======
				var h = self._handlers[i];
				h.element.removeEventListener(h.event, h.handler);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			self._handlers = [];
			if (self.mobileInput) {
				if (self.mobileInput.parentNode)
					self.mobileInput.parentNode.removeChild(self.mobileInput);
				self.mobileInput = undefined;
			}
<<<<<<< HEAD
			else if (self.calendarContainer && self.calendarContainer.parentNode) {
				if (self.config.static && self.calendarContainer.parentNode) {
					var wrapper = self.calendarContainer.parentNode;
					wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
					if (wrapper.parentNode) {
						while (wrapper.firstChild)
							wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
						wrapper.parentNode.removeChild(wrapper);
					}
				}
				else
					self.calendarContainer.parentNode.removeChild(self.calendarContainer);
			}
=======
			else if (self.calendarContainer && self.calendarContainer.parentNode)
				self.calendarContainer.parentNode.removeChild(self.calendarContainer);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			if (self.altInput) {
				self.input.type = "text";
				if (self.altInput.parentNode)
					self.altInput.parentNode.removeChild(self.altInput);
				delete self.altInput;
			}
			if (self.input) {
				self.input.type = self.input._type;
				self.input.classList.remove("flatpickr-input");
				self.input.removeAttribute("readonly");
<<<<<<< HEAD
=======
				self.input.value = "";
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			[
				"_showTimeInput",
				"latestSelectedDateObj",
				"_hideNextMonthArrow",
				"_hidePrevMonthArrow",
				"__hideNextMonthArrow",
				"__hidePrevMonthArrow",
				"isMobile",
				"isOpen",
				"selectedDateElem",
				"minDateHasTime",
				"maxDateHasTime",
				"days",
				"daysContainer",
				"_input",
				"_positionElement",
				"innerContainer",
				"rContainer",
				"monthNav",
				"todayDateElem",
				"calendarContainer",
				"weekdayContainer",
				"prevMonthNav",
				"nextMonthNav",
<<<<<<< HEAD
				"monthsDropdownContainer",
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				"currentMonthElement",
				"currentYearElement",
				"navigationCurrentMonth",
				"selectedDateElem",
				"config",
			].forEach(function (k) {
				try {
					delete self[k];
				}
				catch (_) { }
			});
		}
		function isCalendarElem(elem) {
<<<<<<< HEAD
=======
			if (self.config.appendTo && self.config.appendTo.contains(elem))
				return true;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			return self.calendarContainer.contains(elem);
		}
		function documentClick(e) {
			if (self.isOpen && !self.config.inline) {
<<<<<<< HEAD
				var eventTarget_1 = getEventTarget(e);
				var isCalendarElement = isCalendarElem(eventTarget_1);
				var isInput = eventTarget_1 === self.input ||
					eventTarget_1 === self.altInput ||
					self.element.contains(eventTarget_1) ||
					// web components
					// e.path is not present in all browsers. circumventing typechecks
=======
				var isCalendarElement = isCalendarElem(e.target);
				var isInput = e.target === self.input ||
					e.target === self.altInput ||
					self.element.contains(e.target) ||
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
					(e.path &&
						e.path.indexOf &&
						(~e.path.indexOf(self.input) ||
							~e.path.indexOf(self.altInput)));
<<<<<<< HEAD
				var lostFocus = !isInput &&
					!isCalendarElement &&
					!isCalendarElem(e.relatedTarget);
				var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
					return elem.contains(eventTarget_1);
				});
				if (lostFocus && isIgnored) {
					if (self.config.allowInput) {
						self.setDate(self._input.value, false, self.config.altInput
							? self.config.altFormat
							: self.config.dateFormat);
					}
					if (self.timeContainer !== undefined &&
						self.minuteElement !== undefined &&
						self.hourElement !== undefined &&
						self.input.value !== "" &&
						self.input.value !== undefined) {
						updateTime();
					}
					self.close();
					if (self.config &&
						self.config.mode === "range" &&
						self.selectedDates.length === 1)
						self.clear(false);
=======
				var lostFocus = e.type === "blur"
					? isInput &&
					e.relatedTarget &&
					!isCalendarElem(e.relatedTarget)
					: !isInput && !isCalendarElement;
				if (lostFocus &&
					self.config.ignoredFocusElements.indexOf(e.target) === -1) {
					self.close();
					if (self.config.mode === "range" && self.selectedDates.length === 1) {
						self.clear(false);
						self.redraw();
					}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				}
			}
		}
		function changeYear(newYear) {
			if (!newYear ||
<<<<<<< HEAD
				(self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
				(self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
=======
				(self.currentYearElement.min &&
					newYear < parseInt(self.currentYearElement.min)) ||
				(self.currentYearElement.max &&
					newYear > parseInt(self.currentYearElement.max)))
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				return;
			var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
			self.currentYear = newYearNum || self.currentYear;
			if (self.config.maxDate &&
				self.currentYear === self.config.maxDate.getFullYear()) {
				self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
			}
			else if (self.config.minDate &&
				self.currentYear === self.config.minDate.getFullYear()) {
				self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
			}
			if (isNewYear) {
				self.redraw();
				triggerEvent("onYearChange");
<<<<<<< HEAD
				buildMonthSwitch();
			}
		}
		function isEnabled(date, timeless) {
			var _a;
			if (timeless === void 0) { timeless = true; }
			var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
=======
			}
		}
		function isEnabled(date, timeless) {
			if (timeless === void 0) { timeless = true; }
			var dateToCheck = self.parseDate(date, undefined, timeless);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			if ((self.config.minDate &&
					dateToCheck &&
					compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
				(self.config.maxDate &&
					dateToCheck &&
					compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
				return false;
<<<<<<< HEAD
			if (!self.config.enable && self.config.disable.length === 0)
				return true;
			if (dateToCheck === undefined)
				return false;
			var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
			for (var i = 0, d = void 0; i < array.length; i++) {
				d = array[i];
				if (typeof d === "function" &&
					d(dateToCheck) // disabled by function
				)
=======
			if (!self.config.enable.length && !self.config.disable.length)
				return true;
			if (dateToCheck === undefined)
				return false;
			var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
			for (var i = 0, d = void 0; i < array.length; i++) {
				d = array[i];
				if (typeof d === "function" &&
					d(dateToCheck))
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
					return bool;
				else if (d instanceof Date &&
					dateToCheck !== undefined &&
					d.getTime() === dateToCheck.getTime())
<<<<<<< HEAD
					// disabled by date
					return bool;
				else if (typeof d === "string") {
					// disabled by date string
=======
					return bool;
				else if (typeof d === "string" && dateToCheck !== undefined) {
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
					var parsed = self.parseDate(d, undefined, true);
					return parsed && parsed.getTime() === dateToCheck.getTime()
						? bool
						: !bool;
				}
<<<<<<< HEAD
				else if (
					// disabled by range
					typeof d === "object" &&
=======
				else if (typeof d === "object" &&
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
					dateToCheck !== undefined &&
					d.from &&
					d.to &&
					dateToCheck.getTime() >= d.from.getTime() &&
					dateToCheck.getTime() <= d.to.getTime())
					return bool;
			}
			return !bool;
		}
<<<<<<< HEAD
		function isInView(elem) {
			if (self.daysContainer !== undefined)
				return (elem.className.indexOf("hidden") === -1 &&
					elem.className.indexOf("flatpickr-disabled") === -1 &&
					self.daysContainer.contains(elem));
			return false;
		}
		function onBlur(e) {
			var isInput = e.target === self._input;
			var valueChanged = self._input.value.trimEnd() !== getDateStr();
			if (isInput &&
				valueChanged &&
				!(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
				self.setDate(self._input.value, true, e.target === self.altInput
					? self.config.altFormat
					: self.config.dateFormat);
			}
		}
		function onKeyDown(e) {
			// e.key                      e.keyCode
			// "Backspace"                        8
			// "Tab"                              9
			// "Enter"                           13
			// "Escape"     (IE "Esc")           27
			// "ArrowLeft"  (IE "Left")          37
			// "ArrowUp"    (IE "Up")            38
			// "ArrowRight" (IE "Right")         39
			// "ArrowDown"  (IE "Down")          40
			// "Delete"     (IE "Del")           46
			var eventTarget = getEventTarget(e);
			var isInput = self.config.wrap
				? element.contains(eventTarget)
				: eventTarget === self._input;
			var allowInput = self.config.allowInput;
			var allowKeydown = self.isOpen && (!allowInput || !isInput);
			var allowInlineKeydown = self.config.inline && isInput && !allowInput;
			if (e.keyCode === 13 && isInput) {
				if (allowInput) {
					self.setDate(self._input.value, true, eventTarget === self.altInput
						? self.config.altFormat
						: self.config.dateFormat);
					self.close();
					return eventTarget.blur();
				}
				else {
					self.open();
				}
			}
			else if (isCalendarElem(eventTarget) ||
				allowKeydown ||
				allowInlineKeydown) {
				var isTimeObj = !!self.timeContainer &&
					self.timeContainer.contains(eventTarget);
				switch (e.keyCode) {
					case 13:
						if (isTimeObj) {
							e.preventDefault();
							updateTime();
							focusAndClose();
						}
						else
							selectDate(e);
						break;
					case 27: // escape
						e.preventDefault();
						focusAndClose();
						break;
					case 8:
					case 46:
						if (isInput && !self.config.allowInput) {
							e.preventDefault();
							self.clear();
						}
						break;
					case 37:
					case 39:
						if (!isTimeObj && !isInput) {
							e.preventDefault();
							var activeElement = getClosestActiveElement();
							if (self.daysContainer !== undefined &&
								(allowInput === false ||
									(activeElement && isInView(activeElement)))) {
								var delta_1 = e.keyCode === 39 ? 1 : -1;
								if (!e.ctrlKey)
									focusOnDay(undefined, delta_1);
								else {
									e.stopPropagation();
									changeMonth(delta_1);
									focusOnDay(getFirstAvailableDay(1), 0);
								}
=======
		function onKeyDown(e) {
			var isInput = e.target === self._input;
			var calendarElem = isCalendarElem(e.target);
			var allowInput = self.config.allowInput;
			var allowKeydown = self.isOpen && (!allowInput || !isInput);
			var allowInlineKeydown = self.config.inline && isInput && !allowInput;
			if (e.key === "Enter" && isInput) {
				if (allowInput) {
					self.setDate(self._input.value, true, e.target === self.altInput
						? self.config.altFormat
						: self.config.dateFormat);
					return e.target.blur();
				}
				else
					self.open();
			}
			else if (calendarElem || allowKeydown || allowInlineKeydown) {
				var isTimeObj = !!self.timeContainer &&
					self.timeContainer.contains(e.target);
				switch (e.key) {
					case "Enter":
						if (isTimeObj)
							updateValue();
						else
							selectDate(e);
						break;
					case "Escape":
						e.preventDefault();
						self.close();
						break;
					case "Backspace":
					case "Delete":
						if (isInput && !self.config.allowInput)
							self.clear();
						break;
					case "ArrowLeft":
					case "ArrowRight":
						if (!isTimeObj) {
							e.preventDefault();
							if (self.daysContainer) {
								var delta_1 = e.key === "ArrowRight" ? 1 : -1;
								if (!e.ctrlKey)
									focusOnDay(e.target.$i, delta_1);
								else
									changeMonth(delta_1, true, undefined, true);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
							}
						}
						else if (self.hourElement)
							self.hourElement.focus();
						break;
<<<<<<< HEAD
					case 38:
					case 40:
						e.preventDefault();
						var delta = e.keyCode === 40 ? 1 : -1;
						if ((self.daysContainer &&
								eventTarget.$i !== undefined) ||
							eventTarget === self.input ||
							eventTarget === self.altInput) {
							if (e.ctrlKey) {
								e.stopPropagation();
								changeYear(self.currentYear - delta);
								focusOnDay(getFirstAvailableDay(1), 0);
							}
							else if (!isTimeObj)
								focusOnDay(undefined, delta * 7);
						}
						else if (eventTarget === self.currentYearElement) {
							changeYear(self.currentYear - delta);
=======
					case "ArrowUp":
					case "ArrowDown":
						e.preventDefault();
						var delta = e.key === "ArrowDown" ? 1 : -1;
						if (self.daysContainer && e.target.$i !== undefined) {
							if (e.ctrlKey) {
								changeYear(self.currentYear - delta);
								focusOnDay(e.target.$i, 0);
							}
							else if (!isTimeObj)
								focusOnDay(e.target.$i, delta * 7);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
						}
						else if (self.config.enableTime) {
							if (!isTimeObj && self.hourElement)
								self.hourElement.focus();
							updateTime(e);
							self._debouncedChange();
						}
						break;
<<<<<<< HEAD
					case 9:
						if (isTimeObj) {
							var elems = [
								self.hourElement,
								self.minuteElement,
								self.secondElement,
								self.amPM,
							]
								.concat(self.pluginElements)
								.filter(function (x) { return x; });
							var i = elems.indexOf(eventTarget);
							if (i !== -1) {
								var target = elems[i + (e.shiftKey ? -1 : 1)];
								e.preventDefault();
								(target || self._input).focus();
							}
						}
						else if (!self.config.noCalendar &&
							self.daysContainer &&
							self.daysContainer.contains(eventTarget) &&
							e.shiftKey) {
							e.preventDefault();
							self._input.focus();
						}
						break;
				}
			}
			if (self.amPM !== undefined && eventTarget === self.amPM) {
				switch (e.key) {
					case self.l10n.amPM[0].charAt(0):
					case self.l10n.amPM[0].charAt(0).toLowerCase():
						self.amPM.textContent = self.l10n.amPM[0];
						setHoursFromInputs();
						updateValue();
						break;
					case self.l10n.amPM[1].charAt(0):
					case self.l10n.amPM[1].charAt(0).toLowerCase():
						self.amPM.textContent = self.l10n.amPM[1];
						setHoursFromInputs();
						updateValue();
						break;
				}
			}
			if (isInput || isCalendarElem(eventTarget)) {
				triggerEvent("onKeyDown", e);
			}
		}
		function onMouseOver(elem, cellClass) {
			if (cellClass === void 0) { cellClass = "flatpickr-day"; }
			if (self.selectedDates.length !== 1 ||
				(elem &&
					(!elem.classList.contains(cellClass) ||
						elem.classList.contains("flatpickr-disabled"))))
				return;
			var hoverDate = elem
				? elem.dateObj.getTime()
				: self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
			var containsDisabled = false;
			var minRange = 0, maxRange = 0;
			for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
				if (!isEnabled(new Date(t), true)) {
					containsDisabled =
						containsDisabled || (t > rangeStartDate && t < rangeEndDate);
					if (t < initialDate && (!minRange || t > minRange))
						minRange = t;
					else if (t > initialDate && (!maxRange || t < maxRange))
						maxRange = t;
				}
			}
			var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
			hoverableCells.forEach(function (dayElem) {
				var date = dayElem.dateObj;
				var timestamp = date.getTime();
				var outOfRange = (minRange > 0 && timestamp < minRange) ||
					(maxRange > 0 && timestamp > maxRange);
=======
					case "Tab":
						if (e.target === self.hourElement) {
							e.preventDefault();
							self.minuteElement.select();
						}
						else if (e.target === self.minuteElement &&
							(self.secondElement || self.amPM)) {
							e.preventDefault();
							if (self.secondElement !== undefined)
								self.secondElement.focus();
							else if (self.amPM !== undefined)
								self.amPM.focus();
						}
						else if (e.target === self.secondElement && self.amPM) {
							e.preventDefault();
							self.amPM.focus();
						}
						break;
					case self.l10n.amPM[0].charAt(0):
						if (self.amPM !== undefined && e.target === self.amPM) {
							self.amPM.textContent = self.l10n.amPM[0];
							setHoursFromInputs();
							updateValue();
						}
						break;
					case self.l10n.amPM[1].charAt(0):
						if (self.amPM !== undefined && e.target === self.amPM) {
							self.amPM.textContent = self.l10n.amPM[1];
							setHoursFromInputs();
							updateValue();
						}
						break;
					default:
						break;
				}
				triggerEvent("onKeyDown", e);
			}
		}
		function onMouseOver(elem) {
			if (self.selectedDates.length !== 1 ||
				!elem.classList.contains("flatpickr-day") ||
				self.minRangeDate === undefined ||
				self.maxRangeDate === undefined)
				return;
			var hoverDate = elem.dateObj, initialDate = self.parseDate(self.selectedDates[0], undefined, true), rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()), containsDisabled = false;
			for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
				if (!isEnabled(new Date(t))) {
					containsDisabled = true;
					break;
				}
			}
			var _loop_1 = function (i, date) {
				var timestamp = date.getTime();
				var outOfRange = timestamp < self.minRangeDate.getTime() ||
					timestamp > self.maxRangeDate.getTime(), dayElem = self.days.childNodes[i];
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				if (outOfRange) {
					dayElem.classList.add("notAllowed");
					["inRange", "startRange", "endRange"].forEach(function (c) {
						dayElem.classList.remove(c);
					});
<<<<<<< HEAD
					return;
				}
				else if (containsDisabled && !outOfRange)
					return;
				["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
					dayElem.classList.remove(c);
				});
				if (elem !== undefined) {
					elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
						? "startRange"
						: "endRange");
					if (initialDate < hoverDate && timestamp === initialDate)
						dayElem.classList.add("startRange");
					else if (initialDate > hoverDate && timestamp === initialDate)
						dayElem.classList.add("endRange");
					if (timestamp >= minRange &&
						(maxRange === 0 || timestamp <= maxRange) &&
						isBetween(timestamp, initialDate, hoverDate))
						dayElem.classList.add("inRange");
				}
			});
=======
					return "continue";
				}
				else if (containsDisabled && !outOfRange)
					return "continue";
				["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
					dayElem.classList.remove(c);
				});
				var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate), maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);
				elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");
				if (initialDate < hoverDate && timestamp === initialDate.getTime())
					dayElem.classList.add("startRange");
				else if (initialDate > hoverDate && timestamp === initialDate.getTime())
					dayElem.classList.add("endRange");
				if (timestamp >= minRangeDate && timestamp <= maxRangeDate)
					dayElem.classList.add("inRange");
			};
			for (var i = 0, date = self.days.childNodes[i].dateObj; i < 42; i++, date =
				self.days.childNodes[i] &&
				self.days.childNodes[i].dateObj) {
				_loop_1(i, date);
			}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		}
		function onResize() {
			if (self.isOpen && !self.config.static && !self.config.inline)
				positionCalendar();
		}
		function open(e, positionElement) {
<<<<<<< HEAD
			if (positionElement === void 0) { positionElement = self._positionElement; }
			if (self.isMobile === true) {
				if (e) {
					e.preventDefault();
					var eventTarget = getEventTarget(e);
					if (eventTarget) {
						eventTarget.blur();
					}
				}
				if (self.mobileInput !== undefined) {
					self.mobileInput.focus();
					self.mobileInput.click();
				}
				triggerEvent("onOpen");
				return;
			}
			else if (self._input.disabled || self.config.inline) {
				return;
			}
			var wasOpen = self.isOpen;
			self.isOpen = true;
			if (!wasOpen) {
				self.calendarContainer.classList.add("open");
				self._input.classList.add("active");
				triggerEvent("onOpen");
				positionCalendar(positionElement);
			}
			if (self.config.enableTime === true && self.config.noCalendar === true) {
				if (self.config.allowInput === false &&
					(e === undefined ||
						!self.timeContainer.contains(e.relatedTarget))) {
					setTimeout(function () { return self.hourElement.select(); }, 50);
				}
			}
		}
		function minMaxDateSetter(type) {
			return function (date) {
				var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
=======
			if (positionElement === void 0) { positionElement = self._input; }
			if (self.isMobile) {
				if (e) {
					e.preventDefault();
					e.target && e.target.blur();
				}
				setTimeout(function () {
					self.mobileInput !== undefined && self.mobileInput.click();
				}, 0);
				triggerEvent("onOpen");
				return;
			}
			if (self._input.disabled || self.config.inline)
				return;
			var wasOpen = self.isOpen;
			self.isOpen = true;
			positionCalendar(positionElement);
			self.calendarContainer.classList.add("open");
			self._input.classList.add("active");
			!wasOpen && triggerEvent("onOpen");
		}
		function minMaxDateSetter(type) {
			return function (date) {
				var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date));
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
				if (dateObj !== undefined) {
					self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
						dateObj.getHours() > 0 ||
						dateObj.getMinutes() > 0 ||
						dateObj.getSeconds() > 0;
				}
				if (self.selectedDates) {
					self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
					if (!self.selectedDates.length && type === "min")
						setHoursFromDate(dateObj);
					updateValue();
				}
				if (self.daysContainer) {
					redraw();
					if (dateObj !== undefined)
						self.currentYearElement[type] = dateObj.getFullYear().toString();
					else
						self.currentYearElement.removeAttribute(type);
					self.currentYearElement.disabled =
						!!inverseDateObj &&
						dateObj !== undefined &&
						inverseDateObj.getFullYear() === dateObj.getFullYear();
				}
			};
		}
		function parseConfig() {
			var boolOpts = [
				"wrap",
				"weekNumbers",
				"allowInput",
<<<<<<< HEAD
				"allowInvalidPreload",
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				"clickOpens",
				"time_24hr",
				"enableTime",
				"noCalendar",
				"altInput",
				"shorthandCurrentMonth",
				"inline",
				"static",
				"enableSeconds",
				"disableMobile",
			];
<<<<<<< HEAD
			var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
			var formats = {};
			self.config.parseDate = userConfig.parseDate;
			self.config.formatDate = userConfig.formatDate;
			Object.defineProperty(self.config, "enable", {
				get: function () { return self.config._enable; },
=======
			var hooks = [
				"onChange",
				"onClose",
				"onDayCreate",
				"onDestroy",
				"onKeyDown",
				"onMonthChange",
				"onOpen",
				"onParseConfig",
				"onReady",
				"onValueUpdate",
				"onYearChange",
			];
			self.config = __assign({}, flatpickr.defaultConfig);
			var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
			var formats$$1 = {};
			Object.defineProperty(self.config, "enable", {
				get: function () { return self.config._enable || []; },
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				set: function (dates) {
					self.config._enable = parseDateRules(dates);
				},
			});
			Object.defineProperty(self.config, "disable", {
<<<<<<< HEAD
				get: function () { return self.config._disable; },
=======
				get: function () { return self.config._disable || []; },
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				set: function (dates) {
					self.config._disable = parseDateRules(dates);
				},
			});
<<<<<<< HEAD
			var timeMode = userConfig.mode === "time";
			if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
				var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
				formats.dateFormat =
					userConfig.noCalendar || timeMode
						? "H:i" + (userConfig.enableSeconds ? ":S" : "")
						: defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
			}
			if (userConfig.altInput &&
				(userConfig.enableTime || timeMode) &&
				!userConfig.altFormat) {
				var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
				formats.altFormat =
					userConfig.noCalendar || timeMode
						? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
						: defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
=======
			if (!userConfig.dateFormat && userConfig.enableTime) {
				formats$$1.dateFormat = userConfig.noCalendar
					? "H:i" + (userConfig.enableSeconds ? ":S" : "")
					: flatpickr.defaultConfig.dateFormat +
					" H:i" +
					(userConfig.enableSeconds ? ":S" : "");
			}
			if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
				formats$$1.altFormat = userConfig.noCalendar
					? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
					: flatpickr.defaultConfig.altFormat +
					(" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			Object.defineProperty(self.config, "minDate", {
				get: function () { return self.config._minDate; },
				set: minMaxDateSetter("min"),
			});
			Object.defineProperty(self.config, "maxDate", {
				get: function () { return self.config._maxDate; },
				set: minMaxDateSetter("max"),
			});
<<<<<<< HEAD
			var minMaxTimeSetter = function (type) { return function (val) {
				self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
			}; };
			Object.defineProperty(self.config, "minTime", {
				get: function () { return self.config._minTime; },
				set: minMaxTimeSetter("min"),
			});
			Object.defineProperty(self.config, "maxTime", {
				get: function () { return self.config._maxTime; },
				set: minMaxTimeSetter("max"),
			});
			if (userConfig.mode === "time") {
				self.config.noCalendar = true;
				self.config.enableTime = true;
			}
			Object.assign(self.config, formats, userConfig);
			for (var i = 0; i < boolOpts.length; i++)
				// https://github.com/microsoft/TypeScript/issues/31663
				self.config[boolOpts[i]] =
					self.config[boolOpts[i]] === true ||
					self.config[boolOpts[i]] === "true";
			HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
				self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
			});
			self.isMobile =
				!self.config.disableMobile &&
				!self.config.inline &&
				self.config.mode === "single" &&
				!self.config.disable.length &&
				!self.config.enable &&
				!self.config.weekNumbers &&
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			for (var i = 0; i < self.config.plugins.length; i++) {
				var pluginConf = self.config.plugins[i](self) || {};
				for (var key in pluginConf) {
					if (HOOKS.indexOf(key) > -1) {
=======
			Object.assign(self.config, formats$$1, userConfig);
			for (var i = 0; i < boolOpts.length; i++)
				self.config[boolOpts[i]] =
					self.config[boolOpts[i]] === true ||
					self.config[boolOpts[i]] === "true";
			for (var i = hooks.length; i--;) {
				if (self.config[hooks[i]] !== undefined) {
					self.config[hooks[i]] = arrayify(self.config[hooks[i]] || []).map(bindToInstance);
				}
			}
			for (var i = 0; i < self.config.plugins.length; i++) {
				var pluginConf = self.config.plugins[i](self) || {};
				for (var key in pluginConf) {
					if (~hooks.indexOf(key)) {
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
						self.config[key] = arrayify(pluginConf[key])
							.map(bindToInstance)
							.concat(self.config[key]);
					}
					else if (typeof userConfig[key] === "undefined")
						self.config[key] = pluginConf[key];
				}
			}
<<<<<<< HEAD
			if (!userConfig.altInputClass) {
				self.config.altInputClass =
					getInputElem().className + " " + self.config.altInputClass;
			}
			triggerEvent("onParseConfig");
		}
		function getInputElem() {
			return self.config.wrap
				? element.querySelector("[data-input]")
				: element;
		}
=======
			self.isMobile =
				!self.config.disableMobile &&
				!self.config.inline &&
				self.config.mode === "single" &&
				!self.config.disable.length &&
				!self.config.enable.length &&
				!self.config.weekNumbers &&
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
			triggerEvent("onParseConfig");
		}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		function setupLocale() {
			if (typeof self.config.locale !== "object" &&
				typeof flatpickr.l10ns[self.config.locale] === "undefined")
				self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
<<<<<<< HEAD
			self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
				? self.config.locale
				: self.config.locale !== "default"
					? flatpickr.l10ns[self.config.locale]
					: undefined));
			tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
			tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
			tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
			tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
			tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
			var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
			if (userConfig.time_24hr === undefined &&
				flatpickr.defaultConfig.time_24hr === undefined) {
				self.config.time_24hr = self.l10n.time_24hr;
			}
			self.formatDate = createDateFormatter(self);
			self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
		}
		function positionCalendar(customPositionElement) {
			if (typeof self.config.position === "function") {
				return void self.config.position(self, customPositionElement);
			}
			if (self.calendarContainer === undefined)
				return;
			triggerEvent("onPreCalendarPosition");
			var positionElement = customPositionElement || self._positionElement;
			var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
				(configPosVertical !== "below" &&
=======
			self.l10n = __assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object"
				? self.config.locale
				: self.config.locale !== "default"
					? flatpickr.l10ns[self.config.locale]
					: undefined);
			tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
		}
		function positionCalendar(positionElement) {
			if (positionElement === void 0) { positionElement = self._positionElement; }
			if (self.calendarContainer === undefined)
				return;
			var calendarHeight = self.calendarContainer.offsetHeight, calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPos === "above" ||
				(configPos !== "below" &&
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
					distanceFromBottom < calendarHeight &&
					inputBounds.top > calendarHeight);
			var top = window.pageYOffset +
				inputBounds.top +
				(!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
			toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
			toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
			if (self.config.inline)
				return;
			var left = window.pageXOffset + inputBounds.left;
<<<<<<< HEAD
			var isCenter = false;
			var isRight = false;
			if (configPosHorizontal === "center") {
				left -= (calendarWidth - inputBounds.width) / 2;
				isCenter = true;
			}
			else if (configPosHorizontal === "right") {
				left -= calendarWidth - inputBounds.width;
				isRight = true;
			}
			toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
			toggleClass(self.calendarContainer, "arrowCenter", isCenter);
			toggleClass(self.calendarContainer, "arrowRight", isRight);
			var right = window.document.body.offsetWidth -
				(window.pageXOffset + inputBounds.right);
			var rightMost = left + calendarWidth > window.document.body.offsetWidth;
			var centerMost = right + calendarWidth > window.document.body.offsetWidth;
=======
			var right = window.document.body.offsetWidth - inputBounds.right;
			var rightMost = left + calendarWidth > window.document.body.offsetWidth;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			toggleClass(self.calendarContainer, "rightMost", rightMost);
			if (self.config.static)
				return;
			self.calendarContainer.style.top = top + "px";
			if (!rightMost) {
				self.calendarContainer.style.left = left + "px";
				self.calendarContainer.style.right = "auto";
			}
<<<<<<< HEAD
			else if (!centerMost) {
				self.calendarContainer.style.left = "auto";
				self.calendarContainer.style.right = right + "px";
			}
			else {
				var doc = getDocumentStyleSheet();
				// some testing environments don't have css support
				if (doc === undefined)
					return;
				var bodyWidth = window.document.body.offsetWidth;
				var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
				var centerBefore = ".flatpickr-calendar.centerMost:before";
				var centerAfter = ".flatpickr-calendar.centerMost:after";
				var centerIndex = doc.cssRules.length;
				var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
				toggleClass(self.calendarContainer, "rightMost", false);
				toggleClass(self.calendarContainer, "centerMost", true);
				doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
				self.calendarContainer.style.left = centerLeft + "px";
				self.calendarContainer.style.right = "auto";
			}
		}
		function getDocumentStyleSheet() {
			var editableSheet = null;
			for (var i = 0; i < document.styleSheets.length; i++) {
				var sheet = document.styleSheets[i];
				if (!sheet.cssRules)
					continue;
				try {
					sheet.cssRules;
				}
				catch (err) {
					continue;
				}
				editableSheet = sheet;
				break;
			}
			return editableSheet != null ? editableSheet : createStyleSheet();
		}
		function createStyleSheet() {
			var style = document.createElement("style");
			document.head.appendChild(style);
			return style.sheet;
=======
			else {
				self.calendarContainer.style.left = "auto";
				self.calendarContainer.style.right = right + "px";
			}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		}
		function redraw() {
			if (self.config.noCalendar || self.isMobile)
				return;
<<<<<<< HEAD
			buildMonthSwitch();
			updateNavigationCurrentMonth();
			buildDays();
		}
		function focusAndClose() {
			self._input.focus();
			if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
				navigator.msMaxTouchPoints !== undefined) {
				// hack - bugs in the way IE handles focus keeps the calendar open
				setTimeout(self.close, 0);
			}
			else {
				self.close();
			}
		}
=======
			buildWeekdays();
			updateNavigationCurrentMonth();
			buildDays();
		}
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		function selectDate(e) {
			e.preventDefault();
			e.stopPropagation();
			var isSelectable = function (day) {
				return day.classList &&
					day.classList.contains("flatpickr-day") &&
<<<<<<< HEAD
					!day.classList.contains("flatpickr-disabled") &&
					!day.classList.contains("notAllowed");
			};
			var t = findParent(getEventTarget(e), isSelectable);
=======
					!day.classList.contains("disabled") &&
					!day.classList.contains("notAllowed");
			};
			var t = findParent(e.target, isSelectable);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			if (t === undefined)
				return;
			var target = t;
			var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
<<<<<<< HEAD
			var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
					selectedDate.getMonth() >
					self.currentMonth + self.config.showMonths - 1) &&
=======
			var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth &&
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				self.config.mode !== "range";
			self.selectedDateElem = target;
			if (self.config.mode === "single")
				self.selectedDates = [selectedDate];
			else if (self.config.mode === "multiple") {
				var selectedIndex = isDateSelected(selectedDate);
				if (selectedIndex)
					self.selectedDates.splice(parseInt(selectedIndex), 1);
				else
					self.selectedDates.push(selectedDate);
			}
			else if (self.config.mode === "range") {
<<<<<<< HEAD
				if (self.selectedDates.length === 2) {
					self.clear(false, false);
				}
				self.latestSelectedDateObj = selectedDate;
				self.selectedDates.push(selectedDate);
				// unless selecting same date twice, sort ascendingly
=======
				if (self.selectedDates.length === 2)
					self.clear();
				self.selectedDates.push(selectedDate);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
					self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
			}
			setHoursFromInputs();
			if (shouldChangeMonth) {
				var isNewYear = self.currentYear !== selectedDate.getFullYear();
				self.currentYear = selectedDate.getFullYear();
				self.currentMonth = selectedDate.getMonth();
<<<<<<< HEAD
				if (isNewYear) {
					triggerEvent("onYearChange");
					buildMonthSwitch();
				}
				triggerEvent("onMonthChange");
			}
			updateNavigationCurrentMonth();
			buildDays();
			updateValue();
			// maintain focus
			if (!shouldChangeMonth &&
				self.config.mode !== "range" &&
				self.config.showMonths === 1)
				focusOnDayElem(target);
			else if (self.selectedDateElem !== undefined &&
				self.hourElement === undefined) {
				self.selectedDateElem && self.selectedDateElem.focus();
			}
			if (self.hourElement !== undefined)
				self.hourElement !== undefined && self.hourElement.focus();
=======
				if (isNewYear)
					triggerEvent("onYearChange");
				triggerEvent("onMonthChange");
			}
			buildDays();
			if (self.config.minDate &&
				self.minDateHasTime &&
				self.config.enableTime &&
				compareDates(selectedDate, self.config.minDate) === 0)
				setHoursFromDate(self.config.minDate);
			updateValue();
			if (self.config.enableTime)
				setTimeout(function () { return (self.showTimeInput = true); }, 50);
			if (self.config.mode === "range") {
				if (self.selectedDates.length === 1) {
					onMouseOver(target);
					self._hidePrevMonthArrow =
						self._hidePrevMonthArrow ||
						(self.minRangeDate !== undefined &&
							self.minRangeDate >
							self.days.childNodes[0].dateObj);
					self._hideNextMonthArrow =
						self._hideNextMonthArrow ||
						(self.maxRangeDate !== undefined &&
							self.maxRangeDate <
							new Date(self.currentYear, self.currentMonth + 1, 1));
				}
				else
					updateNavigationCurrentMonth();
			}
			triggerEvent("onChange");
			if (!shouldChangeMonth)
				focusOnDay(target.$i, 0);
			else
				afterDayAnim(function () { return self.selectedDateElem && self.selectedDateElem.focus(); });
			if (self.hourElement !== undefined)
				setTimeout(function () { return self.hourElement !== undefined && self.hourElement.select(); }, 451);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			if (self.config.closeOnSelect) {
				var single = self.config.mode === "single" && !self.config.enableTime;
				var range = self.config.mode === "range" &&
					self.selectedDates.length === 2 &&
					!self.config.enableTime;
<<<<<<< HEAD
				if (single || range) {
					focusAndClose();
				}
			}
			triggerChange();
		}
		var CALLBACKS = {
			locale: [setupLocale, updateWeekdays],
			showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
			minDate: [jumpToDate],
			maxDate: [jumpToDate],
			positionElement: [updatePositionElement],
			clickOpens: [
				function () {
					if (self.config.clickOpens === true) {
						bind(self._input, "focus", self.open);
						bind(self._input, "click", self.open);
					}
					else {
						self._input.removeEventListener("focus", self.open);
						self._input.removeEventListener("click", self.open);
					}
				},
			],
		};
		function set(option, value) {
			if (option !== null && typeof option === "object") {
				Object.assign(self.config, option);
				for (var key in option) {
					if (CALLBACKS[key] !== undefined)
						CALLBACKS[key].forEach(function (x) { return x(); });
				}
			}
			else {
				self.config[option] = value;
				if (CALLBACKS[option] !== undefined)
					CALLBACKS[option].forEach(function (x) { return x(); });
				else if (HOOKS.indexOf(option) > -1)
					self.config[option] = arrayify(value);
			}
			self.redraw();
			updateValue(true);
=======
				if (single || range)
					self.close();
			}
		}
		function set(option, value) {
			if (option !== null && typeof option === "object")
				Object.assign(self.config, option);
			else
				self.config[option] = value;
			self.redraw();
			jumpToDate();
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		}
		function setSelectedDate(inputDate, format) {
			var dates = [];
			if (inputDate instanceof Array)
				dates = inputDate.map(function (d) { return self.parseDate(d, format); });
			else if (inputDate instanceof Date || typeof inputDate === "number")
				dates = [self.parseDate(inputDate, format)];
			else if (typeof inputDate === "string") {
				switch (self.config.mode) {
					case "single":
<<<<<<< HEAD
					case "time":
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
						dates = [self.parseDate(inputDate, format)];
						break;
					case "multiple":
						dates = inputDate
							.split(self.config.conjunction)
							.map(function (date) { return self.parseDate(date, format); });
						break;
					case "range":
						dates = inputDate
							.split(self.l10n.rangeSeparator)
							.map(function (date) { return self.parseDate(date, format); });
						break;
<<<<<<< HEAD
=======
					default:
						break;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				}
			}
			else
				self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
<<<<<<< HEAD
			self.selectedDates = (self.config.allowInvalidPreload
				? dates
				: dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
			if (self.config.mode === "range")
				self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
		}
		function setDate(date, triggerChange, format) {
			if (triggerChange === void 0) { triggerChange = false; }
			if (format === void 0) { format = self.config.dateFormat; }
			if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
				return self.clear(triggerChange);
			setSelectedDate(date, format);
			self.latestSelectedDateObj =
				self.selectedDates[self.selectedDates.length - 1];
			self.redraw();
			jumpToDate(undefined, triggerChange);
			setHoursFromDate();
			if (self.selectedDates.length === 0) {
				self.clear(false);
			}
=======
			self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
			self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
		}
		function setDate(date, triggerChange, format) {
			if (triggerChange === void 0) { triggerChange = false; }
			if (date !== 0 && !date)
				return self.clear(triggerChange);
			setSelectedDate(date, format);
			self.showTimeInput = self.selectedDates.length > 0;
			self.latestSelectedDateObj = self.selectedDates[0];
			self.redraw();
			jumpToDate();
			setHoursFromDate();
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			updateValue(triggerChange);
			if (triggerChange)
				triggerEvent("onChange");
		}
		function parseDateRules(arr) {
			return arr
<<<<<<< HEAD
				.slice()
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				.map(function (rule) {
					if (typeof rule === "string" ||
						typeof rule === "number" ||
						rule instanceof Date) {
						return self.parseDate(rule, undefined, true);
					}
					else if (rule &&
						typeof rule === "object" &&
						rule.from &&
						rule.to)
						return {
							from: self.parseDate(rule.from, undefined),
							to: self.parseDate(rule.to, undefined),
						};
					return rule;
				})
<<<<<<< HEAD
				.filter(function (x) { return x; }); // remove falsy values
		}
		function setupDates() {
			self.selectedDates = [];
			self.now = self.parseDate(self.config.now) || new Date();
			// Workaround IE11 setting placeholder as the input's value
			var preloadedDate = self.config.defaultDate ||
				((self.input.nodeName === "INPUT" ||
					self.input.nodeName === "TEXTAREA") &&
				self.input.placeholder &&
				self.input.value === self.input.placeholder
					? null
					: self.input.value);
			if (preloadedDate)
				setSelectedDate(preloadedDate, self.config.dateFormat);
			self._initialDate =
				self.selectedDates.length > 0
					? self.selectedDates[0]
					: self.config.minDate &&
					self.config.minDate.getTime() > self.now.getTime()
						? self.config.minDate
						: self.config.maxDate &&
						self.config.maxDate.getTime() < self.now.getTime()
							? self.config.maxDate
							: self.now;
			self.currentYear = self._initialDate.getFullYear();
			self.currentMonth = self._initialDate.getMonth();
			if (self.selectedDates.length > 0)
				self.latestSelectedDateObj = self.selectedDates[0];
			if (self.config.minTime !== undefined)
				self.config.minTime = self.parseDate(self.config.minTime, "H:i");
			if (self.config.maxTime !== undefined)
				self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
=======
				.filter(function (x) { return x; });
		}
		function setupDates() {
			self.selectedDates = [];
			self.now = new Date();
			var preloadedDate = self.config.defaultDate || self.input.value;
			if (preloadedDate)
				setSelectedDate(preloadedDate, self.config.dateFormat);
			var initialDate = self.selectedDates.length
				? self.selectedDates[0]
				: self.config.minDate &&
				self.config.minDate.getTime() > self.now.getTime()
					? self.config.minDate
					: self.config.maxDate &&
					self.config.maxDate.getTime() < self.now.getTime()
						? self.config.maxDate
						: self.now;
			self.currentYear = initialDate.getFullYear();
			self.currentMonth = initialDate.getMonth();
			if (self.selectedDates.length)
				self.latestSelectedDateObj = self.selectedDates[0];
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self.minDateHasTime =
				!!self.config.minDate &&
				(self.config.minDate.getHours() > 0 ||
					self.config.minDate.getMinutes() > 0 ||
					self.config.minDate.getSeconds() > 0);
			self.maxDateHasTime =
				!!self.config.maxDate &&
				(self.config.maxDate.getHours() > 0 ||
					self.config.maxDate.getMinutes() > 0 ||
					self.config.maxDate.getSeconds() > 0);
<<<<<<< HEAD
		}
		function setupInputs() {
			self.input = getInputElem();
			/* istanbul ignore next */
=======
			Object.defineProperty(self, "showTimeInput", {
				get: function () { return self._showTimeInput; },
				set: function (bool) {
					self._showTimeInput = bool;
					if (self.calendarContainer)
						toggleClass(self.calendarContainer, "showTimeInput", bool);
					positionCalendar();
				},
			});
		}
		function formatDate(dateObj, frmt) {
			if (self.config !== undefined && self.config.formatDate !== undefined)
				return self.config.formatDate(dateObj, frmt);
			return frmt
				.split("")
				.map(function (c, i, arr) {
					return formats[c] && arr[i - 1] !== "\\"
						? formats[c](dateObj, self.l10n, self.config)
						: c !== "\\" ? c : "";
				})
				.join("");
		}
		function parseDate(date, givenFormat, timeless) {
			if (date !== 0 && !date)
				return undefined;
			var parsedDate;
			var date_orig = date;
			if (date instanceof Date)
				parsedDate = new Date(date.getTime());
			else if (typeof date !== "string" &&
				date.toFixed !== undefined)
				parsedDate = new Date(date);
			else if (typeof date === "string") {
				var format = givenFormat || (self.config || flatpickr.defaultConfig).dateFormat;
				var datestr = String(date).trim();
				if (datestr === "today") {
					parsedDate = new Date();
					timeless = true;
				}
				else if (/Z$/.test(datestr) ||
					/GMT$/.test(datestr))
					parsedDate = new Date(date);
				else if (self.config && self.config.parseDate)
					parsedDate = self.config.parseDate(date, format);
				else {
					parsedDate =
						!self.config || !self.config.noCalendar
							? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
							: new Date(new Date().setHours(0, 0, 0, 0));
					var matched = void 0, ops = [];
					for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
						var token = format[i];
						var isBackSlash = token === "\\";
						var escaped = format[i - 1] === "\\" || isBackSlash;
						if (tokenRegex[token] && !escaped) {
							regexStr += tokenRegex[token];
							var match = new RegExp(regexStr).exec(date);
							if (match && (matched = true)) {
								ops[token !== "Y" ? "push" : "unshift"]({
									fn: revFormat[token],
									val: match[++matchIndex],
								});
							}
						}
						else if (!isBackSlash)
							regexStr += ".";
						ops.forEach(function (_a) {
							var fn = _a.fn, val = _a.val;
							return (parsedDate =
								fn(parsedDate, val, self.l10n) || parsedDate);
						});
					}
					parsedDate = matched ? parsedDate : undefined;
				}
			}
			if (!(parsedDate instanceof Date)) {
				self.config.errorHandler(new Error("Invalid date provided: " + date_orig));
				return undefined;
			}
			if (timeless === true)
				parsedDate.setHours(0, 0, 0, 0);
			return parsedDate;
		}
		function setupInputs() {
			self.input = self.config.wrap
				? element.querySelector("[data-input]")
				: element;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			if (!self.input) {
				self.config.errorHandler(new Error("Invalid input element specified"));
				return;
			}
<<<<<<< HEAD
			// hack: store previous type to restore it after destroy()
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self.input._type = self.input.type;
			self.input.type = "text";
			self.input.classList.add("flatpickr-input");
			self._input = self.input;
			if (self.config.altInput) {
<<<<<<< HEAD
				// replicate self.element
				self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
=======
				self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				self._input = self.altInput;
				self.altInput.placeholder = self.input.placeholder;
				self.altInput.disabled = self.input.disabled;
				self.altInput.required = self.input.required;
<<<<<<< HEAD
				self.altInput.tabIndex = self.input.tabIndex;
				self.altInput.type = "text";
				self.input.setAttribute("type", "hidden");
=======
				self.altInput.type = "text";
				self.input.type = "hidden";
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				if (!self.config.static && self.input.parentNode)
					self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
			}
			if (!self.config.allowInput)
				self._input.setAttribute("readonly", "readonly");
<<<<<<< HEAD
			updatePositionElement();
		}
		function updatePositionElement() {
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self._positionElement = self.config.positionElement || self._input;
		}
		function setupMobile() {
			var inputType = self.config.enableTime
<<<<<<< HEAD
				? self.config.noCalendar
					? "time"
					: "datetime-local"
				: "date";
			self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
			self.mobileInput.tabIndex = 1;
			self.mobileInput.type = inputType;
			self.mobileInput.disabled = self.input.disabled;
			self.mobileInput.required = self.input.required;
=======
				? self.config.noCalendar ? "time" : "datetime-local"
				: "date";
			self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
			self.mobileInput.step = self.input.getAttribute("step") || "any";
			self.mobileInput.tabIndex = 1;
			self.mobileInput.type = inputType;
			self.mobileInput.disabled = self.input.disabled;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self.mobileInput.placeholder = self.input.placeholder;
			self.mobileFormatStr =
				inputType === "datetime-local"
					? "Y-m-d\\TH:i:S"
<<<<<<< HEAD
					: inputType === "date"
						? "Y-m-d"
						: "H:i:S";
			if (self.selectedDates.length > 0) {
=======
					: inputType === "date" ? "Y-m-d" : "H:i:S";
			if (self.selectedDates.length) {
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
			}
			if (self.config.minDate)
				self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
			if (self.config.maxDate)
				self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
<<<<<<< HEAD
			if (self.input.getAttribute("step"))
				self.mobileInput.step = String(self.input.getAttribute("step"));
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self.input.type = "hidden";
			if (self.altInput !== undefined)
				self.altInput.type = "hidden";
			try {
				if (self.input.parentNode)
					self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
			}
			catch (_a) { }
			bind(self.mobileInput, "change", function (e) {
<<<<<<< HEAD
				self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
=======
				self.setDate(e.target.value, false, self.mobileFormatStr);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				triggerEvent("onChange");
				triggerEvent("onClose");
			});
		}
<<<<<<< HEAD
		function toggle(e) {
			if (self.isOpen === true)
				return self.close();
			self.open(e);
		}
		function triggerEvent(event, data) {
			// If the instance has been destroyed already, all hooks have been removed
			if (self.config === undefined)
				return;
=======
		function toggle() {
			if (self.isOpen)
				return self.close();
			self.open();
		}
		function triggerEvent(event, data) {
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			var hooks = self.config[event];
			if (hooks !== undefined && hooks.length > 0) {
				for (var i = 0; hooks[i] && i < hooks.length; i++)
					hooks[i](self.selectedDates, self.input.value, self, data);
			}
			if (event === "onChange") {
				self.input.dispatchEvent(createEvent("change"));
<<<<<<< HEAD
				// many front-end frameworks bind to the input event
=======
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
				self.input.dispatchEvent(createEvent("input"));
			}
		}
		function createEvent(name) {
			var e = document.createEvent("Event");
			e.initEvent(name, true, true);
			return e;
		}
		function isDateSelected(date) {
			for (var i = 0; i < self.selectedDates.length; i++) {
<<<<<<< HEAD
				var selectedDate = self.selectedDates[i];
				if (selectedDate instanceof Date &&
					compareDates(selectedDate, date) === 0)
=======
				if (compareDates(self.selectedDates[i], date) === 0)
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
					return "" + i;
			}
			return false;
		}
		function isDateInRange(date) {
			if (self.config.mode !== "range" || self.selectedDates.length < 2)
				return false;
			return (compareDates(date, self.selectedDates[0]) >= 0 &&
				compareDates(date, self.selectedDates[1]) <= 0);
		}
		function updateNavigationCurrentMonth() {
			if (self.config.noCalendar || self.isMobile || !self.monthNav)
				return;
<<<<<<< HEAD
			self.yearElements.forEach(function (yearElement, i) {
				var d = new Date(self.currentYear, self.currentMonth, 1);
				d.setMonth(self.currentMonth + i);
				if (self.config.showMonths > 1 ||
					self.config.monthSelectorType === "static") {
					self.monthElements[i].textContent =
						monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
				}
				else {
					self.monthsDropdownContainer.value = d.getMonth().toString();
				}
				yearElement.value = d.getFullYear().toString();
			});
=======
			self.currentMonthElement.textContent =
				monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n) + " ";
			self.currentYearElement.value = self.currentYear.toString();
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			self._hidePrevMonthArrow =
				self.config.minDate !== undefined &&
				(self.currentYear === self.config.minDate.getFullYear()
					? self.currentMonth <= self.config.minDate.getMonth()
					: self.currentYear < self.config.minDate.getFullYear());
			self._hideNextMonthArrow =
				self.config.maxDate !== undefined &&
				(self.currentYear === self.config.maxDate.getFullYear()
					? self.currentMonth + 1 > self.config.maxDate.getMonth()
					: self.currentYear > self.config.maxDate.getFullYear());
		}
<<<<<<< HEAD
		function getDateStr(specificFormat) {
			var format = specificFormat ||
				(self.config.altInput ? self.config.altFormat : self.config.dateFormat);
			return self.selectedDates
				.map(function (dObj) { return self.formatDate(dObj, format); })
				.filter(function (d, i, arr) {
					return self.config.mode !== "range" ||
						self.config.enableTime ||
						arr.indexOf(d) === i;
				})
				.join(self.config.mode !== "range"
					? self.config.conjunction
					: self.l10n.rangeSeparator);
		}
		/**
		 * Updates the values of inputs associated with the calendar
		 */
		function updateValue(triggerChange) {
			if (triggerChange === void 0) { triggerChange = true; }
=======
		function updateValue(triggerChange) {
			if (triggerChange === void 0) { triggerChange = true; }
			if (!self.selectedDates.length)
				return self.clear(triggerChange);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			if (self.mobileInput !== undefined && self.mobileFormatStr) {
				self.mobileInput.value =
					self.latestSelectedDateObj !== undefined
						? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
						: "";
			}
<<<<<<< HEAD
			self.input.value = getDateStr(self.config.dateFormat);
			if (self.altInput !== undefined) {
				self.altInput.value = getDateStr(self.config.altFormat);
=======
			var joinChar = self.config.mode !== "range"
				? self.config.conjunction
				: self.l10n.rangeSeparator;
			self.input.value = self.selectedDates
				.map(function (dObj) { return self.formatDate(dObj, self.config.dateFormat); })
				.join(joinChar);
			if (self.altInput !== undefined) {
				self.altInput.value = self.selectedDates
					.map(function (dObj) { return self.formatDate(dObj, self.config.altFormat); })
					.join(joinChar);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			}
			if (triggerChange !== false)
				triggerEvent("onValueUpdate");
		}
<<<<<<< HEAD
		function onMonthNavClick(e) {
			var eventTarget = getEventTarget(e);
			var isPrevMonth = self.prevMonthNav.contains(eventTarget);
			var isNextMonth = self.nextMonthNav.contains(eventTarget);
			if (isPrevMonth || isNextMonth) {
				changeMonth(isPrevMonth ? -1 : 1);
			}
			else if (self.yearElements.indexOf(eventTarget) >= 0) {
				eventTarget.select();
			}
			else if (eventTarget.classList.contains("arrowUp")) {
				self.changeYear(self.currentYear + 1);
			}
			else if (eventTarget.classList.contains("arrowDown")) {
				self.changeYear(self.currentYear - 1);
			}
		}
		function timeWrapper(e) {
			e.preventDefault();
			var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
			if (self.amPM !== undefined && eventTarget === self.amPM) {
				self.amPM.textContent =
					self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
			}
			var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
				(isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
=======
		function onMonthNavScroll(e) {
			e.preventDefault();
			var isYear = self.currentYearElement.parentNode &&
				self.currentYearElement.parentNode.contains(e.target);
			if (e.target === self.currentMonthElement || isYear) {
				var delta = mouseDelta(e);
				if (isYear) {
					changeYear(self.currentYear + delta);
					e.target.value = self.currentYear.toString();
				}
				else
					self.changeMonth(delta, true, false);
			}
		}
		function onMonthNavClick(e) {
			var isPrevMonth = self.prevMonthNav.contains(e.target);
			var isNextMonth = self.nextMonthNav.contains(e.target);
			if (isPrevMonth || isNextMonth)
				changeMonth(isPrevMonth ? -1 : 1);
			else if (e.target === self.currentYearElement) {
				e.preventDefault();
				self.currentYearElement.select();
			}
			else if (e.target.className === "arrowUp")
				self.changeYear(self.currentYear + 1);
			else if (e.target.className === "arrowDown")
				self.changeYear(self.currentYear - 1);
		}
		function timeWrapper(e) {
			e.preventDefault();
			var isKeyDown = e.type === "keydown", input = e.target;
			if (self.amPM !== undefined && e.target === self.amPM) {
				self.amPM.textContent =
					self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
			}
			var min = Number(input.min), max = Number(input.max), step = Number(input.step), curValue = parseInt(input.value, 10), delta = e.delta ||
				(isKeyDown
					? e.which === 38 ? 1 : -1
					: Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
			var newValue = curValue + step * delta;
			if (typeof input.value !== "undefined" && input.value.length === 2) {
				var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
				if (newValue < min) {
					newValue =
						max +
						newValue +
						int(!isHourElem) +
						(int(isHourElem) && int(!self.amPM));
					if (isMinuteElem)
						incrementNumInput(undefined, -1, self.hourElement);
				}
				else if (newValue > max) {
					newValue =
						input === self.hourElement ? newValue - max - int(!self.amPM) : min;
					if (isMinuteElem)
						incrementNumInput(undefined, 1, self.hourElement);
				}
				if (self.amPM &&
					isHourElem &&
					(step === 1
						? newValue + curValue === 23
						: Math.abs(newValue - curValue) > step)) {
					self.amPM.textContent =
						self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
				}
				input.value = pad(newValue);
			}
		}
		init();
		return self;
	}
<<<<<<< HEAD
	/* istanbul ignore next */
	function _flatpickr(nodeList, config) {
		// static list
		var nodes = Array.prototype.slice
			.call(nodeList)
			.filter(function (x) { return x instanceof HTMLElement; });
=======
	function _flatpickr(nodeList, config) {
		var nodes = Array.prototype.slice.call(nodeList);
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		var instances = [];
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			try {
				if (node.getAttribute("data-fp-omit") !== null)
					continue;
				if (node._flatpickr !== undefined) {
					node._flatpickr.destroy();
					node._flatpickr = undefined;
				}
				node._flatpickr = FlatpickrInstance(node, config || {});
				instances.push(node._flatpickr);
			}
			catch (e) {
				console.error(e);
			}
		}
		return instances.length === 1 ? instances[0] : instances;
	}
<<<<<<< HEAD
	/* istanbul ignore next */
	if (typeof HTMLElement !== "undefined" &&
		typeof HTMLCollection !== "undefined" &&
		typeof NodeList !== "undefined") {
		// browser env
=======
	if (typeof HTMLElement !== "undefined") {
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
			return _flatpickr(this, config);
		};
		HTMLElement.prototype.flatpickr = function (config) {
			return _flatpickr([this], config);
		};
	}
<<<<<<< HEAD
	/* istanbul ignore next */
	var flatpickr = function (selector, config) {
		if (typeof selector === "string") {
			return _flatpickr(window.document.querySelectorAll(selector), config);
		}
		else if (selector instanceof Node) {
			return _flatpickr([selector], config);
		}
		else {
			return _flatpickr(selector, config);
		}
	};
	/* istanbul ignore next */
	flatpickr.defaultConfig = {};
=======
	var flatpickr;
	flatpickr = function (selector, config) {
		if (selector instanceof NodeList)
			return _flatpickr(selector, config);
		else if (typeof selector === "string")
			return _flatpickr(window.document.querySelectorAll(selector), config);
		return _flatpickr([selector], config);
	};
	if (typeof window === "object")
		window.flatpickr = flatpickr;
	flatpickr.defaultConfig = defaults;
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
	flatpickr.l10ns = {
		en: __assign({}, english),
		default: __assign({}, english),
	};
	flatpickr.localize = function (l10n) {
<<<<<<< HEAD
		flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
	};
	flatpickr.setDefaults = function (config) {
		flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
	};
	flatpickr.parseDate = createDateParser({});
	flatpickr.formatDate = createDateFormatter({});
	flatpickr.compareDates = compareDates;
	/* istanbul ignore next */
	if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
=======
		flatpickr.l10ns.default = __assign({}, flatpickr.l10ns.default, l10n);
	};
	flatpickr.setDefaults = function (config) {
		flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
	};
	if (typeof jQuery !== "undefined") {
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
		jQuery.fn.flatpickr = function (config) {
			return _flatpickr(this, config);
		};
	}
	Date.prototype.fp_incr = function (days) {
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
	};
<<<<<<< HEAD
	if (typeof window !== "undefined") {
		window.flatpickr = flatpickr;
	}

	return flatpickr;

})));
=======
	var flatpickr$1 = flatpickr;

	return flatpickr$1;

})));
>>>>>>> 7b25a0ec9f494c2c35ff35e9ef68eb5652df1fe4
