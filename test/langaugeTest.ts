// import getNextLanguage from '../src/components/locale-switcher';

// describe('getNextLanguage', () => {
//     it('should return the next language in the list', () => {
//         const currentLanguage = 'en';
//         const availableLanguages = ['en', 'fr', 'es'];
//         const expectedLanguage = 'fr';

//         const nextLanguage = getNextLanguage(currentLanguage, availableLanguages);

//         expect(nextLanguage).toEqual(expectedLanguage);
//     });

//     it('should return the first language if the current language is the last in the list', () => {
//         const currentLanguage = 'es';
//         const availableLanguages = ['en', 'fr', 'es'];
//         const expectedLanguage = 'en';

//         const nextLanguage = getNextLanguage(currentLanguage, availableLanguages);

//         expect(nextLanguage).toEqual(expectedLanguage);
//     });

//     // Add more test cases here...
// });