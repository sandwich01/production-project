import { getData } from './getData';
import axios from 'axios';
// Написание тестов для асинхронного запроса к серверу для получения пользователей

jest.mock('axios') // Мокаем сторонний модуль для тестов и теперь можем с ним работать
const mockedAxios = axios as jest.Mocked<typeof axios>; // Приводим типы для axios, чтобы ts понимал, что это mock значения для тестов

//Запуск нескольких сценариев тестирования
describe('getData', () => {
    let response: any;
    beforeEach(() => {
        // Пример того что должен вернуть бэк в response.data
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                        "street": "Victor Plains",
                        "suite": "Suite 879",
                        "city": "Wisokyburgh",
                        "zipcode": "90566-7771",
                        "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                },
            ]
        }
    })
    test('Валидные значения getData', async () => {
        mockedAxios.get.mockResolvedValue(response);
        const data = await getData()
        expect(data).toEqual(['1', '2'])
        expect(data).toMatchSnapshot() // Создание снэпшотов для тестирования того, что нам например возвращает запрос, или какая вложеность в полученой переменной
    })
})