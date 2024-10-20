document.getElementById('submit').addEventListener('click', function() {
    const basePrice = 100;

    // Получение коэффициентов
    const educationCoefficient = parseFloat(document.getElementById('education').value) || 1;
    const netWorthCoefficient = parseFloat(document.getElementById('networth').value) || 1;
    const casteValue = parseInt(document.getElementById('caste').value) || 0;

    // Считаем навыки
    let skillsValue = 0;
    if (document.getElementById('music').checked) skillsValue += 10;
    if (document.getElementById('cooking').checked) skillsValue += 20;
    if (document.getElementById('easygoing').checked) skillsValue += 15;
    if (document.getElementById('singing').checked) skillsValue += 10;

    // Получаем коэффициент возраста
    const ageElements = document.getElementsByName('age');
    let ageCoefficient = 1;
    for (const element of ageElements) {
        if (element.checked) {
            ageCoefficient = parseFloat(element.value);
            break;
        }
    }

    // Репутация
    let reputationCoefficient = 1;
    if (document.getElementById('gossip-parents').checked) reputationCoefficient *= 0.85;
    if (document.getElementById('gossip-character').checked) reputationCoefficient *= 0.9;
    if (document.getElementById('general-gossip').checked) reputationCoefficient -= 20;

    // Рассчитываем итоговую цену
    let finalPrice = basePrice
        * educationCoefficient
        * netWorthCoefficient
        + casteValue
        + skillsValue
        * ageCoefficient
        * reputationCoefficient;

    // Обновляем отображение итоговой цены
    document.getElementById('final-price').innerText = `Final Price: $${finalPrice.toFixed(2)}`;
});

