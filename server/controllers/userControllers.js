const { Book, allBooks } = require('../models');

module.exports = {
  async getAllBooks(req, res) {
    const allBooks = await Book.find({});

    if (!allBooks) {
      return res.status(400).json({ message: 'No books found' });
    }
    res.status(200).json(allBooks);
  },
};
async searchBooks(req, res) {
  const book = await Matchup.findOneAndUpdate(
    { _id: req.body.id },
    {$inc: { [`book${req.body.bookName}_search`]: "" } },
    {new: true }
  );

  if (!search) {
    return res.status(400).json({ message: 'Unable to find book' });
  }
  res.status(200).json(search);
},

async getAllBooks(req, res) {
  const allBooks = await allBooks.find({});

  if (!allBooks) {
    return res.status(400).json({ message: 'No books found' });
  }

  res.status(200).json(allBooks);
},
async getAllBooks({ params }, res) {
  const allBooks = await allBooks.findOneAnd({ _id: params.id });

  if (!allBooks) {
    return res.status(400).json({ message: 'No books found by that id' });
  }

  res.status(200).json(allBooks);
},
}
