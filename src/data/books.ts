/**
 * The bookshelf on Elsewhere — edit here, not in components.
 *
 * Each book: title, author, cover (imported from src/assets/books/), and two
 * physical hints the shelf uses: `size` sets the standing height ('tall' for
 * hardcovers, 'short' for mass-market paperbacks, 'standard' otherwise) and
 * `tilt` is an optional resting angle in degrees for the casually shelved.
 *
 * `shelves` is an array of shelf rows. Reorder freely; move books between
 * shelves by moving them between arrays. Covers live in src/assets/books/
 * (sourced from the Open Library covers API), one JPEG per book.
 */

import type { ImageMetadata } from 'astro';

import sixOfCrows from '../assets/books/six-of-crows.jpg';
import crookedKingdom from '../assets/books/crooked-kingdom.jpg';
import theAtlasSix from '../assets/books/the-atlas-six.jpg';
import evelynHugo from '../assets/books/evelyn-hugo.jpg';
import bunny from '../assets/books/bunny.jpg';
import aloneWithYou from '../assets/books/alone-with-you-in-the-ether.jpg';
import weWereLiars from '../assets/books/we-were-liars.jpg';
import nineteenEightyFour from '../assets/books/nineteen-eighty-four.jpg';
import theGreatGatsby from '../assets/books/the-great-gatsby.jpg';
import dorianGray from '../assets/books/dorian-gray.jpg';
import animalFarm from '../assets/books/animal-farm.jpg';
import theHungerGames from '../assets/books/the-hunger-games.jpg';
import prideAndPrejudice from '../assets/books/pride-and-prejudice.jpg';
import loveless from '../assets/books/loveless.jpg';
import daisyJones from '../assets/books/daisy-jones.jpg';
import theLightningThief from '../assets/books/the-lightning-thief.jpg';
import philosophersStone from '../assets/books/philosophers-stone.jpg';

export type BookSize = 'tall' | 'standard' | 'short';

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: ImageMetadata;
  size?: BookSize;
  /** resting angle in degrees; leave out for upright */
  tilt?: number;
}

export const shelves: Book[][] = [
  [
    { id: 'six-of-crows', title: 'Six of Crows', author: 'Leigh Bardugo', cover: sixOfCrows, size: 'tall' },
    { id: 'crooked-kingdom', title: 'Crooked Kingdom', author: 'Leigh Bardugo', cover: crookedKingdom, size: 'tall' },
    { id: 'the-atlas-six', title: 'The Atlas Six', author: 'Olivie Blake', cover: theAtlasSix, size: 'tall', tilt: -0.9 },
    { id: 'alone-with-you', title: 'Alone with You in the Ether', author: 'Olivie Blake', cover: aloneWithYou, tilt: 0.9 },
    { id: 'bunny', title: 'Bunny', author: 'Mona Awad', cover: bunny, size: 'tall' },
    { id: 'evelyn-hugo', title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', cover: evelynHugo },
    { id: 'daisy-jones', title: 'Daisy Jones & The Six', author: 'Taylor Jenkins Reid', cover: daisyJones, size: 'tall', tilt: -0.8 },
    { id: 'we-were-liars', title: 'We Were Liars', author: 'E. Lockhart', cover: weWereLiars },
    { id: 'loveless', title: 'Loveless', author: 'Alice Oseman', cover: loveless },
  ],
  [
    { id: 'philosophers-stone', title: 'Harry Potter and the Philosopher’s Stone', author: 'J.K. Rowling', cover: philosophersStone, size: 'tall' },
    { id: 'the-lightning-thief', title: 'The Lightning Thief', author: 'Rick Riordan', cover: theLightningThief, tilt: -0.7 },
    { id: 'the-hunger-games', title: 'The Hunger Games', author: 'Suzanne Collins', cover: theHungerGames },
    { id: 'nineteen-eighty-four', title: '1984', author: 'George Orwell', cover: nineteenEightyFour, size: 'short' },
    { id: 'animal-farm', title: 'Animal Farm', author: 'George Orwell', cover: animalFarm, size: 'short', tilt: 1.1 },
    { id: 'the-great-gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: theGreatGatsby },
    { id: 'dorian-gray', title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', cover: dorianGray },
    { id: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', cover: prideAndPrejudice },
  ],
];
