'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

var _factory = require('../Repositories/factory');

var _factory2 = _interopRequireDefault(_factory);

var _ListPopularMoviesUseCase = require('./ListPopularMoviesUseCase');

var _ListPopularMoviesUseCase2 = _interopRequireDefault(_ListPopularMoviesUseCase);

var _SearchByNameMoviesUseCase = require('./SearchByNameMoviesUseCase');

var _SearchByNameMoviesUseCase2 = _interopRequireDefault(_SearchByNameMoviesUseCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoviesUseCasesFactory = (_temp = _class = function MoviesUseCasesFactory() {
  (0, _classCallCheck3.default)(this, MoviesUseCasesFactory);
}, _class.listPopularMoviesUseCase = function (_ref) {
  var config = _ref.config;
  return new _ListPopularMoviesUseCase2.default({
    config: config,
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _class.searchByNameMoviesUseCase = function (_ref2) {
  var config = _ref2.config;
  return new _SearchByNameMoviesUseCase2.default({
    config: config,
    repository: _factory2.default.httpMoviesRepository({ config: config })
  });
}, _temp);
exports.default = MoviesUseCasesFactory;
module.exports = exports.default;