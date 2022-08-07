export const ArtistsData = [
    {
        id: 1,
        name: 'The Beatles',
        tag : 'Artist',
        artistCover : './artists/beatles/beatles.jfif',
        isPlaylist : false,
        albums : [
            {
                id: 1,
                name: 'Abbey Road',
                artist: 'The Beatles',
                cover: './artists/beatles/albums/abbeyroad.jpg',
                songs: [
                    {
                        id: 1,
                        name: 'Come Together',
                        artist: 'The Beatles',
                        album: 'Abbey Road',
                        cover: './artists/beatles/albums/abbeyroad.jpg',
                        duration: '4:05',
                    },
                    {
                        id: 2,
                        name: 'Something',
                        artist: 'The Beatles',
                        album: 'Abbey Road',
                        cover: './artists/beatles/albums/abbeyroad.jpg',
                        duration: '3:15',
                    }
                ]
            }
        ]
    }


]