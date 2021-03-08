export default function authors(req, res) {
  res.status(200).json([
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
  ])
}
