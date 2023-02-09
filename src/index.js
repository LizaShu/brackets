module.exports = function check(str, bracketsConfig) {

  /* let brackets = bracketsConfig.flat().join('') //приводит заданый массив к виду, если он, например двумерный, к одномерному виду
    let stack = [];

    for (let bracket of str) { //перебор строки по элементам
        let index = brackets.indexOf(bracket); //ввоод переменной индекса для массива brackets
        if (index % 2 === 0) { //если индекс четный, те 0, 2, 4, 6..., что соответсвует отрывающим скобкам из массива bracketsConfig
            bracket === brackets[index + 1] && stack[stack.length - 1] === index ? //если открывающая скобка равна заакрывающей из конфиги
                stack.pop() : stack.push(index) // если верно, то удалить последний элемент массива stack  и вывести его, если не верное, добавить в конец stack индекс элемента, который не совпадает 

        } else if (stack.pop() !== index - 1) return false;// если последний элемент (число, индекс) stack не равен 

    }


    return stack.length === 0;} */

    let brackets = bracketsConfig.flat().join('') //приводит заданый массив к виду, если он, например двумерный, к одномерному виду
    let stack = [];
    

    for (let bracket of str) { //перебор строки по элементам
        let index = brackets.indexOf(bracket); //ввод переменной индекса для массива brackets
        if (index % 2 === 0) { //если индекс четный, те 0, 2, 4, 6..., что соответсвует отрывающим скобкам из массива bracketsConfig
          stack.push(index)}
          else if (index % 2 !== 0) {
            stack.pop()
         /*  stack.slice[-1];*/
           /* if (!stack.pop()) {
              return false;*/
            }
          }
          

    
  return stack.length === 0;
  }


    /*

    const checkIsBalanced = (expression) => {
      // Инициализация стека
      const stack = [];
      // Проходим по каждому символу в строке
      for (const symbol of expression) {
        // Смотрим, открывающий или закрывающий
        // Если символ открывающий
        if (symbol === '(') {
          // Добавляем его в стек
          stack.push(symbol);
        // Если символ закрывающий
        } else if (symbol === ')') {
          // Достаем из стека последний элемент
          // Если стек пуст, значит для закрывающего не нашлось открывающего
          // Значит баланса нет, возвращаем false
          if (!stack.pop()) {
            return false;
          }
        }
      }
    
      // Проверяем, что стек пуст
      // Если в стеке остались элементы, то не все открывающие скобки закрыты,
      // а значит баланса нет
      return stack.length === 0;
    };*/