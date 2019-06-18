const faker = require('faker');
const uuid4 = require('uuid/v4');
const fs = require('fs');

// Create Authors first
const authors = [];
const authorIds = [];
for (let i = 0; i < 20; i++) {
	const gender = faker.random.boolean();
	const id = uuid4();
	const author = {
		id,
		fname: faker.name.firstName(gender ? 0 : 1),
		lname: faker.name.lastName(gender ? 0 : 1),
		gender: gender ? 'male' : 'female',
	};
	authors.push(author);
	authorIds.push(id);
}
// write to disc
fs.writeFileSync(
	__dirname.concat('/authors.json'),
	JSON.stringify(authors, null, 2)
);
console.log('\nDone writing authors.json');

// Create books
const books = [];
for (let i = 0; i < 50; i++) {
	const book = {
		id: uuid4(),
		title: faker.company.catchPhrase(),
		authorId: authorIds[faker.random.number(authorIds.length)],
	};
	books.push(book);
}
// write to disc
fs.writeFileSync(
	__dirname.concat('/books.json'),
	JSON.stringify(books, null, 2)
);
console.log('\nDone writing books.json');
