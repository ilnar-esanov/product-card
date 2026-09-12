// task #2 - Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((number) => number >= 5);

// task #3 - Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.

const fruits = ['apple', 'pear', 'cherry', 'watermelon'];

const fruitChecker = (fruit) => {
  if (typeof fruit !== 'string') {
    return 'Название фрукта должно быть строкой!';
  }
  return fruits.includes(fruit);
};
console.log(fruitChecker('apple'));

// task #4 - Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const reverseArray = (array1) => array1.reverse();
reverseArray(numbers);
reverseArray(fruits);

// task #6 - import variable
import { comments } from './comments.js';

// task #7 - Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

console.log(comments.filter((comment) => comment.email.includes('.com')));

// task #8 - Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1

const filteredComments = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

// task #9 - Перебрать массив, что бы объекты состояли только из айди и имени

const updatedComments = comments.map((comment) => ({
  id: comment.id,
  name: comment.name,
}));

// task #10 - Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const checkedComments = comments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180,
}));

// task #11 - Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

const emailsReduce = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);

const commentsWithEmails = comments.map((comment) => comment.email);

// task #12 - Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const emailsToString1 = emailsReduce.toString();

const emailsToString2 = emailsReduce.join(', ');
