   // Express кітапханасын қосу
   const express = require('express');
   const app = express();
   // Негізгі маршрут
   app.get('/', (req, res) => {
       res.send('Қош келдіңіз! Бұл Node.js және Express.js сервері.');
   });
   // Басқа маршрут
   app.get('/about', (req, res) => {
       res.send('Бұл сервер туралы ақпарат беті.');
   });
   // Логгер орта қабаты
   app.use((req, res, next) => {
       console.log(`${req.method} сұранысы ${req.url} мекенжайына жіберілді.`);
       next();
   });
 // Серверді тыңдау үшін портты орнату
   const port = 3000;
   app.listen(port, () => {
       console.log(`Сервер ${port}-портта жұмыс істеп тұр.`);
   });
   app.get('/async', async (req, res) => {
    const data = await getDataFromDB(); // В качестве примера использования
    res.send('Асинхронды маршруттың деректері: ' + data);
});

// Пример функции для асинхронного маршрута
async function getDataFromDB() {
    // Имитация получения данных из базы данных
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Деректер мысалы');
        }, 2000);
    });
}