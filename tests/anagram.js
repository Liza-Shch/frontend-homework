'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Проверка на отсутсвие анаграмм', function(assert) {
		const input = [
			'дом', 'забор', 'ремень',
			'село', 'робот'
		];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Все слова являются анаграммами друг друга', function(assert) {
		const input = [
			'кармоист', 'кострами', 'матроски',
			'острамки', 'ситарком', 'ростками',
			'масторки', 'сироткам', 'стариком'
		];

		const output = [
		    [ 'кармоист', 'кострами', 'масторки',
			  'матроски', 'острамки', 'ростками',
			  'сироткам', 'ситарком', 'стариком'
			]
		];

		assert.deepEqual(anagram(input), output);
	});
});
