/* eslint-env jest */
const apiIceAndFire = require('./anapioficeandfire');

jest.mock('./anapioficeandfire')


const {getBooks, getListOfRestEndPoint} = require('./anapioficeandfire')

describe('An API of Ice and Fire API Tests', () => {
    test('getBooks fetches correct data', async () => {
        getBooks.mockResolvedValueOnce({
            entity: {
                "A Game of Thrones": "https://www.anapioficeandfire.com/api/books/1",
                "A Clash of Kings": "https://www.anapioficeandfire.com/api/books/2",
            },
        });

        const data = await getBooks();
        expect(data.entity).toHaveProperty('A Game of Thrones');
        expect(data.entity['A Game of Thrones']).toBe(
            'https://www.anapioficeandfire.com/api/books/1'
        );
    });

    test('getListOfRestEndPoint fetches correct endpoints', async () => {
        getListOfRestEndPoint.mockResolvedValueOnce({
            entity: {
                books: 'https://www.anapioficeandfire.com/api/books',
                characters: 'https://www.anapioficeandfire.com/api/characters',
                houses: 'https://www.anapioficeandfire.com/api/houses',
            },
        });

        const data = await getListOfRestEndPoint();
        expect(data.entity).toHaveProperty('houses');
        expect(data.entity.houses).toBe(
            'https://www.anapioficeandfire.com/api/houses'
        );
    });
});