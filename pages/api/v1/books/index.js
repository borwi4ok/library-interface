export default function books(req, res) {
  res.status(200).json([
    {
      id: '40c6a7d5-b213-410d-942b-62ec493b90e1',
      name: 'История',
      author: '40c6a7d5-b213-410d-942b-62ec493b90e1',
      pages: '240',
      cover_type: 'hard',
      cover_color: 'red',
      cover_image: 'true',
    },
    {
      id: '2',
      name: 'Math',
      author: '2',
      pages: '240',
      cover_type: 'hard',
      cover_color: 'red',
      cover_image: 'true',
    },
    {
      id: '3',
      name: 'Geography',
      author: '3',
      pages: '240',
      cover_type: 'hard',
      cover_color: 'red',
      cover_image: 'true',
    },
    {
      id: '4',
      name: 'Russian',
      author: '2',
      pages: '240',
      cover_type: 'hard',
      cover_color: 'red',
      cover_image: 'true',
    },
  ])
}
