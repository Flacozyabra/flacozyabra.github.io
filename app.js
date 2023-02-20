// Получаем все нужные элементы
const dosePerFraction = document.querySelector('input[name="dose_per_fraction"]');
const totalFractions = document.querySelector('input[name="total_fractions"]');
const totalDose = document.querySelector('input[name="total_dose"]');
const ab1 = document.querySelector('input[name="ab_1"]');
const bed1 = document.querySelector('input[name="bed_1"]');
const eqd21 = document.querySelector('input[name="eqd2_1"]');
const ab2 = document.querySelector('input[name="ab_2"]');
const bed2 = document.querySelector('input[name="bed_2"]');
const eqd22 = document.querySelector('input[name="eqd2_2"]');

// Обработчик события ввода значений в поля
dosePerFraction.addEventListener('input', calculateValues);
totalFractions.addEventListener('input', calculateValues);
ab1.addEventListener('input', calculateValues)
ab2.addEventListener('input', calculateValues)

// Функция для расчета всех значений
function calculateValues() {
// Рассчитываем значение totalDose
const dose = parseFloat(dosePerFraction.value);
const fractions = parseInt(totalFractions.value);
const total = dose * fractions;
totalDose.value = total.toFixed(1);

// Рассчитываем значение bed1
const ab_1 = parseFloat(ab1.value);
const bed_1 = dose * (1 + dose / ab_1) * fractions;
bed1.value = bed_1.toFixed(2);

// Рассчитываем значение eqd21
const eqd2_1 = ((dose * (1 + dose / ab_1)) / (1 + 2 / ab_1)) * fractions;
eqd21.value = eqd2_1.toFixed(2);

// Рассчитываем значение bed2
const ab_2 = parseFloat(ab2.value);
const bed_2 = dose * (1 + dose / ab_2) * fractions;
bed2.value = bed_2.toFixed(2);

//Рассчитываем значение eqd22
const eqd2_2 = ((dose * (1 + dose / ab_2)) / (1 + 2 / ab_2)) * fractions;
eqd22.value = eqd2_2.toFixed(2);
}
























// // получаем кнопку Calculate
// const calculateBtn = document.querySelector('button');

// // добавляем обработчик события на клик по кнопке
// calculateBtn.addEventListener('click', function() {

//   // получаем значения из полей input-name_1 и input-name_2
//   const input1 = parseFloat(document.querySelector('input[name="input-name_1"]').value);
//   const input2 = parseFloat(document.querySelector('input[name="input-name_2"]').value);

//   // складываем значения и записываем результат в поле input-name_3
//   document.querySelector('input[name="input-name_3"]').value = input1 + input2;
// });
