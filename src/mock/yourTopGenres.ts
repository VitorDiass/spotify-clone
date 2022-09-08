export interface YourTopGenresInterface {
    id : number,
    name : string,
    linkTo : string,
    backgroundColor : string,
    cardImage : string
}

export const YourTopGenres : Array<YourTopGenresInterface>= [
    {
        id : 1,
        name : "Rock",
        linkTo : "/genre/rock-page",
        backgroundColor : '#e61e32',
        cardImage : './genres/rock/rock.png'
    },
    {
        id : 2,
        name : "Indie",
        linkTo : "/genre/indie-page",
        backgroundColor : '#608108',
        cardImage : './genres/indie/indie.png'
    },
    {
        id : 3,
        name : "Pop",
        linkTo : "/genre/pop-page",
        backgroundColor : '#8d67ab',
        cardImage : './genres/pop/pop.png'
    },
    
]