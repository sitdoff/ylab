## Задание №1

### Задание

```
Попробуйте сделать удобную и красивую форму аутентификации через почту и пароль
— но без готовых библиотек компонентов.
Нужно продумать отправку почты/пароля на сервер, но сервер можно не делать,
просто замокав `fetch()`.

Можно использовать React или сделать на чистом JS.
Результат выложить на git, в идеале чтобы его сразу можно было бы посмотреть
через github pages или vercel (делается буквально в пару кликов).

Это задание служит обзором ваших имеющихся навыков и способности к обучению,
выполните задание по мере ваших знаний и понимания задачи, если не умеете работать
с git и не смогли разобраться, пришлите в архиве, не разобрались как задеплоить,
сделайте несколько скриншотов, не разобрались как мокать методы,
напишите свою функцию для эмуляции работы с сервером, умеете делать responsive,
сделайте, если хотите продемонстрировать эти знания.

Будем смотреть на все, на стиль кодирования, на дизайн, на UX.
```

### Результат

Создана страница с формой аутентификации с помощью React. При отправке валидных данных возвращается условный токен.
У формы есть валидация введеных данных. Если данные не валидны, то нельзя подтвердить отправку(кнопка неактивна).
fetch() мокнут и не делает никаких запросов на сервер. Данные ответа генерируются вспомогательной функцией.
Готовый результат загружен на github pages.

https://sitdoff.github.io/ylab/
