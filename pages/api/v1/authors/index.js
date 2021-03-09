let currentAuthors = [
  {
    id: '40c6a7d5-b213-410d-942b-62ec493b90e1',
    name: 'Иванов Иван Иванович',
    birth: '12.10.1843',
  },
  {
    id: '2',
    name: 'Сидоров Иван Иванович',
    birth: '12.10.1843',
  },
  {
    id: '3',
    name: 'Petrov Иван Иванович',
    birth: '12.10.1843',
  },
]

export default function authors(req, res) {
  if (req.method == 'GET') res.status(200).json(currentAuthors)
  if (req.method == 'POST') {
    const newAuthor = JSON.parse(req.body)

    currentAuthors.push({ id: currentAuthors[currentAuthors.length - 1].id + 1, ...newAuthor })

    res.status(200).json(currentAuthors)
  }
}
