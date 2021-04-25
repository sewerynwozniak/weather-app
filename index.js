var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.cityInput = document.querySelector('.cityInput');
        this.btnAdd = document.querySelector('.btnAdd');
        this.weatherWrapper = document.querySelector('.weatherWrapper');
        this.btnAdd.addEventListener('click', function () { _this.getInput(); });
        this.apiKey = '4c97ef52cb86a6fa1cff027ac4a37671';
        this.loadCityFromLocalStore();
    }
    App.prototype.getInput = function () {
        return __awaiter(this, void 0, void 0, function () {
            var city;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        city = this.cityInput.value;
                        return [4 /*yield*/, this.getData(city)];
                    case 1:
                        _a.sent();
                        this.saveData(city);
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.getData = function (city) {
        return __awaiter(this, void 0, void 0, function () {
            var apiCall, resposnse, weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        apiCall = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey;
                        return [4 /*yield*/, fetch(apiCall)];
                    case 1:
                        resposnse = _a.sent();
                        return [4 /*yield*/, resposnse.json()];
                    case 2:
                        weatherData = _a.sent();
                        this.displayWeather(weatherData);
                        return [2 /*return*/];
                }
            });
        });
    };
    App.prototype.saveData = function (city) {
        var cityId = localStorage.length;
        localStorage.setItem("city" + cityId, city);
    };
    App.prototype.loadCityFromLocalStore = function () {
        for (var i = 0; i < localStorage.length; i++) {
            var key = "city" + i;
            this.getData(localStorage[key]);
        }
    };
    App.prototype.displayWeather = function (weatherData) {
        var city = weatherData.name;
        var weather = weatherData.weather[0]['main'];
        var temp = Math.round(weatherData.main['temp']);
        var pressure = weatherData.main['pressure'];
        var humidity = weatherData.main['humidity'];
        var weatherTemplate = "\n        <div class=\"singleWeatherWrapper\">\n        <h3 class=\"city\">" + city + "</h3>\n        <span class=\"data\">" + weather + "</span>\n        <div class=\"innerSingleWrapper\">\n            <div class=\"wrapperLeft\">\n                <h6 class=\"temp\">" + temp + "\u00B0C</h6>\n            </div>\n            <div class=\"wrapperRight\">\n                <div class=\"wrapperUpper\">\n                    <span class=\"data\">Ci\u015Bnienie</span>\n                    <span class=\"data\">" + pressure + "</span>\n                </div>\n                <div class=\"wrapperLower\">\n                    <span class=\"data\">Wilgotno\u015B\u0107</span>\n                    <span class=\"data\">" + humidity + "</span>\n                </div>\n            </div>\n        </div>\n        </div>\n        ";
        this.weatherWrapper.innerHTML += weatherTemplate;
    };
    return App;
}());
var app = new App();
