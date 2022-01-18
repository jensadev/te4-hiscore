'use strict';

const prefix = ['åke', 'dubbel', 'laser', 'mördar', '360', 'förstörar', 'mosar', 'krossar'];
const names = ['åke', 'grävling', 'yxolf', 'dude', 'noscope'];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const game = await queryInterface.rawSelect('Games', {
            where: {
              name: 'Halflife 3',
            },
          }, ['id']);

        for (let i = 0; i < 10; i++) {
            const name =
                prefix[Math.floor(Math.random() * prefix.length)] +
                '_' +
                names[Math.floor(Math.random() * names.length)];

            await queryInterface.bulkInsert(
                'Scores',
                [
                    {
                        gameId: game,
                        player: name,
                        points: Math.random() * 100,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                ],
                {}
            );
        }
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Scores', null, {});
    },
};
